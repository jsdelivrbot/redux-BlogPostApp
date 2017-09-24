

import React, { Component } from 'react';

// reduxForm uses the same logic as connect from - react-redux
// Field - this is the component we need to make for each piece of state 
import { Field, reduxForm } from 'redux-form';



class PostsNew extends Component {
    renderTitleField(field){
        //argument being called must be field
        //field argument has event handlers
        //that allow us to render through field

        return(
            <div>
                <input
                    type="text"
                    // object contains, onChange, onFocus, onBlur={field.input.onBlur}
                    {...field.input}
                    
                />
            </div>
        );

    }

    render() {
        // name = will be the name of the state of the field
        // component = takes in a function or another component 
        // that will be used to display the field component
        return (
            <form>
                <Field 
                name="title" 
                component={this.renderTitleField}
                />
            </form>
        )
    }
}


// reduxForm - requires a single argument function(){  }
// reduxForm - takes configuration options
// form option will be the form for this form
// make sure that the string is Uniqe - each form must be called something new
// this is because if the form is the same, then both forms will merge ---
export default reduxForm({
    form: 'PostsNewForm'
})(PostsNew);