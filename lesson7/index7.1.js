//***************************************async await*******************************************************
function wakeUp () {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('7:00 Під"йом.Особиста гігієна.');
            resolve('Done');
        }, 1500)
    });
}
function training () {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('7:30 Тренування.');
            resolve('Done');
        }, 1000)
    });
}
function bracfast () {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('8:30 Сніданок');
            resolve('Done');
        }, 1200)
    });
}
function startWork () {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('9:00 Початок роботи');
            resolve('Done');
        }, 1100)
    })
}
function lunch () {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('13:00-13:50 Обідня перерва');
            resolve('Done');
        }, 1300)
    });
}
function endWork () {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('16:00 Закінчення роботи');
            resolve('Done');
        }, 500)
    });
}
function tennis () {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('17:00 Гра у теніс');
            resolve('Done');
        }, 1700)
    });
}
function stady () {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('18:30 Навчання');
            resolve('Done');
        }, 1650)
    });
}
function lecture () {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('20:00 Лекції/Практичні');
            resolve('Done');
        }, 1800)
    });
}
function dinner () {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('21:30 Вечеря');
            resolve('Done');
        }, 1150)
    });
}
function socialMed () {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('22:00 Перегляд соціальних мереж,youtube,кино');
            resolve('Done');
        }, 1950)
    });
}
function sleep () {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('23:00 Сон');
            resolve('Done');
        }, 800)
    });
}
async function planDay() {
    const plan = await wakeUp ();
    console.log(plan);

    const train = await training ();
    console.log(train);

    const brac = await bracfast ();
    console.log(brac);

    const work = await startWork ();
    console.log(work);

    const lun = await lunch ();
    console.log(lun);

    const eWork = await endWork ();
    console.log(eWork);

    const ten = await tennis ();
    console.log(ten);

    const stad = await stady ();
    console.log(stad);

    const lec = await lecture ();
    console.log(lec);

    const din = await dinner();
    console.log(din);

    const media = await socialMed();
    console.log(media);

    const slep = await sleep();
    console.log(slep);
}

planDay();