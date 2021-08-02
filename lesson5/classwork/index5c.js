/*Взяти файл template_2.html та працювати в ньому
1) Напишіть код, який :
a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)*/

let text = document.getElementById('main_header');
text.style.color = "red";
text.innerText = 'june-2021-tuesday';
console.log(text);

//b) робить шириниу елементу ul 400px
let text2 = document.getElementsByTagName('ul');
for(const ul of text2){
    console.log(ul);
    ul.style.width = '400px';
}

//c) робить шириниу всіх елементів з класом linkList шириною 50%
let text3 = document.getElementsByClassName('linkList');
for (const link of text3) {
    link.style.width = '50%';
    console.log(link);
}

//d) отримує текст який зберігається в елементі з класом listElement2
let text4 = document.getElementsByClassName('listElement2');
for (const elem of text4) {
    console.log(elem.textContent);
}

//e) отримує всі елементи li та змінює ім колір фону на сірий
let text5 = document.getElementsByTagName('li');
for (const li_2 of text5) {
    li_2.style.background = 'grey';
    console.log(li_2);
}

//f) отримує всі елементи 'a' та додає їм клас anchor
let text6 = document.getElementsByTagName('a');
for (const a_a of text6) {
    a_a.classList.add('anchor');
    console.log(a_a);
}

//g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let text7 = document.getElementsByTagName('a');
for (const a_a2 of text7) {
    if (a_a2.textContent === 'link3'){
        a_a2.style.fontSize = '40px';
        console.log(a_a2);
    }
}

//h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a ????????
let text8 = document.getElementsByTagName('a');
for (const a_a3 of text8) {
    a_a3.classList.add(`element_${a_a3.innerText}`);
    console.log(a_a3)
}

//i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

let text9 = document.getElementsByClassName('sub-header');
for(const sub of text9) {
sub.style.background = prompt("enter color");
    console.log(sub);
}

//j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let text10 = document.getElementsByClassName('sub-header');
for (const cont of text10) {
    if (cont.textContent === 'content 2 segment'){
        cont.style.color = prompt("enter text color");
        console.log(cont);
    }
}

//k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let text11 = document.getElementsByClassName('content_1');
for(const texte of text11) {
    texte.innerText = prompt("write text");
    console.log(texte);
}

//l) отримати елементи p та змінити їм padding на 20px
let text12 = document.getElementsByTagName('p');
for( const pe of text12 ) {
    pe.style.padding = '20px';
    console.log(pe);
}

//m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
let text13 = document.getElementsByClassName('text2');
for (const tex of text13 ) {
    tex.innerText = 'june-2021-tuesday';
    console.log(tex);
}



