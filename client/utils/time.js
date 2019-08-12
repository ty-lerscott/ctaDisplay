export const getDayOfWeek = day => {
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	return days[day];
}

export const getMonth = month => {
	const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	return months[month];
}

export const _10SecondsEllapsed = thisTime => !!thisTime && Number(thisTime.split(' ')[0].split(':')[2])%10 === 0;

export const _15SecondsEllapsed = thisTime => !!thisTime && Number(thisTime.split(' ')[0].split(':')[2])%15 === 0;

export const _30SecondsEllapsed = thisTime => !!thisTime && Number(thisTime.split(' ')[0].split(':')[2])%30 === 0;

export const _1MinuteEllapsed = (prevTime, thisTime) => prevTime && thisTime && prevTime.split(' ')[0].slice(0, -3) !== thisTime.split(' ')[0].slice(0, -3);

export const _5MinutesEllapsed = (prevTime, thisTime) => {
	if (!thisTime || !prevTime) return false;

	const prevMinute = Number(prevTime.split(':')[1]);
	const thisMinute = Number(thisTime.split(':')[1]);

	return prevMinute !== thisMinute && thisMinute%5 === 0;
};

export const _12HoursEllapsed = (prevTime, thisTime) => {
	if (!thisTime || !prevTime) return false;

	const prevHour = Number(prevTime.split(':')[0]);
	const thisHour = Number(thisTime.split(':')[0]);

	return thisHour%12 === 0 && prevHour !== thisHour;
}

export const isAfterSunset = sunset => new Date(sunset).getTime() <= new Date().getTime()

export const isBeforeSunrise = sunrise => new Date(sunrise).getTime() >= new Date().getTime()

export const isStarting = (buffer, eventTime) => {
	const event = new Date(eventTime).getHours();
	const now = new Date().getHours();

	return event - buffer === now;
}

export const hasStarted = (eventTime) => {
	const event = new Date(eventTime).getHours();
	const now = new Date().getHours();

	return now >= event;
}

export const hasEnded = (buffer, duration, eventTime) => {
	const event = new Date(eventTime).getHours();
	const now = new Date().getHours();

	return now >= event + duration + buffer;
}