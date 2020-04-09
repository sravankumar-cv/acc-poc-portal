import axios from "axios";

const LoginUser = user => {
    return dispatch => {
      console.log("fetching.....",user);
      axios
        .post("http://localhost:8080/login",{email:user.email,password:user.password})
        .then(res => {
          console.log("the response data is ",res.data.data[0]._id);
          dispatch({ type: "LOGIN", payload: {id:res.data.data[0]._id,messege:res.data.message,role:res.data.data[0].role}});
        })
        .catch(err => {
          console.log(err);
        });
    //  
     }
};

const RegisterUser=User=>{
  return dispatch=>{
    console.log('inside action for registering user',User);
    const formdata=new FormData();
    formdata.append('name',User.name);
    formdata.append('password',User.password);
    formdata.append('email',User.email);
    formdata.append('phone_number',User.phone_number);
    formdata.append('files',User.files);
    formdata.append('role',User.role);
    formdata.append('category',User.category);
    formdata.append('subcategory',User.subcategory);
    // axios.post('http://localhost:8080/users',{
    //   name:User.name,
    //   password:User.password,
    //   email:User.email,
    //   phone_number:User.phone_number,
    //   files:User.files,
    //   role:User.role,
    //   category:User.category,
    //   subcategory:User.subcategory
    
    //  }).then(res=>console.log(res)).catch(err=>console.log(err));
    axios.post('http://localhost:8080/users',formdata).then(res=>console.log(res)).catch(err=>console.log(err));
  }
}

const RegisterPartner= partner=>{
  return dispatch =>{
    console.log('inside action for partner ',partner);
    console.log('inside register partner...action handler...');
    const temp={
      name:partner.firstName,
      email:partner.email,
      password:partner.Password,
      phone_number:partner.PhoneNumber,
      category:partner.type.category,
      subcategory:partner.type.Expertise,
      files:partner.image,
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
export {LoginUser,RegisterPartner,RegisterUser}