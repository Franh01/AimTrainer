import s from './Home.module.css'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { diffButtonAction } from '../../redux/actions/diffAction';
import { targetStateAction } from '../../redux/actions/targetStatusAction';
import { definirTiempo } from '../../redux/actions/timerAction';
import CustomDiff from '../CustomDiff/CustomDiff';
import gitImg from '../../img/github-icon.png'
import { setGameState } from '../../redux/actions/gameStateAction';
import { useSelector } from 'react-redux';
import { useState } from 'react';


function Home() {
    const dispatch = useDispatch();
    //funciones timer-------------------------
    function easy() {
        if (gameState === 'timer') {
            dispatch(diffButtonAction(60000))
            dispatch(definirTiempo(60))
        } else {
            dispatch(diffButtonAction(2000))
        }
        
    }
    function normal() {
        if (gameState === 'timer') {
            dispatch(diffButtonAction(30000))
            dispatch(definirTiempo(30))
        } else {
            dispatch(diffButtonAction(1000))
        }
    }
    function hard() {
        if (gameState === 'timer') {
            dispatch(diffButtonAction(10000))
            dispatch(definirTiempo(10))
        } else {
            dispatch(diffButtonAction(500))
        }
    }
    //----------------------------------------
    //funciones para botones setGame
    function survival() {
        // return alert('Modo de juego no disponible')
        dispatch(setGameState('survival'))
    }
    function timer() {
        dispatch(setGameState('timer'))
    }
    //----------------------------------------
    //estado del timer------------------------
    const tiempo = useSelector((state) => state.timerReducer.tiempo)
    //----------------------------------------
    //estado del modo de juego
    const gameState = useSelector((state) => state.gameStateReducer.gameState)
    //---------------------------------------- 
    //actualizar el estilo del boton segun el estado de timer  (modo timer)
    const [easyStyle, setEasyStyle] = useState('blanchedalmond');
    const [normalStyle, setNormalStyle] = useState('blanchedalmond');
    const [hardStyle, setHardStyle] = useState('blanchedalmond');

    if (tiempo === 60 && easyStyle !== 'rgb(255, 186, 82)') {
        setEasyStyle('rgb(255, 186, 82)');
    } else if(tiempo !== 60 && easyStyle !== 'blanchedalmond') {
        setEasyStyle('blanchedalmond')
    }
    
    if (tiempo === 30 && normalStyle !== 'rgb(255, 186, 82)') {
        setNormalStyle('rgb(255, 186, 82)');
    } else if(tiempo !== 30 && normalStyle !== 'blanchedalmond'){
        setNormalStyle('blanchedalmond');
    }

    if (tiempo === 10 && hardStyle !== 'rgb(255, 186, 82)') {
        setHardStyle('rgb(255, 186, 82)');
    } else if(tiempo !== 10 && hardStyle !== 'blanchedalmond') {
        setHardStyle('blanchedalmond');
    }
    //----------------------------------------
    //actualizar el style del boton segun el estado de la dificultad (modo survival)
    const diff = useSelector((state) => state.diffReducer.diffSegs)
    const [easySurviStyle, setEasySurviStyle] = useState('blanchedalmond');
    const [normaSurvilStyle, setNormalSurviStyle] = useState('blanchedalmond');
    const [hardSurviStyle, setHardSurviStyle] = useState('blanchedalmond');

    if (diff === 2000 && easySurviStyle !== 'rgb(255, 186, 82)') {
        setEasySurviStyle('rgb(255, 186, 82)');
    } else if (diff !== 2000 && easySurviStyle !== 'blanchedalmond') {
        setEasySurviStyle('blanchedalmond')
    }
    
    if (diff === 1000 && normaSurvilStyle !== 'rgb(255, 186, 82)') {
        setNormalSurviStyle('rgb(255, 186, 82)');
    } else if(diff !== 1000 && normaSurvilStyle !== 'blanchedalmond'){
        setNormalSurviStyle('blanchedalmond');
    }

    if (diff === 500 && hardSurviStyle !== 'rgb(255, 186, 82)') {
        setHardSurviStyle('rgb(255, 186, 82)');
    } else if(diff !== 500 && hardSurviStyle !== 'blanchedalmond') {
        setHardSurviStyle('blanchedalmond');
    }
    //----------------------------------------
    //actualizar el style del boton segun el estado del gamestate 
    const [timerStyle, setTimerStyle] = useState()//'#efefef'
    const [survivalStyle, setSurvivalStyle] = useState()//rgb(248, 246, 131)

    if (gameState === 'survival' && survivalStyle !== 'rgb(248, 246, 131)') {
        setSurvivalStyle('rgb(248, 246, 131)')
    } else if (gameState !== 'survival' && survivalStyle !== '#efefef') {
        setSurvivalStyle('#efefef')
    }

    if (gameState === 'timer' && timerStyle !== 'rgb(248, 246, 131)') {
        setTimerStyle('rgb(248, 246, 131)')
    } else if (gameState !== 'timer' && timerStyle !== '#efefef') {
        setTimerStyle('#efefef')
    }
    //----------------------------------------
    return (
        <div className={s.tMainContainer}>
            <span className={s.uMainContainer}>
                <span className={s.realMainContainer}>
                    <span className={s.rMainContainer}>

                        <span className={s.yTitleContainer}>

                            <span className={s.gTitle} id='title'>
                                <h1 className={s.titulo}>Aim Trainer</h1>
                            </span>
                            
                        </span>

                        <span className={s.yGameModeContainer}>

                            <span className={s.gGameModeTitle} id='gameModeTitle'>
                                <h3>Game mode:</h3>
                            </span>

                            <span className={s.gGameModeButtonsContainer}>
                                <span className={s.gGameModeButtons}>
                                    <button className={s.gameModeBtns} onClick={() => survival()} style={{background: survivalStyle}}>Survival</button>
                                    <button className={s.gameModeBtns} onClick={() => timer()} style={{background: timerStyle}}>Timer</button>
                                </span>
                            </span>

                        </span>

                        <span className={s.yDiffButtonsContainer}>

                            {gameState === 'timer' ?
                                <span className={s.gTimerDiffButtons}>
                                    <button className={s.botones} onClick={() => easy() }id='easyButton' style={{background: easyStyle}}>Easy</button>
                                    <button className={s.botones} onClick={() => normal() } id='normalButton' style={{background: normalStyle}}>Normal</button>
                                    <button className={s.botones} onClick={() => hard()} id='hardButton' style={{background: hardStyle}}>Hard</button>
                                </span>:<span></span>
                            }

                            {gameState === 'survival' ?
                                <span className={s.gSurvivalDiffButtons}>
                                    <button className={s.botones} onClick={() => easy() }id='easyButton' style={{background: easySurviStyle}}>Easy(2s)</button>
                                    <button className={s.botones} onClick={() => normal() } id='normalButton' style={{background: normaSurvilStyle}}>Normal(1s)</button>
                                    <button className={s.botones} onClick={() => hard()} id='hardButton' style={{background: hardSurviStyle}}>Hard(0.5s)</button>
                                </span>:<span></span>
                            }

                        </span>

                        
                        {   gameState === 'timer' ?
                            <span className={s.yCustomDiffContainer}>

                                <span className={s.gCustomDiff}>
                                    <CustomDiff />
                                </span>
                            
                            </span>:<span></span>
                        }
                        {   gameState === 'timer' ?
                            <span className={s.yTimerContainer}>
                                <span className={s.gTimer}>
                                    <h1>{tiempo}</h1>
                                </span>
                            </span>:<span></span>
                        }

                        <span className={s.yPlayButtonContainer}>

                            <span className={s.gPlayButton}>
                                <Link to={`/${gameState}`} className={s.linkDeco}>
                                    <button className={s.btn} onClick={() => dispatch(targetStateAction(3))}>PLAY</button>
                                </Link>
                            </span>

                        </span>
                        
                        
                    </span>
                        <span className={s.yLinksContainer}>

                            <span className={s.gGitHub}>
                                <a href='https://github.com/Franh01' target='_blank' rel='noreferrer'><img src={gitImg} className={s.gitHub} alt='github-img'/></a>
                            </span>
                            
                        </span>
                </span>
            </span>
        </div>
    )    
}

export default Home;