import React from 'react';

import useStyles from './styles';

import NavBar from './components/NavBar';
import Header from './components/Header';
import Galeria from './components/Galeria';
import Sobre from './components/Sobre';
import Contato from './components/Contato';
import Footer from './components/Footer';

function App() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <NavBar />
      <Header />
      <Sobre />
      <Galeria />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
