// const form = document.getElementById('bmiForm');
// const heightInput = document.getElementById('height');
// const weightInput = document.getElementById('weight');
// const bmiResult = document.getElementById('bmiResult');
// const bmiStatus = document.getElementById('bmiStatus');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const height = heightInput.value / 100; // convert cm to m
//   const weight = weightInput.value;
//   const bmi = weight / (height * height);
//   bmiResult.textContent = `Индекс массы тела (BMI): ${bmi.toFixed(1)}`;
//   if (bmi < 18.5) {
//     bmiStatus.textContent = 'Недостаточная масса тела';
//   } else if (bmi >= 18.5 && bmi < 24.9) {
//     bmiStatus.textContent = 'Норма';
//   } else if (bmi >= 25 && bmi < 29.9) {
//     bmiStatus.textContent = 'Избыточная масса тела';
//   } else {
//     bmiStatus.textContent = 'Ожирение';
//   }
// });

const form = document.getElementById('bmi-form');
const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const resultDiv = document.getElementById('bmi-result');
const statusDiv = document.getElementById('bmi-status');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseFloat(heightInput.value) / 100;
  const weight = parseFloat(weightInput.value);
  const bmi = weight / (height * height);
  const status = bmi >= 18.5 && bmi < 25 ? 'Норма' : 'Не в норме';
  resultDiv.textContent = `Индекс массы тела (BMI): ${bmi.toFixed(1)}`;
  statusDiv.textContent = `Результат: ${status}`;
});