import s from './Target.module.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { contador_reset, suma_contador_action } from '../../redux/actions/contadorAction';
import { targetStateAction } from '../../redux/actions/targetStatusAction';
import {Link} from 'react-router-dom'
import Cronometro from '../cronometro/Cronometro';
import { definirTiempo } from '../../redux/actions/timerAction';
import { diffButtonAction } from '../../redux/actions/diffAction';
import { useState } from 'react';

function Target() {
    //state de la diff
    const diff = useSelector((state) => state.diffReducer.diffSegs);
    //dispatch y state para el counter
    const dispatch = useDispatch();
    const contadorReducer = useSelector((state) => state.contadorReducer.contador)
    //estado del target    
    const targetStatus = useSelector((state) => state.targetStatusReducer.shown)
    //logica del juego
    function targetClick() {
        if (targetStatus === 1) {
            dispatch(targetStateAction(2))
            dispatch(targetStateAction(1)) 
        } else {
            dispatch(targetStateAction(1))
        }
        dispatch(suma_contador_action())
    }
    //timerStatus
    const tiempo = useSelector((state) => state.timerReducer.tiempo)
    //timer
    let segundos = tiempo
    function cronometro() {
        if (segundos > 0) {
            segundos--
        }
        document.getElementById('segundero').innerHTML = `${segundos}`;        
    }
    if (targetStatus === 4) {
        document.getElementById('segundero').innerHTML = `0`;
    }
    //state para interval
    const [intervalState, setIntervalState] = useState('')
    //state para timeout
    const [timeOutState, setTimeOutState] = useState('')
    const [timeOutState2, setTimeOutState2] = useState('')
    //boton para comenzar el juego y el timer TARGET PLAY
    function targetPlay() {
        dispatch(targetStateAction(1))
        let timeOutId = setTimeout(() => {
            dispatch(targetStateAction(4))
        }, diff);
        setTimeOutState(timeOutId)
        let invervalId = setInterval(cronometro, 1000)
        setIntervalState(invervalId)        
        let timeOutId2 = setTimeout(() => {
            clearInterval(invervalId)
        }, tiempo * 1000);
        setTimeOutState2(timeOutId2)        
        dispatch(contador_reset())
    }
    //playAgain button
    function playAgain() {
        dispatch(targetStateAction(3))
        dispatch(contador_reset())
        document.getElementById('segundero').innerHTML = `${tiempo}`;
    }

    let valor1 = (function assignedTop() {
        let valor1 = Math.random() * 50 * 20;
        if (valor1 > 820) {
            valor1 = 820;
        }
        return valor1;
    })();
    

    let valor2 = (function assignedLeft() {
        let valor2 = Math.random() * 50 * 25;
        return valor2;
    })();

    //toHome 
    function toHome() {
        dispatch(definirTiempo(diff / 1000))
        dispatch(diffButtonAction(diff))
        clearInterval(intervalState)
        clearTimeout(timeOutState)
        clearTimeout(timeOutState2)
        // setTimeout(() => {
        //     window.location.reload()
        // }, 500);
        
    }
    
        return (
            <div>
                <span className={s.pipirulo}>
                <Link to='/'><button className={s.homeBtn} onClick={() => toHome()}>Home</button></Link>
                <Cronometro/>
                </span>
                {targetStatus === 1?
                    <span id='target'
                    style={{
                        position: 'absolute',
                        top: valor1 + 'px',
                        left: valor2 + 'px',
                        }}>
                        
                    <button className={s.btn} onClick={() => targetClick()}>
                        <span className={s.target}>
                            <span className={s.shadow}></span>
                            <span className={s.shadow2}></span>
                            <span className={s.shadownt}></span>
                                <span className={s.redb}>
                                    <span className={s.whiteb}></span>
                                </span>
                        </span>
                    </button>
                    </span>
                    : targetStatus === 4?//status GAMEOVER --------------
                    <span>
                        <span className={s.gameOverContainer}>
                                <span className={s.gameOverBox}>
                                    <h1 className={s.gameOverContent}>GAME OVER</h1>
                                    <Link to='/'><button className={s.changeDiffBtn}>Change difficulty</button></Link>
                                    <h2 className={s.gameOverContent}>Score: {contadorReducer}</h2>
                                <button className={s.playAgainBtn} onClick={() => playAgain()}>Play Again</button>
                            </span>
                        </span>
                    </span>
                        
                        ://status 3 default //targetplay------------------
                        <span className={s.gameOverContainer}>
                            <span>
                                <span
                                    style={{
                                        position: 'absolute',
                                        marginLeft: '78px',
                                        marginTop: '-20px'
                                    }}
                                >
                                    
                                </span>
                                <span>
                                <h1 className={s.startBtn}>START</h1></span>
                                <button className={s.playBtn} onClick={() => targetPlay()}>
                                    <span className={s.target}>
                                        <span className={s.shadow}></span>
                                        <span className={s.shadow2}></span>
                                        <span className={s.shadownt}></span>
                                        <span className={s.redb}>
                                            <span className={s.whiteb}></span>
                                        </span>
                                    </span>
                                </button>
                            </span>
                        </span>
                    } 
            </div>
        )
    
}

export default Target;