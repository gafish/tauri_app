import { useState } from 'react'
import { app } from '@tauri-apps/api'

const App = () => {
  const [version, setVersion] = useState<string>('')
  return (
    <div>
      <h3>getVersion</h3>
      <button
        onClick={() => {
          app.getVersion().then(setVersion)
        }}
      >
        click
      </button>
      <p>application version: {version}</p>
    </div>
  )
}

export default App
