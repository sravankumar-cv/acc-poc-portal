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
    console.log('inside action for partner ',partner);
    console.log('inside register partner...action handler...');
    const temp={
      name:partner.firstName,
      email:partner.email,
      phone_number:partner.PhoneNumber,
      category:partner.type.category,
      subcategory:partner.type.Expertise,
      filess:partner.image,
      role:"p"
    }
    axios.post("http://localhost:8080/users",temp).then(
      res=>{
        console.log(res);
        //dispatch({type:"REGISTER_PARTNER",payload:{Response_data:res.data.data,messege:res.message }})
      }
    ).catch(err=>console.log(err));
  }
}
export {LoginUser,RegisterPartner}