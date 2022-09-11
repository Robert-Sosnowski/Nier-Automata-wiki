import React, {useEffect, useState,} from 'react';

export const GetRacesDetails = (props) => {
    const [raceDetails, setRaceDetails] = useState(null);
    useEffect(() => {}, [raceDetails])
    const fetchRaceDetail = () => {

        fetch("http://localhost:3001/racesDetails")
            .then((res) => {

                if (res.ok) {
                    return res.json();
                }
                throw new Error("Error")
            })
            .then((data) => {

                const char = data.RacesDetails.find((item) => {
                    return item.id === props.id

                });
                setRaceDetails(char);
            })
            .catch((err) => console.log(err));
    }


    return (
        <>

            <button onClick={fetchRaceDetail}> informacje o postaci</button>
            {raceDetails &&
                <ul>

                    <li>Gatunek:{raceDetails.kind} </li>
                    <li>Szczegółowy opis:{raceDetails.details}</li>
                    <li>Historia:{raceDetails.story}</li>

                </ul>
            }
        </>)


}