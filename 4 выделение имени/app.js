const fullUserName = 'Вася aka Termonator Perdinator Пупкина';

const userName = fullUserName.slice(0, fullUserName.indexOf(' '));
console.log(userName);
const userSurname = fullUserName.slice(
    fullUserName.lastIndexOf(' ') + 1, 
    fullUserName.length
);

console.log(userSurname);