import React from "react"

import { AppViews } from "./AppViews"
// import { NavBar } from "./components/navigation/NavBar";
import "./Store.css"
import { Route, Redirect } from "react-router-dom"
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
import { userStorageKey } from "./components/auth/authSettings"
import { NavBar } from "./components/navigation/NavBar"
export const Store = () => (
    <>
  

     <Route render={() => {
         if (sessionStorage.getItem(userStorageKey)) {
          return (
              <>
              <NavBar />
              <AppViews />
             
            </>
          )
        } else {
            return <Redirect to="/login" />;
        }
    }} />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>

    </>
)