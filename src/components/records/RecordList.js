import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { RecordContext } from "./RecordProvider"
import { RecordCard } from "./RecordCard.js"
import "./Record.css"


export const RecordList = () => {
    //   RecordContext is passed and changes state when `getRecords()` is invoked
    const { records, getRecords } = useContext(RecordContext)
    // This gets the user id from session storage 
    const currentUserId = parseInt(sessionStorage.getItem("app_user_id"))
    // This matches the user with thier records through the currentUserId and userId
    const userRecords = records.filter(records => currentUserId === records.userId)
    const history = useHistory()
// tells React that your component needs to call getRecords() after render
// getRecords() is the API call for the recordss 
useEffect(() => {
    getRecords()
}, [])

return (
    <>
      <div className="records">
        <h3>Records</h3>
      <button className= "recordButton" onClick={() => {history.push("/records/create")}}>
            Add Record
          </button>
        {
            // .map() is creating a new array populated with the results of calling the record function on every element in the calling array
            userRecords.map(record => {
                // return the properties of animal
                return <RecordCard key={record.id} record={record} />
            })
        }
      </div>
    </>
  )
}