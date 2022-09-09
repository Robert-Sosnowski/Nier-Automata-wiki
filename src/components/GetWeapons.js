import React, {useEffect, useState} from 'react';

const API = "http://localhost:3001/weapons"
export const GetWeapon = ({id}) => {
    const [weapon, setWeapon] = useState({
        "id": "",
        "titre": "",
        "class": "",
        "description": "",
        "ability": ""
    },);
    const fetchWeapon = () => {
        fetch(API)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Error");

            })
            .then(data => setWeapon(data))
    }
    const clickWeapon = (id) => {
        console.log(weapon)
        const a = weapon.Weapons.filter((item) => {
            return item.id === id
        })
        console.log(a)
    }


    useEffect(fetchWeapon, [])
    return (
        <div>
            <button onClick={() => {

                clickWeapon(id)
            }}>
                informacje
            </button>
        </div>
    );

}
