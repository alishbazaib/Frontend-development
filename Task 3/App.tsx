import { useState, useMemo } from "react";
import { useUsers } from "./hooks/useUsers";
import DataTable from "./components/DataTable";
import LoadingSkeleton from "./components/LoadingSkeleton";
import ErrorState from "./components/ErrorState";

function App() {
  const { data, isLoading, error } = useUsers();

  const [search, setSearch] = useState("");

  const filteredUsers = useMemo(() => {
    if (!data) return [];

    return data.filter((user: any) =>
      `${user.firstName} ${user.lastName}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [data, search]);

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return <ErrorState />;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Users Table</h1>

      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "8px",
          width: "300px",
          marginBottom: "20px",
        }}
      />

      {filteredUsers.length === 0 ? (
        <h2>No records found</h2>
      ) : (
        <DataTable data={filteredUsers} />
      )}
    </div>
  );
}

export default App;