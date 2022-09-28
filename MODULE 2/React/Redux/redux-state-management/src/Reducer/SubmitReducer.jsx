
function SubmitReducer(state={name:''},action) {
    switch (action.type) {
    case 'SUBMIT':
        return action.payload;
  
    default:
        return state;
  }
}

export default SubmitReducer;