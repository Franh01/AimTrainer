import { useSelector } from "react-redux";
import s from './Cronometro.module.css'
import { useState } from "react";


function Cronometro() {
    //switch colors
    const switchColors = useSelector((state) => state.switchReducer.theme);
    const [colorSwitch, setColorSwitch] = useState('white');
    if (switchColors === 'light' && colorSwitch !== 'black') {
        setColorSwitch('black')
    } else if (switchColors === 'dark' && colorSwitch !== 'white') {
        setColorSwitch('white')
    }
    const tiempo = useSelector((state) => state.timerReducer.tiempo)
    return (
        <div>
            <h1 id='segundero' style={{
                                userSelect: 'none',
                                marginTop: '39px',
                                marginLeft: '12px',
                                position: 'absolute',
                                color: colorSwitch
            }} className={s.cronometro}>{tiempo}</h1>
        </div>
    )
}

export default Cronometro;