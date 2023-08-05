import { useState } from 'react'

import './App.css'
import axios from "axios"

function App() {
  const [name , setName] = useState("")
  const [mail, setMail] = useState("")
  const [number, setNumber] = useState("")

  console.log(name , mail , number)
 function submitHandler (e) {
  e.preventDefault()
  axios.delete("http://localhost:3000/user:64cc7cf2deecca0592c1e025" , {
   
  })
 }

  return (
    <form onSubmit={submitHandler}>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      name <br />
      <input type="text" onChange={(e) => setMail(e.target.value)}/>
      mail <br />
      <input type="text" onChange={(e) => setNumber(e.target.value)}/>
      number <br />
      <input type="submit" />
    </form>
  )
}

export default App
