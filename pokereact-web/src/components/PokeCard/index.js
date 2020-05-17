import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import api from '../../services/api';

function PokeCard({ name, url }) {
    const index = url.split('/')[url.split('/').length - 2];
    const [pokeInfo, setPokeInfo] = useState([]);

    useEffect(() => {
        async function loadInfo() {
            const response = await api.get(`/${index}`);
            setPokeInfo(response.data.results);
        }
        loadInfo();
    }, []);

    return (
        <Container>
            <Link to="/info" key={name}>
                <li>
                    <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png?raw=true`}
                        alt={name}
                    />
                    <strong>{name}</strong>
                    <div>
                        <span>plant</span>
                        <span>Venenoso</span>
                    </div>
                </li>
            </Link>
        </Container>
    );
}

export default PokeCard;
