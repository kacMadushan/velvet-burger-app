import React from 'react';
import { SpinnerBorder, SpinnerSpan } from './Spinner.sc';

import MainContainer from '../MainContainer/MainContainer';

const Spinner = () => (
    <MainContainer col="col-lg-6 offset-lg-3">
        <SpinnerBorder role="status">
            <SpinnerSpan>Loading...</SpinnerSpan>
        </SpinnerBorder>
    </MainContainer>
);

export default Spinner;