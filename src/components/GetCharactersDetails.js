import React, {useEffect, useState} from 'react';

const API = "http://localhost:3001/charactersDetails"
export const GetCharacter = ({id}) => {
    const [details, setDetails] = useState({
        "id": 48,
        "titre": "",
        "history":""
    },);
    const fetchDetails = () => {
        fetch(API)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Error");

            })
            .then(data => setDetails(data))
    }
    const clickButton = (id) => {
        console.log(details)
        const a = details.CharactersDetails.filter((item) => {
            return item.id === id
        })
        console.log(a)
    }


    useEffect(fetchDetails, [])
    return <div>
        <button onClick={() => {

            clickButton(id)
        }}>
            Więcej informacji
        </button>
        {/*<ul>*/}
        {/*    {character.list ? character.map(({id,Name,EnglishVoice})):(*/}
        {/*        <li key={id}>*/}
        {/*    {character.Name}-{character.EnglishVoice}</li>*/}
        {/*        */}
        {/*        )}*/}
        {/*</ul>*/}
    </div>;

}
