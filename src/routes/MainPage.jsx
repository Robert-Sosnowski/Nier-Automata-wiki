import React from "react"
import Welcome from "../components/Main page/Welcome";

import background from "../assets/background_image.jpeg";

const MainPage = () => {
    return (
        <div style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundRepeat:'no-repeat',
            // background:"#eceade",
            width:"100%",
            height:"100vh"
        }}>
            {/*<img src={background} alt=''/>*/}
            <Welcome/>
        </div>
    )
}
export default MainPage