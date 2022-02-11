import { makeStyles } from '@mui/styles';
import Image from './Images/Background.jpg';

const useStyles = makeStyles(() => ({
  logoLink: {
    color: 'white',
    textDecoration: 'none',
    margin: '1em',
  },
  logo: {
    margin: '1em',
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  homepage: {
    paddingTop: '6em',
    height: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: `url(${Image})`,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  icon: {
    margin: '1em',
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
}));

export default useStyles;
