const mj = {
    name:'',
    email:''
}

function SubmitReducer(state = mj,action) {
  switch (action.type) {
    case 'SUBMIT':
        return action.payload;
  
    default : return state;
  }
}

export default SubmitReducer;