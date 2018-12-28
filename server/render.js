import React from "react";
import { renderToString } from "react-dom/server";
import { ServerLocation, isRedirect } from "@reach/router";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import App from "../web/App";

import template from "./template";

const render = req => {
	const sheet = new ServerStyleSheet();
	const html = renderToString(
		<ServerLocation url={req.url}>
			<StyleSheetManager sheet={sheet.instance}>
				<App />
			</StyleSheetManager>
		</ServerLocation>,
	);
	const styleTags = sheet.getStyleTags();

	return template("Server rendered", html, styleTags);
};

export default render;
