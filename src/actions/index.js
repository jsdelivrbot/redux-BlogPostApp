
import axios from 'axios';

const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = '?key=james';

// create action type for security & debugging purposes
export const FETCH_POSTS = 'fetch_posts';


export function fetchPosts() {

    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)

    return {
        type: FETCH_POSTS,
        payload: request
    };
}