import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const CollapseWrapper = styled(animated.div)`
	background: #fcd9ca;
	top: 0;
	left: 4.5rem;
	right: 0;
`;

const NavLinks = styled.ul`
	list-style-type: none;
	text-align: center;

	padding: 5rem 1rem 2rem 2rem;
	& li {
		transition: all 300ms linear 0s;
	}
	& span {
		font-size: 1.4rem;
		line-height: 2;
		color: #e94f35;
		text-transform: uppercase;
		text-decoration: none;
		cursor: pointer;
		display: -webkit-inline-box;
		&:hover {
			color: #3d2666;
			border-bottom: 1px solid #3d2666;
		}
	}
`;

const CollapseMenu = (props) => {
	const { open } = useSpring({ open: props.navbarState ? 0 : 1 });
	if (props.navbarState === true) {
		return (
			<CollapseWrapper
				style={{
					transform: open
						.interpolate({ range: [0, 0.2, 0.3, 1], output: [0, -20, 0, -200] })
						.interpolate((openValue) => `translate3d(0,${openValue}px,0)`)
				}}
			>
				<NavLinks>
					<li>
						<Link to="/About">
							<span onClick={props.handleNavbar}> About</span>
						</Link>
					</li>
					<li>
						<Link to="/All">
							<span onClick={props.handleNavbar}> Shop</span>
						</Link>
					</li>
				</NavLinks>
			</CollapseWrapper>
		);
	}
	return null;
};

export default CollapseMenu;
