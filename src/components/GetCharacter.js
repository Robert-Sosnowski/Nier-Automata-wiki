import React, {useEffect, useState} from 'react';

const API = "http://localhost:3001/Characters"
export const GetCharacter = ({id}) => {
    const [character, setCharacter] = useState({
        "id": "",
        "titre": "",
        "fullTitre": "",
        "race": "",
        "occupation": "",
        "sex": "",
        "age": "",
        "weapon": {
            "initial": "",
            "routeC/D": ""
        },
        "born": "",
        "height": "",
        "weight": "",
        "hairColor": "",
        "eyeColor": {
            "passive": "",
            "combatMode": ""
        },
        "family": "",
        "japaneseVoice": "",
        "englishVoice": ""
    },);
    const fetchCharacter = () => {
        fetch(API)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Error");

            })
            .then(data => setCharacter(data))
    }
    const clickButton = (id) => {
        console.log(character)
        const a = character.Characters.filter((item) => {
            return item.id === id
        })
        console.log(a)
    }


    useEffect(fetchCharacter, [])
    return <div>
        <button onClick={() => {

            clickButton(id)
        }}>
            informacje o postaci
        </button>
        <ul>
            {character.list ? character.map(({id,titre,englishVoice})):(
                <li key={id}>
                    {character.titre}-{character.englishVoice}</li>

            )}
                )}
        </ul>
    </div>;

}

