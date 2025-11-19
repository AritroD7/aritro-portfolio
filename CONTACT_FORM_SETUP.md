# Contact Form Setup Guide

## Current Setup

The contact form currently uses a **mailto link** approach, which opens the user's default email client with pre-filled information. This works immediately without any setup but requires the user to have an email client configured.

## How It Works

1. User fills out the form (name, optional email, subject, message)
2. Clicks "Send Message"
3. Their default email client opens with:
   - **To:** dhararitro.work@gmail.com
   - **Subject:** [Selected Topic] - From: [User Name]
   - **Body:** Pre-formatted with all form data

## Alternative: Professional Form Service (Recommended)

For a better user experience where messages are sent directly without opening email clients, you can integrate a free form service:

### Option 1: Web3Forms (Recommended - Free & Easy)

1. Go to https://web3forms.com/
2. Sign up with your email (dhararitro.work@gmail.com)
3. Get your **Access Key**
4. Update `contact.html` - add this inside the `<form>` tag:
   ```html
   <form class="contact-form" id="contactForm" action="https://api.web3forms.com/submit" method="POST">
     <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
     <!-- rest of form fields -->
   </form>
   ```
5. Update `script.js` - remove the mailto handling code

**Pros:** Free, no coding needed, spam protection, email notifications
**Cons:** None really!

### Option 2: EmailJS (Free Tier Available)

1. Go to https://www.emailjs.com/
2. Sign up and create a service
3. Add email template
4. Get your Service ID, Template ID, and Public Key
5. Add EmailJS SDK to `contact.html` before closing `</body>`:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
   ```
6. Update the form handling in `script.js`

### Option 3: Formspree (Free for 50 submissions/month)

1. Go to https://formspree.io/
2. Sign up and create a new form
3. Get your form endpoint
4. Update form action in `contact.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

## Current Email Updated

All instances of the email have been updated to: **dhararitro.work@gmail.com**

- Index page footer
- About page footer
- Projects page footer
- Contact page (form destination and contact info)
- Script.js console message

## BD Connexion Link Added

Your company website (https://bdconnexion.com/) has been added:
- Home page "What I Do" section
- Home page profile card
- About page timeline

## Mobile UI Enhanced

Mobile responsiveness has been significantly improved with:
- Better spacing and padding
- Larger touch targets
- Optimized font sizes
- Stack layouts on mobile
- Enhanced form usability
- Improved button sizes

## Ready to Deploy!

All changes are committed and ready to push to GitHub for deployment on Vercel.
