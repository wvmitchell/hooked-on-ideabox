import React, { useContext } from 'react'
import { IdeasContext } from '../../contexts/IdeasContext'
import './Card.css'

function Card({idea}) {
  const { dispatch } = useContext(IdeasContext)

  return(
    <section className="card">
      <h3>{idea.title}</h3>
      <p>{idea.description}</p>
      <button onClick={() => dispatch({type: 'removeIdea', id: idea.id})}>X</button>
    </section>
  )
}

export default Card
