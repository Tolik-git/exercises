const user = [
    { name: 'Вася', age: 30 },
    { name: 'Катя', age: 18 },
    { name: 'Аня' , age: 40 },
    { name: 'Петя', age: 25 },
];

console.log(user.sort((a, b) => a.age - b.age));