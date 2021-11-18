import s from './Target.module.css'
import {useState} from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { suma_contador_action } from '../../redux/actions/contadorAction';

function Target() {
    //state de la diff
    const diff = useSelector((state) => state.diffReducer.diffSegs);
    //dispatch y state para el counter
    const dispatch = useDispatch();
    const contadorReducer = useSelector((state) => state.contadorReducer.contador)


    const [stateButton, setStateButton] = useState(true);//estado del target
    
    
    function targetClick() {
        if (stateButton === true) {
            
            setStateButton(false)
            setTimeout(() => {
                setStateButton(true)
            }, diff);
        } else {
            setStateButton(true)
        }
        dispatch(suma_contador_action())
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

    
        return (
            <div>
                <span>
                Counter: {contadorReducer} 
                </span>
                {stateButton === true
                    ?<span id='target'
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
                : <span></span>}
                

                
            </div>
        )
    
}

export default Target;