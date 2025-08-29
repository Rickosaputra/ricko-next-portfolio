# Ricko Next.js Portfolio (App Router)

A modern Next.js portfolio for Ricko Saputra with Tailwind, dark mode, multipage routes (Home, Work, About, Contact, Thank You), and a live email form via FormSubmit (to **funrki5@gmail.com**).

## Quick Start
```bash
npx create-next-app@latest ricko-next-portfolio --use-npm --eslint --ts false --src-dir false --app --import-alias "@/*" --tailwind
cd ricko-next-portfolio
# Copy-paste these files (or unzip package contents here), then:
npm run dev
```

## After Deploy
- In `app/contact/page.js`, change `_next` hidden input to your deployed domain, e.g. `https://your-domain.vercel.app/thank-you`.
- First form submission will trigger a confirmation email from FormSubmit to **funrki5@gmail.com** — click **Confirm** once.
