import { useState } from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import Table from "./components/Table/Table";
import LoadingSkeleton from "./components/LoadingSkeleton/LoadingSkeleton";
import EmptyState from "./components/EmptyState/EmptyState";
import ErrorState from "./components/ErrorState/ErrorState";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  const users = [
    { id: 1, firstName: "Ali", lastName: "Khan", email: "ali@gmail.com" },
    { id: 2, firstName: "Sara", lastName: "Ahmed", email: "sara@gmail.com" },
    { id: 3, firstName: "John", lastName: "Doe", email: "john@gmail.com" },
    { id: 4, firstName: "Ayesha", lastName: "Iqbal", email: "ayesha@gmail.com" },
    { id: 5, firstName: "Hamza", lastName: "Ali", email: "hamza@gmail.com" },
    { id: 6, firstName: "Zain", lastName: "Malik", email: "zain@gmail.com" },
    { id: 7, firstName: "Fatima", lastName: "Noor", email: "fatima@gmail.com" },
    { id: 8, firstName: "Bilal", lastName: "Sheikh", email: "bilal@gmail.com" },
    { id: 9, firstName: "Usman", lastName: "Raza", email: "usman@gmail.com" },
    { id: 10, firstName: "Hina", lastName: "Aslam", email: "hina@gmail.com" },
    { id: 11, firstName: "Ahmed", lastName: "Saeed", email: "ahmed@gmail.com" },
    { id: 12, firstName: "Mariam", lastName: "Iqbal", email: "mariam@gmail.com" },
    { id: 13, firstName: "Omar", lastName: "Farooq", email: "omar@gmail.com" },
    { id: 14, firstName: "Noor", lastName: "Khalid", email: "noor@gmail.com" },
    { id: 15, firstName: "Hassan", lastName: "Rauf", email: "hassan@gmail.com" },
  ];

  const columns = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "firstName",
      header: "First Name",
    },
    {
      accessorKey: "lastName",
      header: "Last Name",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
  ];

  return (
    <div className="container">
      <h1>Reusable Component Library</h1>

      {/* Buttons */}
      <div className="component-card">
        <h2>Buttons</h2>

        <Button
          variant="primary"
          onClick={() => alert("Primary Button Clicked")}
        >
          Primary
        </Button>

        <Button
          variant="secondary"
          onClick={() => alert("Secondary Button Clicked")}
        >
          Secondary
        </Button>

        <Button
          variant="danger"
          onClick={() => alert("Delete Button Clicked")}
        >
          Delete
        </Button>

        <Button disabled>Disabled</Button>

        <Button loading>Loading</Button>
      </div>

      {/* Inputs */}
      <div className="component-card">
        <h2>Inputs</h2>

        <Input
          label="Full Name"
          name="name"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="example@gmail.com"
        />

        <Input
          label="Phone"
          name="phone"
          type="tel"
          placeholder="03XXXXXXXXX"
        />
      </div>

      {/* Data Table */}
      <div className="component-card">
        <h2>Data Table</h2>

        <Table
          data={users}
          columns={columns}
          pageSize={5}
        />
      </div>

      {/* Loading Skeleton */}
      <div className="component-card">
        <h2>Loading Skeleton</h2>

        <LoadingSkeleton />

        <br />

        <LoadingSkeleton
          rows={3}
          message="Loading Products..."
        />
      </div>

      {/* Empty State */}
      <div className="component-card">
        <h2>Empty State</h2>

        <EmptyState
          title="No Users Found"
          description="Try changing your search."
        />

        <br />

        <EmptyState
          title="No Products Available"
          description="Products will appear here after adding."
        />
      </div>

      {/* Error State */}
      <div className="component-card">
        <h2>Error State</h2>

        <ErrorState
          title="Network Error"
          message="Unable to connect to the server."
        />

        <br />

        <ErrorState
          title="Something Went Wrong"
          message="Please refresh the page."
        />
      </div>
    </div>
  );
}

export default App;