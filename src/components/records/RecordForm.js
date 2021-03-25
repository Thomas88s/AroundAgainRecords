import React, { useContext, useEffect, useState } from "react"
import { RecordContext } from "./RecordProvider"
import "./Record.css"
import { useHistory, useParams } from 'react-router-dom';


// Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree
export const RecordForm = () => {
    const { addRecord, getRecords, getRecordById, updateRecord } = useContext(RecordContext)

    const currentUserId = parseInt(sessionStorage.getItem("app_user_id"))   

    const [record, setRecord] = useState({
        userId: currentUserId,
        name: "",
        artist: "",
        
      });

      const [isLoading, setIsLoading] = useState();
      // Returns an object of the params for the route rendered 
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
     
      if(record.name === "" || record.artist === "") {
        window.alert("Missed a box, Please fill")
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
 
    // the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a “controlled component

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
