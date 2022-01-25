import { useState } from 'react'
import { window } from '@tauri-apps/api'

const App = () => {
  const [result, setResult] = useState<string>('')
  return (
    <div>
      <h3>getCurrent</h3>
      <button
        onClick={() => {
          setResult(JSON.stringify(window.getCurrent()))
        }}
      >
        click
      </button>
      <p>{result}</p>
    </div>
  )
}

export default App
