// створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let numbers = [45,33,56,47,5];
let texts = ['sea','ocean','road','lace','mountain'];
let other =[5,'ten',true,67,'bard',false,undefined,'bad',435,null,'right',4,"",'river',34,56];
console.log(numbers);
console.log(texts);
console.log(other);
// Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let massiw = [];
massiw[0] = "hi";
massiw[1] = 3;
massiw[4] = true;
massiw[3] = 'go';
massiw[5] = 45;
console.log(massiw);
// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i<10;i++){
    document.write(`<div>Lorem ipsum.</div>`);
}
//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i<10.;i++) {
    document.write(`<div>${i} :Lorem ipsum.</div>`);
}
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0;
while(i<20) {
    document.write(`<h1>Lorem ipsum dolor sit amet.</h1>`);
    i++;
}
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let ii = 0;
while(ii<20) {
    document.write(`<h1>${ii} :Lorem ipsum dolor sit amet.</h1>`);
    ii++;
}
//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let mas= [23,45,67,4,6,7,6,7,4,9];
  for (let i=0;i<mas.length;i++){
    console.log(mas[i]);
}

 //- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let text= ['sea','ocean','road','lace','mountain','river','hill','food','bag','drag'];
  for (let i=0;i<text.length;i++){
    console.log(text[i]);
}
  //- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let others = [1,'sea','ocean',null,undefined,45,78,true,'mountain','river'];
for (let i=0;i<others.length;i++){
    console.log(others[i]);
}
//Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let all = [1,'sea','ocean',false ,undefined,45,78, true,'mountain','river'];
 for (let al of all){
     if ( typeof al === 'boolean')
     document.write(`<h3>${al}</h3>`)
 }
 //- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let all2 = [1,'sea','ocean',false,undefined,45,78,true,'mountain','river'];
 for (let al of all2) {
    if (typeof al == 'number')
        document.write(`<h2>${al}</h2>`)
}
 //Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let all3 = [1,'sea','ocean',false,undefined,45,78,true,'mountain','river'];
for (let al of all3) {
    if (typeof al == 'string')
        document.write(`<h4>${al}</h4>`)
}
//Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let massive = [];
massive[0]= 'food';
massive[1]= 'alko';
massive[2]= true;
massive[3]= 45;
massive[4]= 76;
massive[5]= false;
massive[6]= null;
massive[7]= 'siga';
massive[8]= 'drag';
massive[9]= undefined;
 for (let mas of massive) {
     console.log(mas);
 }
 //- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i=0;i<10;i++){
    console.log(i);
    document.write(i);
}
//- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i=0;i<100;i++) {

    console.log(i);
    document.write(i);
}
//- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i=0;i<100;i+=2) {
    console.log(i);
    document.write(i);
}
//Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0;i<100;i++) {
    if (i % 2 == 0) {
        console.log(i);
        document.write(i);
    }
}
//- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0;i<100;i++) {
    if (i % 2 !== 0) {
        console.log(i);
        document.write(i);
    }
}