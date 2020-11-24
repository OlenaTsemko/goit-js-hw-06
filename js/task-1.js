/* Задача 6-1 */

/* map
Получи массив имен всех пользователей (свойство name) 
используя деструктурирующее присваивание для параметра функции 
({name}) без пробелов и переносов на новую строку.

Используй только перебирающие методы массива которые не изменяют 
(не мутируют) исходный массив. Т.е. нельзя использовать 
for, splice, push и т.п. мутирующие методы. */

// // Деструктурирующее присваивание для параметра функции
// // PS Деструктурирующее присваивание (ДП):
// // 1. Объект как параметр без ДП
// const object = {num : 2}
// function getNum (obj) { return obj.num; }
// console.log(getNum(object)) // 2

// // 2. ДП
// const object = {num : 2}
// // const num  =  object.num;
// const { num } = object;
// console.log(num) // 2

// // 3. Объект как параметр c ДП
// const object = {num : 2}
// //function getNum (obj) { return obj.num; }
// function getNum ({num}) { return num; }
// console.log(getNum(object)) // 2 

// 1 -------
// const getUserNames = array => array.map(user => user.name);

// 2 -------
// const getUserNames = function(array) {
//    return array.map(user => user.name);
// }

// 3 -------
// const getUserNames = function (array) {
//     return array.map(({name}) => name);  
// };

// 4 ------
const getUserNames = array => array.map(({name}) => name);

console.log(getUserNames(users));
/* [
  "Moore Hensley",
  "Sharlene Bush",
  "Ross Vazquez",
  "Elma Head",
  "Carey Barr",
  "Blackburn Dotson",
  "Sheree Anthony",
] */