function calculate() {
  // Отримання значень меж зміни значень аргументу x та кроку зміни значень аргументу
  var start_x = parseFloat(document.getElementById("start_x").value);
  var end_x = parseFloat(document.getElementById("end_x").value);
  var step = parseFloat(document.getElementById("step").value);

  var resultContainer = document.getElementById("result");

  // Очищення контейнера результату
  resultContainer.innerHTML = "";

  // Обчислення та виведення результатів для кожного значення x
  for (var x = start_x; x <= end_x; x += step) {
    var result = 0;

    // Виконання розгалуженого обчислювального процесу згідно з наведеними формулами
    if (x < 4) {
      result = Math.abs(x) + Math.exp(x);
    } else if (x === 4) {
      result = Math.PI;
    } else {
      result = 1 / Math.tan(x) + Math.log(x);
    }

    // Додавання результату до контейнера
    var resultElement = document.createElement("p");
    resultElement.textContent = "f(" + x + ") = " + result.toFixed(2);
    resultContainer.appendChild(resultElement);
  }
}
