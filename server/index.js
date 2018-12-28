import express from "express";
import path from "path";
import morgan from "morgan";
import renderApp from "./render";

const app = express();
const logger = morgan("dev");
app
	.use(logger)
	.use(express.static(path.resolve(__dirname, "../dist")))
	.get("*", (req, res) => {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.end(renderApp(req));
	});

app.listen(5000, () => console.log(`Server started at http://localhost:5000`));
