import React, { useContext, useEffect, useState } from "react"
import { RecordContext } from "./RecordProvider"
import "./Record.css"
import { useHistory, useParams } from 'react-router-dom';

export const RecordForm = () => {
    const { addRecord, getRecords, getRecordById, updateRecord } = useContext(RecordContext)

    const currentUserId = parseInt(sessionStorage.getItem("shopUser"))   

    const [record, setRecord] = useState({
        userID: currentUserId,
        name: "",
        artist: "",
        
      });

      const [isLoading, setIsLoading] = useState(true);
      const { recordId } = useParams();

      const history = useHistory();  

      useEffect(() => {
        getRecords()
      }, [])  

  
    /*
    Reach out to the world and get customers state
    and locations state on initialization, so we can provide their data in the form dropdowns
    */

    //when a field changes, update state. The return will re-render and display based on the values in state
        // NOTE! What's happening in this function can be very difficult to grasp. Read it over many times and ask a lot questions about it.
    //Controlled component
    const handleControlledInputChange = (event) => {
      /* When changing a state object or array,
      always create a copy, make changes, and then set state.*/
      const newRecord = { ...record }
      let selectedVal = event.target.value
      // forms always provide values as strings. But we want to save the ids as numbers. This will cover both customer and location ids
      if (event.target.id.includes("Id")) {
        selectedVal = parseInt(selectedVal)
      }
      /* 
      Set the property to the new value
      using object bracket notation. */
      newRecord[event.target.id] = selectedVal
      // update state
      setRecord(newRecord)
    }

    const handleClickSaveEvent = (event) => {
      event.preventDefault() //Prevents the browser from submitting the form

   
      if(record.name === "") {
        window.alert("Fill all fields")
    }else{
        setIsLoading();
        if (recordId)  {
            
            updateRecord({
                userId: 1,
                name: record.name,
                artist: record.artist,
                id: parseInt(recordId)
            })
            .then(() => history.push(`/records`))
        } else {
            addRecord(record)
            .then(() => history.push(`/records`))
        }
  }
}
        
    useEffect(() => {
      getRecords().then(() => {
        if (recordId) {
          getRecordById(recordId)
          .then(record => {
              setRecord(record)
              setIsLoading(false)
          })
        } else {
          setIsLoading(false)
        }
      })
    }, [])
 
   

    return (
      <form className="recordForm">
          {/* <h2 className="recordFormTitle">New Record</h2> */}
          <h2 className="RecordTitle">{recordId ? "Edit Record" : "Add Record"}</h2>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="name">Record name:</label>
                  <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Record name" value={record.name}/>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="artist">Artist:</label>
                  <input type="text" id="artist" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Record Artist" value={record.artist}/>
              </div>
          </fieldset>
          <button className="btn btn-primary"
          disabled={isLoading}
            onClick={handleClickSaveEvent}>
            Save Record
          </button>
      </form>
    )
}
