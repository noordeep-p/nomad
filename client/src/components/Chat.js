import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';

import { ChannelContainer, ChannelListContainer } from './Chat/index';

const apiKey = process.env.REACT_APP_STREAM_CHAT_API_KEY;
const client = StreamChat.getInstance(apiKey);

export default function UserChat() {
  return (
    <Chat client={client} theme="team light">
      <ChannelListContainer />

      <ChannelContainer />
    </Chat>
  );
}
