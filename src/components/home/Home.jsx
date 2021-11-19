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
        return alert('Modo de juego no disponible')
        // dispatch(setGameState('survival'))
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
                                    <button className={s.gameModeBtns} onClick={() => survival()}>Survival</button>
                                    <button className={s.gameModeBtns} onClick={() => timer()}>Timer</button>
                                </span>
                            </span>

                        </span>

                        <span className={s.yDiffButtonsContainer}>

                            <span className={s.gDiffButtons}>
                                <button className={s.botones} onClick={() => easy()} id='easyButton'>Easy</button>
                                <button className={s.botones} onClick={() => normal()} id='normalButton'>Normal</button>
                                <button className={s.botones} onClick={() => hard()} id='hardButton'>Hard</button>
                            </span>

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