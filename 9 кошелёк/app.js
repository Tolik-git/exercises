const wallet = {
    balance: 0,
    operations: [],
    increase: function(sum, reason) {
        this.balance += sum;
        this.operations.push({
            reason: reason,
            sum: sum
        })
        return true;
    },
    decrease: function(sum, reason) {
        if (this.balance < sum) {
            console.log('Недостаточно баланса');
            return false;
        }
        this.balance -= sum;
        this.operations.push({
            reason: reason,
            sum: -sum
        })
        return true;
    },
    getOperationLenght: function () {
        return this.operations.length;
    }
};

console.log(wallet.increase(1000, 'Зарплата'));
console.log(wallet.getOperationLenght());
console.log(wallet.decrease(2000, 'Покупка ноутбука'));
console.log(wallet.getOperationLenght());
console.log(wallet.decrease(500, 'Покупка телефона'));
console.log(wallet.getOperationLenght());
console.log(wallet.balance);
console.log(wallet.operations);
