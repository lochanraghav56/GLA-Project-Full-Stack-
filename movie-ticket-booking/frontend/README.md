# Movie Ticket Booking Frontend

This is the frontend part of the Movie Ticket Booking application, which allows users to browse and book movie tickets. The frontend is built using React and TypeScript.

## Project Structure

- **src/**: Contains the source code for the frontend application.
  - **components/**: Contains reusable components.
    - **MovieList.tsx**: Component that fetches and displays a list of movies.
  - **pages/**: Contains the main pages of the application.
    - **Home.tsx**: The landing page that displays the MovieList component.
  - **App.tsx**: The main component that sets up routing and renders the main pages.
  - **index.tsx**: The entry point of the application that renders the App component into the DOM.

- **public/**: Contains static files.
  - **index.html**: The main HTML file for the React application.

## Getting Started

To get started with the frontend application, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd movie-ticket-booking/frontend
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   ```
   npm start
   ```

The application will be available at `http://localhost:3000`.

## Features

- Browse a list of movies.
- View movie details and showtimes.
- Book tickets for selected movies.

## Technologies Used

- React
- TypeScript
- Axios (for API calls)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.