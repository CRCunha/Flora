import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    width: '100%',
    height: '89vh',
    backgroundImage: `url(${'https://i.imgur.com/RrVYeyJ.jpg'})`,
    backgroundSize: 'cover',
    [theme.breakpoints.down('md')]: {},
  },
  cardHeader: {
    height: '400px',
    backgroundColor: '#fff',
  },
}));
export default useStyles;
