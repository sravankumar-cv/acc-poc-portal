import axios from "axios";

const LoginUser = user => {
    return dispatch => {
      console.log("fetching.....");
      axios
        .post("http://localhost:8080/login", user)
        .then(res => {
          console.log(res);
          dispatch({ type: "LOGIN", payload: {Response_data:res.data.data,messege:res.message }});
        })
        .catch(err => {
          console.log(err);
        });
    }
};


const RegisterPartner= partner=>{
  return dispatch =>{
    console.log('inside register partner...action handler...');
    axios.post("http://localhost:8080/users",partner).then(
      res=>{
        console.log(res);
        //dispatch({type:"REGISTER_PARTNER",payload:{Response_data:res.data.data,messege:res.message }})
      }
    ).catch(err=>console.log(err));
  }
}
export {LoginUser,RegisterPartner}