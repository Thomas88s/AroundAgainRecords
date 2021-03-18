import React, { useContext} from "react"
import { RecordContext } from "./RecordProvider"
import { useHistory } from "react-router-dom"
import "./Record.css"

export const RecordCard = ({ record }) => {
    const { deleteRecord } = useContext(RecordContext)

    const history = useHistory()

  const handleRelease = () => {
      deleteRecord(record.id)
        .then(() => {
          history.push("/records")
        })
    }
   return(
    <section className="record" id="recordId">
        <h3 className="record__name">{record.name}</h3>
        <div className="record__artist">Artist: {record.artist}</div>
        <button onClick={() => {
               history.push(`/events/edit/${record.id}`)
           }}>Edit</button>
          <button onClick={handleRelease}>Delete Record</button>
    </section>
   )
}