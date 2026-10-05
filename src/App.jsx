import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import usersData from "./data/users.js";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Users from "./pages/Users.jsx";
import UserDetails from "./pages/UserDetails.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [attempt, setAttempt] = useState(0); // bump to reload
  const [favourites, setFavourites] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  // Load data from the local file (short delay so the loader is visible)
  useEffect(() => {
    setLoading(true);
    setError("");
    const timer = setTimeout(() => {
      try {
        if (!Array.isArray(usersData)) throw new Error("User data is not a list.");
        setUsers(usersData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }, 600);
    return () => clearTimeout(timer);
  }, [attempt]);

  // darkmode
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleFavourite = (id) =>
    setFavourites((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]));

  const shared = {
    users,
    loading,
    error,
    onRetry: () => setAttempt((n) => n + 1),
    favourites,
    onToggleFavourite: toggleFavourite,
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode((d) => !d)}
        favouriteCount={favourites.length}
      />
      <main className="mx-auto max-w-5xl px-4">
        <Routes>
          <Route path="/" element={<Home userCount={usersData.length} />} />
          <Route path="/users" element={<Users {...shared} />} />
          <Route path="/users/:id" element={<UserDetails {...shared} />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
