"use strict";
// // a = 5;
// // console.log(a);

// // let number = 1;
// // const leftBorderWidth = 1;

// // const num = 1;
// // const fdhfg = true;

// // const obj = {
// //     name: "Dima",
// //     isMarried: false
// // };

// console.log(obj.name);

// // let arr = ['John', 'Mikhail', 'Dmitrii', 7, {}];

// // const c = BigInt(Number.MAX_SAFE_INTEGER);
// // const d = c * 2n;
// // console.log(d);

// const result = prompt('How old are you', '');
// console.log(result);

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const question1 = prompt("Один из просмотренных фильмов?", ""), 
      question2 = prompt("На сколько оцените его?", ""),
      question3 = prompt("Один из просмотренных фильмов?", ""),
      question4 = prompt("На сколько оцените его?", "");

personalMovieDB.movies[question1] = question2;
personalMovieDB.movies[question3] = question4;

console.log(personalMovieDB);



