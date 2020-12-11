import React, { useContext } from 'react'
import Card from '../Card/Card.js'
import { IdeasContext } from '../../contexts/IdeasContext.js'
import './IdeasContainer.css'

function IdeasContainer() {

  const { state } = useContext(IdeasContext)

  const renderIdeaCards = () => (
    state.ideas.map(idea => <Card idea={idea} key={idea.id} />)
  )

  return(
    <section className="ideas-container">
      { renderIdeaCards() }
    </section>
  )
}

export default IdeasContainer
