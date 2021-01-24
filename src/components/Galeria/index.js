import React from 'react';

import Grid from '@material-ui/core/Grid';
// import PropTypes from 'prop-types';

import useStyles from './styles';

export default function Galeria() {
  const classes = useStyles();

  return (
    <article className={classes.galeria}>
      <Grid container justify="center">
        <Grid item xs={10}>
          <Grid container justify="center">
            <Grid item xs={12} className={classes.title}>
              Galeria de Fotos
            </Grid>
            <Grid item xs={8} className={classes.galeryContainer} />
          </Grid>
        </Grid>
      </Grid>
    </article>
  );
}

// Description.propTypes = {
//   exemple: PropTypes.string.isRequired,
// };
