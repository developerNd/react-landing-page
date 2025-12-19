const crypto = require('crypto');

module.exports = async (req, res) => {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      eventName,
      eventSourceUrl,
      userAgent,
      clientIpAddress,
      fbp,
      fbc,
      email,
      phone,
      firstName,
      lastName,
      city,
      state,
      country,
      zipCode,
      eventId,
      customData = {}
    } = req.body;

    // Facebook API credentials from environment variables
    const PIXEL_ID = process.env.FACEBOOK_PIXEL_ID || '4199178857068057';
    const ACCESS_TOKEN = process.env.FACEBOOK_CONVERSION_API_TOKEN;

    if (!ACCESS_TOKEN) {
      console.error('Missing Facebook Conversion API Access Token');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    // Hash user data (PII) using SHA256
    const hashData = (data) => {
      if (!data) return null;
      return crypto
        .createHash('sha256')
        .update(data.toLowerCase().trim())
        .digest('hex');
    };

    // Prepare user data
    const userData = {
      client_ip_address: clientIpAddress,
      client_user_agent: userAgent,
    };

    // Add hashed PII if available
    if (email) userData.em = hashData(email);
    if (phone) userData.ph = hashData(phone.replace(/\D/g, '')); // Remove non-digits
    if (firstName) userData.fn = hashData(firstName);
    if (lastName) userData.ln = hashData(lastName);
    if (city) userData.ct = hashData(city);
    if (state) userData.st = hashData(state);
    if (country) userData.country = hashData(country);
    if (zipCode) userData.zp = hashData(zipCode);
    if (fbp) userData.fbp = fbp;
    if (fbc) userData.fbc = fbc;

    // Prepare the event data
    const eventData = {
      event_name: eventName,
      event_time: Math.floor(Date.now() / 1000),
      event_source_url: eventSourceUrl,
      action_source: 'website',
      user_data: userData,
    };

    // Add event ID to prevent duplication with Pixel events
    if (eventId) {
      eventData.event_id = eventId;
    }

    // Add custom data if provided
    if (Object.keys(customData).length > 0) {
      eventData.custom_data = customData;
    }

    // Send to Facebook Conversion API
    const response = await fetch(
      `https://graph.facebook.com/v21.0/${PIXEL_ID}/events`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: [eventData],
          access_token: ACCESS_TOKEN,
        }),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      console.error('Facebook API Error:', result);
      return res.status(response.status).json({
        error: 'Facebook API error',
        details: result,
      });
    }

    // Return success
    return res.status(200).json({
      success: true,
      result,
    });
  } catch (error) {
    console.error('Conversion API Error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error.message,
    });
  }
};
