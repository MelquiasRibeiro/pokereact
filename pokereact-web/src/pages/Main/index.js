import React, { useEffect, useState } from 'react';
import { Container, GridContainer } from './styles';
import api from '../../services/api';
import PokeCard from '../../components/PokeCard/index';

function Main() {
    const [pokemons, setPokemons] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadPoke() {
            const response = await api.get('/pokemon/?limit=9');
            setPokemons(response.data.results);
            setLoading(false);
        }
        loadPoke();
    }, []);

    // const handleSearch = async (e) => {
    //     e.preventDefault();
    //     const result = await api.get(`/${search}`);
    //     setSearch('');
    // };

    return (
        <Container>
            <div>
                <form onSubmit={() => {}}>
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button type="submit">SEARCH</button>
                </form>
            </div>
            <GridContainer>
                {loading ? (
                    <h1>carregando...</h1>
                ) : (
                    pokemons.map((pokemon) => (
                        <PokeCard
                            key={pokemon.name}
                            name={pokemon.name}
                            url={pokemon.url}
                        />
                    ))
                )}
            </GridContainer>
        </Container>
    );
}

export default Main;
