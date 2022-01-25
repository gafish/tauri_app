import { useState } from 'react'
import { tauri } from '@tauri-apps/api'

const App = () => {
  const [result, setResult] = useState<string>('')
  return (
    <div>
      <h3>convertFileSrc</h3>
      <button
        onClick={() => {
          setResult(tauri.convertFileSrc('~/Desktop/test.txt'))
        }}
      >
        click
      </button>
      <p>{result}</p>
    </div>
  )
}

export default App
