//  Напишите функцию, которая принимает объект и возвращает другой более сложный обьект, который содержит все свойства
//   исходного обьетка, но значения свойств - это объект содержащий исходное значение, и его тип.

//  Пример:

//  { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' } ==> { a: { value: 'a', type: 'string' }, '36.6':
//   { value: 36.6, type: 'number' }, 'John Doe': { value: 'John Doe', type: 'string' } }

function enhanceObject(obj) {
    const result = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = {
                value: obj[key],
                type: typeof obj[key]
            };
        }
    }
    return result;
}

// Пример использования:
const inputObject = { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' };
const outputObject = enhanceObject(inputObject);
console.log(outputObject);
// Вывод:
// {
//     a: { value: 'a', type: 'string' },
//     '36.6': { value: 36.6, type: 'number' },
//     'John Doe': { value: 'John Doe', type: 'string' }
// }
// Эта функция создает новый объект, где ключи соответствуют свойствам исходного объекта, а значения - объекты
//  с полями value (содержащим исходное значение) и type (содержащим тип значения).


