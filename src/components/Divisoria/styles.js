import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  divisoria: {
    width: '100%',
    height: '200px',
    marginTop: '80px',
    backgroundColor: '#ccc',
    backgroundImage: `url(${'https://i.imgur.com/RrVYeyJ.jpg'})`,
    backgroundSize: 'cover',

    [theme.breakpoints.down('md')]: {},
  },
}));
export default useStyles;
