import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const Container = styled.div`
    box-sizing: border-box;
    margin-top: 64px;
    margin-bottom: 32px;
    width: 1000px;
    height: 645px;
    background: #fec90b;
    border-radius: 16px;
`;
export const TopSide = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 30px;
`;
export const BottomSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
`;
export const Geral = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
        margin-bottom: 20px;
        color: #29435b;
    }
    p {
        font-size: 16px;
        margin-top: 16px;
        margin-left: 45px;
        color: #29435b;
        font-weight: bold;
        line-height: 1.5;
    }
    img {
        height: 200;
        width: 199;
        border-radius: 16px;
    }
`;

export const Abilities = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #29435b;
`;
export const Profile = styled.div`
    width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    > div {
        display: flex;
        flex: 1;
        flex-direction: row;
        justify-content: space-between;
    }
    h1 {
        display: flex;
        align-self: center;
        color: #29435b;
    }
    ul {
        list-style: none;
        margin-left: 45px;
        margin-right: 45px;
        margin-top: 45px;
        color: #29435b;
        font-weight: bold;
        font-size: 16px;
    }
`;
