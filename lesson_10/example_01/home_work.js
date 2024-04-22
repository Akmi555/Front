function primeNamberInBetween(s) {
    // const primeNamber = f =>f%

const array = [];
for( let i = 1; i <= Math.floor(s); i++) {
    if (primeNamber (i) === true){
        array.push(i);
    }
}
return array;
}

//переписать в стрелочную функцию

const primeNamberInBetween2 = s => {
    const array = [];
    for( let i = 1; i <= Math.floor(s); i++) {
        if (primeNamber2 (i) === true){
            array.push(i);
        }
    }
    return array;
}