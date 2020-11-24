/* Задача 6-10 */
/* reduce, filter, sort
Получи массив всех умений всех пользователей (поле skills), 
при этом не должно быть повторяющихся умений и они должны быть 
отсортированы в алфавитном порядке. */

// Слияние массивов:

const odd = [1, 3, 5];
const even = [2, 4, 6];

// 1
[...odd, ...even];
//  [1, 3, 5, 2, 4, 6]

// 2
odd.concat(even)
//  [1, 3, 5, 2, 4, 6]

/* Используй только перебирающие методы массива которые не 
изменяют (не мутируют) исходный массив. Т.е. нельзя 
использовать for, splice, push и т.п. мутирующие методы. */

// 1 ------ работает, но использовать пуш нельзя
// const getSortedUniqueSkills = function (array) {
//     const red = array.reduce((allSkills, user) => {
//         allSkills.push(...user.skills);
//         return allSkills;
//     }, []);
//     console.log(red);

//     const sor = red.sort();
//     console.log(sor);

//     const uniq = sor.filter((elem, ind, array) =>
//         array.indexOf(elem) === ind);
//     return uniq;
// }

// 2 ------ concat
// const getSortedUniqueSkills = function (array) {
//     const red = array.reduce((allSkills, user) =>
//         allSkills.concat(user.skills), []);
//     console.log(red);

//     const sor = red.sort();
//     console.log(sor);

//     const uniq = sor.filter((elem, ind, array) =>
//         array.indexOf(elem) === ind);
//     return uniq;
// }

// 3 ------ [...odd, ...even]
// const getSortedUniqueSkills = function (array) {
//     return array.reduce((allSkills, user) =>
//         [...allSkills, ...user.skills], [])
//         .sort()
//         .filter((skill, index, array) =>
//         array.indexOf(skill) === index);
// }

const getSortedUniqueSkills = (array) => array.reduce(
    (allSkills, user) => [...allSkills, ...user.skills], [])
    .sort()
    .filter((skill, index, array) => 
        array.indexOf(skill) === index);

console.log(getSortedUniqueSkills(users));
/* [ 'adipisicing', 'amet',
 'anim', 'commodo',
 'culpa', 'elit',
 'ex', 'ipsum',
 'irure', 'laborum',
 'lorem', 'mollit',
 'non', 'nostrud',
 'nulla', 'proident',
 'tempor', 'velit',
 'veniam' ]; */


