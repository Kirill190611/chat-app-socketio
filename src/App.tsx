import React, { useState } from 'react'
import './App.css'

function App() {
  const [messages, setMessages] = useState([
    {
      message: 'Hello Alex',
      id: '23f2332',
      user: { userId: '12as345', name: 'Kirill' },
    },
    {
      message: 'Hello Kirill',
      id: '45agf23',
      user: { userId: '156gh32', name: 'Alex' },
    },
  ])

  return (
    <div className='App'>
      <div
        style={{
          border: '1px solid black',
          padding: '10px',
          width: '300px',
          height: '300px',
          overflowY: 'scroll',
        }}
      >
        {messages.map((message) => {
          return (
            <div key={message.id}>
              <b>{message.user.name}:</b> {message.message}
              <hr/>
            </div>
          )
        })}
      </div>
      <textarea></textarea>
      <button>Send</button>
    </div>
  )
}

export default App
