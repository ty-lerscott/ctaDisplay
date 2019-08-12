import {PhotoConstants as PC} from 'constants/index';

export const getRandomPhoto = () => (dispatch, getState, api) => {
	dispatch({
		type: PC.PHOTO_PENDING,
		payload: {}
	});

	return Promise.resolve(
		api({
			query: `
				query RandomPhoto {
					randomPhoto{
						url
					}
				}
			`
		})
	).then(({data: {data: {randomPhoto}}}) => {
		dispatch({
			type: PC.PHOTO_FETCHED,
			payload: randomPhoto
		});
		return randomPhoto;
	});
}
