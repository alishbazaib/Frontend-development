function EmptyState({
  title = "No Data Found",
  description = "There is no data available."
}) {
  return (
    <div className="empty-state">
      <h2>{title}</h2>

      <p>{description}</p>
    </div>
  );
}

export default EmptyState;