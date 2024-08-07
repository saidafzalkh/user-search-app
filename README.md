# User Search App

This project is a simple user search application with a backend built using Express and TypeScript, and a frontend built using React, Vite, and TypeScript. The application uses pnpm workspaces to manage dependencies and a shared package for common types.

## Features

1. **Email and Number Search**: The form on the frontend allows users to search for users by email and optionally by number.
2. **Backend Delay Simulation**: The backend simulates a delay of 5 seconds to mimic a long processing time. If a new request is made before the previous one completes, the previous request is cancelled.
3. **Email Validation**: The email field is validated on the frontend to ensure a proper email format.
4. **Number Masking**: The number input field is masked to display the number with dashes every two digits (e.g., 22-11-22).
