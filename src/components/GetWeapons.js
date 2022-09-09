import React, {useEffect, useState} from 'react';

const API = "http://localhost:3001/Weapons"
export const GetWeapons =  () => {
    const [weapon, setWeapon] = useState([]);
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
                    setWeapon({data})
                })
        }
        const clickButton=()=>{
            return <ul>
                {weapon.map((id)=><li key={id}>{weapon.id}-{weapon.length} {weapon.length} </li>)}
            </ul>
        }

        return <div>
            <button onClick={clickButton}>informacje o postaci
            </button>
        </div>;
    }

}