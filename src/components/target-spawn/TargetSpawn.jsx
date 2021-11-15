import Target from '../target/Target'
import {useState} from 'react'

function TargetSpawn(props) {
    const [diff, setDiff] = useState('');
    
    function handleChange(e) {
        
        setDiff(e.target.value);
    }
    return (
        <div>
            <select name="Difficulty" id="Difficulty" onChange={handleChange}>
                <option value=''>Select Difficulty</option>
                <option value={1000}>Easy</option>
                <option value={500}>Normal</option>
                <option value={200}>Hard</option>
            </select>
            <Target diff={diff}/>
        </div>
    )
}

export default TargetSpawn;