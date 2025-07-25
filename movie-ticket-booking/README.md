# Movie Ticket Booking Website

This project is a full-stack movie ticket booking application similar to BookMyShow. It consists of a backend built with TypeScript and Express, and a frontend developed using React.

## Project Structure

The project is organized into two main directories: `backend` and `frontend`.

### Backend

- **src/app.ts**: Entry point of the backend application. Initializes the Express app, sets up middleware, and connects routes.
- **src/controllers/bookingController.ts**: Contains the `BookingController` class with methods for creating, retrieving, and canceling bookings.
- **src/models/movie.ts**: Defines the `Movie` model, which includes properties such as title, genre, and showtimes.
- **src/routes/bookingRoutes.ts**: Defines API endpoints for booking operations using the `BookingController`.
- **src/services/bookingService.ts**: Contains business logic for booking operations, including validation and database interaction.
- **package.json**: Configuration file for the backend, listing dependencies and scripts.
- **tsconfig.json**: TypeScript configuration file for the backend.

### Frontend

- **src/App.tsx**: Main component of the frontend application, setting up routing and rendering main pages.
- **src/components/MovieList.tsx**: Component that fetches and displays a list of movies from the backend.
- **src/pages/Home.tsx**: Landing page component that displays the `MovieList`.
- **src/index.tsx**: Entry point of the frontend application, rendering the `App` component.
- **public/index.html**: Main HTML file for the frontend application.
- **package.json**: Configuration file for the frontend, listing dependencies and scripts.
- **tsconfig.json**: TypeScript configuration file for the frontend.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory and install dependencies:
   ```
   cd backend
   npm install
   ```

3. Navigate to the frontend directory and install dependencies:
   ```
   cd ../frontend
   npm install
   ```

4. Start the backend server:
   ```
   cd ../backend
   npm start
   ```

5. Start the frontend application:
   ```
   cd ../frontend
   npm start
   ```

## Features

- Browse a list of movies.
- Book tickets for selected movies.
- View and manage bookings.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.