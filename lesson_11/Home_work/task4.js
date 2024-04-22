// Напишите функцию, которая принимает объект и возвращает другой обьект, который содержит все свойства исходного обьетка, 
// но значения свойств - это их типы.
// Пример:

// { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' } ==> { a: 'string', '36.6': 'number', 'John Doe': 'string' }

function getPropertyTypes(obj) {
    const result = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = typeof obj[key];
        }
    }
    return result;
}

// Пример использования:
const inputObject = { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' };
const outputObject = getPropertyTypes(inputObject);
console.log(outputObject);
// Вывод: { a: 'string', '36.6': 'number', 'John Doe': 'string' }