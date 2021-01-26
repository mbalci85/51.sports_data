// We want to create and extract information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. It’s your job to create data using the JavaScript data structures at your disposal: arrays, objects, etc.

// Once created, you can manipulate these data structures as well as gain insights from them. For example, you might want to get the total number of games your team has played, or the average score of all of their games.

const team = {
	_players: [
		{
			firstName: 'Hakan',
			lastName: 'Sukur',
			age: 27,
		},
		{
			firstName: 'Claduio',
			lastName: 'Taffarel',
			age: 33,
		},
		{
			firstName: 'Georghie',
			lastName: 'Hagi',
			age: 32,
		},
	],
	_games: [
		{
			opponent: 'Fenerbahce',
			teamPoints: 3,
			opponentPoints: 2,
		},
		{
			opponent: 'Besiktas',
			teamPoints: 1,
			opponentPoints: 2,
		},
		{
			opponent: 'Trabzonspor',
			teamPoints: 2,
			opponentPoints: 1,
		},
	],

	get players() {
		return this._players;
	},

	get games() {
		return this._games;
	},

	addPlayer(firstName, lastName, age) {
		let player = { firstName: firstName, lastName: lastName, age: age };
		this._players.push(player);
	},
	addGame(opponentName, teamPoint, opponentPoint) {
		let game = {
			opponent: opponentName,
			teamPoints: teamPoint,
			opponentPoints: opponentPoint,
		};
		this._games.push(game);
	},
};

team.addPlayer('Hakan', 'Unsal', 30);
team.addPlayer('Hasan', 'Sas', 29);
team.addPlayer('Arif', 'Erdem', 32);

team.addGame('Kayserispor', 3, 1);
team.addGame('Genclerbirligi', 2, 2);
team.addGame('Ankaragucu', 1, 0);

console.log(team.players);
console.log(team.games);
