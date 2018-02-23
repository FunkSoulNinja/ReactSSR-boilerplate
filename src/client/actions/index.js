import axios from 'axios';

export const GET_JOKE = 'GET_JOKE';

export const getJoke = () => async dispatch => {
    const res = await axios.get('https://api.chucknorris.io/jokes/random');

    dispatch({
        type: GET_JOKE,
        payload: res
    });
};
