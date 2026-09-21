# React Practice

A small React sandbox for practising the basics: components and state, client-side routing, fetching data from an API, and deploying from GitHub.

**Live:** https://react-practice-sandy-omega.vercel.app

## What's in it

- **Game (`/`)**: tic-tac-toe built with `useState`, with winner and draw detection.
- **Posts (`/posts`)**: fetches 12 posts from [JSONPlaceholder](https://jsonplaceholder.typicode.com/) in a `useEffect` and renders them as cards, with loading and error states.

## Stack

Vite, React 19, React Router, deployed on Vercel (auto-deploys on every push to `main`).

## Run locally

```bash
npm install
npm run dev
```

Other scripts: `npm run build` (production build) and `npm run lint`.

## Notes

`vercel.json` rewrites every path to `index.html`, so opening or refreshing a route like `/posts` directly works instead of returning a 404.