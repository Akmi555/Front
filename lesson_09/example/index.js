if ( true){
    console.log("hello")
}

console.log(1 === 1);
console.log (1 !== 1);
console.log ( !false);
// 
let a = 0;
if ( a > 0){
    console.log(" a > 0")
}else {
    console.log( "a = 0")
}

const arrA = ["a", "b", "c"];            //найти длину массива
const lengthOfArrA =arrA.length;
console.log(lengthOfArrA);
console.log(arrA[1]);

arrA.push('d');
console.log(arrA);      //добавим элемент в конец массива

arrA.pop();
console.log(arrA);   //убираем элемент из конца массива

arrA.unshift('A');
console.log(arrA);      //добавим элемент в начало массива

arrA.shift();
console.log(arrA);   //убираем элемент из начала массива

//ЛУЧШЕ В МАССИВАХ МЕНЯТЬ В КОНЦЕ!!!!!!!!!!!!!!!!!!!!!!!!!


//    ЦИКЛЫ


// let i=arrB;

``
// const arrJ[];
// for(let i=0; i<=10; i++){
//         console.log(i);
//     }
// arrJ.pop();
// console.log(arrJ);
    
    const arrB =[];
    let c=1;
    for(let i=0; i<=9; i++){     //наполнить пустой массив числами от 1 до 10 и вывести  его на экран
        arrB.push(c++);
    }
    // console.log("Весь массив :" +"" + arrB);
    console.log(arrB);



    const arrD =[];
    let b=1;
    for(let i=0; i<10; i++){     //наполнить пустой массив числами от 10 до 1 и вывести  его на экран
        arrD.unshift(b++);
    }
    console.log(arrD);



    const arrE =[];
    
    for(let i=1; i<=10; i++){     //наполнить пустой массив числами от 10 до 1 и вывести  его на экран
        arrE.unshift(i);
    }
    console.log(arrE);


// //const arrB =[];
// let c=1;
// for(let i=0; i<=9; i++){
//     arrB.push(c++);
// }
// console.log(arrB);

// const arrB =[];
// let c=10;
// for(let i=9; i>=0; i--){
//     arrB.push(c--);
// }
// console.log(arrB);


// const arrA =[];
// let randA=Math.random();    --вызвать случайные числа от 0 до 1

//  console.log(Math.ceil(()*100);

// for (let i=0; i<=9; i++){
//     arrA.push(i++) ;
// }
// console.log (arrA);

let randA=Math.random();          //-вызвать случайные числа от 0 до 1
console.log(randA);
console.log(Math.ceil(7.1));      // округляет вверх
console.log(Math.floor(8.9));     // округляет вниз
console.log(Math.round(10.55));   //округляет по правилам математики




// создать массив пустой массив, запустить цикл, заполнить массив рандомными числами от 0 до 100,
// 10 элементов в массиве должно быть 
const arrK =[];
for ( i=0; i<=9; i++) {  
    let randB = Math.round(Math.random()*100);
        arrK.push(randB) ;
        // arrK[i]=(randB);      //2 способ
        
     }
     console.log (arrK);







