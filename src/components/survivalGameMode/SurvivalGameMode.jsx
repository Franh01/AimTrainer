import s from "./SurvivalGameMode.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  contador_reset,
  suma_contador_action,
} from "../../redux/actions/contadorAction";
import { targetStateAction } from "../../redux/actions/targetStatusAction";
import { Link } from "react-router-dom";
import { diffButtonAction } from "../../redux/actions/diffAction";
import { useState } from "react";
import longBackArrowGreen from "../../img/longBackArrowGreen.svg";

function Target() {
  //state de la diff
  const diff = useSelector((state) => state.diffReducer.diffSegs);
  //dispatch y state para el counter
  const dispatch = useDispatch();
  const contadorReducer = useSelector(
    (state) => state.contadorReducer.contador
  );
  //estado del target
  const targetStatus = useSelector((state) => state.targetStatusReducer.shown);
  //
  const [contador, setContador] = useState("");
  //
  //logica del juego
  function targetClick() {
    if (targetStatus === 1) {
      dispatch(targetStateAction(2));
      dispatch(targetStateAction(1));
      //aca deberia reiniciar el contador
      clearTimeout(contador);
      //aca deberia empezar el contador con la diff
      let id = setTimeout(() => {
        dispatch(targetStateAction(4));
      }, diff);
      setContador(id);
    } else {
      dispatch(targetStateAction(1));
    }
    dispatch(suma_contador_action());
  }

  //boton para comenzar el juego y el timer TARGET PLAY
  function targetPlay() {
    dispatch(targetStateAction(1));
    dispatch(contador_reset());
  }
  //playAgain button
  function playAgain() {
    dispatch(targetStateAction(3));
    dispatch(contador_reset());
    // document.getElementById('segundero').innerHTML = `${tiempo}`;
  }

  let valor1 = (function assignedTop() {
    let randomValue = Math.random() * 50 * 20;
    if (randomValue > 750) {
      return 750;
    } else {
      return randomValue;
    }
  })();

  let valor2 = (function assignedLeft() {
    let valor2 = Math.random() * 50 * 25;
    return valor2;
  })();

  //toHome
  function toHome() {
    dispatch(diffButtonAction(diff));
  }
  const colorTheme = useSelector((state) => state.switchReducer.theme);
  return (
    <div>
      <span className={s.pipirulo}>
        <Link to="/">
          <button className={s.homeBtn} onClick={() => toHome()}>
            <img
              src={longBackArrowGreen}
              alt="homeBtn"
              style={{ width: "50px" }}
            />
          </button>
        </Link>
        <h1
          style={{
            position: "absolute",
            left: "25px",
            top: "39px",
            color: colorTheme === "#f3ecd48f" ? "black" : "white",
          }}
        >
          {contadorReducer}
        </h1>
      </span>
      {targetStatus === 1 ? (
        <span
          id="target"
          style={{
            position: "absolute",
            top: valor1 + "px",
            left: valor2 + "px",
          }}
        >
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
      ) : targetStatus === 4 ? ( //status GAMEOVER --------------
        <span>
          <span className={s.gameOverContainer}>
            <span className={s.gameOverBox}>
              <h1 className={s.gameOverContent}>GAME OVER</h1>
              <Link to="/">
                <button className={s.changeDiffBtn}>Change difficulty</button>
              </Link>
              <h2 className={s.gameOverContent}>Score: {contadorReducer}</h2>
              <button className={s.playAgainBtn} onClick={() => playAgain()}>
                Play Again
              </button>
            </span>
          </span>
        </span>
      ) : (
        //status 3 default //targetplay------------------
        <span className={s.gameOverContainer}>
          <span style={{ marginTop: "150px" }}>
            <span>
              <h1
                className={s.startBtn}
                style={{
                  color: colorTheme === "#f3ecd48f" ? "black" : "white",
                }}
              >
                START
              </h1>
            </span>
            <button className={s.playBtn} onClick={() => targetPlay()}>
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
        </span>
      )}
    </div>
  );
}

export default Target;
