import React, {useEffect, useState} from 'react';

const API = "http://localhost:3001/races"
export const GetRace = ({id}) => {
    const [race, setRace] = useState({
        "id":"",
        "Race": "",
        "Description": ""
    },);
    const fetchRace = () => {
        fetch(API)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Error");

            })
            .then(data => setRace(data))
    }
    const clickRace = (id) => {
        console.log(race)
        const a = race.Race.filter((item) => {
            return item.id === id
        })
        console.log(a)
    }


    useEffect(fetchRace, [])
    return (
        <div>
            <button onClick={() => {

                clickRace(id)
            }}>
                informacje
            </button>
        </div>
    );

}
