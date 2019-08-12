export default function getStateInfo(state1, state2) {
	state1 = state1 && JSON.stringify(state1);
	state2 = state2 && JSON.stringify(state2);

	return {
		defined: !!state1 && !!state2,
		changed: state1 !== state2
	}
};