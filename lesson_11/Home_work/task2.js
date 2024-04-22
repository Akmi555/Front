//Напишите функцию, которая превратит массив который содержит элементы в виде массивов из двух элементов, в объект. 
// Первый элемент каждого внутреннего массива ключ, второй - значение. Например такой:
// [
//     [ 'height', 170 ],
//     [ 'weight', 80 ],
//     [ 'sport', 'regbi' ],
//     [ 'full name', 'John Doe' ],
//     [ 'sing', 'love' ],
//     [ 'speed', 90 ]
//   ]

// Вот функция на JavaScript, которая принимает такой массив и возвращает объект, 
// где ключи и значения соответствуют элементам внутренних массивов:
console.log("---------Задание 1-------------")
function arrayToObj(arr) {
    const result = {};
    for (const [key, value] of arr) {
        result[key] = value;
    }
    return result;
}

// Пример использования:
const inputArray = [
    ['height', 170],
    ['weight', 80],
    ['sport', 'regbi'],
    ['full name', 'John Doe'],
    ['sing', 'love'],
    ['speed', 90]
];
const outputObject = arrayToObj(inputArray);
console.log(outputObject);
// Вывод: { height: 170, weight: 80, sport: 'regbi', 'full name': 'John Doe', sing: 'love', speed: 90 }

// Эта функция перебирает внутренние массивы и создает свойства в объекте с ключами и значениями, 
// соответствующими элементам внутренних массивов. 
