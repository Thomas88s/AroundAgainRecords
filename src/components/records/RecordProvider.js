import React, { useState, createContext } from "react"

// Context provides a way to share the values of props, that are required by many components, between components
export const RecordContext = createContext()


// establishes what data can be used
// props passes JSX attributes and children to this component as a single object
export const RecordProvider = (props) => {
// useState defines the variable which will hold the data and then defines the function to be used to modify that state
    const [records, setRecords] = useState([])
  // When the search field is used this will store that state   
    const [ searchTerms, setSearchTerms ] = useState("")

    // performs state transitions in your database
    const getRecords = () => {
    return fetch("http://localhost:8088/records")
    // This sends a JSON response composed of the specified data after the fetch call is made
      .then(res => res.json())
      // then uses a defined usestate function 
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
      // this updates the existing item 
      method: "PUT",
      // the headers interface  allows you to perform various actions on HTTP request and response headers include retrieving, setting, adding to, and removing headers
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
      // state variables and functions 
        records, getRecords, addRecord, getRecordById, deleteRecord, updateRecord, viewCollection, searchTerms,  setSearchTerms
    }}>
         {/* components that use the data from providers must be defined as children components */}
        {props.children}
    </RecordContext.Provider>
  )
}  
