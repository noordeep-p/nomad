import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  chatBody: {
    width: '85%',
    height: 600,
  },
  chatWindow: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageBox: {
    height: 300,
    width: '100%',
  },
  messageButton: {
    flexGrow: 0,
    flexBasis: 0,
    width: '10%',
  },
  message: {
    flexGrow: 0,
    flexBasis: 0,
    // width: '90%',
  },
  listItemRight: {
    backgroundColor: '#deeaee',
    flex: 'none',
    padding: '10px',
    borderRadius: '10px',
  },
  listItemLeft: {
    backgroundColor: '#f0f0f0',
    flex: 'none',
    padding: '10px',
    borderRadius: '10px',
  },
  listItemRightContianer: {
    justifyContent: 'flex-end',
  },
  listItemLeftContianer: {
    justifyContent: 'flex-start',
  },
}));
