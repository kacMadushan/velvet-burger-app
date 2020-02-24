import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/configureStore';
import Root from './root/Root';
import 'bootstrap/dist/css/bootstrap.css';
import Global from './styles/global';

// configure store
const store = configureStore();

ReactDOM.render(
    <Fragment>
        <Global />
        <Root store={store} />
    </Fragment>,
    document.getElementById('root')
);