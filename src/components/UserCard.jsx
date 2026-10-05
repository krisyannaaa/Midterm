import { Link } from "react-router-dom";
import Button from "./Button.jsx";

function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}

function UserCard({ user, isFavourite, onToggleFavourite }) {
  return (
    <article className="flex flex-col gap-4 rounded-lg border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-700 font-semibold text-white dark:bg-teal-400 dark:text-slate-900">
          {initials(user.name)}
        </div>
        <div className="min-w-0">
          <h3 className="truncate font-semibold text-slate-900 dark:text-white">{user.name}</h3>
          <p className="truncate text-sm text-slate-600 dark:text-slate-400">{user.role}</p>
        </div>
      </div>

      <p className="text-sm text-slate-700 dark:text-slate-300">{user.company}</p>

      <div className="mt-auto flex gap-2">
        <Link
          to={`/users/${user.id}`}
          className="inline-flex flex-1 items-center justify-center rounded-md bg-teal-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-teal-800 dark:bg-teal-400 dark:text-slate-900 dark:hover:bg-teal-300"
        >
          View details
        </Link>
        <Button
          variant="secondary"
          onClick={() => onToggleFavourite(user.id)}
          aria-pressed={isFavourite}
          aria-label={isFavourite ? `Remove ${user.name} from favourites` : `Add ${user.name} to favourites`}
        >
          {isFavourite ? "★" : "☆"}
        </Button>
      </div>
    </article>
  );
}

export default UserCard;
