// function name (a,b) {

// }
//  const name = function(a,b) {

//  }

//  const name = (a,b) => {

//  }

// let x=5;
// let y=500;
// name (x,y);//

const arrrA = ["a", "b", "x"];
console.log(arrrA);


//--------------------------Обьeкты-------------------------------------------//
const objA = {
    param1: "a",
    param2: "b",
    param3: "x",
}
const carBmw7401998 ={
    doors: 4,
    wheels: 4,
    engine: 2000,
    weight: 1750,
}

const footballPlayerJoyn ={
    height: 170,
    weight: 80,
    result: 7.5 ,
    goal: function () {
     console.log( "I made goal")
    },
    number: function() {
        return 5 ;
    }
}


console.log(footballPlayerJoyn.result);
console.log(footballPlayerJoyn ["height"]);

footballPlayerJoyn.goal();

let randomN = Math.random() ;
let numberFromJoyn = footballPlayerJoyn.number();

console.log(numberFromJoyn);

//////////////////////////////////////
const arrA =["a","b","c"];
arrA.length;


const arrAo = {
    0: "a",
    1: "b",
    2: "c",
};

console.log(arrA[0]);





//-------------------------------objekt metods---------------------------------------//
const detki ={
    height: 170,
    weight: 80,
    name: "Аndrei" ,
    surname: "Travolta",
    hobby: function () {
     console.log( "I real book")
    },
    keys: function() {
        return 5 ;
    }
}

console.log( detki.name);// выводит name
detki.hobby();           // выводит hobby

console.log(Object.keys(detki)); // выводит все слова как массив



/////////////////////////////////////////////////////////////////


// const detki = {
//     height: 170,
//     weight: 80,
//     name: "Аndrei",
//     surname: "Travolta",
//     hobby: function () {
//         console.log("I love reading real books.");
//     },
//     keys: function () {
//         return 5;
//     }
// };

console.log(`Height: ${detki.height}`),
console.log(`Weight: ${detki.weight}`),
console.log(`Name: ${detki.name}`),
console.log(`Surname: ${detki.surname}`),
detki.hobby(),
console.log(`Keys: ${detki.keys()}`);

/////////////////////////////////
// detki_values = detki.values()
// print(f"Values: {detki_values}")//


const array =Object.keys(detki);  //---------------вывести только значение ключей на экран-------------//
for (let i =0 ; i < array.length; i++) {
    console.log (detki[array[i]]);
}

//   --------------------------меняем значение------------------------------
detki.age =detki.age +1;
detki.MotherName = "Sara";
console.log(detki);
delete detki.weight;//--------------------удаляем значение--------------------

//0 есть ли ключ в обьекте

// классная работа-------------------------------
// создаем массив из нашего обьекта
const arrOfObject = Object.entries(detki);
// сделайте из этого массива обратно объект

const arrOfObject1 = [
    { name: 'Alice', age: 5 },
    { name: 'Bob', age: 3 },
    { name: 'Charlie', age: 2 }
  ];
  const objFromArr = Object.fromEntries(arrOfObject1.map(item => [item.name, item.age]));

console.log(objFromArr);



//-------------------------------------------------
// const arrOfObject3 =Object.entries(andrey);
// const andreyNew = {};
// for (let i = 0; i < arrOfObject.length; i++) {
//     andreyNew[ arrOfObject[0][0]];
// }




// console firstOfObject


