function removePassword(reset) {
    if (reset) {
        this.password = undefined;
    } else {
        this.password = '1';
    }
}

const user = {
  login: 'example@mail.com',
  password: '12345'
};

const resetUserPassword = removePassword.bind(user, true);
resetUserPassword();
console.log(user);
