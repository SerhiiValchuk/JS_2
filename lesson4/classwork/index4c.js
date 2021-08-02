// створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let client = [
    new Client(3, 'petya', 'dderv', 'jujusd@com', 336, ['milk', 'arg']),
    new Client(1, 'kola', 'wernig', 'ccxsd@com', 334, ['juise', 'agr', 'arg']),
    new Client(6, 'lionia', 'eeedn', 'eesd@com', 339, ['beef']),
    new Client(2, 'misha', 'ghyttr', 'bbbsd@com', 335, ['apple', 'ara']),
    new Client(5, 'gena', 'hybnn', 'dttd@com', 338, ['potato', 'ssdfg', 'sdf', 'rega', 'ard']),
    new Client(9, 'obivankenobi', 'ynynrb', 'ttfsd@com', 333, ['dhdhhhy', 'xwgb']),
    new Client(4, 'vasja', 'werhtd', 'hhysd@com', 337, ['alcohol', 'iwiw', 'wwotg', 'swqqa']),
    new Client(10, 'obigen', 'ggre', 'ggsd@com', 3310, ['smarfon']),
    new Client(7, 'zhenia', 'ekktt', 'yysd@com', 331, ['shorts']),
    new Client(8, 'vitja', 'gehhhh', 'rrfsd@com', 332, ['game', 'dfree', 'ergerg'])
];
client.sort((a, b) => a.order.length - b.order.length);
console.log(client);
//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//     -- info () - яка виводить всю інформацію про автомобіль
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
function Car(model, producent, year, max_speed, engine_volume) {
    this.model = model;
    this.producent = producent;
    this.year = year;
    this.max_speed = max_speed;
    this.engine_volume = engine_volume;


    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.max_speed} на годину`)
    }
    this.inf = function () {
        console.log(this)
    }
    this.increaseMaxSpeed = function (newSpeed = 0) {
        this.max_speed += newSpeed;
    }
    this.changeYear = function (newValue) {
        this.year = newValue;
    }
    this.addDriver = function (driver) {
        this.driver = driver;
    }

}

const car = new Car('x5', 'bmw', 2005, 250, 2.5);

car.drive();

const infa = new Car('camry', 'toyota', 2000, 240, 2.3);

infa.inf();

const volvo = new Car('xc70', 'volvo', 2005, 270, 4.0);
volvo.inf();
volvo.increaseMaxSpeed(20);
volvo.inf();
volvo.addDriver({name: 'Dimas'});
volvo.inf()
volvo.changeYear(2012);
volvo.inf()


//- (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//     -- info () - яка виводить всю інформацію про автомобіль
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
class Car2 {
    constructor(model, producent, year, max_speed, engine_volume) {
        this.model = model;
        this.producent = producent;
        this.year = year;
        this.max_speed = max_speed;
        this.engine_volume = engine_volume;
    }

    drive2() {
        console.log(`їдемо зі швидкістю ${this.max_speed} на годину`)
    }

    info() {
        console.log(this)
    }

    increaseMaxSpeed(newSpeed = 0) {
        this.max_speed += newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

const car2 = new Car2('a6', 'audi', 2012, 250, 4.0);
car2.drive2();
car2.info();
car2.increaseMaxSpeed(40);
car2.info()
car2.changeYear(2020);
car2.info();
car2.addDriver({name:'Ivan',age:23});
car2.info();
//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
class Popi {
    constructor(name,age,foot_size) {
        this.name = name;
        this.age = age;
        this.foot_size = foot_size;
    }
}
let popii = [
    new Popi('aga',17,37),
    new Popi('ola',18.5,36),
    new Popi('paula',19,35),
    new Popi('beata',20,35.5),
    new Popi('lena',21,36.5),
    new Popi('gala',22,37.5),
    new Popi('maria',23,38),
    new Popi('monika',24,39),
    new Popi('magda',25,38.5),
    new Popi('eva',26,39,5)
];
console.log(popii);


// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Princ {
    constructor(name,age,size_found) {
        this.name = name;
        this.age = age;
        this.size_found = size_found;
    }

// ЦЕ
    findPrincess = (girlsArr) => {
        for (const girl of girlsArr) {
            if (girl.foot_size === this.size_found) {
                return girl;
            }
        }
    }
// АБО ЦЕ
    // findPrincess = (girlsArr) => girlsArr.find(girl => girl.foot_size === this.size_found)

}

let prince = new Princ('Victor',28,37.5);

const girl = prince.findPrincess(popii);
console.log(girl)

// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//??????????не зумів зробити цикл котрий видасть вірну відповідь з массиву poppi, видавало object,object. Покажи як має бути

// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
