import { useEffect } from "react";
import { Link } from "react-router-dom";

function Home({ userCount }) {
  useEffect(() => {
    document.title = "Home | Team Directory";
  }, []);

  return (
    <section className="py-12">
      <h1 className="max-w-2xl text-4xl font-bold text-slate-900 dark:text-white">
        Find the right person on your team
      </h1>
      <p className="mt-4 max-w-xl text-slate-600 dark:text-slate-400">
        Browse {userCount} teammates, search by name, company or role, and save the people you contact most as favourites.
      </p>
      <Link
        to="/users"
        className="mt-8 inline-flex rounded-md bg-teal-700 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-800 dark:bg-teal-400 dark:text-slate-900 dark:hover:bg-teal-300"
      >
        Browse users
      </Link>
    </section>
  );
}

export default Home;
