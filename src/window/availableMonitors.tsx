import { useState } from 'react'
import { window } from '@tauri-apps/api'

const App = () => {
  const [result, setResult] = useState<string>('')
  return (
    <div>
      <h3>availableMonitors</h3>
      <button
        onClick={() => {
          window.availableMonitors().then(r => setResult(JSON.stringify(r)))
        }}
      >
        click
      </button>
      <p>{result}</p>
    </div>
  )
}

export default App
