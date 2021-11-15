import s from './Home.module.css'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <div className={s.main}>
            <span className={s.container}>
            <span className={s.caja}>
                <h1 className={s.titulo}>Aim Trainer</h1>
                <h2>Futuro cursor selector</h2>
                <Link to='/game'><button className={s.btn}>PLAY</button></Link>
            </span>
            </span>
        </div>
    )
}
// russianVar = 'Привет'
export default Home;