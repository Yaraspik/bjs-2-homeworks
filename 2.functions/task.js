//task1
function getArrayParams(...numbers) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg = 0;

  for (let i = 0; i < numbers.length; i++) {

      if(numbers[i] > max) {
          max = numbers[i];
      }

      if(numbers[i] < min) {
          min = numbers[i];
      }

      sum += numbers[i];
  }

  avg = Number((sum / numbers.length).toFixed(2));

  return {
      max,
      min,
      avg
  };
}

//task2
function summElementsWorker(...elements) {
  if(elements.length == 0) {
      return 0;
  }

  return elements.reduce((accumulator, item)=> accumulator + item, 0);
}

function differenceMaxMinWorker(...elements) {
  if(elements.length == 0) {
      return 0;
  }

  return Math.max(...elements) - Math.min(...elements);
}

function differenceEvenOddWorker(...elements) {
  if(elements.length == 0) {
      return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i of elements) {
      if(i % 2 === 0) {
          sumEvenElement += i;
      } else {
          sumOddElement += i;
      }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...elements) {
  if(elements.length == 0) {
      return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i of elements) {
      if(i % 2 === 0) {
          sumEvenElement += i;
          countEvenElement++;
      }
  }

  return sumEvenElement / countEvenElement;
}

//task3
function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i of arrOfArr) {
      const result = func(...i);
      if(result > maxWorkerResult) {
          maxWorkerResult = result;
      }
  }

  return maxWorkerResult;
}