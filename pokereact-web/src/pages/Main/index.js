import React, { useEffect, useState } from 'react';
import { Container, GridContainer, PagesButtonContainer } from './styles';
import api from '../../services/api';
import PokeCard from '../../components/PokeCard/index';

function Main() {
    const [pokemons, setPokemons] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        async function loadPoke() {
            const response = await api.get(
                `/pokemon/?limit=9&offset=${offset}`
            );
            setPokemons(response.data.results);
            setLoading(false);
        }
        loadPoke();
    }, [offset]);
    const handleSearch = async (e) => {
        e.preventDefault();
        const result = await api.get(`/${search}`);
        setSearch('');
    };
    const handleNextPage = async (e) => {
        e.preventDefault();
        setOffset(offset + 9);
    };
    const handlepreviousPage = async (e) => {
        e.preventDefault();
        if (offset > 0) {
            setOffset(offset - 9);
        }
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
            <PagesButtonContainer>
                <button type="button" onClick={handlepreviousPage}>
                    previous
                </button>
                <button type="button" onClick={handleNextPage}>
                    next
                </button>
            </PagesButtonContainer>
        </Container>
    );
}

export default Main;
