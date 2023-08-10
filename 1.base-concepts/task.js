"use strict";

function solveEquation(a, b, c) {
	let arr = [];
	let discriminant = b ** 2 - 4 * a * c;

	if (discriminant < 0) {} else if (discriminant === 0) {
		arr.push(-b / (2 * a));
	} else if (discriminant > 0) {
		arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
		arr.push((-b - Math.sqrt(discriminant)) / (2 * a));
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {



	let percentMonth = percent / 100 / 12;
	let loanBody = amount - contribution;
	let monthlyFee = loanBody * (percentMonth + (percentMonth / (Math.pow((1 + percentMonth), countMonths) - 1)));
	let sum = +(monthlyFee * countMonths).toFixed(2);


	return sum;
}
calculateTotalMortgage(10, 0, 50000, 12);

