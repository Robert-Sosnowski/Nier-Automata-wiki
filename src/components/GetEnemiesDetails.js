import React, {useEffect, useState,} from 'react';

export const GetEnemiesDetails = (props) => {
    const [enemiesDetails, setEnemiesDetails] = useState(null);
    useEffect(() => {}, [enemiesDetails])
    const fetchEnemyDetail = () => {

        fetch("http://localhost:3001/enemiesDetails")
            .then((res) => {

                if (res.ok) {
                    return res.json();
                }
                throw new Error("Error")
            })
            .then((data) => {

                const char = data.EnemiesDetails.find((item) => {
                    return item.id === props.id

                });
                setEnemiesDetails(char);
            })
            .catch((err) => console.log(err));
    }


    return (
        <>

            <button onClick={fetchEnemyDetail}> Więcej informacji</button>
            {enemiesDetails &&
                <>

                    <div>Imię:{enemiesDetails.titre} </div>
                    <div>Opis:{enemiesDetails.description}</div>

                </>
            }
        </>)


}