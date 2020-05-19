import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-top: 50px;
        margin-bottom: 76px;
    }
    input {
        width: 597px;
        height: 40px;
        margin-right: 18px;
        border-radius: 8px;
        border: none;
        font-size: 16px;
        color: #29435b;
        font-weight: bold;
        margin-left: 4px;
    }
    button {
        min-width: 92px;
        height: 40px;
        font-weight: bold;
        font-size: 16px;
        color: #29435b;
        border: none;
        border-radius: 8px;
    }
`;

export const GridContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    list-style: none;
    grid-gap: 100px;
    margin-bottom: 72px;
    a {
        text-decoration: none;
    }
    h1 {
        color: #fec90b;
    }
`;
