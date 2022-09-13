import React from 'react';



import ReactEmoji from 'react-emoji';

const Message = ({ message: { text, user, time }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (
        <div className="message isMine">
          <p className='message__author'>{trimmedName}</p>
          <div className="message__box">
            <p className="message__box--text">{ReactEmoji.emojify(text)}</p>
            <div className='message__box--time'>{time}</div>
          </div>
        </div>
        )
        : (
          <div className="message">
          <p className='message__author'>{user}</p>
          <div className="message__box">
            <p className="message__box--author">{ReactEmoji.emojify(text)}</p>
            <div className='message__box--time'>{time}</div>
          </div>
        </div>
        )
  );
}

export default Message;