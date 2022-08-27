import React from 'react';
import { Nav, NavLink } from 'react-bootstrap';
import DropdownMenu from './dropdown-menu';
import { Link } from "react-router-dom";
import logo from '../../assets/Nier__Automata_Logo.png';

export const Header = () => {
	return (
		<Nav
			style={{
				background: '#917d6b',
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				fontSize: '1.175rem',
			}}
		>
			
			<Link to="/">
				<img src={logo} width='600' height='100' className='d-inline-block align-top' alt='' />
			</Link>
			<DropdownMenu />
		</Nav>
	);
};
