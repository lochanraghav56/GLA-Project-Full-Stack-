import { Movie } from '../models/movie';

export class BookingService {
    private bookings: any[] = []; // This will hold the booking records

    public createBooking(movie: Movie, userId: string, showtime: string): any {
        const booking = {
            id: this.bookings.length + 1,
            movie,
            userId,
            showtime,
            status: 'confirmed'
        };
        this.bookings.push(booking);
        return booking;
    }

    public getBookings(userId: string): any[] {
        return this.bookings.filter(booking => booking.userId === userId);
    }

    public cancelBooking(bookingId: number): boolean {
        const index = this.bookings.findIndex(booking => booking.id === bookingId);
        if (index !== -1) {
            this.bookings.splice(index, 1);
            return true;
        }
        return false;
    }

    public validateBooking(movie: Movie, showtime: string): boolean {
        // Add validation logic here (e.g., check if the movie is available at the given showtime)
        return true; // Placeholder for actual validation
    }
}