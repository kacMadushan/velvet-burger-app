import React from 'react';
import PropTypes from 'prop-types';

const MainContainer = ({ children, col }) => (
    <div className="container">
        <div className="row">
            <div className={col}>
                {children}
            </div>
        </div>
    </div>
);

MainContainer.propTypes = {
    children: PropTypes.node.isRequired,
    col: PropTypes.string
};

export default MainContainer;