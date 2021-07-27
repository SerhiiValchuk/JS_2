// створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
function rand() {
    let add = [];
    for (let i = 0; i <100; i++) {
        add.push(Math.round(Math.random()*100));
    }
    return add;
}
console.log(rand());
//Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.
function rand2(min,max) {
    let add = [];
    for (let i = 0; i <100; i++) {
        add.push(Math.round(Math.random() * max, min));
    }
    return add;
}
console.log(rand2( 20,80));
//створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let numbers = [2,34,56,77,9,78];
let sort = numbers.sort((a,b) => a - b);
console.log(sort);
//створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, за лишивши тільки парні числа
let numbers_two = [4,54,567,77,9,78];
console.log( numbers_two.filter(elem => elem % 2 == 0) );
//створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.
let numbers_three = [5,6,9,56,47,34,23,67];
let map1 = numbers_three.map((value) =>{
    value = 'string'
})

console.log(map1);
