const mj = 0;
function PlusMinusReducer(state = mj, action) {
  switch (action.type) {
    case 'INCR':
        return state + 1;
  
    case 'DECR':
       return state - 1;

    default:
        return state;
  }
}

export default PlusMinusReducer;