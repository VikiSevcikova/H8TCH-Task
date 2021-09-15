require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import {loadState, saveState} from './app/utils';
import './App.scss';
import { hydrate } from './features/columns/columnsSlice';

const root = document.getElementById('root');
  
const state = loadState();
if(state){
    store.dispatch(hydrate(state))
}

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , root
);
