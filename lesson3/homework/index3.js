// - створити функцію яка обчислює та повертає площу прямокутника висотою //
function area(a, b) {
    return a * b;
}

let S = 's = ' + area(3, 4);
console.log(S);
//  - створити функцію яка обчислює та повертає площу кола//
let p = 3.14;

function areaK(p, r) {
    return p * r ** 2;
}

let S2 = 's = ' + areaK(p, 7);
console.log(S2);

//- створити функцію яка обчислює та повертає площу циліндру//
function area3(R, H) {
    return 2 * Math.PI * R * H;
}

let S3 = 's = ' + area3(3, 2);
console.log(S3);

//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);//

function max_min() {
    let max = arguments[0];
    let min = arguments[0];

    for ( let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
        if (arguments[i] < min) {
            min = arguments[i];
        }
    }
    console.log(max);
    return min;
}

console.log(max_min(2, 56, 76, 5, 4, 7));

// - створити функцію яка  створює блок з текстом. Текст задати через аргумент
function texts(text) {
    document.write(`<p>${text}</p>`);
}

texts('some_text');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ul(li) {
    document.write(`<ul>
<li>${li}</li>
<li>${li}</li>
<li>${li}</li>
</ul>`);
}

ul('Lorem ipsum dolor sit amet.');
//- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)//
function ul2(li, num) {
    document.write('<ul>');
    for (let i = 0; i < num; i++) {
        document.write(`<li>${li}</li>`)
    }
    document.write('</ul>');
}

ul2('Lorem ipsum dolor sit amet.', 6);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список//
let mas = [3,'numbe',45,true,false];

 function other(mass){
    document.write('<ul>');
     for (let i = 0; i < mass.length; i++) {
         document.write(`<li>${mass[i]}</li>`)
     }
     document.write('</ul>');
 }
other(mas);