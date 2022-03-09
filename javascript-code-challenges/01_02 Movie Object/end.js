/*
  THIS IS THE FINAL SOLUTION PRESENTED IN THE VIDEO
*/

// Class Syntax
class Movie {
  constructor(title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }

  getOverview() {
    return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}`;
  }
}

// Function Syntax

// function Movie(title, director, genre, releaseYear, rating) {
//   this.title = title;
//   this.director = director;
//   this.genre = genre;
//   this.releaseYear = releaseYear;
//   this.rating = rating;
// }

// Movie.prototype.getOverview = function() {
//   return `${this.title}, a ${this.genre} film directed by ${
//     this.director
//   } was released in ${this.releaseYear}. It received a rating of ${
//     this.rating
//   }`;
// };

const Spiderman = new Movie("Spiderman", "Sam Raimi", "Action", 2002, 87);

const Batman = new Movie(
  "The Dark Knight",
  "Christopher Nolan",
  "Action",
  2008,
  83
);

const TheNotebook = new Movie(
  "The Notebook",
  "Nick Cassavetes",
  "Romance",
  2004,
  54
);

console.log(Spiderman);
console.log(Spiderman.getOverview());
console.log(Batman.getOverview());
console.log(TheNotebook.getOverview());
