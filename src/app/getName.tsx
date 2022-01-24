import { useState } from 'react'
import { app } from '@tauri-apps/api'

const App = () => {
  const [name, setName] = useState<string>('')
  return (
    <div>
      <h3>getName</h3>
      <button
        onClick={() => {
          app.getName().then(setName)
        }}
      >
        click
      </button>
      <p>application name: {name}</p>
    </div>
  )
}

export default App
