// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let agenda = ['day1', 'day2', 'day3', 'day4', 'day5', 'day6', 'day7', 25, 26, true];
console.log(agenda[0]);
console.log(agenda[1]);
console.log(agenda[2]);
console.log(agenda[3]);
console.log(agenda[4]);
console.log(agenda[5]);
console.log(agenda[6]);
console.log(agenda[7]);
console.log(agenda[8]);
console.log(agenda[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'Contagious: Why Things Catch On',
    pageCount: 256,
    genre: 'Marketing & Sales'
};
console.log(book1)

let book2 = {
    title: 'Building a StoryBrand: Clarify Your Message So Customers Will ',
    pageCount: 240,
    genre: 'Marketing & Sales'
};
console.log(book2);

let book3 = {
    title: 'Traffic Secrets',
    pageCount: 352,
    genre: 'Marketing & Sales'
};
console.log(book3)

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
let book3_1 = {
    title: 'Contagious: Why Things Catch On',
    pageCount: 256,
    genre: 'Marketing & Sales',
    author: {
        name: 'Russell Brunson',
        age: 42
    },
};
console.log(book3_1.author);

let book2_1 = {
    title: 'Building a StoryBrand: Clarify Your Message So Customers Will ',
    pageCount: 240,
    genre: 'Marketing & Sales',
    author: {
        name: 'Donald Miller',
        age: 48
    },
};
console.log(book2_1.author);

let book1_1 = {
    title: 'Contagious: Why Things Catch On',
    pageCount: 256,
    genre: 'Marketing & Sales',
    author: {
        name: 'Jonah Berger',
        age: 28
    },
};
console.log(book1_1.author);
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let banda = {
    one: {
        name: 'Oleksii',
        username: 'Divisenko',
        password: 111
    }

};
console.log(banda.password);