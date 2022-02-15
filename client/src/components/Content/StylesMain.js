import { makeStyles, alpha } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    display: 'none',
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      display: 'inline-flex',
    },
  },
  linkBrand: {
    flexGrow: 1,
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  linkBrandSmall: {
    display: 'none',
    [theme.breakpoints.down('xs')]: {
      flexGrow: 1,
      display: 'inline-block',
    },
  },
  drawer: {
    width: 256,
    flexShrink: 0,
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  drawerContainer: {
    width: 256,
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: theme.spacing(4),
    width: 'auto',
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default useStyles;
