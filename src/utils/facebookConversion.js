/**
 * Facebook Conversion API Utility
 * Sends conversion events to both Facebook Pixel (client-side) and Conversion API (server-side)
 */

// Get Facebook Browser Pixel Cookie (fbp)
const getFbp = () => {
  const cookie = document.cookie
    .split('; ')
    .find(row => row.startsWith('_fbp='));
  return cookie ? cookie.split('=')[1] : null;
};

// Get Facebook Click ID Cookie (fbc)
const getFbc = () => {
  const cookie = document.cookie
    .split('; ')
    .find(row => row.startsWith('_fbc='));

  if (cookie) {
    return cookie.split('=')[1];
  }

  // Check URL for fbclid parameter
  const urlParams = new URLSearchParams(window.location.search);
  const fbclid = urlParams.get('fbclid');
  if (fbclid) {
    return `fb.1.${Date.now()}.${fbclid}`;
  }

  return null;
};

// Generate a unique event ID to deduplicate between Pixel and CAPI
const generateEventId = () => {
  return `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Send conversion event to Facebook Conversion API
 * @param {string} eventName - Event name (e.g., 'Lead', 'Purchase', 'ViewContent')
 * @param {object} userData - User data (email, phone, etc.)
 * @param {object} customData - Custom event data
 * @returns {Promise}
 */
export const sendConversionEvent = async (eventName, userData = {}, customData = {}) => {
  try {
    const eventId = generateEventId();

    // Fire Facebook Pixel event (client-side) with event_id for deduplication
    if (window.fbq) {
      window.fbq('track', eventName, customData, { eventID: eventId });
    }

    // Get user's IP address (approximation - in production, get from server)
    const clientIpAddress = await fetch('https://api.ipify.org?format=json')
      .then(res => res.json())
      .then(data => data.ip)
      .catch(() => null);

    // Prepare the payload for Conversion API
    const payload = {
      eventName,
      eventSourceUrl: window.location.href,
      userAgent: navigator.userAgent,
      clientIpAddress,
      fbp: getFbp(),
      fbc: getFbc(),
      eventId,
      ...userData,
      customData
    };

    // Send to our serverless function
    const response = await fetch('/api/facebook-conversion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('Conversion API Error:', result);
      return { success: false, error: result };
    }

    console.log('Conversion API Success:', result);
    return { success: true, result };
  } catch (error) {
    console.error('Error sending conversion event:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Track Lead event (for form submissions, booking calls, etc.)
 */
export const trackLead = async (userData = {}, value = 0, currency = 'INR') => {
  return sendConversionEvent('Lead', userData, {
    value,
    currency,
    content_name: 'Call Booking',
  });
};

/**
 * Track PageView event
 */
export const trackPageView = async () => {
  return sendConversionEvent('PageView');
};

/**
 * Track Schedule event (custom event for call bookings)
 */
export const trackSchedule = async (userData = {}) => {
  return sendConversionEvent('Schedule', userData, {
    content_name: 'Call Scheduled',
    content_category: 'Consultation',
  });
};

/**
 * Track CompleteRegistration event
 */
export const trackCompleteRegistration = async (userData = {}) => {
  return sendConversionEvent('CompleteRegistration', userData, {
    content_name: 'Registration Complete',
    status: 'completed',
  });
};
