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
    new Client(3, 'petya', 'dderv', 'jujusd@com', 336, ['milk','arg']),
    new Client(1, 'kola', 'wernig', 'ccxsd@com', 334, ['juise','agr','arg']),
    new Client(6, 'lionia', 'eeedn', 'eesd@com', 339, ['beef']),
    new Client(2, 'misha', 'ghyttr', 'bbbsd@com', 335, ['apple','ara']),
    new Client(5, 'gena', 'hybnn', 'dttd@com', 338, ['potato','ssdfg','sdf','rega','ard']),
    new Client(9, 'obivankenobi', 'ynynrb', 'ttfsd@com', 333,['dhdhhhy','xwgb']),
    new Client(4, 'vasja', 'werhtd', 'hhysd@com', 337,['alcohol','iwiw','wwotg','swqqa']),
    new Client(10, 'obigen', 'ggre', 'ggsd@com', 3310, ['smarfon']),
    new Client(7, 'zhenia', 'ekktt', 'yysd@com', 331, ['shorts']),
    new Client(8, 'vitja', 'gehhhh', 'rrfsd@com', 332,['game','dfree','ergerg'])
    ];
client.sort((a,b) => a.order.length - b.order.length);
console.log(client);
//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//     -- info () - яка виводить всю інформацію про автомобіль
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
function Car(model, producent, year, max_speed, engine_volume){
    this.model = model;
    this.producent = producent;
    this.year = year;
    this.max_speed = max_speed;
    this.engine_volume = engine_volume;


    this.drive = function (){
        console.log(`їдемо зі швидкістю ${this.max_speed} на годину`)
    }
    this.inf = function (){
        console.log(this)
    }
    this.increaseMaxSpeed = function (newSpeed = 0){
        this.max_speed += newSpeed;
    }
    this.changeYear = function (newValue) {
       this.year = newValue;
    }
    this.addDriver = function (driver){
        this.driver = driver;
    }

}

const car = new Car( 'x5','bmw',2005,250, 2.5);

car.drive();

const infa = new Car('camry','toyota',2000, 240,2.3);

infa.inf();

const volvo = new Car('xc70','volvo',2005,270,4.0);
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
}
