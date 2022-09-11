import React, {useEffect, useState,} from 'react';
import {GetCharactersDetails} from "./GetCharactersDetails";

export const GetCharacter = (props) => {
    const [character, setCharacter] = useState(null);
    useEffect(() => {
    }, [character])
    const fetchCharacter = () => {

        fetch("http://localhost:3001/characters")
            .then((res) => {

                if (res.ok) {
                    return res.json();
                }
                throw new Error("Error")
            })
            .then((data) => {

                const char = data.Characters.find((item) => {
                    return item.id === props.id

                });
                setCharacter(char);
            })
            .catch((err) => console.log(err));
    }


    return (
        <>

            <button onClick={fetchCharacter}> informacje o postaci</button>
            {character &&
                <ul>

                    <li>Imię:{character.titre} </li>
                    <li>Pełna nazwa:{character.fullTitre}</li>
                    <li>Gatunek: {character.kind}</li>
                    <li>Wiek: {character.age}</li>
                    <li>Zajęcie: {character.occupation}</li>
                    <li>Płeć: {character.sex}</li>
                    <li>Broń: <span> {character.weapon?.initial}</span>{" "}<span> {character.weapon?.routeCD}</span></li>
                    <li>Stworzony: {character.born}</li>
                    <li>Wzrost: {character.height}</li>
                    <li>Waga: {character.weight}</li>
                    <li>Kolor włosów: {character.hairColor}</li>
                    <li>Oczy:<span>
                        {character.eyeColor?.passive}

                    </span> {" "}
                        <span>
                            {character.eyeColor?.combatMode}
                        </span>
                        <li>Rodzina: {character.family}</li>
                        <li>Japoński dubbing: {character.japaneseVoice}</li>
                        <li>Angielski dubbing: {character.englishVoice}</li>


                    </li>

                    <GetCharactersDetails/>
                </ul>
            }
        </>)


}