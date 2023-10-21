function convertMarlaToSqFeet() {
    const input = parseFloat(document.getElementById('input').value);
    const resultElement = document.getElementById('result');

    if (!isNaN(input)) {
      // 1 Marla is equivalent to 225 square feet
      const result = input * 225;
      resultElement.textContent = `${input} Marlas is ${result} square feet`;
    } else {
      resultElement.textContent = 'Please enter a valid number of Marlas.';
    }
  }