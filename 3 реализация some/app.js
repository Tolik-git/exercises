const arr = [2, 4, 4, 10];

function some(array, element) {
    const res = array.find(el => el === element);
    return res == undefined ? false : true;
}

console.log(some(arr, 0));

console.log(arr.some(el => el === 0));