import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  table: {
    minWidth: 650,
  },
  chatSection: {
    width: '100%',
    height: '90vh',
  },
  headBG: {
    backgroundColor: '#e0e0e0',
  },
  borderRight500: {
    borderRight: '1px solid #e0e0e0',
  },
  messageArea: {
    height: '75vh',
    overflowY: 'auto',
  },
}));
