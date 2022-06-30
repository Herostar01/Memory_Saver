import * as api from '../api';

//Create Actions
//fucntions that return actions

const getPosts = () => async (dispatch) => {
    try {
        const {data} = await api.fetchPosts()
    }
    catch (error) {

    }


    const action = { type: 'FETCH_ALL', payload: [] }

    dispatch action;
}

