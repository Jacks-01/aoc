/**
 * Day 1:
 */

import { input } from './input.ts';
console.log('this is our input', input);

// Step 1: Find the first integer in the string
//! Can create a function that starts at the beginning and finds the first number
//! cn create another function that reverses the string and finds the last number
//! Add the two numbers and move to the next value

/**
 *
 * @param {Array} input an array of strings
 */
const getInputValue = (input: Array<string>): number => {
	// console.log('Does our input look correct?', input);
	let totalSum: number = 0;

	input.forEach((inputString) => {
		let firstNumber = getFirstNumber(inputString);
		let lastNumber = getLastNumber(inputString);

		totalSum += firstNumber + lastNumber;
    });

    console.log(totalSum);
    return totalSum;
    
};

const getFirstNumber = (input: string): number => {
	console.log('getFirstNumber input:', input);
	let firstNumber: number = 0;

	for (let i = 0; i < input.length; i++) {
		const element: string = input.charAt(i);

		if (parseInt(element)) {
			firstNumber += parseInt(element);
			console.log(firstNumber);
			return firstNumber;
		} else {
			i++;
		}
	}

	if (!firstNumber) {
		console.log('no number in the input!');
		return 0;
	}
	return firstNumber;
};

const getLastNumber = (input: string): number => {
	let lastNumber: number = 0;
	const reversedInput = reverseString(input);

	for (let i = 0; i < reversedInput.length; i++) {
		const element: string = reversedInput.charAt(i);

		if (parseInt(element)) {
			lastNumber = parseInt(element);
			return lastNumber;
		} else {
			i++;
		}
	}

	if (!lastNumber) {
		console.log('no number in the input!');
		return 0;
	}

	return lastNumber;
};

const reverseString = (input: string): string => {
	let reversedString: string = input.split('').reverse().join('');
	return reversedString;
};

// getFirstNumber('7twoknbxlczgd9');
// getLastNumber('4jack9');
