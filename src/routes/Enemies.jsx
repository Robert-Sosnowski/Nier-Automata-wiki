import React from "react"
import background from "../assets/background_image.jpeg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import characterAdam from "../assets/Adam.png"
import characterEve from "../assets/Eve.png"
import characterRedGirl from "../assets/Nier_Automata_Red_Girl.png"
import characterBokuShi from "../assets/Boku-shi-.png"
import characterGoliathFlyer from "../assets/Goliath_Flyer.png"
import characterGrun from "../assets/Grun.png"
import characterRoShi from "../assets/Ro-Shi.png"
import characterSoShi from "../assets/So-.png"


const Enemies = () => {
    return (
        <div style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat', width: "100%",
            height: "100vh"
        }}>
            <Container style={{
                background: "#eceade",
                width: "100%",
                height: "100vh"
            }}><Row><h2>Główni przeciwnicy</h2>
                <Col>
                    <div style={{border: "5px", borderColor: "black"}}>
                        <img src={characterAdam} alt='' style={{width: "50%", height: "50%"}}/>Adam</div>

                </Col>
                <Col><div style={{border: "5px", borderColor: "black"}}>
                    <img src={characterEve} alt='' style={{width: "50%", height: "50%"}}/>Eve</div></Col>
                <Col><div style={{border: "5px", borderColor: "black"}}>
                    <img src={characterRedGirl} alt='' style={{width: "50%", height: "50%"}}/>Red Girl</div></Col>
            </Row> <Row><h2>Specjalni przeciwnicy</h2>
                <Col>
                    <div style={{border: "5px", borderColor: "black"}}>
                        <img src={characterRoShi} alt='' style={{width: "50%", height: "50%"}}/>Ro-Shi</div>

                </Col>
                <Col>
                    <div style={{border: "5px", borderColor: "black"}}>
                        <img src={characterBokuShi} alt='' style={{width: "50%", height: "50%"}}/>Boku-Shi</div>

                </Col>
                <Col>
                    <div style={{border: "5px", borderColor: "black"}}>
                        <img src={characterRoShi} alt='' style={{width: "50%", height: "50%"}}/>Ro-Shi</div>

                </Col>
                <Col>
                    <div style={{border: "5px", borderColor: "black"}}>
                        <img src={characterGoliathFlyer} alt='' style={{width: "50%", height: "50%"}}/>Goliath Flyer</div>

                </Col>
                <Col>
                    <div style={{border: "5px", borderColor: "black"}}>
                        <img src={characterGrun} alt='' style={{width: "50%", height: "50%"}}/>Grun</div>

                </Col>
                <Col>
                    <div style={{border: "5px", borderColor: "black"}}>
                        <img src={characterSoShi} alt='' style={{width: "50%", height: "50%"}}/>So-Shi</div>

                </Col>

            </Row>
            </Container>
        </div>
    )
}
export default Enemies