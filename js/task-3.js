/* Задача 6-3 */

/* filter, map
Получи массив имен пользователей (значение свойства name) 
по полу (значение свойства gender).

Используй деструктурирующее присваивание для параметра функции 
({name}) без пробелов и переносов на новую строку.

Используй только перебирающие методы массива которые не изменяют 
(не мутируют) исходный массив. Т.е. нельзя использовать 
for, splice, push и т.п. мутирующие методы. */

// 1 ------
// const getUsersWithGender = function (array, gender) {
//     return array.filter(user => user.gender === gender)
//         .map(user => user.name);        
// }

// 2 ------
// const getUsersWithGender = (array, gender) =>
//     array.filter(user => user.gender === gender)
//         .map(user => user.name);

// 3 ------
// const getUsersWithGender = (array, oneGender) =>
//     array.filter(({gender}) => gender === oneGender)
//         .map(({name}) => name);

// 4 ------
const getUsersWithGender = (array, gender) =>
    array.filter(user => user.gender === gender)
        .map(({ name }) => name);

console.log(getUsersWithGender(users, 'male'));
/* [
  "Moore Hensley",
  "Ross Vazquez",  
  "Carey Barr",  
  "Blackburn Dotson"  
] */

// 5 ------ без стрелок
// const getUsersWithGender = function (array, gender) {
//   return array.filter(function(user) {return user.gender === gender })
//     .map(function(user) {return user.name });        
// }

// console.log(getUsersWithGender(users, 'male'));