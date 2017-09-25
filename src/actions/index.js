
import axios from 'axios';

const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = '?key=james';

// create action type for security & debugging purposes
export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const CREATE_POST = 'create_post';


export function fetchPosts() {

    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)

    return {
        type: FETCH_POSTS,
        payload: request
    };
}


// receives the values object { title, categories, content} 
export function createPost(values, callback) {

    // deliver object with second argument - api will unpack & save to DB
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values).then(() => {
        //we are using a promise & on a success case of .post, this promise will run the callback
        //the callback contains .history.push('/') & this will push the user to the posts page on success

        callback()
    });

    
    return {
        type: CREATE_POST,
        payload: request
    };
}

// get post based of id
export function fetchPost(id){

        const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)

    return {
        type: FETCH_POST,
        payload: request
    };
}