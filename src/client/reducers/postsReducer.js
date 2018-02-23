import { GET_JOKE } from '../actions';

export default (state = '', action) => {
    switch (action.type) {
        case GET_JOKE:
            return action.payload.data.value;
        default:
            return state;
    }
};
