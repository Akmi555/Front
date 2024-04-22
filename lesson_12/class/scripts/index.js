//console.log("test");

// меняем
const outTitle = document.querySelector(".title");
// console.log( outTitle);
outTitle.innerText = 'Header';
outTitle.classList.add('font-red');

// создаем ноые ноды
const ourSpan = document.createElement('span');
ourSpan.innerText = 'Text in span';
ourSpan.classList.add('span-style');
//  созданную ноду вставляем куда-то
outTitle.append(ourSpan);

// слушаем события
const ourButton = document.createElement('button');
ourButton.innerText = 'lets go';
const divForButton = document.querySelector('.button');
divForButton.append(ourButton);

// вешаем слушатель на кнопку

ourButton.addEventListener('click', functionB);




//вспомогательнаят функция callBack
function functionB() {
    console.log('Я функция выполнилась')
}