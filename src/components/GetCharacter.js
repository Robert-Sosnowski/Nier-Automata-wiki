import React, {useEffect, useState} from 'react';

const API = "http://localhost:3001/characters"
export const GetCharacter = ({id}) => {
    const [character, setCharacter] = useState({
        "id": "",
        "Name": "",
        "Full-name": "",
        "Race": "",
        "Occupation": "",
        "Sex": "",
        "Age": "",
        "Weapon": {
            "Initial": "",
            "Route C/D": ""
        },
        "Born": "",
        "Height": "",
        "Weight": "",
        "Hair-color": "",
        "Eye-color": {
            "Passive": "",
            "Combat Mode": ""
        },
        "Family": "",
        "Japanese-voice": "",
        "English-voice": ""
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
    return (
        <div>
            <button onClick={()=>{
             clickButton(id)
            }}>
                informacje o postaci
            </button>
        </div>
    );

}

