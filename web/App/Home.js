import React from "react";
import styled from "styled-components";

function Home() {
	return (
		<div>
			<Header>Hello from home</Header>
		</div>
	);
}

export default Home;

const Header = styled.h3`
	color: hotpink;
`;
