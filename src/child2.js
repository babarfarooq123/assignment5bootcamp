import React, {useReducer} from 'react';
import countReducer from './countReducer';

function Child2(){
    let [state, dispatch] = useReducer(countReducer,0)
    return (
        <div>
            <h1>This is Count Using React Reducer</h1>
            <h1>Count = {state}</h1>
            <button onClick={()=>{dispatch('INCREMENT')}}><strong>Change Count Using Reducer</strong></button>
        </div>
    );
}

export default Child2