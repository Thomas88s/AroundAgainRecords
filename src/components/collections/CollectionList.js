import React, { useContext, useEffect, useState } from "react"
import { RecordContext } from "../records/RecordProvider"
import { CollectionCard } from "./CollectionCard"
import "../records/Record.css"
// import { useHistory } from "react-router-dom"

export const CollectionList = () => {
  // This state changes when `getRecords()` is invoked below
  const { records, getRecords, searchTerms } = useContext(RecordContext)

  const [ filteredRecords, setFiltered ] = useState([])

  // const history = useHistory()


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
     const subset = records.filter(record => record.name.toLowerCase().includes(searchTerms))
     setFiltered(subset)
   } else {
     setFiltered(records)
   }
  }, [searchTerms, records]) 

  useEffect(() => {
    if (searchTerms !== "") {
     //  if user types an input this displays a match
      const subset = records.filter(record => record.artist.toLowerCase().includes(searchTerms))
      setFiltered(subset)
    } else {
      setFiltered(records)
    }
   }, [searchTerms, records]) 


  return (

    <>
      <h1>Records</h1>
      <div className="records">
      {
        filteredRecords.map(record => {
          return <CollectionCard key={record.id} record={record} />
        })
      }
    </div>
    </>
  )
}
