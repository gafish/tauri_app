import { useState } from 'react'
import { window } from '@tauri-apps/api'

const App = () => {
  const [result, setResult] = useState<string>('')
  return (
    <div>
      <h3>currentMonitor</h3>
      <button
        onClick={() => {
          window.currentMonitor().then(r => setResult(JSON.stringify(r)))
        }}
      >
        click
      </button>
      <p>{result}</p>
    </div>
  )
}

export default App
