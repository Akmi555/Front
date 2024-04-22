// // @alena.shilimova

// for (let i = 0; i <= arrOfWords.length-1; i++) {

//     console.log(arrOfWords[i]);

// }

// // Евгений Грущенко
// // 02:22:35
// const array = Object.keys(andrey);

// for (let i = 0; i < array.length; i++) {

//     console.log(andrey[array[i]]);

    

// }

// // Vitaliy Vynnyk
// // 02:28:35
// const arrA = ["a", "b", "c"];

 

// const arrAo = {

//     0: "a",

//     1: "b",

//     2: "c"

// };

 

// console.log(arrA[0]);

// console.log(arrAo[0]);

 

 

// // object methods

// const childJohnKonnor = {

//     name: "John",

//     surname: "Konnor",

//     height: 110,

//     weight: 20,

//     age: 5,

//     hobby: function (){

//         console.log("I read book")

//     }

// }

 

// console.log(childJohnKonnor.age);

// childJohnKonnor.hobby();

 

// // get array of keys - Object.keys(<nameObj>)

// console.log(Object.keys(childJohnKonnor));

 

 

// // получаем ключи в массив, проходимся циклом по массиву ключей и получаем значения ключей и выводим в консоль

// const array = Object.keys(childJohnKonnor);

// for (let i = 0; i < array.length; i++) {

//     console.log(childJohnKonnor[array[i]]);

    

// }

 

// //  меняем значения

// childJohnKonnor.age = childJohnKonnor.age + 1;

// childJohnKonnor.MotherName = "Sara";

// console.log(childJohnKonnor);


// // Vitaliy Vynnyk
// // 02:55:02
// const arrA = ["a", "b", "c"];

// const arrAo = {

//     0: "a",

//     1: "b",

//     2: "c"

// };

// console.log(arrA[0]);

// console.log(arrAo[0]);

 

// // испытуемый обьект

// const childJohnKonnor = {

//     name: "John",

//     surname: "Konnor",

//     height: 110,

//     weight: 20,

//     age: 5,

//     hobby: function (){

//         console.log("I read book")

//     }

// }

 

// //  меняем значение

// childJohnKonnor.age = childJohnKonnor.age + 1;

// // добавляем значение

// childJohnKonnor.MotherName = "Sara";

// // удаляем значение

// delete childJohnKonnor.weight;

 

// console.log(childJohnKonnor);

// console.log(childJohnKonnor.age);

// childJohnKonnor.hobby();

 

// // object methods

// // 1 - get array of keys - Object.keys(<nameObj>)

// console.log(Object.keys(childJohnKonnor));

 

 

// // получаем ключи в массив, проходимся циклом по массиву ключей и получаем значения ключей и выводим в консоль

// const array = Object.keys(childJohnKonnor);

// for (let i = 0; i < array.length; i++) {

//     console.log(childJohnKonnor[array[i]]);

// }

 

// // 2 -

// // Vitaliy Vynnyk
// // 03:02:41
// // object methods

 

// // 0 есть ли ключ в обьекте (оператор)

// // >< === !== in

// if ("name" in childJohnKonnor) {

//     console.log("есть")

// } else {

//     console.log("net")

// }

 

 

// // 1 - get array of keys - Object.keys(<nameObj>)

// console.log(Object.keys(childJohnKonnor));

 

 

// // получаем ключи в массив, проходимся циклом по массиву ключей и получаем значения ключей и выводим в консоль

// const array = Object.keys(childJohnKonnor);

// for (let i = 0; i < array.length; i++) {

//     console.log(childJohnKonnor[array[i]]);

// }

 

// // 2 - get array of values

// console.log(Object.values(childJohnKonnor));

// // Vitaliy Vynnyk
// // ---------

// // классная работа:

// // создаю массив из нашего обьета

// const arrOfObject = Object.entries(childJohnKonnor);

// // сделайте из этого массива обратно обьект

