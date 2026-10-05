import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../components/Button.jsx";
import Loader from "../components/Loader.jsx";
import ErrorMessage from "../components/ErrorMessage.jsx";

function UserDetails({ users, loading, error, onRetry, favourites, onToggleFavourite }) {
  const { id } = useParams();
  const user = users.find((u) => u.id === Number(id));

  useEffect(() => {
    document.title = user ? `${user.name} | Team Directory` : "User not found | Team Directory";
  }, [user]);

  if (loading) return <Loader message="Loading user..." />;
  if (error) return <ErrorMessage message={error} onRetry={onRetry} />;
  if (!user) {
    return (
      <div className="py-8">
        <ErrorMessage title="User not found" message={`No user has the id "${id}".`} />
        <p className="mt-4 text-center">
          <Link to="/users" className="text-teal-700 underline dark:text-teal-300">
            Back to all users
          </Link>
        </p>
      </div>
    );
  }

  const isFavourite = favourites.includes(user.id);
  const rows = [
    ["Email", user.email],
    ["Company", user.company],
    ["Role", user.role],
  ];

  return (
    <section className="py-8">
      <Link to="/users" className="text-sm text-teal-700 underline dark:text-teal-300">
        Back to all users
      </Link>
      <div className="mt-4 rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{user.name}</h1>
        <dl className="mt-6 grid gap-4 sm:grid-cols-[8rem_1fr]">
          {rows.map(([label, value]) => (
            <div key={label} className="contents">
              <dt className="text-sm font-medium text-slate-600 dark:text-slate-400">{label}</dt>
              <dd className="text-slate-900 dark:text-white">{value}</dd>
            </div>
          ))}
        </dl>
        <Button
          variant={isFavourite ? "secondary" : "primary"}
          onClick={() => onToggleFavourite(user.id)}
          className="mt-6"
        >
          {isFavourite ? "★ Remove from favourites" : "☆ Add to favourites"}
        </Button>
      </div>
    </section>
  );
}

export default UserDetails;
