import React from 'react';

import Grid from '@material-ui/core/Grid';
// import PropTypes from 'prop-types';

import useStyles from './styles';

export default function NavBar() {
  const classes = useStyles();

  return (
    <article className={classes.navbar}>
      <Grid container justify="center">
        <Grid item xs={10}>
          <Grid container justify="space-between">
            <Grid item xs={2} className={classes.logo}>
              <img src="https://i.imgur.com/eKWS7wY.png" alt="Flora" />
            </Grid>
            <Grid item xs={5}>
              <Grid container className={classes.menu}>
                <Grid item xs={4} className={classes.menuItem}>
                  Sobre
                </Grid>
                <Grid item xs={4} className={classes.menuItem}>
                  Galeria de Fotos
                </Grid>
                <Grid item xs={4} className={classes.menuItem}>
                  Contato
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </article>
  );
}

// Description.propTypes = {
//   exemple: PropTypes.string.isRequired,
// };
