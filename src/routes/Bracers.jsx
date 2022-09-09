import React from 'react';
import background from "../assets/background_image.jpeg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Angel from "../assets/Angels_Folly-0.png"
import Demon from "../assets/Demons_Cry.png"
import {GetWeapon} from "../components/GetWeapons";

const Bracers = () => {
    return (
        <div style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat', width: "100%",
            height: "100%"
        }}>
            <Container style={{
                background: "#eceade",
                width: "100%",
                height: "100%"
            }}><Row><h2>Bracers</h2>
                <Col>
                    <img src={Angel} alt={''}/><GetWeapon id={33}/>
                    Angels Folly
                </Col>
                <Col>
                    <img src={Demon} alt={''}/><GetWeapon id={34}/>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Bracers;