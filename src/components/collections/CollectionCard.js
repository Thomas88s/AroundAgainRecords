import React from "react"
// import { RecordContext } from "./RecordProvider"
// import { useHistory } from "react-router-dom"
import "../records/Record.css"

export const CollectionCard = ({ record }) => {
    // const { deleteRecord } = useContext(RecordContext)
    // const currentUserId = parseInt(sessionStorage.getItem("nutshell_user"))
    

//     const history = useHistory()

//   const handleRelease = () => {
//       deleteRecord(record.id)
//         .then(() => {
//           history.push("/records")
//         })
//     }
   return(
    <section className="record" id="recordId">
        <h3 className="recordName">{record.name}</h3>
        <div className="recordArtist">Artist: {record.artist}</div>
       
    </section>
   )
}