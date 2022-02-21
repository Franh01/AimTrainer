import React from "react";
import { useNavigate } from "react-router-dom";
import s from "./About.module.css";
import longBackArrow from "../../img/longBackArrow.svg";

export const About = () => {
  const navigate = useNavigate();
  return (
    <div className={s.container}>
      <div className={s.aboutDiv}>
        <div className={s.goBack}>
          <button className={s.goBackBtn} onClick={() => navigate("/")}>
            <img
              src={longBackArrow}
              alt="goBackIcon"
              style={{ width: "50px" }}
            />
          </button>
        </div>
        <div className={s.title}>
          <h1>About Aim Trainer</h1>
        </div>
        <div className={s.textContainer}>
          <p>
            Aim trainer is a game which you can select two different game modes,
            in survival you must click each objective to keep alive, you have
            three difficulties, easy when the timer has 2 seconds on the clock,
            normal with 1 second and finally hard with 0.5 seconds.
          </p>
          <p>
            Then we have timer mode, now you have to try to make the most score
            possible in a limited time. Here you can also select three default
            game modes, easy with 60 seconds, normal with 30 seconds, hard with
            10, and an extra custom where you can select any time you want.
          </p>
          <p> You can also select night mode with the switch in top right.</p>
        </div>
      </div>
    </div>
  );
};
