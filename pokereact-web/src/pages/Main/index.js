import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, GridContainer } from './styles';
import api from '../../services/api';

function Main() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        async function loadDevs() {
            const response = await api.get('?limit=9');
            setPokemons(response.data.results);
        }
        loadDevs();
    }, []);

    return (
        <Container>
            <div>
                <input type="text" />
                <button type="button">SEARCH</button>
            </div>
            <GridContainer>
                {pokemons.map((pokemon) => (
                    <Link to="/info" key={pokemon.name}>
                        <li>
                            <img
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                                    pokemon.url.split('/')[
                                        pokemon.url.split('/').length - 2
                                    ]
                                }.png?raw=true`}
                                alt="pokefoto"
                            />
                            <strong>{pokemon.name}</strong>
                            <div>
                                <span>plant</span>
                                <span>Venenoso</span>
                            </div>
                        </li>
                    </Link>
                ))}
            </GridContainer>
        </Container>
    );
}

export default Main;
