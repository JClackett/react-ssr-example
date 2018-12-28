import React from "react";
import { Router, Link } from "@reach/router";
import styled, { createGlobalStyle } from "styled-components";

import Home from "./Home";
import About from "./About";

function App() {
	return (
		<Wrapper>
			<GlobalStyle />
			<Nav>
				<h2>Hey there SSR</h2>
				<NavLinks>
					<Link to="/">
						<NavLink>Home</NavLink>
					</Link>
					<Link to="/about">
						<NavLink>About</NavLink>
					</Link>
				</NavLinks>
			</Nav>
			<Page>
				<Router>
					<Home path="/" />
					<About path="/about" />
				</Router>
			</Page>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	height: 100vh;
	width: 100vw;
`;

const Nav = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 50px;
`;

const NavLinks = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

const NavLink = styled.div`
	padding: 10px;
	color: slateblue;
`;

const Page = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
	}

	html {
		font-family: "Avenir", sans-serif;
	}

	body {
		margin: 0;
		padding: 0;
	}
`;

export default App;
