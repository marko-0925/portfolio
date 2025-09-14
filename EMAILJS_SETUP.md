# EmailJS Setup Guide

This guide will help you set up EmailJS to send emails directly from your portfolio contact form.

## 🚀 Quick Setup

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Add Email Service
1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions to connect your Gmail account
5. Note down your **Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template content:

```
Subject: {{subject}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
Sent via Portfolio Contact Form
Reply to: {{reply_to}}
```

4. Set the **To Email** field to: `markodjkl@gmail.com`
5. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

### Step 4: Get Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `user_def456`)

### Step 5: Update Configuration
1. Open `lib/emailjs-config.ts`
2. Replace the placeholder values:

```typescript
export const emailjsConfig = {
  serviceId: 'service_abc123',     // Your actual Service ID
  templateId: 'template_xyz789',   // Your actual Template ID
  publicKey: 'user_def456',        // Your actual Public Key
}
```

## 🎯 How It Works

1. **User fills form** → Name, email, subject, message
2. **Clicks Send** → EmailJS sends email directly to your Gmail
3. **Success confirmation** → User sees confirmation message
4. **Fallback** → If EmailJS fails, opens Gmail compose as backup

## 📧 Email Template Variables

- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email address
- `{{subject}}` - Email subject line
- `{{message}}` - Message content
- `{{to_email}}` - Your email (markodjkl@gmail.com)
- `{{reply_to}}` - Sender's email for replies

## 🔧 Testing

1. Complete the setup above
2. Test the contact form on your website
3. Check your Gmail inbox for the test message
4. Verify the reply-to address works correctly

## 💡 Benefits

- ✅ **Instant delivery** - No Gmail compose window
- ✅ **Professional** - Direct email sending
- ✅ **Reliable** - Gmail fallback if needed
- ✅ **Free** - EmailJS free tier includes 200 emails/month
- ✅ **Secure** - No server required

## 🚨 Important Notes

- Keep your EmailJS credentials secure
- Don't commit real credentials to public repositories
- Free tier: 200 emails/month
- Paid plans available for higher volume

## 🆘 Troubleshooting

**Email not sending?**
- Check your EmailJS credentials
- Verify your email service is connected
- Check EmailJS dashboard for error logs

**Gmail fallback opening?**
- This means EmailJS failed
- Check browser console for error messages
- Verify your template variables match

**Need help?**
- EmailJS documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- Contact support through EmailJS dashboard
