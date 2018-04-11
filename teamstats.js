let team = {
    _players: [{firstName: 'Tiago', lastName: 'Matos', age: 32},
                {firstName: 'Ricardo', lastName: 'Demaria', age: 33},
                {firstName: 'Caua', lastName: 'Abreu', age: 7}],
    _games: [{opponent: 'Avai', teamPoints: 3, opponentPoints: 1},
            {opponent: 'Flamengo', teamPoints: 1, opponentPoints: 0},
            {opponent: 'Internacional', teamPoints: 2, opponentPoints: 2}],

    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },

    addPlayer(firstNameToAdd, lastNameToAdd, ageToAdd) {
        this._players.push({firstName: firstNameToAdd, lastName: lastNameToAdd, age: ageToAdd});
    },

    addGame(opponentName, teamsPoint, opponentPoints) {
        this._games.push({opponent: opponentName, teamPoints: teamsPoint, opponentPoints: opponentPoints});
    }
}

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

console.log(team.players);
