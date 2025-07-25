export interface Movie {
    id: string;
    title: string;
    genre: string;
    showtimes: string[];
    duration: number; // duration in minutes
    rating: number; // rating out of 10
}

export class MovieModel {
    constructor(public movie: Movie) {}

    static fromJson(json: any): MovieModel {
        return new MovieModel({
            id: json.id,
            title: json.title,
            genre: json.genre,
            showtimes: json.showtimes,
            duration: json.duration,
            rating: json.rating,
        });
    }
}