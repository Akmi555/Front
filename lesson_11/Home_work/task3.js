// Функция должна принимать объект и возвращать строку, где будут перечислены все значения свойств объекта через запятую.
// Пример работы функции:

// { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' } ==> 'a, 36.6, John Doe'



// Вот функция на JavaScript, которая принимает объект и возвращает строку, 
// где перечислены все значения свойств объекта через запятую:

function objectValuesToString(obj) {
    const values = Object.values(obj);
    return values.join(', ');
}

// Пример использования:
const inputObject = { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' };
const resultString = objectValuesToString(inputObject);
console.log(resultString); // 'a, 36.6, John Doe'



// Эта функция использует метод Object.values(obj), чтобы получить массив значений свойств объекта, 
// а затем объединяет их в строку с помощью join(', '). 

//-------------2 способ--------------------------
function objectInString(objB) {
    const arrOfObgect = object.values(objB);
    let string1 = "";
    for (let i = 0; i < arrOfObgect.length; i++) {
        if ( i=== arrOfObgect.length -1) {
            string1 =string1 + arrOfObgect[i];   // так запишем
            // string1 = `${string1}${arrOfObgect[i]}`;
        }
        else{
            string1 = string1 + arrOfObgect[i ] + ",";  // или так запишем
            // string1 = `${string1}${arrOfObgect[i]},`
        }
    }
    return string1;
}
const objectF = {
    a: 'a', '36.6': 36.6, 'John Doe': 'John Doe'
}
console.log ( objectInString(objectF)) ;

