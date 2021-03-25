import React, { useContext} from "react"
import { RecordContext } from "./RecordProvider"
import { useHistory } from "react-router-dom"
import "./Record.css"

export const RecordCard = ({ record }) => {
    const { deleteRecord } = useContext(RecordContext)
    
    // react-history manages session history using React. It's a thin wrapper around the history package. In web browsers, this library also transparently manages changes to the URL which makes it easier for creators of single-page applications to support things like bookmarks and the back button
    const history = useHistory()
  // takes care of removing deleted records 
  const handleRelease = () => {
      deleteRecord(record.id)
        .then(() => {
          history.push("/records")
        })
    }
   return(
    <section className="record" id="recordId">
        <h3 className="recordName">{record.name}</h3>
        <div className="recordArtist">Artist: {record.artist}</div>
        <button id="editButton"onClick={() => {
               history.push(`/records/edit/${record.id}`)
           }}>Edit</button>
           <br>
           
           </br>
          <button id="deleteButton" onClick={handleRelease}>Delete Record</button>
    </section>
   )
}