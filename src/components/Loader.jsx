function Loader({ message = "Loading..." }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-20" role="status" aria-live="polite">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-300 border-t-teal-600 dark:border-slate-700 dark:border-t-teal-400" />
      <p className="text-sm text-slate-600 dark:text-slate-400">{message}</p>
    </div>
  );
}

export default Loader;
