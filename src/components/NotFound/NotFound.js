import React from 'react';
import { NotFoundContainer, Title, HomeLink } from './NotFound.sc';

import MainContainer from '../MainContainer/MainContainer';
import Image from '../Image/Image';

const NotFound = () => (
    <MainContainer col="col-lg-4 offset-lg-4">
        <NotFoundContainer>
            <Image src="./assets/images/burger-logo.png" name="Velvet Burger" />
            <Title>404 not found</Title>
            <HomeLink to="/">Go Home</HomeLink>
        </NotFoundContainer>
    </MainContainer>
);

export default NotFound;