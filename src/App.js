// import { Route, Redirect } from "react-router-dom"
// import { Login } from "./auth/Login"
// import { Register } from "./auth/Register"
// import { userStorageKey } from "./auth/authSettings"

import logo from './logo.svg';
import './App.css';

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
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

export default App;



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
 