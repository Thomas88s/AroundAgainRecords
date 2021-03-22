import React, { useContext, useEffect, useState } from "react"
import { RecordContext } from "./RecordProvider"
import "./Record.css"
import { useHistory, useParams } from 'react-router-dom';

export const RecordForm = () => {
    const { addRecord, getRecords, getRecordById, updateRecord } = useContext(RecordContext)

    const currentUserId = parseInt(sessionStorage.getItem("app_user_id"))   

    const [record, setRecord] = useState({
        userId: currentUserId,
        name: "",
        artist: "",
        
      });

      const [isLoading, setIsLoading] = useState();
      const { recordId } = useParams();

      const history = useHistory();  

      useEffect(() => {
        getRecords()
      }, [])  

  
  
    const handleControlledInputChange = (event) => {
      /* When changing a state object or array,
      always create a copy, make changes, and then set state.*/
      const newRecord = { ...record }
      let selectedVal = event.target.value
      
     
      newRecord[event.target.id] = selectedVal
      // update state
      setRecord(newRecord)
    }

    const handleClickSaveEvent = () => {
     
      if(record.name === "") {
        window.alert("Fill all fields")
    }else{
        setIsLoading(true);
        if (recordId)  {
            
            updateRecord({
                userId: currentUserId,
                name: record.name,
                artist: record.artist,
                id: record.id
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
          <h2 className="RecordTitle">{recordId ? "Edit Record" : "New Record"}</h2>
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
            onClick={event => {
              event.preventDefault()
              handleClickSaveEvent()
            }}>
            {recordId ? "Save Record" : "Add Record"}
          </button>
      </form>
    )
}
