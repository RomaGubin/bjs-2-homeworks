function getArrayParams(...arr) {
  
  let min = arr[0];
	let max = arr[0];
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		} else if (arr[i] < min) {
			min = arr[i];
		}
    sum = sum + arr[i];
	}
	avg = +(sum / arr.length).toFixed(2);
	return {
		min: min,
		max: max,
		avg: avg,
	};
}

function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = arr[i] + sum;
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
    return 0;
  }

  let min = arr[0];
	let max = arr[0];

	for (let i = 1; i < arr.length; i++) {
		if (arr.length === 0) {
      return {
        diff: 0,
      };
    } else if (arr[i] > max) {
			max = arr[i];
		} else if (arr[i] < min) {
			min = arr[i];
		} 
	}
	let diff = max - min;
	return diff;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0; //сум чет
  let sumOddElement = 0; //сум неч

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		} 
	}
  let diff = sumEvenElement - sumOddElement;
	return diff;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0; //сум чет
  let countEvenElementt = 0; //кол-во четн

  if (arr.length === 0) {
    return 0;
  }

	for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i];
			countEvenElementt += 1;
		} 
	}
	let avg = +(sumEvenElement / countEvenElementt);
	return avg;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
		const max = func (...arrOfArr[i]);

    if (max > maxWorkerResult) {
      maxWorkerResult = max;
    }
	}

  return maxWorkerResult;
}
