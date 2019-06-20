module.exports = (req,res,next) => {
	let html = `<!DOCTYPE html>
	<html>
        <head>
            <title>CTA Tracker</title>
		</head>
		<body>
			<div id="ctaDisplay"></div>
			<script src="js/bundle.js"></script>
		</body>
	</html>`;
	res.send(html.replace(/\s{2,}/g, ''));
}