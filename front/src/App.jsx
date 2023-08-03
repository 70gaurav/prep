import { useState } from 'react'

import './App.css'
import axios from "axios"

function App() {
  const [name , setName] = useState("")
  const [mail, setMail] = useState("")
  const [number, setNumber] = useState("")

  console.log(name , mail , number)

  function submitHandler(e){
    e.preventDefault()
    axios.post("http://localhost:3000/post" , {
      name : name ,
      mail : mail , 
      number : number
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
