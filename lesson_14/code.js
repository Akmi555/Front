// создать новый массив пустой и заполнить его эл-тами данного массива увеличенными на 3


const arr = [1, 2, 3, 4, 5, 10, 6];      //это творение копилота
const arrG = [];

arr.forEach(item => {
  arrG.push(item + 3);
});

console.log(arrG);  // Выведет: [4, 5, 6, 7, 8, 13, 9]

// в классе написали
const arrF2 = [1, 2, 3, 4, 5, 10, 6];
const arrA2 = [];
let b = 0;

const ff=(a) => {
  arrA2.push(a + 3);
  
};

arrF2.forEach(ff);

console.log(arrA2);  // Выведет: [4, 5, 6, 7, 8, 13, 9]
