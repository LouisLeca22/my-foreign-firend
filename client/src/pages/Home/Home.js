import React, { useContext, useEffect } from "react";
import './Home.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import Chat from '../../components/Chat/Chat';
import { Context } from "../../context";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const {state} = useContext(Context)
  const {name} = state
  const navigate = useNavigate()
  useEffect(() => {
    if(name === ""){
        navigate("/")
    }
  }, [navigate, name])

  return (
    <div className="home">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default Home;
