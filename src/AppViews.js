import React from "react"
import { Route } from "react-router-dom"
// import { Home } from "./Home"
import { RecordList } from "./components/records/RecordList"
import { RecordProvider } from "./components/records/RecordProvider"

export const AppViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            {/* <Route exact path="/">
                <Home />
            </Route> */}

            {/* Render the animal list when http://localhost:3000/animals */}
            <RecordProvider>
               <Route exact path="/records">
                    <RecordList />
               </Route>
            </RecordProvider>
        </>
    )
}