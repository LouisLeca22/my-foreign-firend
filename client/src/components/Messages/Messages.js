import React, { useContext, useEffect, useRef } from 'react';

import { Context } from '../../context';

import Message from './Message/Message';

import './Messages.scss';

const Messages = () => {
  const {state} = useContext(Context)
  const {messages, name} = state
  const messagesRef = useRef();

  useEffect(() => {

		messagesRef.current.scroll(0, messagesRef.current.scrollHeight);
	},[ messages ]);

  return (
    <div ref={messagesRef} className="messages">
    {messages.map((message) => <div key={message.id}><Message message={message} name={name}/></div>)}
  </div>
)}

export default Messages;