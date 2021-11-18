import s from './Switch.module.css'

export default function Switch() {
    let body = document.body
    let value = 5
    
    function modoOsc() {
        console.log('switch')
        if (value === 5) {
            value = 2
            body.style.background = '#1a18138f'
        } else {
            value = 5
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