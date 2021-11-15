import s from './Target.module.css'
import {useState} from 'react'

function Target({diff}) {
    const [stateButton, setStateButton] = useState(true);
    const [counter, setCounter] = useState(0);
    

    
    function cerrar() {
        
        if (diff === '') {
            return alert('Select Difficulty')
        } else if (stateButton === true) {
            
            setStateButton(false)
            setTimeout(() => {
                setStateButton(true)
            }, diff);
        } else {
            setStateButton(true)
        }
        setCounter(counter + 1)
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

    // let valor3 = (function assignedRight() {
    //     let valor3 = Math.random() * 50 * 20;
    //     return valor3;
    // })()

    // let valor4 = (function assignedBottom() {
    //     let valor4 = Math.random() * 50 * 50;
    //     return valor4;
    // })()



    console.log(stateButton)
        return (
            <div>
                <span>
                Counter: {counter}
                </span>
                {stateButton === true
                    ?<span id='target'
                    style={{
                        position: 'absolute',
                        top: valor1 + 'px',
                        left: valor2 + 'px',
                        // right: valor3 + 'px',
                        // bottom: valor4 + 'px'
                        }}>
                        
                    <button className={s.btn} onClick={() => cerrar()}>
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