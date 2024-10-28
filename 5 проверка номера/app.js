const num1 = '89103235356';
const num2 = '+79103235356';
const num3 = '+7(910)3235356';
const num4 = '+7(910) 3235356';
const num5 = '  +7(910) 323-53-56  ';

const num1Error = '89103235';
const num2Error = '+7d910d323-53-56';
const num3Error = '9+7103235356';
const num4Error = '89103g35356';

function inPhoneNumber(num) {
    num = num.trim();
    num = num.replace('+7', '8');
    if (!num.startsWith('8')) {
        return false;
    }
    num = num.replaceAll('(', '')
    num = num.replaceAll(')', '')
    num = num.replaceAll(' ', '')
    num = num.replaceAll('-', '')
    if (num.length != 11) {
        return false;
    }
    let onlyNumber = true;
    for (const char of num) {
        if (isNaN(Number(char))) {
            onlyNumber = false;
            break;
        }
    }
    return onlyNumber;
}

console.log(inPhoneNumber(num1));
console.log(inPhoneNumber(num2));
console.log(inPhoneNumber(num3));
console.log(inPhoneNumber(num4));
console.log(inPhoneNumber(num5));

console.log(inPhoneNumber(num1Error));
console.log(inPhoneNumber(num2Error));
console.log(inPhoneNumber(num3Error));
console.log(inPhoneNumber(num4Error));

