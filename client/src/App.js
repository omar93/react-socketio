import  React, { useState, useEffect } from "react"
import Message from './message'
import { io } from 'socket.io-client'
const socket = io('http://127.0.0.1:4000')


function App() {

  const [responseClass, setresponseClass] = useState('')
  const [formValue, setFormValue] = useState('')
  const [response, setResponse] = useState('')

  useEffect(() => {
    socket.on('chat message', data => {
      setResponse(data)
      setresponseClass('incMsg')
    })
  }, [])

  const sendMessage = async e => {
    e.preventDefault()
    console.log(formValue)
    socket.emit('chat message', formValue)
    setresponseClass('myMsg')
    setFormValue('')
  }

  return (<>

    <Message message={response} className={responseClass}/>

    <form onSubmit={sendMessage}>

    <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Message" />

    <button type="submit" disabled={!formValue}>{'>'}</button>

  </form>
    
  </>)

}

export default App;
