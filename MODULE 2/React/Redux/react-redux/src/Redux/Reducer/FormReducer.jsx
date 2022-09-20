function FormReducer(state = {name: '' , email: ''},action) {
 switch (action.type){
    case 'LOGIN':
        return action.payload;

    default : return state;
 }
}

export default FormReducer;