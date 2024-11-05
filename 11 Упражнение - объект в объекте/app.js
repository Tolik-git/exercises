const company = {
    name: 'ООО Агро',
    employees: [
        {
            name:'Sveta',
            getName: function () {
            return this.name;
    }
        }
    ],
    ceo: {
        name: 'Vasya',
        getName: function () {
        return this.name;
    }
    },
    getName: function () {
        return this.name;
    }
}

console.log(company.getName());
console.log(company.ceo.getName());
console.log(company.employees.map(employees => employees.getName()));
