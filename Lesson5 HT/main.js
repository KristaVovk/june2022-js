// 1 створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function areaRectangle(a, b) {
    return res = a * b;
}

let x = areaRectangle(2, 3)
console.log(x);

const foo = (a, b) => a * b

console.log(foo(2, 3))

// 2 створити функцію яка обчислює та повертає площу кола з радіусом r
function areaCircle(Pi, r) {
    return result = (Pi * r * r);
}

let z = areaCircle(3.14, 3)
console.log(z)

// 3 створити функцію яка обчислює та повертає площу циліндру висотою h, та радіуcом r
function areaCylinder(Pi, r, h) {
    return formula = (2 * Pi * r * h);
}

let y = areaCylinder(3.14, 3, 4)
console.log(y)

// 4 створити функцію яка приймає масив та виводить кожен його елемент

let array = [14, 12345, 23, `hello`, true, false, 'world'];

function displayEachElement(array) {
    console.log(array);
}

displayEachElement(array)

// 5 створити функцію яка створює параграф з текстом. Текст задати через аргумент

function paragraphWithText(array) {
    document.write(`<p> ${array}</p>`);
}

paragraphWithText(`Lorem ipsum dolor sit amet, consectetur adipisicing elit`);

// 6 створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function listWithThreeElements(text) {
    document.write(`<ul>`)
    for (let i = 0; i < 3; i++) {
        document.write(`<li> ${text} </li>`)
    }
    document.write(`</ul>`)
}

listWithThreeElements(`qwerty1234`);

// 7 створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function listWithElements(text, number) {
    document.write(`<ul>`)
    for (let i = 0; i < number; i++) {
        document.write(`<li> ${text} </li>`)
    }
    document.write(`</ul>`)
}

listWithElements(`Zxcvb0987`, 8);

// 8 створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arr = [56, true, false, `qwerty`, 'Zxcvb'];

function arrayOfPrimitiveElements(arr) {
    document.write(`<ul>`)
    for (const arrayKey of arr) {
        document.write(`<li> ${arrayKey} </li>`)
    }
    document.write(`</ul>`)
}

arrayOfPrimitiveElements(arr);

// 9 створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let Fields = [
    {id: 1, name: 'Vasya', age: 22},
    {id: 2, name: 'Sofa', age: 23},
    {id: 3, name: 'Pasha', age: 24},
    {id: 4, name: 'Kety', age: 25},
]

function arrayOfObjectsWithFields(arr) {
    for (const arrKey of arr) {
        document.write(`<div> ${arrKey.id}--${arrKey.name}--${arrKey.age}</div>`)
    }

}

arrayOfObjectsWithFields(Fields);

// 10 створити функцію яка повертає найменьше число з масиву

let number = [5, 8, 43, 56, 456, 2];

function minNumber(array) {
    let min = array[0];
    for (const arrayElement of array) {
        if (arrayElement < min) {
            min = arrayElement;
        }
    }
    return min;
}

console.log(minNumber(number));

// 11 створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let sumOf = [2, 3, 4, 5];
function sumOfNumbers(arr) {
    let sum = 0;
    for (const arrElement of arr) {
        sum+=arrElement;
    }
    return sum;
}
console.log(sumOfNumbers(sumOf));
