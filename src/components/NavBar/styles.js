import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  navbar: {
    width: '100%',
    height: '100px',
    backgroundColor: '#fff',
  },
  logo: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100px',

    '& img': {
      width: '55%',
      [theme.breakpoints.down('md')]: {
        width: '80%',
      },
    },
  },
  menu: {
    height: '100px',
  },
  menuItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100px',

    color: '#505050',
    cursor: 'pointer',
  },
}));
export default useStyles;
