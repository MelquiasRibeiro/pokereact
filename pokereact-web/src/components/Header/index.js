import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logos/logo.svg';
import { Container } from './styles';

function Header() {
    return (
        <Container>
            <Link to="/">
                <img src={Logo} alt="pokebola pokereact" />
            </Link>
        </Container>
    );
}

export default Header;
