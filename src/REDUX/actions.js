import axios from "axios";

const LoginUser = user => {
    return dispatch => {
      console.log("fetching.....");
      axios
        .get("https://jsonplaceholder.typicode.com/users", {
          params: { email: user.userName }
        })
        .then(res => {
          console.log(res);
          dispatch({ type: "LOGIN", payload: res.data[0].name });
        })
        .catch(err => {
          console.log(err);
        });
    }
};
export {LoginUser}