

import React, { Component } from 'react';

// reduxForm uses the same logic as connect from - react-redux
// Field - this is the component we need to make for each piece of state 
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';



class PostsNew extends Component {

     renderField(field){
        //argument being called must be field
        //field argument has event handlers
        //that allow us to render through field

        // destructuring can pull nested values
        // const { meta:  { touched, error } } = field;
        const { meta } = field;
        

        // ternary logic to implement className based of touched user input & error 
        // #has-danger will make border red
        const className = `form-group ${meta.touched && meta.error ? 'has-danger' : ''}`
        return(
            <div className={className}>
                <label>{field.label}</label>

                <input 
                    className="form-control"
                    type="text"
                    // object contains, onChange, onFocus, onBlur={field.input.onBlur}
                    {...field.input}
                />
                
                <div className="text-help">
                <em>{field.meta.touched ? field.meta.error : ''}</em>
                </div>
            </div>
        );

    }

    onSubmit(values){
        console.log(values);
    }


    
    render() {

        // this.props - this is a property being passed down to the component from reduxFroms( similar to connect)
        const { handleSubmit } = this.props;


        // name = will be the name of the state of the field
        // component = takes in a function or another component 
        // that will be used to display the field component
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))
                // We are in charge of Submittal
                // we will need to implement the data to the back ourselves
            }>
                <Field 
                label="Title"
                name="title" 
                component={this.renderField}
                />
                <Field 
                label="Categories"
                name="categories" 
                component={this.renderField}
                />
                <Field 
                label="Post Content"
                name="content" 
                component={this.renderField}
                />
                <button type="submit" className="btn btn-primary"> Submit </button>
                <Link to="/" className="btn btn-danger"> Cancel </Link>
            </form>
        )
    }
}

// helper function
// validate is an option that will automatically during the forms life cycle
// note - it will run on submit / enter key 
function validate(values) {
    //  values is an object that contains all user inputs to the form
    // console.log(values) => { title: 'hello', categories: '', content: ''}

    // to validate, we must submit a object that we create from the validate function
    const errors = {}; //must be an empty object

    // validate inputs from 'values' {}
    if(!values.title  || values.title.length < 3){
        errors.title = "Enter a title that is at least 3 characters!";
    };

    if(!values.categories){
        errors.categories = "Enter some Categories";
    };

    if(!values.content){
        errors.content = "Enter some Content please";
    };


    // if errors is empty, the form is fine to submit 
    // else if errors has *any* properties, redux form assumes form is invalid
    return errors;
};


// reduxForm - requires a single argument function(){  }
// reduxForm - takes configuration options
// form option will be the form for this form
// make sure that the string is Uniqe - each form must be called something new
// this is because if the form is the same, then both forms will merge ---
export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostsNew);