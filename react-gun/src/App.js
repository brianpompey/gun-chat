
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

  function onChange(e) {
    setForm({ ...formState, [e.target.name]: e.target.value  })
  }
}