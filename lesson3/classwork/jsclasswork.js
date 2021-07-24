// створити функцію яка приймає масив та виводить його
function mass(misse) {
    let mosse = [];
    for (let i = 0; i < misse.length; i++) {
        mosse = misse;
    }
    return mosse;
}
let misse = mass([4,6,87]);
document.write(`${misse}`)

//створити функцію яка приймає три числа та виводить найменьше.

function minG() {
    let min = arguments[0];
    for ( let i = 0; i < arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
    }
    return min
}
console.log(minG(3,45,78));
// створити функцію яка приймає три числа та виводить найбільше.
function minG2() {
    let max = arguments[0];
    for ( let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max
}
console.log(minG2(6,48,780));
//- створити функцію яка повертає найбільше число з масиву
function minG3() {
    let max = arguments[0];
    for ( let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max
}
let maes = minG3(4,5,8,45,67,87,3);
console.log(maes);
//- створити функцію яка повертає найменьше число з масиву
function minG4() {
    let min = arguments[0];
    for ( let i = 0; i < arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
    }
    return min
}
let moos = minG4(5,78,98,6,456,78,1);
console.log(moos);
// створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function sum(numeray) {
    let add = 0;
    for (let a = 0; a < numeray.length; a++) {
        let Addindex = numeray[a];
        add += Addindex;
    }
    return add;
}
console.log(sum([1, 6, 56, 2]));
//створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function sred() {

    let numbers = [4, 6, 24, 45];
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    let avg = total / numbers.length;
    return avg;
}
console.log(sred());
//- створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// Для виведення використати попередню функцію.
function rand() {
    let add = [];
    for (let i = 0; i <20; i++) {
        add.push(Math.round(Math.random()*100));
    }
    return add;
}

console.log(rand())
// Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
