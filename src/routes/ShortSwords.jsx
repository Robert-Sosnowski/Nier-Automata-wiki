import React from 'react';
import background from "../assets/background_image.jpeg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import type40 from"../assets/Type_40_sword.png"
import Virt from"../assets/Virtuous_contract.png"
import {GetWeapon} from "../components/GetWeapons";
const ShortSwords = () => {
    return (
        <div style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundRepeat:'no-repeat',  width:"100%",
            height:"100%"
        }}>
            <Container style={{
                background:"#eceade",
                width:"100%",
                height:"100%"
            }}><Row>
                <h2> Short Swords</h2>
                <Col>
                    <img src={Virt} alt={''}/><GetWeapon id={2} />
                    Virtuous Contract
                </Col>
                <Col>
                    <img src={type40} alt={''}/><GetWeapon id={1}/>
                    Type-40 sword
                </Col>
            </Row>

            </Container>
        </div>
    );
};

export default ShortSwords;