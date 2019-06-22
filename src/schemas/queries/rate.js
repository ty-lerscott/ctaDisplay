const fs = require('fs');
const path = require('path');

const updateRateLimit = async args => {
	try {
		const ratePath = path.resolve(__dirname, `../../../../rateLimit.json`);

		let rateLimit = await fs.readFileSync(ratePath, 'utf8');
		let {timestamp, rate} = JSON.parse(rateLimit);
		const today = new Date();

		const newRate = {
			timestamp: today.toISOString(),
			rate: new Date(timestamp).getDate() !== today.getDate() ? 0 : rate+2
		}

		await fs.writeFileSync(ratePath, JSON.stringify(newRate), 'utf8');

		return newRate;
	} catch (err) {
		// console.warn(err);
		return {
			error: JSON.stringify(err)
		}
	}
};

module.exports = {
    updateRateLimit
};