import React, { useContext, useEffect } from "react"
import { RecordContext } from "./RecordProvider"
import { useHistory } from "react-router-dom" 
import { RecordCard } from "./RecordCard.js"
import "./Record.css"

export const RecordList = () => {
//   RecordContext is passed and changes state when `getAnimals()` is invoked
    const { records, getRecords } = useContext(RecordContext)

    const history = useHistory()


// tells React that your component needs to call getRecords() after render
// getRecords() is the API call for the animals 
useEffect(() => {
    console.log("RecordList: useEffect - getRecords")
    getRecords()
}, [])

return (
    <div className="records">
        <h2>Records</h2>
		      <button onClick={() => {history.push("/records/create")}}>
            Add Record
          </button>
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