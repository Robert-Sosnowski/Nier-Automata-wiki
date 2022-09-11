import React, {useEffect, useState,} from 'react';
import {GetEnemiesDetails} from "./GetEnemiesDetails";

export const GetEnemy = (props) => {
    const [enemy, setEnemy] = useState(null);
    useEffect(() => {}, [enemy])
    const fetchEnemy = () => {

        fetch("http://localhost:3001/enemies")
            .then((res) => {

                if (res.ok) {
                    return res.json();
                }
                throw new Error("Error")
            })
            .then((data) => {
                console.log(data)
                const char = data.Enemies.find((item) => {
                    return item.id === props.id

                });
                setEnemy(char);
            })
            .catch((err) => console.log(err));
    }


    return (
        <>

            <button onClick={fetchEnemy}> informacje o postaci</button>
            {enemy &&
                <ul>
                    <li>Imię:{enemy.titre} </li>
                    <li>Gatunek:{enemy.kind}</li>
                    <li>Obszar występowania:{enemy.zone}</li>
                    <GetEnemiesDetails/>

                </ul>
            }
        </>)


}