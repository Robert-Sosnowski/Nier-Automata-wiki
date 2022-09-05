import React, {useEffect, useState} from 'react';


const API = "http://localhost:3001/Enemies"
export const GetEnemy = ({id}) => {
    const [enemy, setEnemy] = useState({
        "id": "",
        "Name": "",
        "Race":"",
        "Zone":""
    },);
    const fetchEnemy = () => {
        fetch(API)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Error");

            })
            .then(data => setEnemy(data))
    }
    const clickEnemy = (id) => {
        console.log(enemy)
        const b = enemy.Enemies.filter((item) => {
            return item.id === id
        })
        console.log(b)
    }


    useEffect(fetchEnemy, [])
    return (
        <div>
            <button onClick={() => {
                clickEnemy(id)
            }}>
                informacje o postaci
            </button>
        </div>
    );

}
