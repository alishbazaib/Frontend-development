function ErrorState({
  title = "Something Went Wrong",
  message = "Please try again later."
}) {
  return (
    <div className="error-state">
      <h2>{title}</h2>

      <p>{message}</p>
    </div>
  );
}

export default ErrorState;