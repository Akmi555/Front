// const arrF = [ 1,2,3,5,4,10,6];
// let b=0;
// const ff = (a) => {
//     b= b+a;
// }
// arrF.forEach(ff);
// console.log(b);
// forEach
let b=0
const ff =(a)=> { b=b+a;
    console.log(`${b} `);
}

const arrF = [1, 2, 3, 5, 4, 10, 6];
arrF.forEach(ff);
console.log(`${b} `);
//////////////////////////

// const arrG = [1, 2, 3, 5, 4, 10, 6];
// const arrF = [];

// // Создаем новый массив, увеличивая каждое значение на 3
// const increasedArray = arrF.map((value) => value + 3);

// console.log(`Новый массив, увеличенный на 3: ${increasedArray}`);


const arrH = [1, 2, 3, 5, 4, 10, 6];
const arrO = [];

// Увеличиваем каждое значение на 3 и добавляем в новый массив arrF
arrH.forEach((value) => {
    const increasedValue = value + 3;
    arrO.push(increasedValue);
});

console.log(`Новый массив arrF, увеличенный на 3: ${arrO}`);






