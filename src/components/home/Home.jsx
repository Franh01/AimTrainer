import s from './Home.module.css'
import {Link} from 'react-router-dom'
import { useDispatch} from 'react-redux';
import { diffButtonAction } from '../../redux/actions/diffAction';
// import { definirTiempo } from '../../redux/actions/timerAction';
import { targetStateAction } from '../../redux/actions/targetStatusAction';
import { definirTiempo } from '../../redux/actions/timerAction';

function Home() {

    function easy() {
        dispatch(diffButtonAction(60000))
        dispatch(definirTiempo(60))
    }
    function normal() {
        dispatch(diffButtonAction(30000))
        dispatch(definirTiempo(30))
    }
    function hard() {
        dispatch(diffButtonAction(10000))
        dispatch(definirTiempo(10))
    }

    const dispatch = useDispatch();
    return (
        <div className={s.main}>
            <span className={s.container}>
            <span className={s.caja}>
                    <h1 className={s.titulo}>Aim Trainer</h1>
                    <span>
                        <button autoFocus className={s.botones} onClick={() => easy()}>Easy(60s)</button>
                        <button className={s.botones} onClick={() => normal()}>Normal(30s)</button>
                        <button className={s.botones} onClick={() => hard()}>Hard(10s)</button>
                    </span>
                {/* <h2>Futuro cursor selector</h2> */}
                    <Link to='/game'><button className={s.btn} onClick={() => dispatch(targetStateAction(3))}>PLAY</button></Link>
            </span>
            </span>
        </div>
    )
}
export default Home;