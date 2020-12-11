import React, { useState, useContext } from 'react'
import { IdeasContext } from '../../contexts/IdeasContext.js'

function IdeasForm() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const { dispatch } = useContext(IdeasContext)

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch({ type: 'addIdea', idea: { title, description, id: Date.now() } })
  }

  return(
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        name="description"
        placeholder="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button>Submit</button>
    </form>
  )
}

export default IdeasForm
