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
        console.log(`${this.model}\n ${this.producent}\n ${this.year}\n ${this.max_speed}\n ${this.engine_volume}`)
    }
    this.increaseMaxSpeed = function (){
        let newSpeed = 30;
        console.log(`${this.max_speed}` + newSpeed);
    }
    this.changeYear = function () {
        let newValue = 2007;
        this.year = newValue;
        console.log(`${this.year}`);
    }

}

const car = new Car( 'x5','bmw',2005,250, 2.5);

car.drive();

const infa = new Car('camry','toyota',2000, 240,2.3);

infa.inf();

const speed = new Car('camry','toyota',2003,240 ,2.3);

speed.increaseMaxSpeed();

const year = new Car('x5','bmw',2005,250, 2.5)

year.changeYear();