import React from "react"
import "../records/Record.css"


// component for displaying an record 
export const CollectionCard = ({ record }) => {

   return(
    <section className="record" id="recordId">
        <h3 className="recordName">{record.name}</h3>
        <div className="recordArtist">Artist: {record.artist}</div>
       
    </section>
   )
}