<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/b39a8bee-b6a5-40fa-9032-f49a4eb2043a

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Centralized Configuration

The project's contact information and business metadata are centralized in `lib/constants.ts`. 

To update the WhatsApp number, email, or social media links, modify the `CONTACT_INFO` constant in that file. All components across the site will automatically reflect these changes.

### Adding New Links
Use the `getWhatsAppLink(message?: string)` utility function in `lib/constants.ts` to generate dynamic WhatsApp URLs with pre-filled messages.
