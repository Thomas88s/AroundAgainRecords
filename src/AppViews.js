import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./components/Home"
import { RecordList } from "./components/records/RecordList"
import { RecordProvider } from "./components/records/RecordProvider"
import { RecordForm } from "./components/records/RecordForm"
import { CollectionList } from "./components/collections/CollectionList"
import { TitleSearch } from "./components/collections/CollectionSearch"
import { ArtistSearch } from "./components/collections/CollectionSearch"


// This exports components that need rendering
export const AppViews = () => {
    return (
        // This renders the UI when its path matches the current URL
        // all communication between sibling component must go through their common ancestor
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
            <Route exact path="/collection">
                <TitleSearch />
                <ArtistSearch />
                <CollectionList />
            </Route>
        </RecordProvider>
        </>
    )
}