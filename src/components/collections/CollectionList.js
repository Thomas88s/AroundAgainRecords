import React, { useContext, useEffect, useState } from "react"
import { RecordContext } from "../records/RecordProvider"
import { CollectionCard } from "./CollectionCard"
import "../records/Record.css"
// import { useHistory } from "react-router-dom"

export const CollectionList = () => {
  // This state changes when `getRecords()` is invoked below
  const { records, getRecords, searchTerms } = useContext(RecordContext)

  // The Array of Records is held in useState
  const [ filteredRecords, setFiltered ] = useState([])
  // This holds the state when records is searched by name 
  const [ filteredbyTitleRecords, setRecordFiltered ] = useState([])
  


  // Empty dependency array - useEffect only runs after first render
  useEffect(() => {
    getRecords()
}, [])

  //useEffect - reach out to the world for something
  // useEffect dependency array with dependencies - will run if dependency   changes (state)
  // searchTerms will cause a change
  useEffect(() => {
   if (searchTerms !== "") {
    //  if user types an input this displays a match
     const subset = records.filter(record => record.name.toLowerCase().includes(searchTerms.toLowerCase()))
    //  usestate function 
     setRecordFiltered(subset)
   } else {
     setRecordFiltered(records)
   }
   
  }, [searchTerms, records]) 

  useEffect(() => {
    if (searchTerms !== "") {
     //  if user types an input this displays a match
      const subSet = records.filter(record => record.artist.toLowerCase().includes(searchTerms.toLowerCase()))
      setFiltered(subSet)
    } else {
      setFiltered(records)
    }
   }, [searchTerms, records]) 


  return (

    <>
      <h1>Records</h1>
      <div className="records">
      {
        // This returns an array of objects that are filtered from an the existing array of records
        filteredRecords.map(record => {
          return <CollectionCard key={record.id} record={record} />
        })
      }
      {
        // This returns an array of objects that are filtered from an the existing array of records
        filteredbyTitleRecords.map(record => {
          return <CollectionCard key={record.id} record={record} />
        })
      }
       
    </div>
    </>
  )
}
