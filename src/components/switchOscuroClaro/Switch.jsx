import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { setSwitchState } from '../../redux/actions/switchAction';
import s from './Switch.module.css'

export default function Switch() {
    let body = document.body

    const switchTheme = useSelector((state) => state.switchReducer.theme)
    console.log(switchTheme);
    const dispatch = useDispatch();//setSwitchState()
    function modoOsc() {        
        if (switchTheme === 'light') {
            dispatch(setSwitchState('dark'))
            body.style.background = '#2E4C6D'
        } else {
            dispatch(setSwitchState('light'))
            body.style.background = '#f3ecd48f'
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