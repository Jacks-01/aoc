/**
 * Day 1:
 */

import { input } from './input.ts';
const testInput = ['1abc2', 'pqr3stu8vwx', 'a1b2c3d4e5f', 'treb7uchet'];
// console.log('this is our input', input);

// Step 1: Find the first integer in the string
//! Can create a function that starts at the beginning and finds the first number
//! cn create another function that reverses the string and finds the last number
//! Add the two numbers and move to the next value

console.time('aoc1');
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
        let combinedValue = firstNumber + lastNumber;
        console.log('what is this?:', combinedValue)

        let sum = parseInt(combinedValue)
        totalSum += sum
        console.log('???', typeof(parseInt(combinedValue)))
	});

	// console.log(totalSum);
	return totalSum;
};

const getFirstNumber = (input: string): string => {
	// console.log('getFirstNumber input:', input);
	let firstNumber: string = '';
	// console.log('getFirstNumber() input:', input)

	for (let i = 0; i < input.length; i++) {
		let element: string = input.charAt(i);
		// console.log('element:', element)

		if (parseInt(element)) {
			firstNumber = element;
			// console.log('number', firstNumber);
			return firstNumber;
		} else {
			// console.log('letter');
			i++;
		}
		i++;
	}

	if (firstNumber.length === 0) {
		console.log('no number in the input!');
		return '';
	}
	return firstNumber;
};

const getLastNumber = (input: string): string => {
	let lastNumber: string = '';
	const reversedInput = reverseString(input);

	for (let i = 0; i < reversedInput.length; i++) {
		const element: string = reversedInput.charAt(i);

		if (parseInt(element)) {
			lastNumber = element;
			return lastNumber;
		} else {
			i++;
		}
		i++;
	}

	if (lastNumber.length === 0) {
		console.log('no number in the input!');
		return '';
	}

	return lastNumber;
};

const reverseString = (input: string): string => {
	let reversedString: string = input.split('').reverse().join('');
	return reversedString;
};

// console.log('t1', getFirstNumber(testInput[0]));
// console.log('t1', getLastNumber(testInput[0]));
// console.log('t2', getFirstNumber(testInput[1]));
// console.log('t2', getLastNumber(testInput[1]));
// console.log('t3', getFirstNumber(testInput[2]));
// console.log('t3', getLastNumber(testInput[2]));
// console.log('t4', getFirstNumber(testInput[3]));
// console.log('t4', getLastNumber(testInput[3]));

console.log(getInputValue(testInput));
console.timeEnd('aoc1');
