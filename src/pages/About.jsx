import { useEffect } from "react";

function About() {
  useEffect(() => {
    document.title = "About | Team Directory";
  }, []);

  return (
    <section className="py-8">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">About</h1>
      <div className="mt-4 max-w-2xl space-y-4 text-slate-700 dark:text-slate-300">
        <p>
          Team Directory is a small React project that lists people from a local data file. It does not call any API or
          external website.
        </p>
        <p>
          It is built with Vite, Tailwind CSS and React Router. Search, favourites and dark mode use <code>useState</code>;
          loading data and updating the page title use <code>useEffect</code>.
        </p>
      </div>
    </section>
  );
}

export default About;
