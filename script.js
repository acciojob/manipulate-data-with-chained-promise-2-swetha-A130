function getNumbers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);  // or any array of numbers
    }, 3000);  // 3 seconds
  });
}
getNumbers().then(numbers => {
  return new Promise(resolve => {
    setTimeout(() => {
      const evenNumbers = numbers.filter(number => number % 2 === 0);
      document.getElementById('output').innerText = evenNumbers.toString();
      resolve(evenNumbers);
    }, 1000);
  });
})
.then(evenNumbers => {
  return new Promise(resolve => {
    setTimeout(() => {
      const doubledNumbers = evenNumbers.map(number => number * 2);
      document.getElementById('output').innerText = doubledNumbers.toString();
      resolve(doubledNumbers);
    }, 2000);
  });
});