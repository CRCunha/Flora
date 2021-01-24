import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    width: '100%',
    height: '150px',
    marginTop: '80px',
    backgroundColor: '#ccc',
    [theme.breakpoints.down('md')]: {},
  },
}));
export default useStyles;
