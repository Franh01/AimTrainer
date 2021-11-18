import { useState } from 'react'
import { useDispatch } from 'react-redux'
import s from './CustomDiff.module.css'
import { diffButtonAction } from '../../redux/actions/diffAction';
import { definirTiempo } from '../../redux/actions/timerAction';



export default function CustomDiff() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch();

    function actualizar() {
        if (input < 0) {
            setInput('');
            return alert('No flashees papanatas')
        } 
        dispatch(diffButtonAction(input * 1000))
        dispatch(definirTiempo(input))
    }

    return (
        <div>
            <span className={s.boxMain}>
                <h3 class={s.untar}>Custom Difficulty</h3>
                <input type='number' placeholder='Seconds...' className={s.inputTxt} value={input}
                    onChange={
                        (event) => {
                        setInput(event.target.value)
                    }
                }
                ></input>
                <button className={s.btn} onClick={() => actualizar()}>SET</button>
            </span>
        </div>
    )
}