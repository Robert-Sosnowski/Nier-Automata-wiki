import React from 'react';
import background from "../assets/background_image.jpeg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import type40 from"../assets/Type_40_sword.png"
import Virt from"../assets/Virtuous_contract.png"
import {GetWeapons} from "../components/GetWeapons";
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
                    <img src={Virt} alt={''}/>
                    <GetWeapons id={28} />

                </Col>
                <Col>
                    <img src={type40} alt={''}/>
                    <GetWeapons id={27}/>

                </Col>
            </Row>

            </Container>
        </div>
    );
};

export default ShortSwords;