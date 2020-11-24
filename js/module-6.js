// array.forEach(callback[currentValue, index, array])
// Array.prototype.forEach()
// ------------------------------------------------------------
// const numbers = [1, 2, 3];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);
// }

// // Функциональный forEach
// numbers.forEach(num => console.log(num));

// // Указываем параметр idx если нужен доступ к счетчику
// numbers.forEach((num, idx) => console.log(`index ${idx}, value ${num}`));

// ---------------------------------------------------------------
// array.map(callback[currentValue, index, array])
// Array.prototype.map()
// --------------------------------------------------------------
// const numbers = [1, 2, 3];

// const doubledNumbers = numbers.map(num => num * 2);
// console.log(doubledNumbers); // [2, 4, 6]

// const users = [
//   { name: 'Mango', isActive: true },
//   { name: 'Poly', isActive: false },
//   { name: 'Ajax', isActive: true },
// ];

// // Для каждого элемента коллекции (user) вернем значение поля name
// const names = users.map(user => user.name);

// console.log(names); // ["Mango", "Poly", "Ajax"]

// ------------------------------------------------------------
// array.filter(callback[currentValue, index, array])
// Array.prototype.filter()
// -------------------------------------------------------------


// -------------------------------------------------------------
// const arr = ['есть', 'жизнь', 'на', 'марсе']
// const res = arr.map(({ length }) => length);

// console.log(res);

// -------------------------------------------------------------
// let words = ['one', 'two', 'three', 'four']
// words.forEach((word) => {
//     console.log(word); //one two four 
//     if (word === 'two') {
//         words.shift();
//     }    
// })
// console.log(words) // ["two", "three", "four"]

// -------------------------------------------------------------
// ------------------------все задачки--------------------------
// -------------------------------------------------------------
// /* Задача 6-1 */
// const getUserNames = array => array.map(({ name }) => name);

// console.log('Задача 6-1 ', getUserNames(users));

// /* Задача 6-2 */
// const getUsersWithEyeColor = (array, color) =>
//     array.filter(({eyeColor}) => eyeColor === color);

// console.log('Задача 6-2 ', getUsersWithEyeColor(users, 'blue'));

// /* Задача 6-3 */
// const getUsersWithGender = (array, gender) =>
//     array.filter(user => user.gender === gender)
//         .map(({name}) => name);

// console.log('Задача 6-3 ', getUsersWithGender(users, 'male'));

// /* Задача 6-4 */
// const getInactiveUsers = array => array.filter(({isActive}) => !isActive);

// console.log('Задача 6-4 ', getInactiveUsers(users));

// /* Задача 6-5 */
// const getUserWithEmail = (array, mail) => array.find(({email}) =>
//     email === mail);

// console.log('Задача 6-5 (1) ', getUserWithEmail(users, 'rossvazquez@xinware.com'));
// console.log('Задача 6-5 (2) ', getUserWithEmail(users, 'blackburndotson@furnigeer.com'));

// /* Задача 6-6 */
// const getUsersWithAge = (array, min, max) => array
//  .filter(({age}) => age > min && age < max)   
//  .map(({name, email}) => ({name, email}));  

// console.log('Задача 6-6 (1) ', getUsersWithAge(users, 20, 30));
// console.log('Задача 6-6 (2) ', getUsersWithAge(users, 30, 40));

// /* Задача 6-7 */
// const calculateTotalBalance = array => 
//     array.reduce((totalBalance, {balance}) => 
//     totalBalance + balance, 0)

// console.log('Задача 6-7 ', calculateTotalBalance(users));

// /* Задача 6-8 */
// const getUsersWithFriend = (array, friendName) =>
//     array.filter(({friends}) => friends.includes(friendName))
//         .map(({name}) => name);

// console.log('Задача 6-8 (1) ', getUsersWithFriend(users, 'Briana Decker'));
// console.log('Задача 6-8 (2) ', getUsersWithFriend(users, 'Goldie Gentry'));

// /* Задача 6-9 */
// const getNamesSortedByFriendsCount = ([...array]) =>
//     array.sort((firstUser, nextUser) =>
//         firstUser.friends.length - nextUser.friends.length)
//         .map(({name}) => name);

// console.log('Задача 6-9 ', getNamesSortedByFriendsCount(users));

// /* Задача 6-10 */
// const getSortedUniqueSkills = (array) => array.reduce(
//     (allSkills, user) => [...allSkills, ...user.skills], [])
//     .sort()
//     .filter((skill, index, array) => 
//     array.indexOf(skill) === index);

// console.log('Задача 6-10 ', getSortedUniqueSkills(users));




