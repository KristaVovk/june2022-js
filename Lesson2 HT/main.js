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
let book = [
    book1 = {
        title: 'Contagious: Why Things Catch On',
        pageCount: 256,
        genre: 'Marketing & Sales'
    },

    book2 = {
        title: 'Building a StoryBrand: Clarify Your Message So Customers Will ',
        pageCount: 240,
        genre: 'Marketing & Sales'
    },

    book3 = {
        title: 'Traffic Secrets',
        pageCount: 352,
        genre: 'Marketing & Sales'
    }
]
console.log(book1)
console.log(book2)
console.log(book3)

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
let books = [
    book3_1 = {
        title: 'Contagious: Why Things Catch On',
        pageCount: 256,
        genre: 'Marketing & Sales',
        author: {
            name: 'Russell Brunson',
            age: 42
        },
    },

    book2_1 = {
        title: 'Building a StoryBrand: Clarify Your Message So Customers Will ',
        pageCount: 240,
        genre: 'Marketing & Sales',
        author: {
            name: 'Donald Miller',
            age: 48
        },
    },

    book1_1 = {
        title: 'Contagious: Why Things Catch On',
        pageCount: 256,
        genre: 'Marketing & Sales',
        author: {
            name: 'Jonah Berger',
            age: 28
        }
    }
];
console.log(book3_1.author);
console.log(book2_1.author);
console.log(book1_1.author);
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let banda = [
    {
        name: 'Oleksii',
        username: 'Divisenko',
        password: 111
    },
    {
        name: 'Oleksandra',
        username: 'Doroguncova',
        password: 222
    },
    {
        name: 'Max',
        username: 'Boritko',
        password: 333
    },
    {
        name: 'Max',
        username: 'Boritko',
        password: 444
    },
    {
        name: 'Marina',
        username: 'Kunec',
        password: 555
    },
    {
        name: 'Genya',
        username: 'Velichev',
        password: 666
    },
    {
        name: 'Pavlo',
        username: 'Virgesh',
        password: 777
    },
    {
        name: 'Egor',
        username: 'Petrov',
        password: 888
    },
    {
        name: 'Masha',
        username: 'Matveenko',
        password: 999
    },
    {
        name: 'Luda',
        username: 'Bey',
        password: 101010
    }

];
console.log(banda[0].password);
console.log(banda[1].password);
console.log(banda[2].password);
console.log(banda[3].password);
console.log(banda[4].password);
console.log(banda[5].password);
console.log(banda[6].password);
console.log(banda[7].password);
console.log(banda[8].password);
console.log(banda[9].password);