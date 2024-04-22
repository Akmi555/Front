const ff = (a) => {
    console.log(`Я равен ${a}`);
}

const arrF = [1, 2, 3, 5, 4, 10, 6];


arrF.forEach(ff);

const sum = arrF.reduce((acc, curr) => acc + curr, 0);
console.log(`Сумма всех элементов массива: ${sum}`);


// // forEach
// let b=0
// const ff =(a)=> { b=b+a;
//     console.log(`${b} `);
// }

// const arrF = [1, 2, 3, 5, 4, 10, 6];
// arrF.forEach(ff);
// console.log(`${b} `);

// создать новый масив с увеличенными элементами на 3
const arrF2 = [];
arrF.forEach(a => {
    arrF2.push(a + 3);
});
console.log(arrF2);

// // map делает копию массива и преобразовывает каждый элемент в новый элемент и создает новый массив с новыми элементами.
// map !!!
const callBackForMap = (element) => {
    return element + 4;
}

const arrAMap = arrF.map(callBackForMap);
console.log(arrAMap);


// filter
const callBackForFiler = (element) => {
    if (element > 4) {
        return true
    } else {
        return false
    }
}

const arrAFilter = arrF.filter(callBackForFiler);
console.log(arrAFilter);

// slice возращает кусочки массива
const arrASlice = arrF.slice(1, 4); // отрежем с 1 по 4 элемент
console.log(arrASlice);