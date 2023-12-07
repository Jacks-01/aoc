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
	console.log('Does our input look correct?', input);
	let totalSum: number = 0;
	return totalSum;
};

getInputValue(input);

const getFirstNumber = (input: string): number | undefined => {
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
		return undefined;
	}
};

getFirstNumber('twoknbxlczgd9');
