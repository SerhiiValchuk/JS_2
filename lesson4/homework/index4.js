// створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
function rand() {
    let add = [];
    for (let i = 0; i < 100; i++) {
        add.push(Math.round(Math.random() * 100));
    }
    return add;
}

console.log(rand());

//Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.
function rand2(min, max) {
    let add = [];
    for (let i = 0; i < 100; i++) {
        add.push(Math.round(Math.random() * (max - min) + min));
    }
    return add;
}

console.log(rand2(2, 88));
//створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let numbers = [2, 34, 56, 77, 9, 78];
let sort = numbers.sort((a, b) => a - b);
console.log(sort);
//створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, за лишивши тільки парні числа
let numbers_two = [4, 54, 567, 77, 9, 78];
console.log(numbers_two.filter(elem => elem % 2 === 0));
//створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.
let numbers_three = [5, 6, 9, 56, 47, 34, 23, 67];
//let map1 = numbers_three.map(value => value.toString())
let map1 = numbers_three.map(String);
console.log(map1);
// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)
class User {
    constructor(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
}

let user = [
    new User(3, 'petya', 'dderv', 'jujusd@com', 336),
    new User(1, 'kola', 'wernig', 'ccxsd@com', 334),
    new User(6, 'lionia', 'eeedn', 'eesd@com', 339),
    new User(2, 'misha', 'ghyttr', 'bbbsd@com', 335),
    new User(5, 'gena', 'hybnn', 'dttd@com', 338),
    new User(9, 'obivankenobi', 'ynynrb', 'ttfsd@com', 333),
    new User(4, 'vasja', 'werhtd', 'hhysd@com', 337),
    new User(10, 'obigen', 'ggre', 'ggsd@com', 3310),
    new User(7, 'zhenia', 'ekktt', 'yysd@com', 331),
    new User(8, 'vitja', 'gehhhh', 'rrfsd@com', 332)
];
const arr = user.filter(value => value.id % 2 === 0).sort((a, b) => a.id - b.id);
console.log(arr)
// console.log(user.filter(value => value.id % 2 === 0));
// user.sort(function (a, b) {
//     return a.id - b.id
// })


