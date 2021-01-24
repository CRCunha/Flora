import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  sobre: {
    width: '100%',
    padding: '20px 0px',
    marginBottom: '60px',
    backgroundSize: 'cover',
    [theme.breakpoints.down('md')]: {},
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px',
    color: '#505050',
    fontSize: '30px',
  },
  sobreContainer: {
    backgroundColor: '#ccc',
    boxShadow: '0 20px 30px -16px rgba(9,9,16,0.2) !important',
    height: '30vh',
    padding: '100px',
  },
}));
export default useStyles;
