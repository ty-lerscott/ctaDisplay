import {PhotoConstants as PC} from 'constants/index';

export default (state = '', {type, payload}) => {
    switch (type) {
        case PC.PHOTO_FETCHED:
            return payload
        case PC.PHOTO_ERROR:
            console.warn(payload);
            return payload;
        case PC.PHOTO_PENDING:
        default:
            return state
    }
}