import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./components/Home"
import { RecordList } from "./components/records/RecordList"
import { RecordProvider } from "./components/records/RecordProvider"
import { RecordForm } from "./components/records/RecordForm"

export const AppViews = () => {
    return (
        <>
            
            <RecordProvider>
            <Route exact path="/">
                <Home />
                <RecordForm />
            </Route>

               <Route exact path="/records">
                    <RecordList />
               </Route>
            </RecordProvider>
        </>
    )
}