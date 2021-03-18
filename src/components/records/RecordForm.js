import React, { useContext, useEffect, useState } from "react"
import { RecordContext } from "./RecordProvider"
import "./Record.css"
import { useHistory } from 'react-router-dom';

export const RecordForm = () => {
    const { addRecord, getRecords } = useContext(RecordContext)

    const [record, setRecord] = useState({
        name: "",
        artist: "",
        
      });
      useEffect(() => {
        getRecords()
    }, [])

      const history = useHistory();

    
  
    
    // useEffect(() => {
    //   getRecords().then(getRecords)
    // }, [])

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
      /* Animal is an object with properties.
      Set the property to the new value
      using object bracket notation. */
      newRecord[event.target.id] = selectedVal
      // update state
      setRecord(newRecord)
    }

    const handleClickSaveRecord = (event) => {
      event.preventDefault() //Prevents the browser from submitting the form

        addRecord(record)
        .then(() => history.push("/records"))
    }
   

    return (
      <form className="recordForm">
          <h2 className="recordForm__title">New Record</h2>
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
            onClick={handleClickSaveRecord}>
            Save Record
          </button>
      </form>
    )
}
