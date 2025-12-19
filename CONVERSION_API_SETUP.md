# Facebook Conversion API Setup Guide

This project is configured with Facebook Conversion API (CAPI) to track conversions server-side, improving tracking accuracy and reducing data loss from ad blockers.

## Overview

The implementation includes:
- **Server-side tracking** via Vercel Serverless Functions
- **Event deduplication** between Pixel and CAPI
- **Automatic PII hashing** for privacy compliance
- **Lead tracking** on booking button clicks
- **Conversion tracking** on thank you page

## Setup Instructions

### 1. Get Facebook Conversion API Access Token

1. Go to [Facebook Events Manager](https://business.facebook.com/events_manager2)
2. Select your Pixel (ID: `4199178857068057`)
3. Click on **Settings** tab
4. Scroll to **Conversions API** section
5. Click **Generate Access Token**
6. Copy the access token

### 2. Configure Vercel Environment Variables

1. Go to your Vercel project dashboard
2. Navigate to **Settings** > **Environment Variables**
3. Add the following variables:

   ```
   FACEBOOK_PIXEL_ID=4199178857068057
   FACEBOOK_CONVERSION_API_TOKEN=your_access_token_here
   ```

4. Make sure to add them for **Production**, **Preview**, and **Development** environments
5. Click **Save**

### 3. Redeploy Your Project

After adding environment variables:
1. Go to **Deployments** tab
2. Click the **...** menu on the latest deployment
3. Select **Redeploy**

Or simply push a new commit to trigger automatic deployment.

## How It Works

### Events Tracked

1. **Lead Event** - Fired when user clicks "BOOK CALL NOW" button
   - Tracked on both Hero section and sticky footer buttons
   - Sent to both Pixel (client-side) and CAPI (server-side)

2. **Schedule Event** - Fired when user lands on thank you page
   - Indicates successful call booking
   - Custom event for tracking conversions

3. **CompleteRegistration Event** - Also fired on thank you page
   - Standard Facebook event for completed registrations

### Architecture

```
User Action (Click/Page Load)
    ↓
Frontend (React Component)
    ↓
trackLead/trackSchedule Function
    ↓
┌─────────────────┬──────────────────┐
│  Facebook Pixel │  API Route       │
│  (Client-side)  │  /api/facebook-  │
│                 │   conversion     │
│  Event ID: 123  │  (Server-side)   │
└─────────────────┴──────────────────┘
         ↓                  ↓
    Facebook Pixel    Conversion API
         ↓                  ↓
    Facebook Events Manager
         (Deduplicated using Event ID)
```

### Event Deduplication

Both Pixel and CAPI send the same `event_id` to prevent double-counting:
- If both events arrive: Facebook keeps one
- If only one arrives (e.g., Pixel blocked): That event is counted
- Result: More accurate tracking even with ad blockers

### Data Privacy

All Personally Identifiable Information (PII) is automatically hashed using SHA256 before sending to Facebook:
- Email addresses
- Phone numbers
- Names
- Location data

## Files Created

1. **`/api/facebook-conversion.js`** - Vercel serverless function for CAPI
2. **`/src/utils/facebookConversion.js`** - Utility functions for tracking events
3. **Updated components:**
   - `/src/components/Hero.jsx` - Added lead tracking
   - `/src/App.js` - Added lead tracking to footer button
   - `/src/components/LDSThankYou.jsx` - Added conversion tracking

## Testing

### Test in Development

1. Click the "BOOK CALL NOW" button
2. Open browser console
3. Look for: `Conversion API Success: {...}`
4. Check Network tab for call to `/api/facebook-conversion`

### Test in Production

1. Deploy to Vercel
2. Visit your live site
3. Click booking button
4. Go to [Facebook Events Manager](https://business.facebook.com/events_manager2)
5. Click on **Test Events** tab
6. You should see events appearing in real-time

## Troubleshooting

### Events not showing in Facebook

1. **Check environment variables**
   - Verify `FACEBOOK_CONVERSION_API_TOKEN` is set correctly in Vercel
   - Ensure Pixel ID matches: `4199178857068057`

2. **Check browser console**
   - Look for errors in console logs
   - Verify API calls are being made

3. **Test Events tool**
   - Use Facebook's Test Events feature to debug
   - Events Manager > Test Events > Enter your test code

### API Returns 500 Error

1. Check Vercel function logs
2. Verify access token is valid (tokens can expire)
3. Ensure environment variables are deployed

## Advanced Configuration

### Add Custom User Data

When tracking leads, you can pass user information:

```javascript
await trackLead({
  email: 'user@example.com',
  phone: '+919876543210',
  firstName: 'John',
  lastName: 'Doe',
  city: 'Mumbai',
  state: 'Maharashtra',
  country: 'IN',
  zipCode: '400001'
}, 999, 'INR');
```

### Track Custom Events

```javascript
import { sendConversionEvent } from '../utils/facebookConversion';

await sendConversionEvent('CustomEvent', {
  email: 'user@example.com'
}, {
  content_name: 'Special Action',
  value: 100,
  currency: 'INR'
});
```

## Resources

- [Facebook Conversion API Documentation](https://developers.facebook.com/docs/marketing-api/conversions-api)
- [Event Deduplication](https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events)
- [Vercel Serverless Functions](https://vercel.com/docs/functions/serverless-functions)

## Support

If you encounter issues:
1. Check Vercel function logs
2. Review Facebook Events Manager
3. Verify environment variables are set correctly
