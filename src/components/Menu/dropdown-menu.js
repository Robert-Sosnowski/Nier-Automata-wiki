import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link} from "react-router-dom";


function DropdownMenu() {
    return (
        <>
            <Dropdown>
                <Dropdown.Toggle id='dropdown-button-dark-example1' variant='secondary'>
                    O Grze
                </Dropdown.Toggle>

                <Dropdown.Menu variant='dark'>
                    <Dropdown.Item onMouseEnter="active"><Link to='/story' style={{
                        textDecoration: "none",
                        color: "white"
                    }}>
                        Historia</Link>
                    </Dropdown.Item>
                    <Dropdown.Item onMouseEnter="active"><Link to='/world' style={{
                        textDecoration: "none",
                        color: "white"
                    }}>
                        Świat</Link>
                    </Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item href='#/more' onMouseEnter="active">
                        Więcej
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle id='dropdown-button-dark-example1' variant='secondary'>
                    Postacie
                </Dropdown.Toggle>

                <Dropdown.Menu variant='dark'>
                    <Dropdown.Item href='#/Story' onMouseEnter="active">
                        Historia
                    </Dropdown.Item>
                    <Dropdown.Item href='#/world' onMouseEnter="active">
                        Świat
                    </Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item href='#/more' onMouseEnter="active">
                        Więcej
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle id='dropdown-button-dark-example1' variant='secondary'>
                    Bronie
                </Dropdown.Toggle>

                <Dropdown.Menu variant='dark'>
                    <Dropdown.Item href='#/Story' onMouseEnter="active">
                        Historia
                    </Dropdown.Item>
                    <Dropdown.Item href='#/world' onMouseEnter="active">
                        Świat
                    </Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item href='#/more' onMouseEnter="active">
                        Więcej
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle id='dropdown-button-dark-example1' variant='secondary'>
                    Rasy
                </Dropdown.Toggle>

                <Dropdown.Menu variant='dark'>
                    <Dropdown.Item href='#/Story' onMouseEnter="active">
                        Historia
                    </Dropdown.Item>
                    <Dropdown.Item href='#/world' onMouseEnter="active">
                        Świat
                    </Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item href='#/more' onMouseEnter="active">
                        Więcej
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
        // <DropdownButton id='dropdown-button-dark-example2' variant='secondary' menuVariant='dark' title='O Grze' className='mt-2'>
        // 	strzałka w dół
        // </DropdownButton>
    );
}

export default DropdownMenu;
