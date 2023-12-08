const testInput: string[] = [
	'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green',
	'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue',
	'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red',
	'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red',
	'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green'
];
import fs from 'fs';

const redTotal: number = 12;
const greenTotal: number = 13;
const blueTotal: number = 14;

const checkGames = (input): any => {
	// let impossibleValue: number = 0;
    // return impossibleValue;
    
    // const lines = fs.readFileSync(file, 'utf-8').trim().split('\n'); // read the file
	//* First, lets split the games into their rounds.
	let round1 = input[1].split(': ')[1]; // grab everything after the colon so we can work with the rounds

	console.log(round1);
};

console.log(checkGames(testInput));
