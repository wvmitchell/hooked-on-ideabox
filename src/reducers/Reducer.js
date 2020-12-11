const store = {
  ideas: [
    { id: 0, title: 'Make ideas', description: 'You need a bunch' }
  ]
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'addIdea':
      return {...state, ideas: [...state.ideas, action.idea] }
    case 'removeIdea':
      return { ...state, ideas: state.ideas.filter(idea => idea.id !== action.id) }
    default:
      return state
  }
}

export {
  reducer,
  store
}
