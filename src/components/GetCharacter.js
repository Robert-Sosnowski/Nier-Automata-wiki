import React, {useEffect, useState,} from 'react';

export const GetCharacter = () => {
    const [character, setCharacter] = useState(null);
    const fetchCharacter = () => {
        fetch("http://localhost:3001/characters")
            .then((res) => {
                console.log(res)
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Error")
            })
            .then((data) => {
                console.log(data);
                setCharacter(data.Characters.find((item) => {
                    return item.id === fetchCharacter.id

                }))

            })
            .catch((err) => console.log(err));
    }


    return (
        <>
            <button onClick={fetchCharacter}> informacje o postaci</button>
        </>)


}