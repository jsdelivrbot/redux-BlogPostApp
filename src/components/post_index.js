import React from 'react';
import { connect } from 'react-redux';

//Actions
import { fetchPosts } from './../actions'; 



class PostIndex extends React.Component{
    componentDidMount(){
        // this function will run/called when the component is viewable on the DOM
        // perfect place to load data, or initiate a one time loading procedure 

        // we are using this vs componentWillMount() as we would prefer the component to be loaded, 
        // before we make the API request this is due to the fact that API requests 
        // can take a few secs & we do not want the component loading

        this.props.fetchPosts();


    }
    render(){
        return(
            <div>
            Hello World!
            </div>       
        )

    }
}


//Passing action through Arguments
export default connect(null, {fetchPosts : fetchPosts})(PostIndex);