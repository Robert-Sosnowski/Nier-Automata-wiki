import React from 'react';
import Emoji from "../../assets/2b emoji.png"
import {Link} from "react-router-dom";

const Welcome = () => {
    return (
        <div style={{
            position: "absolute",

        }}><Link to="/game">
            <img src={Emoji} width="500" height="460" alt=""/>
        </Link>
        </div>
    );
};

export default Welcome;