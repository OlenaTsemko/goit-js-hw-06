/* Задача 6-7 */
/* reduce
Получи общую сумму баланса (сумму значений свойства balance) 
всех пользователей.

Используй деструктурирующее присваивание для параметра функции 
{balance} без пробелов и переносов на новую строку

Используй только перебирающие методы массива которые не изменяют 
(не мутируют) исходный массив. Т.е. нельзя использовать 
for, splice, push и т.п. мутирующие методы. */

// 1 ------
// const calculateTotalBalance = function (array) {
//     return array.reduce((totalBalance, user) =>
//         totalBalance + user.balance, 0);
// }

// 2 ------
// const calculateTotalBalance = array =>
//     array.reduce((totalBalance, user) => 
//         totalBalance + user.balance, 0);
    
// 3 ------
const calculateTotalBalance = array => 
    array.reduce((totalBalance, {balance}) => 
    totalBalance + balance, 0)

console.log(calculateTotalBalance(users)); 
// 20916

