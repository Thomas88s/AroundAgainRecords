import React, { useContext } from "react"
import { RecordContext } from "../records/RecordProvider"
import "../records/Record.css"

export const TitleSearch = () => {
  const { setSearchTerms } = useContext(RecordContext)

  return (
    <>
      Search By Title:
      <input type="text"
        className="input--wide"
        onKeyUp={(event) => setSearchTerms(event.target.value)}
        placeholder="Search for an record... " />
    </>
  )
}

export const ArtistSearch = () => {
  const { setSearchTerms } = useContext(RecordContext)

  return (
    <>
    <br>
    </br>
      Search By Artist:
      <input type="text"
        className="input--wide"
        onKeyUp={(event) => setSearchTerms(event.target.value)}
        placeholder="Search for an record... " />
    </>
  )
}