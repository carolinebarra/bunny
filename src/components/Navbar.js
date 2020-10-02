import React, { useContext, useState } from 'react';

import { Link } from 'react-router-dom';
import { ShopContext } from '../context/shopContext';
import logo from '../images/svg logo.svg';
import styled from 'styled-components';
import { ShoppingCart } from '@styled-icons/fa-solid/ShoppingCart';
import Nav from './Menu/Nav';
const Box = styled.div`
	position: absolute;

	width: 100%;
	display: block;
	margin-top: 0px;
	z-index: 10;
	padding: 20px 0;
	min-height: 65px;
	-webkit-transition: all 0.1s;
	-moz-transition: all 0.1s;
	transition: all 0.1s;
	background: #fcd9ca;

	svg {
		width: 40px;
		height: 40px;
		color: #e94f35;
		float: right;
		cursor: pointer;
		margin: 10px;
	}
	img {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		margin: 0;
		font-size: 0;
		width: 253px;
	}
`;

const Navbar = () => {
	const { openCart } = useContext(ShopContext);
	const [navbarOpen, setnavbarOpen] = useState(false);

	const handleNavbar = () => setnavbarOpen(!navbarOpen);
	return (
		<Box>
			<Link to="/">
				<img src={logo} bgSize="cover" bgPos="center center" alt="LOGO" />
			</Link>
			<Nav navbarState={navbarOpen} handleNavbar={handleNavbar} />
			<div onClick={() => openCart()}>
				<ShoppingCart />
			</div>
		</Box>
	);
};

export default Navbar;
