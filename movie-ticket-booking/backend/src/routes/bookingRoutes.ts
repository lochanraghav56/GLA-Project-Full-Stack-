import { Router } from 'express';
import BookingController from '../controllers/bookingController';

const router = Router();
const bookingController = new BookingController();

export const setRoutes = () => {
    router.post('/book', bookingController.createBooking);
    router.get('/bookings', bookingController.getBookings);
    router.delete('/book/:id', bookingController.cancelBooking);
    return router;
};