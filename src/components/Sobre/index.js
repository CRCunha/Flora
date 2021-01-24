import React from 'react';

import Grid from '@material-ui/core/Grid';
// import PropTypes from 'prop-types';

import useStyles from './styles';

export default function Contato() {
  const classes = useStyles();

  return (
    <article className={classes.sobre}>
      <Grid container justify="center">
        <Grid item xs={10}>
          <Grid container justify="center">
            <Grid item xs={12} className={classes.title}>
              Sobre
            </Grid>
            <Grid item xs={10} className={classes.sobreContainer} />
          </Grid>
        </Grid>
      </Grid>
    </article>
  );
}

// Description.propTypes = {
//   exemple: PropTypes.string.isRequired,
// };
