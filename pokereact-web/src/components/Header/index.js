import React from 'react';
import Logo from '../../assets/logos/logo.svg';
import { Container } from './styles';

function Header() {
    return (
        <Container>
            <img src={Logo} alt="pokebola pokereact" />
        </Container>
    );
}

export default Header;
