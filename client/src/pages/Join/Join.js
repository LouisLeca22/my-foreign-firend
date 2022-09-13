import React, { useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Context } from '../../context';
import { setError, setName, setRoom } from '../../context/actions';
import { TbLanguage } from "react-icons/tb";
import './Join.scss';
import FR from "../../icons/fr.svg"
import ES from "../../icons/es.svg"
import IT from "../../icons/it.svg"
import DE from "../../icons/de.svg"
import BR from "../../icons/br.svg"
import JP from "../../icons/jp.svg"

export default function Join() {
  const {state, dispatch} = useContext(Context)
  const {error, room, name} = state
  const navigate = useNavigate()
  useEffect(() => {
    if(error){
      setTimeout(() => {
        dispatch(setError(''))
      }, 3000 )
    }
  }, [dispatch, error])


  return (
    <div className="join">
            <header className="join__header" >
                <div className="icon">
                    <TbLanguage size="42" />
                </div>
                <h1>MyForeignFriend</h1>

            </header>
            <main className="join__main">
              {error && <div className='error'>{error}</div>}
                <form >
                    <div className="form-control">
                        <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Nom d'utilisateur..."
                            required
                            value={name}
                            onChange={(e) => dispatch(setName(e.target.value))}
                        />

                    </div>
                    <div className='languages'>
                        <div className={room === "Français" ? "flag active" : "flag"} onClick={() => dispatch(setRoom("Français"))}>
                            <img src={FR} alt="fr" />
                        </div>
                        <div className={room === "Espagnol" ? "flag active" : "flag"} onClick={() => dispatch(setRoom("Espagnol"))}>
                            <img src={ES} alt="es" />
                        </div>
                        <div className={room === "Italien" ? "flag active" : "flag"} onClick={() => dispatch(setRoom("Italien"))}>
                            <img src={IT} alt="it" />
                        </div>
                        <div className={room === "Allemand" ? "flag active" : "flag"} onClick={() => dispatch(setRoom("Allemand"))}>
                            <img src={DE}  alt="De" />
                        </div>
                        <div className={room === "Portugais" ? "flag active" : "flag"} onClick={() => dispatch(setRoom("Portugais"))}>
                            <img src={BR} alt="Br" />
                        </div>
                        <div className={room === "Japonais" ? "flag active" : "flag"} onClick={() =>dispatch(setRoom("Japonais"))}>
                            <img src={JP} alt="jp" />
                        </div>
                      
                    </div>
                    <button onClick={() => navigate("/chat")} className='btn'>
                            Rejoindre le chat
                        </button>
                </form>
            </main>
        </div>
  );
}
