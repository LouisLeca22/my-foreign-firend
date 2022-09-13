import React, { useContext } from "react";
import { Context } from "../../context";
import "./Chat.scss";
import { TbLanguage } from "react-icons/tb";
import Messages from "../Messages/Messages"
import Form from "../Form/Form"
const Chat = () => {
  const {state} = useContext(Context)
  const {room} = state
  return (
    <div className="chat">
      <div className="chat__header">
        <span>Salon</span>
        <div> <TbLanguage size={32} /> <span>{room}</span></div>
      </div>
      <Messages />
      <Form />
    </div>
  )
}
export default Chat