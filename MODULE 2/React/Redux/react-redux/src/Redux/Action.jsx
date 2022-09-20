export function Increment(){
    return {
        type: 'INCR'
    }
}

export function Decrement(){
    return {
        type: 'DECR'
    }
}

export function Login(data){
    return {
        type: "LOGIN",
        payload:data
    }
}