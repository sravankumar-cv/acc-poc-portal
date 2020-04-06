const initialState={
    Name:{},
    RESPONSE:{}
}
const getUserReducer=(state=initialState,action)=>{
    switch(action.type){
      case "LOGIN":
        return { ...state, RESPONSE: action.payload };
    default:
        return state  
    }
}
export default getUserReducer;