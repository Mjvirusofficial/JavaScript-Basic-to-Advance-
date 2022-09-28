const mj = 0;
function IncrementReducer(state = mj,action) {
  switch (action.type) {
    case 'INCR':
        return state + 1;
  
    default:
        return state;
  }
}

export default IncrementReducer;