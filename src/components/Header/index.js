import React from 'react';

import Grid from '@material-ui/core/Grid';
// import PropTypes from 'prop-types';

import useStyles from './styles';
// import img from '../../../assets/HeaderBg.jpg';

export default function Header() {
  const classes = useStyles();

  return (
    <article className={classes.header}>
      <Grid container justify="center">
        <Grid item xs={10}>
          <Grid container>
            <Grid item xs={5} className={classes.cardHeader} />
          </Grid>
        </Grid>
      </Grid>
    </article>
  );
}

// Description.propTypes = {
//   exemple: PropTypes.string.isRequired,
// };
