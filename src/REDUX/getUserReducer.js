const initialState={
    Name:{},
    
    user:{id:"",messege:"",role:""}
}
const getUserReducer=(state=initialState,action)=>{
    switch(action.type){
      case "LOGIN":
         console.log('inside reducer.....',action.payload)
         const d={...state,user:action.payload}
         console.log('state is setting to ',d);
        return { ...state, user:action.payload};
    default:
        return state  
    }
}
export default getUserReducer;