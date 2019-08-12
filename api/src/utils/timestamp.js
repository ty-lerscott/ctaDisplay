module.exports = (dateString) => {
	const [date, time] = dateString.split(/\s/);

	const year = date.substr(0,4);
	const month= date.substr(4,2);
	const day  = date.substr(date.length - 2, 2);

	return `${year}-${month}-${day} ${time}`;
}