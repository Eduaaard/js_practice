

const numberOfFilms = prompt("How many films did u watch?", "");

const personalMovieDB = {
    "count": numberOfFilms,
    "movies": {},
    "actors": {},
    "genres": [],
    "privat": false,
};

const firstQuestion = prompt("Write Your last film", "");
const secondQuestion = prompt("How much would you rate it?", "");

personalMovieDB.movies[firstQuestion] = secondQuestion;

console.log(personalMovieDB);

