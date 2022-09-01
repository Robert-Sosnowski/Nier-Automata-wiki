import React from "react"

import background from "../assets/background_image.jpeg";


const MainPage = () => {
    return (
        <div style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundRepeat:'no-repeat',
            width:"100%",
            height:"100vh"
        }}>
        </div>
    )
}
export default MainPage