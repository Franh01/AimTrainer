import s from "./Home.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { diffButtonAction } from "../../redux/actions/diffAction";
import { targetStateAction } from "../../redux/actions/targetStatusAction";
import { definirTiempo } from "../../redux/actions/timerAction";
import CustomDiff from "../CustomDiff/CustomDiff";
import gitImg from "../../img/github-icon.png";
import { setGameState } from "../../redux/actions/gameStateAction";
import { useSelector } from "react-redux";
import { WarningModal } from "../warningModal/WarningModal";
import { useState } from "react";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const diff = useSelector((state) => state.diffReducer.diffSegs);
  const tiempo = useSelector((state) => state.timerReducer.tiempo);
  const gameState = useSelector((state) => state.gameStateReducer.gameState);
  //funciones timer-------------------------
  function easy() {
    if (gameState === "timer") {
      dispatch(diffButtonAction(60000));
      dispatch(definirTiempo(60));
    } else {
      dispatch(diffButtonAction(2000));
    }
  }
  function normal() {
    if (gameState === "timer") {
      dispatch(diffButtonAction(30000));
      dispatch(definirTiempo(30));
    } else {
      dispatch(diffButtonAction(1000));
    }
  }
  function hard() {
    if (gameState === "timer") {
      dispatch(diffButtonAction(10000));
      dispatch(definirTiempo(10));
    } else {
      dispatch(diffButtonAction(500));
    }
  }
  //----------------------------------------
  //funciones para botones setGame
  function survival() {
    dispatch(setGameState("survival"));
    dispatch(diffButtonAction(2000));
  }
  function timer() {
    dispatch(setGameState("timer"));
    dispatch(diffButtonAction(60000));
  }
  const [warningOpacity, setWarningOpacity] = useState(0);
  let warningContent = "Must choose a gamemode!";
  const onStart = () => {
    if (gameState === "") {
      setWarningOpacity(100);
      setTimeout(() => {
        setWarningOpacity(0);
      }, 1500);
    } else {
      dispatch(targetStateAction(3));
    }
  };
  //----------------------------------------
  return (
    <div className={s.tMainContainer}>
      <span className={s.uMainContainer}>
        <span className={s.realMainContainer}>
          <span className={s.rMainContainer}>
            <span className={s.yTitleContainer}>
              <span className={s.gTitle} id="title">
                <h1 className={s.titulo}>Aim Trainer</h1>
              </span>
            </span>

            <span className={s.yGameModeContainer}>
              <span className={s.gGameModeTitle} id="gameModeTitle">
                <h3>Game mode:</h3>
              </span>

              <span className={s.gGameModeButtonsContainer}>
                <span className={s.gGameModeButtons}>
                  <button
                    className={s.gameModeBtns}
                    onClick={() => survival()}
                    style={{
                      background:
                        gameState === "survival" ? "rgb(248, 246, 131)" : null,
                    }}
                  >
                    Survival
                  </button>
                  <button
                    className={s.gameModeBtns}
                    onClick={() => timer()}
                    style={{
                      background:
                        gameState === "timer" ? "rgb(248, 246, 131)" : null,
                    }}
                  >
                    Timer
                  </button>
                </span>
              </span>
            </span>

            <span className={s.yDiffButtonsContainer}>
              {gameState === "timer" ? (
                <span className={s.gTimerDiffButtons}>
                  <button
                    className={s.botones}
                    onClick={() => easy()}
                    id="easyButton"
                    style={{
                      background: tiempo === 60 ? "rgb(255, 186, 82)" : null,
                    }}
                  >
                    Easy
                  </button>
                  <button
                    className={s.botones}
                    onClick={() => normal()}
                    id="normalButton"
                    style={{
                      background: tiempo === 30 ? "rgb(255, 186, 82)" : null,
                    }}
                  >
                    Normal
                  </button>
                  <button
                    className={s.botones}
                    onClick={() => hard()}
                    id="hardButton"
                    style={{
                      background: tiempo === 10 ? "rgb(255, 186, 82)" : null,
                    }}
                  >
                    Hard
                  </button>
                </span>
              ) : (
                <span></span>
              )}

              {gameState === "survival" ? (
                <span className={s.gSurvivalDiffButtons}>
                  <button
                    className={s.botones}
                    onClick={() => easy()}
                    id="easyButton"
                    style={{
                      background: diff === 2000 ? "rgb(255, 186, 82)" : null,
                    }}
                  >
                    Easy(2s)
                  </button>
                  <button
                    className={s.botones}
                    onClick={() => normal()}
                    id="normalButton"
                    style={{
                      background: diff === 1000 ? "rgb(255, 186, 82)" : null,
                    }}
                  >
                    Normal(1s)
                  </button>
                  <button
                    className={s.botones}
                    onClick={() => hard()}
                    id="hardButton"
                    style={{
                      background: diff === 500 ? "rgb(255, 186, 82)" : null,
                    }}
                  >
                    Hard(0.5s)
                  </button>
                </span>
              ) : (
                <span></span>
              )}
            </span>

            {gameState === "timer" ? (
              <span className={s.yCustomDiffContainer}>
                <span className={s.gCustomDiff}>
                  <CustomDiff />
                </span>
              </span>
            ) : null}
            {gameState === "timer" ? (
              <span className={s.yTimerContainer}>
                <span className={s.gTimer}>
                  <h1>{tiempo}</h1>
                </span>
              </span>
            ) : null}

            <span className={s.yPlayButtonContainer}>
              <span className={s.gPlayButton}>
                <Link to={`/${gameState}`} className={s.linkDeco}>
                  <button className={s.btn} onClick={() => onStart()}>
                    Start
                  </button>
                </Link>
                <WarningModal
                  opacity={warningOpacity}
                  content={warningContent}
                />
              </span>
            </span>
          </span>
          <span className={s.yLinksContainer}>
            <span className={s.gGitHub}>
              <a
                href="https://github.com/Franh01"
                target="_blank"
                rel="noreferrer"
              >
                <img src={gitImg} className={s.gitHub} alt="github-img" />
              </a>
            </span>
            <span className={s.aboutContainer}>
              <button className={s.aboutBtn} onClick={() => navigate("/about")}>
                <h3 className={s.aboutTxt}>About</h3>
              </button>
            </span>
          </span>
        </span>
      </span>
    </div>
  );
}

export default Home;
