# Michael Amao — Portfolio

Personal portfolio site for Michael Amao, software engineer. A single-page, editorial-style
site built around a custom **"Warm Sand"** design system — tactile, masonry-led layout with
soft shadows, a sand/beige palette, and a Space Grotesk + DM Sans typeface pairing.

Content (name, bio, projects, experience, education, social links) is not hardcoded — it's
pulled at runtime from a single Firestore document, so the site can be
updated by editing that document rather than shipping code changes.

## Stack

- **TanStack Start** — React 19, file-based routing (TanStack Router), SSR
- **Tailwind CSS v4** for styling, with a full **shadcn/ui** component set installed (Radix
  primitives, `cmdk`, `vaul`, `sonner`, etc.) available for future sections
- **Firebase Firestore** as a lightweight CMS — see [Content model](#content-model) below
- **Vercel Analytics**

## Page structure

The whole site currently lives on one route (`/`):

`Nav → Hero → About → Interests → Selected Works (masonry project grid) → Experience timeline → Footer (Education + Contact)`

Firebase config is read from environment variables (see below) rather than committed to the
repo.

This project uses [eslint](https://eslint.org/) and [prettier](https://prettier.io/) for linting and formatting. Eslint is configured using [tanstack/eslint-config](https://tanstack.com/config/latest/docs/eslint). The following scripts are available:

```bash
npm run build     # production build
npm run preview   # preview the production build
npm run lint       # eslint
npm run format     # prettier
npm run check      # lint + format check
```

## Getting started

```bash
npm install
npm run dev
```

You'll need a `.env` with your Firestore project credentials:

```
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

### Other scripts

```bash
npm run build     # production build
npm run preview   # preview the production build
npm run lint       # eslint
npm run format     # prettier
npm run check      # lint + format check
```
