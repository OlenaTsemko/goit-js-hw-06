const options = {
    yellow: true,
    blue: false,
    teal: false,
    orange: true,
    red: true,
    violet: false,
}

// шаг 1 -----------------------------------------------------
// const entries = Object.entries(options);
// console.table(entries);

// const selectedOption = entries.filter(entry => {
//     console.log(entry);
//     return entry[1];
// })
// console.log(selectedOption);

// const colors = selectedOption.map(option => {
//     console.log(option);
//     return option[0];
// })
// console.log(colors);

// шаг 2 ------------------------------------------------------
// const entries = Object.entries(options);
// console.table(entries);

// const selectedOption = entries.filter(entry => entry[1]);
// console.log(selectedOption);

// const colors = selectedOption.map(option => option[0]);
// console.log(colors);

// шаг 3 chaining ---------------------------------------------
// const colors = Object.entries(options)
//     .filter(entry => entry[1])
//     .map(option => option[0]);

// console.log(colors);

// шаг 4 - деструктурирующее присваивание
const colors = Object.entries(options)
    .filter(([, selected]) => selected)
    .map(([color]) => color);
    
console.log(colors);

// =============================================================
// =============================================================
