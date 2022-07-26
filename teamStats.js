// Key Concepts: JavaScript Objects
  // Creating Objects in JavaScript
  // Object Properties
  // Working with Arrays
  // Creating and using Getter Methods

// Goal: Create, retrieve, and add information about my favorite sports team
// Based on the Taekwondo Olympics and Paralympics Games

//Populating Data
// Create a data structure to store the information about my favorite sports team: Taekwondo
const team = {
  // Add two properties to the object and initialize them to an empty array
  _players: [ 
    // Populate the array with player objects that have 3 properties 
    player1 = {
      firstName: 'Guillermo',
      lastName: 'Perez Sandoval',
      age: 43,
    },
    player2 = {
      firstName: 'Maria del Rosario' ,
      lastName: 'Espinoza Espinoza',
      age: 34,
    },
    Player3 = {
      firstName: 'Juan Diego' ,
      lastName: 'Garcia Lopez',
      age: 19,
    },
  ],
  _games: [ 
    // Populate the array with game objects that have 3 properties
    MenBeijingOlympics2008 = {
      opponent: 'Gabriel Mercedes', 
      teamPoints: 1,
      opponentPoints: 1,
    },
    WomenBeijingOlympics2008 = {
      opponent: 'Nina Solheim', 
      teamPoints: 3,
      opponentPoints: 1,
    },
    MenSummerParalympics2020 = {
      opponent: 'Mahdi Pourrahnama', 
      teamPoints: 26,
      opponentPoints: 20,
    },
  ],
  // Getting Data
  // Create a getter method called players to retrieve the _players property
  get players(){
    return this._players;
  },
  // Create another getter method called games to retrieve the _games property
  get games(){
    return this._games
  },
  
  // Adding Data
  
  // Add a .addPlayer() method to the team object that takes in three parameters: newFirstName, newLastName, and newAge
  
  addPlayer(newFirstName, newLastName, newAge){
    // Create a player object by setting the three parameters to be the values for the object’s three properties: firstName, lastName, age
    player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    }
    // Add the player object to the team‘s _players array
    return this.players.push(player);
  },
  
  // Create a method for adding game results called addGame that takes three parameters: newOpponent, newTeamPoints, newOpponentPoints
  
  addGame(newOpponent, newTeamPoints, newOpponentPoints){
    // create a game object by setting the three parameters to be the values for the object’s three properties: opponent, teamPoints, opponentPoints
    game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    }
    // Add the game object to the team‘s _games array
    return this.games.push(game)
  },
};

// Adding a new team member
team.addPlayer('Oscar', 'Salazar', 45);
console.log(team.players);
