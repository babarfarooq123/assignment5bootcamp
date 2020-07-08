import React, {useContext} from 'react';
import countercontext from './countContext';

function Child(){
    let count = useContext(countercontext)
    return (
    <div className="App">
        <h1>This is Count Using React Context API</h1>
        <h1>COUNT = {count[0]}</h1>
        <button onClick={()=>{count[1](count[0]+1)}}><strong>Change Count</strong></button>
    </div>

    );
}

export default Child