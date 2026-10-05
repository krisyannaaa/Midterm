import Button from "./Button.jsx";

function ErrorMessage({ title = "Something went wrong", message, onRetry }) {
  return (
    <div
      role="alert"
      className="mx-auto max-w-lg rounded-lg border border-red-300 bg-red-50 p-6 text-center dark:border-red-800 dark:bg-red-950"
    >
      <h2 className="text-lg font-semibold text-red-800 dark:text-red-200">{title}</h2>
      {message && <p className="mt-2 text-sm text-red-700 dark:text-red-300">{message}</p>}
      {onRetry && (
        <Button onClick={onRetry} variant="secondary" className="mt-4">
          Try again
        </Button>
      )}
    </div>
  );
}

export default ErrorMessage;
