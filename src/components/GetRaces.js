import React, {useEffect, useState,} from 'react';

export const GetRace = (props) => {
    const [races, setRaces] = useState(null);
    useEffect(() => {}, [races])
    const fetchRace = () => {

        fetch("http://localhost:3001/races")
            .then((res) => {

                if (res.ok) {
                    return res.json();
                }
                throw new Error("Error")
            })
            .then((data) => {

                const char = data.Races.find((item) => {
                    return item.id === props.id

                });
                setRaces(char);
            })
            .catch((err) => console.log(err));
    }


    return (
        <>

            <button onClick={fetchRace}> informacje</button>
            {races &&
                <ul style={{
                backgroundColor:"black",
                color:"white",
                    textDecoration:"none"
            }}>

                    <li >Nazwa:{races.kind} </li>
                    <li >Opis:{races.description}</li>

                </ul>
            }
        </>)


}