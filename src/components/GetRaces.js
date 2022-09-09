import React, {useEffect, useState} from 'react';

const API = "http://localhost:3001/races"
export const GetRace =  () => {
    const [race, setRace] = useState([]);
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
                    setRace({data})
                })
        }
        const clickButton=()=>{
            return <ul>
                {race.map((id)=><li key={id}>{race.id}-{race.length} {race.length} </li>)}
            </ul>
        }

        return <div>
            <button onClick={clickButton}>informacje
            </button>
        </div>;
    }

}
