import { useState } from 'react'
import { path } from '@tauri-apps/api'

const App = () => {
  const [result, setResult] = useState<string>('')
  return (
    <div>
      <h3>delimiter</h3>
      <button
        onClick={() => {
          setResult(path.delimiter)
        }}
      >
        click
      </button>
      <p>{result}</p>
    </div>
  )
}

export default App
