
import { useEffect, useState, useReducer } from 'react'
import Gun from 'gun'

const gun = Gun({
  peers: [
    'http://localhost:3030/gun'
  ]
})

const initialState = {
  messages: []
}

function reducer(state, message) {
  return {
    messages: [message, ...state.messages]
  }
}

export default function App() {
  const [formState, setForm] = useState({
    name: '', message: ''
  })

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const messages = gun.get('messages')
    messages.map().on(m => {
      dispatch({
        name: m.name,
        message: m.message,
        createdAt: m.createdAt
      })
    })
  }, [])


  function onChange(e) {
    setForm({ ...formState, [e.target.name]: e.target.value  })
  }
}