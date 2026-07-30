function LoadingSkeleton({
  rows = 5,
  message = "Loading..."
}) {
  return (
    <div className="loading-container">
      <h3>{message}</h3>

      {Array.from({ length: rows }).map((_, index) => (
        <div
          key={index}
          className="skeleton-row"
        />
      ))}
    </div>
  );
}

export default LoadingSkeleton;