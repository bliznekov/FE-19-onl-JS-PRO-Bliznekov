import { data, UserType } from "./data";

// 1. Собрать в массив все жанры фильмов (без повторения)

const f1 = (movies: UserType[]): string[] => {
  const array: string[] = movies.map((movie, i) => {
    return movie.genre;
  })
  .reduce((acc, val) => acc.concat(val), []);
  
  const newArray: string[] = Array.from(new Set(array));
  
  return newArray;
}

// console.log(f1(data));

// 2. Собрать в массив всех актеров всех фильмов (без повторения)

const f2 = (movies: UserType[]): string[] => {
  const array: string[] = movies.map((movie, i) => {
    return movie.actors;
  })
  .reduce((acc, val) => acc.concat(val), []);
  
  const newArray: string[] = Array.from(new Set(array));
  
  return newArray;
}

// console.log(f2(data));

// 3. Отсортировать фильмы по рейтингу по убыванию
type SimpleRaitingType = {
  imdbRating: number,
  title: string,
}

const f3 = (movies: UserType[]): SimpleRaitingType[] => {
  return movies
        .map((item) => ({
          imdbRating: item.imdbRating,
          title: item.title,
        })).sort((a, b) => b.imdbRating - a.imdbRating);
}

// console.log(f3(data));

// 4. Создать новый массив, где объекты фильмов будут состоять из следующих полей: id, title, released, plot

type SimpleFilmType = {
  id: number,
  title: string,
  released: string,
  plot: string,
}
const f4 = (movies: UserType[]): SimpleFilmType[] => {
  return movies
        .map((item) => ({
          id: item.id,
          title: item.title,
          released: item.released,
          plot: item.plot,
        }));
}

// console.log(f4(data));

// 5. Создать функцию, которая бы принимала массив фильмов и число. А результатом этой функции должен быть отфильтрованный массив, с фильмами где число равно году выхода фильма.

const f5 = (movies: UserType[], num: number): UserType[]=> {
  return movies
        .filter((item) => (item.year === num));
}

// console.log(f5(data, 2021));

// 6. Создать функцию, которая бы принимала массив фильмов и строку. А результатом этой функции должен быть новый отфильтрованный массив, с фильмами, где строка входит в название фильма.

const f6 = (movies: UserType[], str: string): UserType[]=> {
  return movies
        .filter((item) => (item.title.includes(str)));
}

// console.log(f6(data, 'Potter'));

// 7. Создать функцию, которая бы принимала массив фильмов и строку. А результатом этой функции должен быть отфильтрованный массив, с фильмами где строка входит в название фильма или в его сюжет.

const f7 = (movies: UserType[], str: string): UserType[]=> {
  return movies
        .filter((item) => (item.title.includes(str) || item.plot.includes(str)));
}

// console.log(f7(data, 'remaining'));

// 8. Создать функцию, которая бы принимала 3 параметра: 1)массив фильмов , 2) строка(название поля, например 'title') и строку/число(значение поля "Black Widow"). А результатом этой функции должен быть отфильтрованный массив, где параметры 2 и 3 равны в объекте фильма. Например: передаем (films, 'title', 'Black Widow') и на выходе получаем фильм с id=1 если передаем (films, 'year', 2011) , то получаем фильм с id=2

// не решена 

const f8 = (movies: UserType[], key: string, val: string | number)=> {
  return movies
        .filter((movie) => {
          if (Object.keys(movie).filter((keys) => (keys === key)) && 
          Object.values(movie).filter((values) => (values === val))){
            return movie;
          }
        });
}

// console.log(f8(data, 'tittle', 'Black Widow'));
