# Team Directory

A small React app for browsing a team directory. Built with Vite, Tailwind CSS and React Router.

## Features
- Client-side routing: `/`, `/users`, `/users/:id`, `/about`, and a 404 page for everything else
- `useState` for search, favourites and dark mode
- `useEffect` for loading data and updating the page title
- Reusable components that take props
- Local data only (`src/data/users.js`), no API calls

## Run it
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Structure
```
src/
  components/  Navbar, UserCard, Button, Loader, ErrorMessage
  pages/       Home, Users, UserDetails, About, NotFound
  data/        users.js
```
