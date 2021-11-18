import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
// import { activarCronometro, definirTiempo } from "../../redux/actions/timerAction";

function Cronometro() {
    
    const tiempo = useSelector((state) => state.timerReducer.tiempo)
    // const dispatch = useDispatch();
    

    return (
        <div>
            <h1 id='segundero'>00</h1>
        </div>
    )
}

export default Cronometro;