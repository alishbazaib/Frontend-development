# API Integration & Interactive Data Table

## Project Overview

This project is a React and TypeScript-based web application that demonstrates API integration and interactive data presentation using a dynamic data table. The application fetches user records from a public API and provides features such as searching, sorting, pagination, loading states, error handling, and empty-state management.

The project was developed to showcase asynchronous data fetching, data transformation, state management, and table usability using modern frontend development practices.

---

## Features

### Data Fetching
- Fetches user data from a public API.
- Displays records in a structured table.

### Search Functionality
- Search users by first name or last name.
- Real-time filtering without additional API requests.

### Sorting
- Sortable columns:
  - ID
  - First Name
  - Last Name
  - Email

### Pagination
- Previous and Next page navigation.
- Displays current page information.
- Shows 5 records per page.

### Loading State
- Displays loading skeletons while data is being fetched.

### Error Handling
- Displays a user-friendly error message if the API request fails.

### Empty State
- Displays a "No records found" message when no matching records are available.

### Performance Optimization
- `useMemo` for optimized filtering and column definitions.
- `React.memo` to prevent unnecessary component re-renders.
- React Query caching for efficient data fetching.

---

## Technology Stack

### Frontend
- React
- TypeScript
- Vite

### API & State Management
- Axios
- TanStack Query (React Query)

### Data Table
- TanStack Table

### Styling
- CSS

---

## API Details

### Endpoint

```text
https://dummyjson.com/users
```

### Data Used

- User ID
- First Name
- Last Name
- Email Address

### Purpose

The API is used to demonstrate:

- Asynchronous data fetching
- Data transformation
- Filtering
- Sorting
- Pagination
- State management

---

## Project Structure

```text
src
├── api
│   └── usersApi.ts
├── hooks
│   └── useUsers.ts
├── components
│   ├── DataTable.tsx
│   ├── LoadingSkeleton.tsx
│   └── ErrorState.tsx
├── App.tsx
├── main.tsx
└── index.css
```

---

## Component Notes

### App.tsx

Main application component responsible for:

- Managing search functionality
- Rendering loading, error, and empty states
- Passing filtered data to the table component

### DataTable.tsx

Handles:

- Data rendering
- Column sorting
- Pagination controls

### useUsers.ts

Custom React Query hook responsible for:

- Fetching user data
- Managing loading and error states
- Caching API responses

### usersApi.ts

Handles API communication using Axios.

### LoadingSkeleton.tsx

Displays loading placeholders while data is being retrieved.

### ErrorState.tsx

Displays user-friendly error messages when API requests fail.

---

## Installation & Setup

### Clone the Repository

```bash
git clone <repository-url>
```

### Navigate to the Project

```bash
cd api-data-table
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```
