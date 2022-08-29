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

                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle id='dropdown-button-dark-example1' variant='secondary'>
                    Postacie
                </Dropdown.Toggle>

                <Dropdown.Menu variant='dark'>
                    <Dropdown.Item  onMouseEnter="active"><Link to='/characters' style={{
                        textDecoration: "none",
                        color: "white"
                    }}> Bohaterowie</Link>
                    </Dropdown.Item>
                    <Dropdown.Item onMouseEnter="active"><Link to='/enemies' style={{
                        textDecoration: "none",
                        color: "white"
                    }}> Wrogowie</Link>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle id='dropdown-button-dark-example1' variant='secondary'>
                    Bronie
                </Dropdown.Toggle>

                <Dropdown.Menu variant='dark'>
                    <Dropdown.Item onMouseEnter="active"><Link to='/weapons' style={{
                        textDecoration: "none",
                        color: "white"
                    }}>Krótkie miecze</Link>
                    </Dropdown.Item>
                    <Dropdown.Item onMouseEnter="active"><Link to='/world' style={{
                        textDecoration: "none",
                        color: "white"
                    }}>Długie miecze</Link>
                    </Dropdown.Item>
                    <Dropdown.Item  onMouseEnter="active"><Link to='/world' style={{
                        textDecoration: "none",
                        color: "white"
                    }}>Lance</Link>
                    </Dropdown.Item>
                    <Dropdown.Item  onMouseEnter="active"><Link to='/world' style={{
                        textDecoration: "none",
                        color: "white"
                    }}>Karwasze</Link>
                    </Dropdown.Item>

                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle id='dropdown-button-dark-example1' variant='secondary'>
                    Rasy
                </Dropdown.Toggle>

                <Dropdown.Menu variant='dark'>
                    <Dropdown.Item onMouseEnter="active"><Link to='/races' style={{
                        textDecoration: "none",
                        color: "white"
                    }}>Androidy</Link>
                    </Dropdown.Item>
                    <Dropdown.Item onMouseEnter="active"><Link to='/races' style={{
                        textDecoration: "none",
                        color: "white"
                    }}>Maszyny</Link>
                    </Dropdown.Item>
                    <Dropdown.Item onMouseEnter="active"><Link to='/races' style={{
                        textDecoration: "none",
                        color: "white"
                    }}>Obcy</Link>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
}

export default DropdownMenu;
