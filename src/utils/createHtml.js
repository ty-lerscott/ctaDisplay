module.exports = (req,res,next) => {
	let html = `<!DOCTYPE html>
	<html>
        <head>
			<title>CTA Tracker</title>
			<link rel="shortcut icon" href="/assets/favicon.png" />
		</head>
		<body>
			<div id="ctaDisplay"></div>
			<script src="js/bundle.js"></script>
		</body>
	</html>`;
	res.send(html.replace(/\s{2,}/g, ''));
}