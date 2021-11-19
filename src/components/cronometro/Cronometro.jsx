import { useSelector } from "react-redux";
import s from './Cronometro.module.css'


function Cronometro() {
    const tiempo = useSelector((state) => state.timerReducer.tiempo)
    return (
        <div>
            <h1 id='segundero' style={{
                                userSelect: 'none',
                                marginTop: '39px',
                                marginLeft: '12px',
                                position: 'absolute'}} className={s.cronometro}>{tiempo}</h1>
        </div>
    )
}

export default Cronometro;