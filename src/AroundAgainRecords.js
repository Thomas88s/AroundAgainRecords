// import { Route, Redirect } from "react-router-dom"
// import { Login } from "./auth/Login"
// import { Register } from "./auth/Register"
// import { userStorageKey } from "./auth/authSettings"

import logo from './logo.svg';
import './AroundAgainRecordsApp.css';

export function RecordApp() {
  return (
    <div className="RecordApp">
      <header className="RecordApp-header">
        <img src={logo} className="RecordApp-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="RecordApp-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default RecordApp;



// {/* <Route render={() => {
//   if (sessionStorage.getItem(userStorageKey)) {
//     return (
//       <>
//         {/* //Components that are rendered when the user is authenticated go inside this React fragment */}
//       </>
//     )
//   } else {
//     return <Redirect to="/login" />;
//   }
// }} />

// <Route path="/login">
// <Login />
// </Route>
// <Route path="/register">
// <Register />
// </Route> */}
 