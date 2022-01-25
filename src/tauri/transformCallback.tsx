import { useState } from 'react'
import { tauri } from '@tauri-apps/api'

const App = () => {
  const [result, setResult] = useState<string>('')
  return (
    <div>
      <h3>transformCallback</h3>
      <button
        onClick={() => {
          setResult(tauri.transformCallback(() => console.log('hello')))
        }}
      >
        click
      </button>
      <p>{result}</p>
    </div>
  )
}

export default App
