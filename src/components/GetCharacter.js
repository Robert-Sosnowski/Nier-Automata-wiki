import React, {useEffect,} from 'react';

export const GetCharacter = (props) => {
    let characters = [];
    let character;

    useEffect(() => {
        fetch("http://localhost:3001/Characters")
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Error");
            })
            .then((data) => {
                console.log(data)
                characters = data.Characters;
                character = data.Characters.find((c) => {
                    return c.id === props.id;
                });
                console.log(`ID: ${character.id} Name: ${character.titre}`);
            }).catch((e) => {
            throw(e);
        });

    })


    const clickButton = () => {
        console.log("Kliknięto mnie")
        return (<>
                <ul>
                    {characters.map((id) => (
                        <li key={id}>{character.id}-{character.englishVoice}</li>))}
                </ul></>

        );
    };
    return (
        <div>
            <button onClick={clickButton}>informacje o postaci</button>
        </div>
    );
};
