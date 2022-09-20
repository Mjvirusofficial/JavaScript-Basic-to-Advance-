const mj = 1000;
function Incr_Decr_Reducer(state = mj,action) {
  switch (action.type) {
    case 'INCREMENT':
        return state + 1500;
  
    case 'DECREMENT':
        return state - 500;

    default:
        return state;
  }
}

export default Incr_Decr_Reducer;