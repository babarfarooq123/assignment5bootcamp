const countReducer = (state,action)=>{
    switch(action){
        case 'INCREMENT':
            state = state+1
            return state
        case 'DECREMENT':
            state = state - 1
            return state
    }
}

export default countReducer