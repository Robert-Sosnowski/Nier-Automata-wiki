import React, {useEffect, useState,} from 'react';

export const GetCharactersDetails = (props) => {
    const [characterDetails, setCharacterDetails] = useState(null);
    useEffect(() => {}, [characterDetails])
    const fetchCharacterDetail = () => {

        fetch("http://localhost:3001/charactersDetails")
            .then((res) => {

                if (res.ok) {
                    return res.json();
                }
                throw new Error("Error")
            })
            .then((data) => {

                const char = data.charactersDetails.find((item) => {
                    return item.id === props.id

                });
                setCharacterDetails(char);
            })
            .catch((err) => console.log(err));
    }


    return (
        <>

            <button onClick={fetchCharacterDetail}> Więcej informacji</button>
            {characterDetails &&
                <ul style={{
                    backgroundColor:"black",
                    color:"white"
                }}>
                    <li>id{characterDetails.id}</li>
                    <li>Imię:{characterDetails.titre} </li>
                    <li>Historia:{characterDetails.history} </li>

                </ul>
            }
        </>)


}