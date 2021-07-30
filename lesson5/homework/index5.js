//Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//     -- отримує текст з параграфа з id "content"
//     -- замініть текст параграфа з id 'content' на будь-який інший
//     -- змініть кожному елементу колір фону на червоний
//     -- змініть кожному елементу колір тексту на синій
//     -- отримати весь список класів елемента з id=rules і вивести їх в console.log
//     -- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна вивдоить текст елементу, інша довільний ьексь
//     -- поміняти колір тексту у всіх елементів fc_rules на червоний
let text = document.getElementById('content');
console.log(text);
text.innerText = 'lorem1fkkwfwiefnwefnweeuf';
text.style.background = 'red';
text.style.color = 'blue';
//     -- отримує текст з блоку з id "rules"
//     -- замініть текст параграфа з id 'rules' на будь-який інший
//     -- змініть кожному елементу колір фону на червоний
//     -- змініть кожному елементу колір тексту на синій
let text_two = document.getElementById('rules');
console.log(text_two);
text_two.innerText = 'lorem dfg dfgdfg sssdfewerjgnhttyjg fdfthdfdfhehrjfgn ewdfsdvfhryjgfndrwrsd';
text_two.style.background = 'red';
text_two.style.color = 'blue';

//     -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let class_list = document.getElementsByTagName('div');
console.log(class_list);
for (const id_Ruls of class_list) {
    console.log(id_Ruls);
    console.log(id_Ruls.classList);
    //id_Ruls.classList.add('xxx');
}
//-- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна вивдоить текст елементу, інша довільний ьексь
//     -- поміняти колір тексту у всіх елементів fc_rules на червоний
let allCollection = document.getElementsByTagName("li");
console.log(allCollection);
for (const li of allCollection) {
    console.log(li);
    //li.style.background = 'red';
    li.style.color = 'blue';
}
let li_class = document.getElementsByClassName('fc_rules');
console.log(li_class);
for (const liElement of li_class) {
    console.log(liElement);
    liElement.style.color = 'red'
}
for (const clicks of li_class) {
    clicks.addEventListener('click', function () {
        console.log('hi');
    })
    clicks.addEventListener('click', function () {
        console.log(clicks.innerText);
    })
}
