import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./components/Home"
import { RecordList } from "./components/records/RecordList"
import { RecordProvider } from "./components/records/RecordProvider"
import { RecordForm } from "./components/records/RecordForm"

export const AppViews = () => {
    return (
        <>
                <Home />
        <RecordProvider>
            <Route exact path="/records">
                <RecordList />
            </Route>
            <Route exact path="/records/create">
                <RecordForm />
            </Route>
            <Route exact path="/records/edit/:recordId(\d+)">
                <RecordForm />
            </Route>
        </RecordProvider>
        </>
    )
}