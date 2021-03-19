import React from "react"
import { Route } from "react-router-dom"
import { AppViews } from "./AppViews"
// import { NavBar } from "./components/navigation/NavBar";
import "./Store.css"

export const Store = () => (
    <>
     <Route>
            
              {/* <NavBar /> */}
              <AppViews />
            

         
     </Route> 
    </>
)