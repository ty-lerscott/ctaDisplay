import {isStarting, hasStarted, hasEnded} from 'utils/time';

export const currentEvent = (events) => {
	if (!events || events.length === 0) return false;

	const today = new Date().getDate();

	return events.find(event => (new Date(event.time).getDate() === today && ((isStarting(1, event.time) || hasStarted(event.time)) && !hasEnded(1, event.isSport ? 4 : event.isConcert ? 3 : 3, event.time)))) || {};
}