import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import reducers from './reducers';


//Components 
import PostIndex from './components/post_index';
import PostNew from './components/post_new';


// react-router
// BrowserRouter - interacts with History library, decides what to do based off the changed url
// Route - Provides main configuration - will render components based of URL
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


//Route requires - two properties path="" component=""
// path = url string
// component = component to render

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter> 
      <div>
      <Switch>
      
        <Route exact path="/" component={PostIndex} />
        <Route path="/posts/new" component={PostNew} />
        <Route component={() => <div>Not found</div>} />

      </Switch>
      </div>

    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
