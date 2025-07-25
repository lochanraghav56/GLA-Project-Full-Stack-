import React from 'react';
import MovieList from '../components/MovieList';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Welcome to Movie Ticket Booking</h1>
            <MovieList />
        </div>
    );
};

export default Home;