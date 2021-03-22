import React, { useContext, useEffect } from "react"
import { RecordContext } from "../records/RecordProvider"
import { CollectionCard } from "./CollectionCard"
import "../records/Record.css"

export const CollectionList = () => {
  // This state changes when `getRecords()` is invoked below
  const { records, getRecords } = useContext(RecordContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("RecordList: useEffect - getRecords")
    getRecords()

  }, [])


  return (
    <div className="records">
      {console.log("RecordList: Render", records)}
      {
        records.map(record => {
          return <CollectionCard key={record.id} record={record} />
        })
      }
    </div>
  )
}
