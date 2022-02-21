import { useSelector } from "react-redux";
import s from "./Cronometro.module.css";

function Cronometro() {
  //switch colors
  const colorTheme = useSelector((state) => state.switchReducer.theme);
  const tiempo = useSelector((state) => state.timerReducer.tiempo);
  return (
    <div>
      <h1
        id="segundero"
        style={{
          userSelect: "none",
          marginTop: "39px",
          marginLeft: "12px",
          position: "absolute",
          color: colorTheme === "#f3ecd48f" ? "black" : "white",
        }}
        className={s.cronometro}
      >
        {tiempo}
      </h1>
    </div>
  );
}

export default Cronometro;
