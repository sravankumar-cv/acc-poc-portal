import React from 'react';
import './App.css';
import Routes from "./Route";
import {Provider} from "react-redux";
import store from "./REDUX/store";
// import NavBar from './components/headerComponents/nav';
// import registerPartner from './components/register-partner/register-partner';
// import {
//   BrowserRouter,
//   Switch,
//   Route
// } from "react-router-dom";
// import partnerProfile from './components/partner-profile/profile';
// import history from "./history";
function App() {
  return (
    // <BrowserRouter history={history}>
    <Provider store={store}>
     <div className="App">
     {/* <Route exact path="/" component={NavBar} />
     <Switch>
     <Route exact path="/registerPartner" component={registerPartner} />
     <Route exact path="/:partnerProfile" component={partnerProfile} />
     </Switch>
       </div>
    </BrowserRouter> */}
    <Routes/>  
    </div>
    </Provider>
  );
}

export default App;
