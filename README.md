# Galery-Photo-Explorer

Image gallery application built with React and Vite, utilizing the Unsplash API for data fetching.

## Tech Stack

- React
- Vite
- TypeScript
- React Router Dom
- SCSS Modules

## Features

- Browse images by predefined categories.
- Keyword-based image search with debouncing.
- Image gallery with pagination/infinite scroll.
- Detailed image view in a modal.
- Save images to favorites (persisted in LocalStorage).

## Setup and Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd modsen-gallery
```

2. Install dependencies:

```bash
npm install
```

3. Configure environment variables:
   Create a `.env` file in the root directory and add your Unsplash API key:

```env
VITE_UNSPLASH_ACCESS_KEY=your_access_key_here
```

## Available Scripts

In the project directory, you can run:

- `npm run start`
  Starts the Vite development server.

- `npm run build`
  Compiles TypeScript and builds the app.

- `npm run preview`
  Boots up a local static web server to preview the production build.

- `npm run precommit`
  Runs `lint-staged` to execute linters on staged files before committing.

- `npm run prepare`
  Installs and configures `husky` git hooks.

## Project Structure

src/
├── api/ # Unsplash API requests
├── assets/ # Static files
├── components/ # Reusable UI components
├── hooks/ # Custom React hooks
├── pages/ # Route components (Home, Images, Favorites)
└── styles/ # Global styles and SCSS variables
