import React from 'react';
import styled from 'styled-components';

import Navbar from '../Navbar/Navbar';

const HeaderContainer = styled.header`
    display: block;
    margin-bottom: 20px;
`;

const Header = () => (
    <HeaderContainer>
        <Navbar />
    </HeaderContainer>
);

export default Header;