// const ourList = document.querySelector('.list');
// const ourInput = document.querySelector('.task-input');
// const ourBtn = document.querySelector('.btn');
// const ourText = document.querySelector('#text');


// const form = document.getElementById('bmi-form');
// const heightInput = document.getElementById('height');
// const weightInput = document.getElementById('weight');
// const resultDiv = document.getElementById('bmi-result');
// const statusDiv = document.getElementById('bmi-status');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const height = parseFloat(heightInput.value) / 100;
//   const weight = parseFloat(weightInput.value);
//   const bmi = weight / (height * height);
//   const status = bmi >= 18.5 && bmi < 25 ? 'Норма' : 'Не в норме';
//   resultDiv.textContent = `Индекс массы тела (BMI): ${bmi.toFixed(1)}`;
//   statusDiv.textContent = `Результат: ${status}`;
// });
function displayText() {
    const inputElement = document.getElementById('input-field');
    const outputElement = document.getElementById('second-item'); // Используем второй элемент списка
    const inputValue = inputElement.value;

    // Создаем новый элемент списка
    const newItem = document.createElement('li');
    newItem.textContent = inputValue;

    // Добавляем новый элемент в список
    outputElement.appendChild(newItem);

    inputElement.value = ''; // Очищаем поле ввода
}