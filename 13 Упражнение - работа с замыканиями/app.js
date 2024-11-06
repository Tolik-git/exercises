'use strict';

const userInfo = { 
  balance: 0, 
  operations: 0, 
  increase(sum) { 
    this.balance += sum; 
    this.operations++;
  } 
};

function user() {
    const userObj = {
    balance: 0, 
    operations: 0, 
    increase(sum) { 
            this.balance += sum; 
            this.operations++;
        } 
    };
    return function() {
        return userObj
    }
};

const user1 = user();
user1().increase(100);
user1().increase(100);
console.log(user1());

const user2 = user();
user2().increase(100);
console.log(user2());
