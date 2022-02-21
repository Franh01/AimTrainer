import { useState } from "react";
import { useDispatch } from "react-redux";
import s from "./Switch.module.css";
import setSwitchState from "../../redux/actions/switchAction";

export default function Switch() {
  let body = document.body;
  const dispatch = useDispatch();

  const [actualTheme, setActualTheme] = useState(
    window.localStorage.colorSetting
  );
  body.style.background = actualTheme;
  dispatch(setSwitchState(actualTheme));

  function modoOsc() {
    if (actualTheme === "#f3ecd48f") {
      localStorage.setItem("colorSetting", "#2E4C6D");
      setActualTheme("#2E4C6D");
      dispatch(setSwitchState("#2E4C6D"));
      body.style.background = "#2E4C6D";
    } else {
      localStorage.setItem("colorSetting", "#f3ecd48f");
      setActualTheme("#f3ecd48f");
      dispatch(setSwitchState("#f3ecd48f"));
      body.style.background = "#f3ecd48f";
    }
  }
  return (
    <div>
      <span className={s.flexBoxSwitch}>
        <label className={s.switch}>
          <input
            type="checkbox"
            checked={actualTheme === "#2E4C6D" ? true : false}
            id="switch"
            onChange={() => modoOsc()}
          ></input>
          <span className={s.slider}></span>
        </label>
      </span>
    </div>
  );
}
