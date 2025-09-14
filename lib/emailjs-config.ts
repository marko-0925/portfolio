// EmailJS Configuration
// To set up EmailJS for automatic email sending:

// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Create a new service (Gmail, Outlook, etc.)
// 3. Create an email template
// 4. Get your Service ID, Template ID, and Public Key
// 5. Replace the values below with your actual credentials

export const emailjsConfig = {
  // Replace these with your actual EmailJS credentials
  serviceId: 'YOUR_SERVICE_ID',        // e.g., 'service_abc123'
  templateId: 'YOUR_TEMPLATE_ID',      // e.g., 'template_xyz789'
  publicKey: 'YOUR_PUBLIC_KEY',        // e.g., 'user_def456'
}

// Example EmailJS template variables you can use:
// {{from_name}} - Sender's name
// {{from_email}} - Sender's email
// {{subject}} - Email subject
// {{message}} - Message content
// {{to_email}} - Recipient email (markodjkl@gmail.com)
// {{reply_to}} - Reply-to email address

// Sample template content:
/*
Subject: {{subject}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
Sent via Portfolio Contact Form
Reply to: {{reply_to}}
*/
