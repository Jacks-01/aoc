import fs from 'fs';

const colorTotals: Object = {
	red: 12,
	green: 13,
	blue: 14
};

const testInput: string[] = [
	'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green',
	'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue',
	'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red',
	'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red',
	'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green'
];

const checkGames = (input): any => {
	const lines: string[] = fs.readFileSync(input, 'utf-8').trim().split('\r'); // read the file
    // console.log(lines)
	let output: any[] = lines.map((game) => {
		let gamesArray = game.split(': ')[1].split('; '); //* First, lets split the games into their rounds.
		let roundsArray = gamesArray.map((round) => {
			let results: string[] = round.split(', '); //* Now we have each round in a game parsed into an array
			return results.every((result) => {
				const [count, color] = result.split(' '); // split each color and value
				return colorTotals[color] >= count; // compare them to our colorTotals object.
			});
		});

		return roundsArray.every((p) => p);
	});

	console.log('this is our output', output);
	return output.reduce((sum, result, i) => {
		return result ? sum + (i + 1) : sum;
	}, 0);
};

console.log(checkGames('input.ts'));
