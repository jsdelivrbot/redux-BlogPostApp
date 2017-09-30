

import _ from 'lodash';


// import action type variable 
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';


// default state is object - 
// as our objective is to convert the request arr[ {object}, {} ] to { {}, {} } 
export default function( state = {}, action ) {
    switch(action.type){
        case DELETE_POST:
            // look at state object, if state object has key of action.payload(post id)
            // drop that piece of the state from object.
            return _.omit(state, action.payload)

        case FETCH_POST:
        // remember this tutorial took the approach of keeping state in object

        // - ES5 CODE
        // // This approach is confusing as it seems very redundant
        // // We are finding the post within the existing state & then saving over 
        // // it with the action.payload.data which contains the individual state
        // // the main reason for this is to ensure the post we want is updated.

        // // save payload to post
        // const post = action.payload.data;
        // // save state to newState
        // const newState = { ...state };
        // // find the matching post in the state & override it with the payload post
        // newState[post.id] = post;
        // // return this updated state as a new state
        // return newState;

        // - ES6 CODE
        // [ this is not an array...] 
        // this is key interprelation - make a new key on this object, using this value
        // assign : value to action.payload.data
        return { ...state, [action.payload.data.id]: action.payload.data};

        break;
        case FETCH_POSTS:
        console.log(action.payload.data); //output  [post1, post2]
        // Goal  { 4: { id: 4 } }
        // { 4: { id: 4 } }  // lodash will do that for us

        // map payload.data & then pull off the 'id' of every post
        return _.mapKeys(action.payload.data, 'id');
        break;
        default: 
            return state;
    }
}