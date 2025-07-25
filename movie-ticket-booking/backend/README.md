# Movie Ticket Booking Backend

This is the backend part of the Movie Ticket Booking application. It is built using Node.js and TypeScript, utilizing Express for handling HTTP requests.

## Project Structure

- **src/**: Contains the source code for the backend application.
  - **controllers/**: Contains the booking controller which handles booking-related requests.
    - `bookingController.ts`: Defines methods for creating, retrieving, and canceling bookings.
  - **models/**: Contains the data models.
    - `movie.ts`: Defines the structure of movie data.
  - **routes/**: Contains the route definitions for the API.
    - `bookingRoutes.ts`: Sets up the API endpoints for booking operations.
  - **services/**: Contains business logic for the application.
    - `bookingService.ts`: Handles booking validation and database interactions.
  - `app.ts`: The entry point of the application, initializes the Express app and sets up middleware.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory:
   ```
   cd movie-ticket-booking/backend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Running the Application

To start the backend server, run:
```
npm start
```

The server will be running on `http://localhost:3000`.

## API Endpoints

- `POST /bookings`: Create a new booking.
- `GET /bookings`: Retrieve all bookings.
- `DELETE /bookings/:id`: Cancel a booking by ID.

## Technologies Used

- Node.js
- Express
- TypeScript
- MongoDB (or any other database of your choice)

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.