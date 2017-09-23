import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';


//ACTIONS
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

    renderPosts(){
        //Note we are now looking at an object that contains a list of posts not an ARRAY
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}>
                    {post.title}
                </li>
            )
        })  // this will return an array
    }

    render(){
        //console.log(`STATE POSTS: `, this.props.posts);


        return(
            <div>
                <div className="text-xs-right">
                    {/*className will pull the div to the right of the screen */}
                    <Link className="btn btn-primary" to="/posts/new">
                        Add a Post
                    </Link>

                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>       
        )

    }
}

function mapStateToProps(state){
    return {
        posts: state.posts
    }
}


//Passing action through Arguments
export default connect(mapStateToProps, {fetchPosts : fetchPosts})(PostIndex);