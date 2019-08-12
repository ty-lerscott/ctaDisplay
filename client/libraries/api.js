import axios from 'axios';

export const api = (dispatch) => ({query, mutationName, variables}) => {
    return axios('/graphql', {
        method: 'post',
        data: {
            query,
            variables
        },
        withCredentials: true
    });
}