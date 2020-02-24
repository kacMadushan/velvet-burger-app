import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, name }) => <img src={src} alt={name} />;

Image.propTypes = {
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default Image;