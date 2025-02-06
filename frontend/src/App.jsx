import { useEffect, useState } from 'react'
import './App.css'
import Body from './body/body'
import { io } from "socket.io-client"

const socket = io("http://localhost:5555")

function App() {
  const [content, setContent ] = useState("")

  useEffect(() => {
    socket.on("load", (data) => {
      setContent(data);
    });

    socket.on("edit", (data) => {
      setContent(data.content)
    })

    return () => {
      socket.off("load")
      socket.off("edit")
    }
  }, [])

  return (
    <>
      <Body />
    </>
  )
}

export default App
