import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';


//Components 
import PostIndex from './components/post_index';


// react-router
// BrowserRouter - interacts with History library, decides what to do based off the changed url
// Route - Provides main configuration - will render components based of URL
import { BrowserRouter, Route } from 'react-router-dom';

const createStoreWithMiddleware = applyMiddleware()(createStore);


//Route requires - two properties path="" component=""
// path = url string
// component = component to render

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter> 

      <div>
        <Route path="/" component={PostIndex} />
      </div>

    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
