const characters = require('./characters.json');
const charactersDetails = require('./charactersDetails.json');
const enemies = require('./enemies.json');
const enemiesDetails = require('./enemiesDetails.json');
const races = require('./races.json');
const racesDetails = require('./racesDetails.json');
const weapons = require('./weapons.json');


module.exports = function () {
    return {
        characters: characters,
        charactersDetails: charactersDetails,
        enemies: enemies,
        enemiesDetails: enemiesDetails,
        races: races,
        racesDetails: racesDetails,
        weapons: weapons
    }
}