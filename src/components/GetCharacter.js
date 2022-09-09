import React, {useEffect, useState} from 'react';

// const API = "http://localhost:3001/Characters"
export const GetCharacter = () => {
    const [character, setCharacter] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/Characters")
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Error");
            })
            .then((data) => {
            console.log(data);
            setCharacter(data);
            });
    }, []);
    const clickButton = () => {
        return (
            <ul>
                {character.map((id) => (
                    <li key={id}>
                        {character.id}-{character.length} {character.length}{" "}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div>
            <button onClick={clickButton}>informacje o postaci</button>
        </div>
    );
};