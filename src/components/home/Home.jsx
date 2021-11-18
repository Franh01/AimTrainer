import s from './Home.module.css'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { diffButtonAction } from '../../redux/actions/diffAction';

function Home() {

    const diff = useSelector((state) => state.diffReducer.diffSegs);

    console.log(diff)
    

    const dispatch = useDispatch();
    return (
        <div className={s.main}>
            <span className={s.container}>
            <span className={s.caja}>
                    <h1 className={s.titulo}>Aim Trainer</h1>
                    <span>
                        <button autoFocus className={s.botones} onClick={() => dispatch(diffButtonAction(1000))}>Easy</button>
                        <button className={s.botones} onClick={() => dispatch(diffButtonAction(500))}>Normal</button>
                        <button className={s.botones} onClick={() => dispatch(diffButtonAction(200))}>Hard</button>
                    </span>
                {/* <h2>Futuro cursor selector</h2> */}
                <Link to='/game'><button className={s.btn}>PLAY</button></Link>
            </span>
            </span>
        </div>
    )
}
export default Home;