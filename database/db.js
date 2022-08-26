const characters = require('./characters.json');
const charactersDetails = require('./characters-details.json');
const enemies = require('./enemies.json');
const enemiesDetails = require('./enemies-details.json');
const races = require('./races.json');
const racesDetails = require('./races-details.json');
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