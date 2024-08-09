# User Search App

This project is a simple user search application with a backend built using Express and TypeScript, and a frontend built using React, Vite, and TypeScript with Tailwind CSS for responsive and customizable UI components. The application uses pnpm workspaces to manage dependencies and a shared package for common types and shared validation logic.

## Features

1. Form with Two Fields: The form has two fields - email (required) and number (optional). Users can submit the form to search for matching users.
2. Masked Input: The number field is masked to display numbers in the format XX-XX-XX.
3. Search Functionality: The backend searches through the JSON file for matching entries based on the input.
4. Request Handling:
  - Backend: The backend simulates a long processing time by delaying the response by 5 seconds.
  - Frontend: If a new request is made before the previous one is completed, the previous request is canceled with AbortController API.
5. Validation:
  - Backend: Validates the input before processing the search request.
  - Frontend: Ensures that the email field is correctly formatted, and the number field (if provided) matches the expected format.

## Tech Stack

- Frontend: React (Vite) with TypeScript
- Backend: Express with TypeScript
- Package Manager: pnpm with workspaces
- Validation: Custom validation functions shared between frontend and backend

## Project Structure

The project uses a monorepo structure with pnpm workspaces:
```plaintext
user-search-app/
├── apps/
│   ├── frontend/    # React application
│   └── backend/     # Express server
├── packages/
│   ├── types/       # Shared TypeScript types
│   └── validation/  # Shared validation logic
├── package.json
├── pnpm-workspace.yaml
├── ...
└── README.md
```

## Getting Started

### Prerequisites

- Node.js
- pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/saidafzalkh/user-search-app.git
cd user-search-app
```
2. Install dependencies:
```bash
pnpm install
```
3. Build the project:
```bash
pnpm build
```
4. Start the development servers:
```bash
pnpm dev
```
Alternatively, to start the production server:
```bash
pnpm start
```

# Development Choices

- *Monorepo Structure:* Chosen for better code organization and sharing of types and validation logic between frontend and backend.
- *Frontend Validation:* Performed to provide immediate feedback to the user, ensuring that the input adheres to expected formats before sending a request.
- *Backend Validation:* Ensures data integrity and security by re-validating the input on the server side, regardless of frontend validation.
- *Request Cancellation:* Utilized the Abort Controller API to cancel pending requests, preventing race conditions and improving UX.
