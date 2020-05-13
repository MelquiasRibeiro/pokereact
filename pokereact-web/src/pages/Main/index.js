import React from 'react';
import { Link } from 'react-router-dom';
import bulba from '../../assets/images/bulba.png';
import { Container, GridContainer } from './styles';

function Main() {
    return (
        <Container>
            <div>
                <input type="text" />
                <button type="button">SEARCH</button>
            </div>
            <GridContainer>
                <Link to="/info">
                    <li>
                        <img src={bulba} alt="pokefoto" />
                        <strong>Nome dele</strong>
                        <div>
                            <span>Grama</span>
                            <span>Venenoso</span>
                        </div>
                    </li>
                </Link>
                <li>
                    <img src={bulba} alt="pokefoto" />
                    <strong>Nome dele</strong>
                    <div>
                        <span>Grama</span>
                        <span>Venenoso</span>
                    </div>
                </li>
                <li>
                    <img src={bulba} alt="pokefoto" />
                    <strong>Nome dele</strong>
                    <div>
                        <span>Grama</span>
                        <span>Venenoso</span>
                    </div>
                </li>
                <li>
                    <img src={bulba} alt="pokefoto" />
                    <strong>Nome dele</strong>
                    <div>
                        <span>Grama</span>
                        <span>Venenoso</span>
                    </div>
                </li>
                <li>
                    <img src={bulba} alt="pokefoto" />
                    <strong>Nome dele</strong>
                    <div>
                        <span>Grama</span>
                        <span>Venenoso</span>
                    </div>
                </li>
                <li>
                    <img src={bulba} alt="pokefoto" />
                    <strong>Nome dele</strong>
                    <div>
                        <span>Grama</span>
                        <span>Venenoso</span>
                    </div>
                </li>
                <li>
                    <img src={bulba} alt="pokefoto" />
                    <strong>Nome dele</strong>
                    <div>
                        <span>Grama</span>
                        <span>Venenoso</span>
                    </div>
                </li>
                <li>
                    <img src={bulba} alt="pokefoto" />
                    <strong>Nome dele</strong>
                    <div>
                        <span>Grama</span>
                        <span>Venenoso</span>
                    </div>
                </li>
                <li>
                    <img src={bulba} alt="pokefoto" />
                    <strong>Nome dele</strong>
                    <div>
                        <span>Grama</span>
                        <span>Venenoso</span>
                    </div>
                </li>
            </GridContainer>
        </Container>
    );
}

export default Main;
