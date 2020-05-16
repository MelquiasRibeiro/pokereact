import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, GridContainer } from './styles';
import api from '../../services/api';

function Main() {
    const [pokemons, setPokemons] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        async function loadDevs() {
            const response = await api.get('?limit=9');
            setPokemons(response.data.results);
        }
        loadDevs();
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        const result = await api.get(`/${search}`);
        setSearch('');
        console.log(result.data);
    };

    return (
        <Container>
            <div>
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button type="submit">SEARCH</button>
                </form>
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
