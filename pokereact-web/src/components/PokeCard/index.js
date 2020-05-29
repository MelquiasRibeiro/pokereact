import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import api from '../../services/api';

function PokeCard({ name, url }) {
    const [pokeTypes, setPokeTypes] = useState([]);
    const index = url.split('/')[url.split('/').length - 2];

    useEffect(() => {
        async function loadInfo() {
            const response = await api.get(`/pokemon/${index}`);
            setPokeTypes(response.data.types);
        }
        loadInfo();
    }, [index]);
    const TYPE_COLORS = {
        bug: '#B1C12E',
        dark: '#4F3A2D',
        dragon: '#755EDF',
        electric: '#FCBC17',
        fairy: '#F4B1F4',
        fighting: '#823551',
        fire: '#E73B0C',
        flying: '#A3B3F7',
        ghost: '#6060B2',
        grass: '#74C236',
        ground: '#D3B357',
        ice: '#A3E7FD',
        normal: '#C8C4BC',
        poison: '#934594',
        psychic: '#ED4882',
        rock: '#B9A156',
        steel: '#B5B5C3',
        water: '#3295F6',
    };
    return (
        <Container>
            <Link to={`/info/${encodeURIComponent(index)}`}>
                <li>
                    <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png?raw=true`}
                        alt={name}
                    />
                    <strong>{name}</strong>
                    <div>
                        {pokeTypes.map((type) => (
                            <span
                                key={type.type.name}
                                cor={TYPE_COLORS[type.type.name]}
                            >
                                {type.type.name}
                            </span>
                        ))}
                    </div>
                </li>
            </Link>
        </Container>
    );
}

export default PokeCard;
