# Reusable Component Library

## Overview

The objective was to build a reusable component library by refactoring common UI elements into reusable React components. Each component is designed to be modular, customizable, and reusable across different parts of an application through props.

---

## Technologies Used

- React.js
- JavaScript (JSX)
- Vite
- CSS
- TanStack React Table

---

## Components Included

### Button
A reusable button component that supports different variants and states.

**Features**
- Primary button
- Secondary button
- Danger button
- Disabled state
- Loading state

---

### Input
A reusable input component for different input types.

**Features**
- Text input
- Email input
- Phone input
- Label support
- Placeholder support

---

### Table
A reusable data table component built using TanStack React Table.

**Features**
- Dynamic columns
- Dynamic data
- Sorting
- Pagination

---

### Loading Skeleton
A reusable loading placeholder component displayed while data is loading.

**Features**
- Custom loading message
- Configurable number of skeleton rows

---

### Empty State
A reusable component that displays a message when no data is available.

**Features**
- Custom title
- Custom description

---

### Error State
A reusable component used to display error messages.

**Features**
- Custom title
- Custom message

---

## Project Structure

```text
src
│
├── components
│   ├── Button
│   │   └── Button.jsx
│   ├── Input
│   │   └── Input.jsx
│   ├── Table
│   │   └── Table.jsx
│   ├── LoadingSkeleton
│   │   └── LoadingSkeleton.jsx
│   ├── EmptyState
│   │   └── EmptyState.jsx
│   └── ErrorState
│       └── ErrorState.jsx
│
├── App.jsx
├── App.css
└── main.jsx
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project folder:

```bash
cd reusable-component-library
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:5173
```

---

## Features

- Reusable React components
- Component-based architecture
- Customizable using props
- Responsive design
- Modular code structure
- Easy to maintain and extend

---

