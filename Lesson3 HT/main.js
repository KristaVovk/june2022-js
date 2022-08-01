// 1. Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = +prompt();
console.log(x);
if (x !==0) {
    console.log(true)
} else {
    console.log(false)
}

// 2. Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = +prompt('write a minutes');
if (time >= 0 && time <= 15) {
    console.log('quarter one');
} else if (time > 15 && time <= 30) {
    console.log('quarter two');
} else if (time > 30 && time <= 45) {
    console.log('quarter three');
} else if (time > 45 && time <= 59) {
    console.log('quarter four');
} else {
    console.log(!!NaN)
}

// 3. У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = +prompt('write number 1-31');
if (day>=1 && day<10){
    console.log ('first decade');
} else if (day>=10 && day<20){
    console.log ('second decade');
} else if (day>=20 && day<=31){
    console.log ('third decade')
}

// 4. Скласти розклад на тиждень за допомогою switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let agenda = +prompt('write number day of the week');
switch (agenda) {
    case 1:
        console.log('sunday');
        break;
    case 2:
        console.log('monday');
        break;
    case 3:
        console.log('tuesday');
        break;
    case 4:
        console.log('wednesday');
        break;
    case 5:
        console.log('thursday');
        break;
    case 6:
        console.log('friday');
        break;
    case 7:
        console.log(saturday);
        break;
    default:
        console.log('try again')
}

// 5. Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох.
//         Також потрібно врахувати коли введені рівні числа.
let z = +prompt('numberOne')
let v = +prompt('numberTwo')
if (z === v) {
    console.log('equivalent');
} else if (z > v) {
    console.log(z);
} else if (v > z) {
    console.log(v);
}

//6. є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
let f = NaN || ('default');
console.log(f);
