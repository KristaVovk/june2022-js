// 1 Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str1 = 'hello world';
console.log(str1.length)
console.log(str1.toUpperCase());

let str2 = 'lorem ipsum';
console.log(str2.length)
console.log(str2.toUpperCase());

let str3 = 'javascript is cool';
console.log(str3.length);
console.log(str3.toUpperCase());

// ? як вивести довжину усіх трьох стрінг одним значенням, а не окремо кожну?

// 2 Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let toUpperCase1 = str1.toUpperCase;
console.log(str1.toUpperCase());

let toUpperCase2 = str2.toUpperCase();
console.log(str2.toUpperCase());

let toUpperCase3 = str3.toUpperCase;
console.log(str3.toUpperCase());

// 3 Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let str4 = 'HELLO WORLD';
console.log(str4.toLowerCase());

let str5 = 'LOREM IPSUM';
console.log(str5.toLowerCase());

let str6 = 'JAVASCRIPT IS COOL'
console.log(str6.toLowerCase());

// ? як перевести до великого регістру усі стрінги однією функцією, а не окремо кожну?

// 4 Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str7 = ' dirty string   ';
console.log(str7.trim());

// 5 Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let stringToarray = 'Ревуть воли як ясла повні';
let split = stringToarray.split(' ');
console.log(split);

// 6 є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let array = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let map = array.map(value => value);
console.log(map);

// 7 створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let numbers1 = [11, 21, 3];
let sort1 = numbers1.sort((a, b) => a - b);
console.log(sort1);

let sort2 = numbers1.sort((a, b) => b - a);
console.log(sort2);

// 8 є масив
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
coursesAndDurationArray.sort((a, b) => (a.monthDuration - b.monthDuration))
console.log(coursesAndDurationArray.sort());


//9 описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше

//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//
// 10 Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }