import { useEffect } from "react";
import { Link } from "react-router-dom";

function NotFound() {
  useEffect(() => {
    document.title = "Page not found | Team Directory";
  }, []);

  return (
    <section className="py-16 text-center">
      <h1 className="text-5xl font-bold text-slate-900 dark:text-white">404</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">This page does not exist.</p>
      <Link
        to="/"
        className="mt-6 inline-flex rounded-md bg-teal-700 px-5 py-2 text-sm font-medium text-white hover:bg-teal-800 dark:bg-teal-400 dark:text-slate-900 dark:hover:bg-teal-300"
      >
        Go home
      </Link>
    </section>
  );
}

export default NotFound;
