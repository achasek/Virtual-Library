// import the Media class:
const Media = require("./Media");

class Movie extends Media {
  constructor(title, genre, year, director, duration, rating) {
    super(title, genre, year);
    this.director = director;
    this.duration = duration;
    this.rating = rating;
  }

  summary() {
    return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}`;
  }

  static longestMovie(movies) {
    let highest = 0;
    let idx = 0;
    movies.forEach((movie, i) => {
      if (movie.duration > highest) {
        highest = movie.duration;
        idx = i;
      }
    });

    return movies[idx];
  }
}

// don't change below
module.exports = Movie;
