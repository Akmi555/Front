const strA = "Hello, my little: world";// удалить все знаки препинания- останутся только буквы
 
console.log(strA.replaceAll(/([,:!])/g,""));

//////////////////////////////
// const strA = "Итак,самое длинное научное название: метиллопропиленннопрпрпор"ж
// const strB//



// Задача 3. (Домашнее задание было) 
 function sumN(a,b){
    let sum = 0;
    for (let i = a + 1; i< b; i++){
        if (i%2 === 0){
            sum= sum + i;
        }
    }
    return sum;
 } 
 console.log(sumN(5,10));