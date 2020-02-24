import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ children, title }) => (
    <div className="modal fade" id="orderModal" tabIndex="-1" role="dialog" aria-labelledby="orderModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    {title && <h5 className="modal-title">{title}</h5>}
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </div>
    </div>
);

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
};

export default Modal;