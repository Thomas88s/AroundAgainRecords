import React, { useState, createContext } from "react"

// Context provides a way to share the values of props that are required by many components between components
export const RecordContext = createContext()


// establishes what data can be used
// props passes JSX attributes and children to this component as a single object
export const RecordProvider = (props) => {
// useState defines the variable which will hold the data and then defines the function to be used to modify that state
    const [records, setRecords] = useState([])
    const [ searchTerms, setSearchTerms ] = useState("")

    // performs state transitions in your database
    // NEEDS MORE CLARIFING!!!!!
    const getRecords = () => {
    return fetch("http://localhost:8088/records")
      .then(res => res.json())
      .then(setRecords)
}
const viewCollection = () => {
    return fetch("http://localhost:8088/collection")
      .then(res => res.json())
      .then(setRecords)
}

const getRecordById = (id) => {
    return fetch(`http://localhost:8088/records/${id}`)
    .then(res => res.json())
    }

//   NEEDS NOTES!!!!
    const addRecord = recordObj => {
    return fetch("http://localhost:8088/records", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(recordObj)
    })
    .then(getRecords)
}

const deleteRecord = recordId => {
    return fetch(`http://localhost:8088/records/${recordId}`, {
        method: "DELETE"
    })
        .then(getRecords)
}

const updateRecord = record => {
    return fetch(`http://localhost:8088/records/${record.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(record)
    })
      .then(getRecords)
  }

return (
    // context provider allows any child elements to access states and functions
    <RecordContext.Provider value={{
        records, getRecords, addRecord, getRecordById, deleteRecord, updateRecord, viewCollection, searchTerms,  setSearchTerms
    }}>
         {/* components that use the data from providers must be defined as children components */}
        {props.children}
    </RecordContext.Provider>
  )
}  
