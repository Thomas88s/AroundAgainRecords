import React from "react"
import { Route } from "react-router-dom"
// import { Home } from "./Home"
import { RecordList } from "./Records/RecordList"
import { RecordProvider } from "./Records/RecordProvider"

export const RecordStoreViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            {/* <Route exact path="/">
                <Home />
            </Route> */}

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/records">
                <RecordProvider>
                    <RecordList />
                </RecordProvider>
            </Route>
        </>
    )
}