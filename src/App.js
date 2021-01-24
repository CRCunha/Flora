import React from 'react';

import useStyles from './styles';

import NavBar from './components/NavBar';
import Header from './components/Header';

function App() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <NavBar />
      <Header />
    </div>
  );
}

export default App;
