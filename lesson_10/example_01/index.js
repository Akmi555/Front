console.log("--------------Задание 3----------------");
const arrA = [1, 2, 3];
const arrB = arrA.reverse ;
console.log(arrB);

console.log("--------------Задание ----------------");
const originalArray = [1, 2, 3, 4, 5];
const clonedArray = originalArray.slice();

console.log(clonedArray); // [1, 2, 3, 4, 5]
const reversedArray = originalArray.slice().reverse();

console.log(reversedArray); // [5, 4, 3, 2, 1]
  
console.log("--------------Задание ----------------");

function sumAB(a,b) {
    const sum = a+b ;
    return sum ;
console.log(sum1);
    }
const sum1 = sumAB(3,4);
console.log(sum1);

const test = console.log(777);
console.log(test);

// функция.которая ищет максимум в массиве
function maxInArr (arr) {
    let maxNum = Math.max(...arr);
    return maxNum ;
    // предыдущие 2 строки можно заменить на одну:
    // return Math.max(...arr);
}

const arrC =[1,5,25,10.20];
console.log(maxInArr(arrC));

//Задание/ Создать функцию.которая принимает массив, и возвращает новый массив. где каждый элемент массива увеличен на 10
function increaseArrayValues(arr) {
    // Создаем новый массив, копируя элементы из исходного массива и увеличивая их на 10
    const resultArray = arr.map((element) => element + 10);
    return resultArray;
  }
  
  // Пример использования функции
  const originalArray1 = [1, 2, 3, 4, 5];
  const newArray1 = increaseArrayValues(originalArray1);
  
  console.log(newArray1); // [11, 12, 13, 14, 15]

///////////////////////////////////////////////////////////////////////////////////////////////
  function increaseArrayValues(arr) {
    // Создаем новый массив, копируя элементы из исходного массива и увеличивая их на 10
    const resultArray = arr.map((element) => element + 10);
    return resultArray;
  }
  
  // Пример использования функции
  const originalArray2 = [1, 2, 3, 4, 5];
  const newArray = increaseArrayValues(originalArray2);
  
  console.log(newArray); // [11, 12, 13, 14, 15]
  ///////////////////////////////////////////
  function maxInArr(arr) {
    return Math.max.apply(void 0, arr.map(Number));
  }
  
  // Пример использования функции
  const originalArray4 = [1, 5, 25, 10.20];
  const newArray4 = originalArray.map((element) => element + maxInArr(originalArray4));
  
  console.log(newArray4); // [11, 15, 35, 20.2]

  //////////////////////////////////////////
const arrNa10 = function(arrA,a) {
    const arrD = [];
    for(let i = 0; i < arrA.length ; i++){

    }
  }


   //function expression -переписываем нашу функцию

// сократим 
// const  maxInArrShort