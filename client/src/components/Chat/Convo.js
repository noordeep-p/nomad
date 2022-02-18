/* eslint-disable max-len */
// /* eslint-disable no-unused-expressions */
// /* eslint-disable react/button-has-type */
// /* eslint-disable max-len */
// /* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from 'react';
// import ScrollToBottom from 'react-scroll-to-bottom';
// import { css } from 'glamor';

// import TextField from '@mui/material/TextField';
// import Typography from '@material-ui/core/Typography';
// import CssBaseline from '@mui/material/CssBaseline';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import Button from '@mui/material/Button';
// import { Divider } from '@mui/material';

// import useStyles from './chatStyles';

// export default function Convo({ socket, user, chatroom }) {
//   const ROOT_CSS = css({
//     height: 600,
//     width: '100%',
//   });

//   const classes = useStyles();

//   const [currentMessage, setCurrentMessage] = useState('');
//   const [messageArray, setmessageArray] = useState([]);

//   const sendMessage = async () => {
//     if (currentMessage) {
//       const messageInput = {
//         chatroom,
//         sender: user,
//         message: currentMessage,
//         timestamp: `${new Date(Date.now()).getHours()} : ${new Date(Date.now()).getMinutes()}`,
//       };
//       await socket.emit('send_messageData', messageInput);
//       setmessageArray((message) => [...message, messageInput]);
//       setCurrentMessage('');
//     }
//   };

//   useEffect(() => {
//     socket.on('receive_messageData', (event) => {
//       setmessageArray((message) => [...message, event]);
//     });
//   }, [socket]);

//   useEffect(() => {
//     socket.on('receive_messageData', (event) => {
//       console.log(event);
//     });
//   }, [socket]);

//   return (
//     <div>
//       <CssBaseline />
//       <Grid container justifyContent="center" className="classes.chatWindow">
//         <Grid item xs={12}>
//           <Typography component="h2" variant="h5">Chat Room</Typography>
//         </Grid>
//       </Grid>
//       <Grid container component={Paper} className={classes.chatBody}>
//         <ScrollToBottom className={ROOT_CSS}>
//           <div style={{ height: 300, width: '100%' }}>
//             <List className="classes.messageBox">
//               {messageArray.map((messageInput) => (
//                 <ListItem className={user === messageInput.sender ? classes.listItemRightContianer : classes.listItemLeftContianer}>
//                   <ListItemText
//                     className={user === messageInput.sender ? classes.listItemRight : classes.listItemLeft}
//                     align={user === messageInput.sender ? 'right' : 'left'}
//                     primary={messageInput.message}
//                     secondary={messageInput.timestamp}
//                   />
//                 </ListItem>
//               ))}
//             </List>
//           </div>
//         </ScrollToBottom>
//         <Divider />
//         <Grid className="classes.messageButton" container style={{ top: 650, position: 'fixed', width: '100%' }}>
//           <Grid className="classes.message" item xs={9}>
//             <TextField id="outlined-basic" value={currentMessage} label="Enter Message" variant="outlined" onChange={(event) => { setCurrentMessage(event.target.value); }} onKeyPress={(event) => { event.key === 'Enter' && sendMessage(); }} fullWidth />
//           </Grid>
//           <Grid className="classes.messageButton" item xs={2}>
//             <Button size="large" style={{ width: '60%' }} variant="contained" onClick={sendMessage}>Send</Button>
//           </Grid>
//         </Grid>
//       </Grid>
//     </div>
//   );
// }
