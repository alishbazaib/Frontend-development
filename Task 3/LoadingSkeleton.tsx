export default function LoadingSkeleton() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Loading Users...</h2>

      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          style={{
            height: "40px",
            backgroundColor: "#e5e5e5",
            marginBottom: "10px",
            borderRadius: "4px",
          }}
        />
      ))}
    </div>
  );
}