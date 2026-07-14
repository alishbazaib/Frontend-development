#Advanced Form Handling & Validation

## Overview

This task is a responsive and professional data-entry form built with **React**, **React Hook Form**, and **custom CSS**. The form allows users to add a new entity to the system while ensuring strong client-side validation, accessibility, and a smooth user experience.


---

## Features

- Modern and professional user interface
- React Hook Form for form state management
- Real-time client-side validation
- Friendly field-level error messages
- Disabled submit button when form is invalid
- Success confirmation after valid submission
- Accessible form controls and validation feedback
- Profile picture upload

---

## Form Fields

### Personal Information
- Full Name
- Email Address
- Phone Number

### Employment Details
- Department Selection
- Gender Selection
- Joining Date

### Additional Information
- Address
- Profile Picture 

---

## Validation Scenarios

| Field | Validation |
|---------|------------|
| Full Name | Required, minimum 5 characters |
| Email | Required, valid email format |
| Phone Number | Required, valid phone no |
| Department | Required |
| Gender | Required |
| Joining Date | Required |
| Address | Required, minimum 10 characters |


## State Management

The application uses **React Hook Form** for:

- Form state management
- Validation handling
- Error management
- Submission control
- Performance optimization

---

## Accessibility Features

- Proper label and input associations
- htmlFor and id attributes
- aria-invalid support
- role="alert" for validation messages
- Keyboard-friendly form navigation
- Visible focus states

---

## Component Notes

### EntityForm.jsx

Main form component responsible for:

- Rendering all form fields
- Managing form state using React Hook Form
- Handling validation rules
- Displaying validation messages
- Processing form submission

---

## Technologies Used

- React
- React Hook Form
- React Icons
- CSS3
- Vite

---

## Installation & Setup

### Clone the repository

```bash
git clone <repository-url>
```

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```
