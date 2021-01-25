import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    width: '100%',
    height: '89vh',
    backgroundImage: `url(${'https://i.imgur.com/RrVYeyJ.jpg'})`,
    backgroundSize: 'cover',
    [theme.breakpoints.down('md')]: {},
  },
  cardContainer: {
    height: '85vh',
  },
  cardHeader: {
    height: '50px',
    borderRadius: '40px',
    boxShadow: '0 20px 30px -16px rgba(9,9,16,0.2) !important',

    background: 'rgba(255, 255, 255, 0.80)',
    backdropFilter: 'blur( 4px )',
  },
}));
export default useStyles;
