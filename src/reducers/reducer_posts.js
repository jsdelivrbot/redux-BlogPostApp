

import _ from 'lodash';


// import action type variable 
import { FETCH_POSTS } from '../actions';


// default state is object - 
// as our objective is to convert the request arr[ {object}, {} ] to { {}, {} } 
export default function( state = {}, action ) {
    switch(action.type){
        case FETCH_POSTS:
        console.log(action.payload.data); //output  [post1, post2]
        // Goal  { 4: { id: 4 } }
        // { 4: { id: 4 } }  // lodash will do that for us

        // map payload.data & then pull off the 'id' of every post
        return _.mapKeys(action.payload.data, 'id');

        default: 
            return state;
    }
}