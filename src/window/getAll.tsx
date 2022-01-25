import { useState } from 'react'
import { window } from '@tauri-apps/api'

const App = () => {
  const [result, setResult] = useState<string>('')
  return (
    <div>
      <h3>getAll</h3>
      <button
        onClick={() => {
          setResult(JSON.stringify(window.getAll()))
        }}
      >
        click
      </button>
      <p>{result}</p>
    </div>
  )
}

export default App
