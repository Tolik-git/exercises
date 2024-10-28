const card = '2342 8345 0345 8353';
const [firstNumber, twoNamder, threeNumder, fourNumber] = card.split(' ');
console.log(fourNumber.padStart(16, '*'));

console.log(card.slice(-4).padStart(16, '*'));