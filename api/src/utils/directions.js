const isSouthBound = ({mode, route, direction}) => {
    switch(mode) {
        case 'bus':
            //TODO: Figure out if the bus is heading in the right direction
            return false;
        case 'train':
        default:
            return Number(direction) === 5;
    }
}

module.exports = {
    isSouthBound
}