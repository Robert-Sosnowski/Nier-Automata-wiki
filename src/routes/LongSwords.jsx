import React from "react"
import background from "../assets/background_image.jpeg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Virtuos from'../assets/Virtuous_Treaty.png'
import Beastlord from '../assets/Beastlord.png'
import {GetWeapon} from "../components/GetWeapons";
 const LongSwords=()=>{
    return(
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
                <h2> Long Sword</h2>
                <Col>
                    <img src={Virtuos} alt={''}/><GetWeapon id={4}/>
                    Virtuos Treaty
                </Col>
                <Col>
                    <img src={Beastlord} alt={''}/><GetWeapon id={3}/>
                    Beastlord
                </Col>
            </Row>
            </Container>
        </div>
    )}
    export default LongSwords