import React from 'react';
import Routes from './routes';
import Header from './components/Header/index';
import GlobalStyles from './styles/global';

function App() {
    return (
        <>
            <GlobalStyles />
            <Header />
            <Routes />
        </>
    );
}

export default App;
