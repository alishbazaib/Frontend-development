import React from 'react';

interface EmptyStateProps {
  isLoading: boolean;
  filteredUsers: unknown[];
  search: string;
  setSearch: (value: string) => void;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  isLoading,
  filteredUsers,
  search,
  setSearch,
}) => {
  if (!isLoading && filteredUsers.length === 0) {
    return (
      <>
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <h2>No records found</h2>
      </>
    );
  }

  return null;
};

export default EmptyState;
