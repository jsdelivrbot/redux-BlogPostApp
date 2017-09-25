

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPost } from './../actions'; 


class PostsShow extends Component{
    componentDidMount(){
        //function will run once component has been mounted to dom
        //remember willMount is for pre dom mounting

        //this is a prop from react router that allows us access to the params.id variable
        //the params will give access to any wild card property within the url
        //const id = this.props.match.params.id;
        const { id } = this.props.match.params
        this.props.fetchPost(id);
    }

    render(){
        return(
            
            <div>
            PostsShow
            </div>
        )
    }
}

// function mapStateToProps(state){
//     return({
//         posts: state.posts
//     })
// }


// destructuring
// function mapStateToProps({posts}){
//     return({ posts })  
//     // posts[this.props.match.params.id] // result will be the post we want  

// }

// method within mapStateToProps to find single post
// reason for this method is to show you can put logic into mapStateToProps & in turn make a new file
function mapStateToProps({posts}, ownProps) {
    // ownProps is the same as saying this.props
    return { post: posts[ownProps.match.params.id] }
}


// second argument is mapDispatchToProps
export default connect(mapStateToProps, { fetchPost: fetchPost })(PostsShow);