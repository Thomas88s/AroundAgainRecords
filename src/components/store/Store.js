import React from "react"
import { RecordCard } from "../records/RecordCard"
import { AppViews } from "../../AppViews"



// import { NavBar } from "../nav/NavBar";
import "./Store.css"

export const Store = () => (
    <>
        <h1>Around Again Records</h1>
       <AppViews />
       <h2>Records</h2>
       
        <article className="records">
            <RecordCard />
            <RecordCard />
            <RecordCard />
        </article>
    </>
)