/*Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true».
За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean.*/
let str = 'Привіт';
let num = 123;
let flag = true;
let txt = 'true';
console.log(typeof str)
console.log(typeof num)
console.log(typeof flag)
console.log(typeof txt)

/*Оголосіть змінні a1, a2, a3, a4, a5. За домогою 3х математичних оператцій отримайте числа:*/
let a1 = 34;
let a2 = 12;
let a3 = 66;
let a4 = 90;
let a5 = 87;
console.log(a1 - a2);
console.log(a1 + a3 / a4);
console.log((a1 + a3) / a4);
console.log((a1 * a3) / a5);
console.log(a5 / a1 + (a4 - a3));
/*3.  Створіть змінні a6, a7, a8, a9, a10. Запишіть в них результати виразів:*/
let a6 = 5 % 3;
console.log(a6);
let a7 = 3 % 5;
console.log(a7);
let a8 = 5 + '3';
console.log(a8)
let a9 = '5' - 3;
console.log(a9)
let a10 = 75 + 'кг'
console.log(a10)
/*4. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
   Значееня площі зберігати в змінній s.*/
let height = 23;
let width = 10;
let s = height * width + ' ' + 'см';
console.log(s);
/*5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
   результат поместите в переменную v.*/
let heightC = 10;
let dC = 4;
let v = Math.PI * heightC ** 2 * dC;
console.log(v);
/*6 У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
   Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).*/
let n = 3;
let m = 4;
function hhh(q, r) {
    return Math.sqrt(q ** 2 + r ** 2)
}
let result = hhh(n, m);
console.log(result)
