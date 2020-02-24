import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Layout from '../components/Layout/Layout';
import AppRouter from '../routers/AppRouter';

export const history = createHistory();

const Root = ({ store }) => (
    <Provider store={store}>
        <Router history={history}>
            <Layout>
                <AppRouter />
            </Layout>
        </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired,
};

export default Root;