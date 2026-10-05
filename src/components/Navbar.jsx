import { NavLink, Link } from "react-router-dom";
import Button from "./Button.jsx";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/users", label: "Users" },
  { to: "/about", label: "About" },
];

function Navbar({ darkMode, onToggleDarkMode, favouriteCount }) {
  const linkClass = ({ isActive }) =>
    `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
      isActive
        ? "bg-teal-100 text-teal-900 dark:bg-teal-900 dark:text-teal-100"
        : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
    }`;

  return (
    <header className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3">
        <Link to="/" className="text-lg font-bold text-slate-900 dark:text-white">
          Team Directory
        </Link>
        <div className="flex flex-wrap items-center gap-1">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
          <span className="px-2 text-sm text-slate-600 dark:text-slate-400" title="Favourites">
            ★ {favouriteCount}
          </span>
          <Button variant="secondary" onClick={onToggleDarkMode} aria-pressed={darkMode}>
            {darkMode ? "Light mode" : "Dark mode"}
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
