
import axios from 'axios';

const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = '?key=james';

// create action type for security & debugging purposes
export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';


export function fetchPosts() {

    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)

    return {
        type: FETCH_POSTS,
        payload: request
    };
}


// receives the values object { title, categories, content} 
export function createPost(values) {

    // deliver object with second argument - api will unpack & save to DB
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)

    return {
        type: CREATE_POST,
        payload: request
    };
}