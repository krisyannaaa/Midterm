const variants = {
  primary:
    "bg-teal-700 text-white hover:bg-teal-800 dark:bg-teal-400 dark:text-slate-900 dark:hover:bg-teal-300",
  secondary:
    "border border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800",
  ghost:
    "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800",
};

function Button({ children, onClick, variant = "primary", type = "button", className = "", ...rest }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
