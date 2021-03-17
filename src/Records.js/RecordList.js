import React, { useContext, useEffect } from "react"
import { RecordContext } from "./RecordProvider"
import { RecordCard } from "./RecordCard"
import "./Animal.css"

export const RecordList = () => {
//   RecordContext is passed and changes state when `getAnimals()` is invoked
    const { records, getRecords } = useContext(RecordContext)

// tells React that your component needs to call getRecords() after render
// getRecords() is the API call for the animals 
useEffect(() => {
    console.log("RecordList: useEffect - getRecords")
    getRecords()
}, [])

return (
    <div className="records">
        {console.log("RecordList: Render", records)}
        {
            // .map() is creating a new array populated with the results of calling the record function on every element in the calling array
            records.map(record => {
                // return the properties of animal
                return <RecordCard key={record.id} record={record} />
            })
        }
    </div>
  )
}