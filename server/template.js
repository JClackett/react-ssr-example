function template(title, html = "", styleTags) {
	const page = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>${title}</title>
    ${styleTags}
  </head>
  <body>
    <div id="root">${html}</div>
    <script src="./app.bundle.js"></script>
  </body>
</html>`;

	return page;
}

module.exports = template;
