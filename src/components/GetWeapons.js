import React, {useEffect, useState,} from 'react';

export const GetWeapons = (props) => {
    const [weapon, setWeapon] = useState(null);
    useEffect(() => {}, [weapon])
    const fetchCharacter = () => {

        fetch("http://localhost:3001/weapons")
            .then((res) => {

                if (res.ok) {
                    return res.json();
                }
                throw new Error("Error")
            })
            .then((data) => {

                const char = data.Weapons.find((item) => {
                    return item.id === props.id

                });
                setWeapon(char);
            })
            .catch((err) => console.log(err));
    }


    return (
        <>

            <button onClick={fetchCharacter}> informacje o broni</button>
            {weapon &&
                <>
                    <div>Nazwa:{weapon.titre} </div>
                    <div>Klasa:{weapon.class}</div>
                    <div>Opis:{weapon.description}</div>
                    <div>Zdolność specjalna:{weapon.ability}</div>

                </>
            }
        </>)


}