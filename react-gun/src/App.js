
import { useEffect, useState, useReducer } from 'react'
import Gun from 'gun'

const gun = Gun({
  peers: [
    'http://localhost:3030/gun'
  ]
})