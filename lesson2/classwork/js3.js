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
for (let i = 0; i<10;i++) {
    document.write(`<div>Lorem ipsum.+ indexOf</div>`);
}