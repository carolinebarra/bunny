import React from 'react';
import styled from 'styled-components';
import BurgerMenu from './BurgerMenu';
import CollapseMenu from './CollapseMenu';
import { useSpring, animated, config } from 'react-spring';
import { Link } from 'react-router-dom';
const NavBar = styled(animated.nav)`
	position: absolute;
	font-family: cooper-black-std;
	left: -7rem;
	z-index: 1;
	font-size: 1.7rem;
`;

const FlexContainer = styled.div`
	display: flex;
	margin: -17px;
	justify-content: flex-start;
	height: 5rem;
	padding-left: 3rem;
	@media (max-width: 414px) {
		padding-left: 0;
	}
`;
const NavLinks = styled(animated.ul)`
	justify-self: start;
	list-style-type: none;
	display: -webkit-inline-box;
	margin: 50px;
	text-decoration: none;
	& a {
		text-decoration: none;
	}
	& span {
		color: #e94f35;
		
		font-weight: 600;
		border-bottom: 1px solid transparent;
		margin: 0 1.5rem;
		transition: all 300ms linear 0s;
		text-decoration: none;
		cursor: pointer;
		&:hover {
			color: #3d2666;
			border-bottom: 1px solid #5b8553;
		}
		@media (max-width: 768px) {
			display: none;
		}
		

	 }
	
	li {
		
		&:hover .menu-sub li {
			display: block;
		}
		&:hover .menu-sub{
			background: white;
		}
	}
	.menu-sub {
		position: absolute;
		
		cursor: pointer;
	  
    width: 59%;
		

		color: #e94f35;
		padding: 1em;
		list-style-type: none;
	li{
		display:none;
		background: white;
	}

		a {
			padding: 0;
			margin-top:0.25em;
			margin-bottom: 0.35em;
				text-decoration: none;
				color: 
			&:hover {
				border-bottom: 1px solid #3d2666;
			
			}
		}
`;
const MobileWrapper = styled.div`
	margin: auto 0;
	@media (min-width: 769px) {
		display: none;
	}
`;

const Nav = (props) => {
	const barAnimation = useSpring({
		from: { transform: 'translate3d(0, -10rem, 0)' },
		transform: 'translate3d(0, 0, 0)'
	});

	const linkAnimation = useSpring({
		from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
		to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
		delay: 800,
		config: config.wobbly
	});

	return (
		<>
			<NavBar style={barAnimation}>
				<FlexContainer>
					<NavLinks style={linkAnimation}>
						<li>
							<Link to="/All">
								<span> Shop</span>
							</Link>
						</li>
						<li>
							<Link to="/About">
								<span> About</span>
							</Link>
						</li>
					</NavLinks>
					<MobileWrapper>
						<BurgerMenu navbarState={props.navbarState} handleNavbar={props.handleNavbar} />
					</MobileWrapper>
				</FlexContainer>
			</NavBar>
			<CollapseMenu navbarState={props.navbarState} handleNavbar={props.handleNavbar} />
		</>
	);
};

export default Nav;
