const initialState={
    Name:{}
}
const getUserReducer=(state=initialState,action)=>{
    switch(action.type){
      case "LOGIN":
        return { ...state, Name: action.payload };
    default:
        return state  
    }
}
export default getUserReducer;