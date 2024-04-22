// // создать пустой массив и заполнить его элементами умноженными на3\
// const arr = [1,2,3,4,5,10,6];
// const arrG = [];
// let b=0 ;
// const ff = (a) => {
//     arrG.push(b);
//     b= arr(` ${a}`)+3  ;
//     console.log(` ${b}`);//КАЖДЫЙ РАз КАКаргумент будет выдавать ногвый элемент массива- цикл
    
// }
// arr.forEach(ff);
// console.log (arrG);

const arr = [1, 2, 3, 4, 5, 10, 6];
const arrG = [];

arr.forEach(item => {
  arrG.push(item + 3);
});

console.log(arrG);  // Выведет: [4, 5, 6, 7, 8, 13, 9]
