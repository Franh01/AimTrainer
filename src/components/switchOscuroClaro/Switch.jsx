import { useDispatch } from 'react-redux'
import { setSwitchState } from '../../redux/actions/switchAction';
import s from './Switch.module.css'

export default function Switch() {
    let body = document.body
    let value = 5
    const dispatch = useDispatch();
    function modoOsc() {
        if (value === 5) {
            value = 2
            body.style.background = '#2E4C6D'//dark btw
            dispatch(setSwitchState('dark'))
        } else {
            value = 5
            body.style.background = '#f3ecd48f'
            dispatch(setSwitchState('light'))
        }
    }
    
    return (
        <div>
            <label className={s.switch}>
                <input type="checkbox" id='switch' onChange={() => modoOsc()}></input>
                <span className={s.slider}></span>
            </label>
        </div>
    )
}