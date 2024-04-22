// map !!!
const arrF = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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

// slice
const arrASlice = arrF.slice(2, 5);
console.log(arrASlice)