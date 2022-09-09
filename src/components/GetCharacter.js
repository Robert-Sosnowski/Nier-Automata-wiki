import React, {useEffect, useState} from 'react';
import {ScrollView,View, Text} from "react-native";
export const GetCharacter = () => {
    const [character, setCharacter] = useState([]);
const Characters=()=>{
    useEffect(() => {
        fetch("http://localhost:3001/Characters")
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Error");
            })
            .then((data) => {
            console.log(data);
            setCharacter(data);
            console.log(setCharacter)
            });
    }, []);}
    const clickButton = () => {

        return (

                <ScrollView>
                    <View>
                        {character.Characters.map((id) => {
                            return (
                                <View>
                                    <Text >{character.titre}</Text>
                                </View>
                            );
                        })}
                    </View>
                </ScrollView>


        );
    };

    return (
        <div>
            <button onClick={clickButton}>informacje o postaci</button>
        </div>
    );
};