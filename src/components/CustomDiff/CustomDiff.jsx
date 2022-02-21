import { useState } from "react";
import { useDispatch } from "react-redux";
import s from "./CustomDiff.module.css";
import { diffButtonAction } from "../../redux/actions/diffAction";
import { definirTiempo } from "../../redux/actions/timerAction";
import { WarningModal } from "../warningModal/WarningModal";

export default function CustomDiff() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const [warningOpacity, setWarningOpacity] = useState(0);
  let warningContent = "The time cant be lower than 0!";

  function actualizar() {
    if (input < 0 || input === "" || input.includes("e") || input === ".") {
      setInput("");
      setWarningOpacity(100);
      setTimeout(() => {
        setWarningOpacity(0);
      }, 1500);
    } else {
      dispatch(diffButtonAction(Math.round(input) * 1000));
      dispatch(definirTiempo(Math.round(input)));
    }
  }

  return (
    <div>
      <span className={s.customDiffFlex}>
        <span className={s.gCustomDiffTitle}>
          <h3 className={s.untar}>Custom Difficulty</h3>
        </span>

        <span className={s.gCustomDiffInput}>
          <input
            type="number"
            placeholder="Seconds..."
            className={s.inputTxt}
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
            }}
          ></input>
        </span>

        <span className={s.gSetButton}>
          <button className={s.btn} onClick={() => actualizar()}>
            SET
          </button>
          <WarningModal opacity={warningOpacity} content={warningContent} />
        </span>
      </span>
    </div>
  );
}
