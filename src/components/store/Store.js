import React from "react"
// import { RecordCard } from "../records/RecordCard"
import { AppViews } from "../../AppViews"
import { NavBar } from "../navigation/NavBar";

import "./Store.css"
// Displays the RecordCards and Text in the ListRecords menu
export const Store = () => (
    <>
        <NavBar />
        <AppViews />
        <h1>Around Again Records</h1>
       
       {/* <h2>Records</h2>
        <article className="records">
            <RecordCard />
            <RecordCard />
            <RecordCard />
        </article> */}
    </>
)