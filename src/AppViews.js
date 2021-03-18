import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./components/Home"
import { RecordList } from "./components/records/RecordList"
import { RecordProvider } from "./components/records/RecordProvider"

export const AppViews = () => {
    return (
        <>
            
            <Route exact path="/">
                <Home />
            </Route>

            <RecordProvider>
               <Route exact path="/records">
                    <RecordList />
               </Route>
            </RecordProvider>
        </>
    )
}