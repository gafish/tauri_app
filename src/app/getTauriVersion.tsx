import { useState } from 'react'
import { app } from '@tauri-apps/api'

const App = () => {
  const [version, setVersion] = useState<string>('')
  return (
    <div>
      <h3>getTauriVersion</h3>
      <button
        onClick={() => {
          app.getTauriVersion().then(setVersion)
        }}
      >
        click
      </button>
      <p>tauri version: {version}</p>
    </div>
  )
}

export default App
