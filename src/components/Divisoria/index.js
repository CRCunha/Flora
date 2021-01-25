import React from 'react';

import Grid from '@material-ui/core/Grid';
// import PropTypes from 'prop-types';

import useStyles from './styles';
// import img from '../../../assets/HeaderBg.jpg';

export default function Divisoria() {
  const classes = useStyles();

  return (
    <article className={classes.divisoria}>
      <Grid container justify="center" />
    </article>
  );
}

// Description.propTypes = {
//   exemple: PropTypes.string.isRequired,
// };
