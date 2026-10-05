import { useEffect, useState } from "react";
import UserCard from "../components/UserCard.jsx";
import Loader from "../components/Loader.jsx";
import ErrorMessage from "../components/ErrorMessage.jsx";
import Button from "../components/Button.jsx";

function Users({ users, loading, error, onRetry, favourites, onToggleFavourite }) {
  const [search, setSearch] = useState("");
  const [onlyFavourites, setOnlyFavourites] = useState(false);

  useEffect(() => {
    document.title = "Users | Team Directory";
  }, []);

  const query = search.trim().toLowerCase();
  const visible = users.filter((u) => {
    const matches = [u.name, u.email, u.company, u.role].some((field) =>
      field.toLowerCase().includes(query)
    );
    return matches && (!onlyFavourites || favourites.includes(u.id));
  });

  if (loading) return <Loader message="Loading users..." />;
  if (error) return <ErrorMessage message={error} onRetry={onRetry} />;

  return (
    <section className="py-8">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Users</h1>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name, email, company or role"
          aria-label="Search users"
          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-400"
        />
        <Button
          variant={onlyFavourites ? "primary" : "secondary"}
          onClick={() => setOnlyFavourites((v) => !v)}
          aria-pressed={onlyFavourites}
          className="shrink-0"
        >
          {onlyFavourites ? "Showing favourites" : "Show favourites only"}
        </Button>
      </div>

      <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
        {visible.length} of {users.length} users
      </p>

      {visible.length === 0 ? (
        <p className="mt-10 text-center text-slate-600 dark:text-slate-400">
          No users match your search. Try a different name, company or role.
        </p>
      ) : (
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              isFavourite={favourites.includes(user.id)}
              onToggleFavourite={onToggleFavourite}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Users;
