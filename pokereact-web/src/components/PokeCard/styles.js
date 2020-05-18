import styled from 'styled-components';

export const Container = styled.div`
    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 240px;
        height: 168px;
        background: #feca3d;
        border-radius: 8px;
        cursor: pointer;
        transition: opacity 0.2s;
        &:hover {
            opacity: 0.8;
        }
        img {
            background: #fafafa;
            border-radius: 50%;
            margin-bottom: 8px;
            height: 88px;
        }
        > div {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            margin-top: 8px;
        }
        strong {
            font-size: 18px;
            text-transform: uppercase;
            color: #29435b;
        }
        span {
            display: flex;
            flex: 1;
            align-items: center;
            justify-content: center;
            text-align: center;
            background: ${(props) => (props.cor ? '#7159c1' : '#3333')};
            border-radius: 8px;
            color: #fafafa;
            font-weight: bold;
            margin-right: 8px;
            padding: 8px;
        }
    }
`;
