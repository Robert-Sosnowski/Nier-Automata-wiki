import React, {useEffect, useState} from 'react';

const API = "http://localhost:3001/Enemies"
export const GetEnemy =  () => {
    const [enemy, setEnemy] = useState([]);
    {
        useEffect(() => {
            getAPI(API)
        });
        const getAPI = (data) => {
            console.log(data)
            fetch(data)
                .then((res) => {

                    if (res.ok) {
                        return res.json();
                    }
                    throw new Error("Error");
                })
                .then(data => {
                    console.log(data)
                    setEnemy({data})
                })
        }
        const clickButton=()=>{
            return <ul>
                {enemy.map((id)=><li key={id}>{enemy.id}-{enemy.length} {enemy.length} </li>)}
            </ul>
        }

        return <div>
            <button onClick={clickButton}>informacje o postaci
            </button>
        </div>;
    }

}