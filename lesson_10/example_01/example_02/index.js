// template string(шаблонная строка)

const nameA = "Artur"
const strA = "Hello" + nameA;
console.log(strA);

const strB = `Hello ${ nameA}`;
// записи в правой части выражение в строках 4 и 7 возвращает одно и тоже

console.log(strB);


//Написать стрелочную функцию,которая принимает как аргумент имя(строку) и возвращает запись(строку): "My name is <имя>"

const createGreeting = (name) => `My name is ${name}`;
// Пример использования функции
const userName = "Alice";
const greeting = createGreeting(userName);

console.log(greeting); // "My name is Alice"

// в классе- 2 способ

const nameD = "Jek";
const strC = (nameD) => { return `My name is &{ nameD}`};
console.log( strC("Jemes Bond"));

const doubleF = (name) => {
    return `%{ strC(name)}  и он хороший человек`;
}

console.log ()