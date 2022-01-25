import { useState } from 'react'
import { path } from '@tauri-apps/api'

const App = () => {
  const [result, setResult] = useState<string>('')
  return (
    <div>
      <h3>resourceDir</h3>
      <button
        onClick={() => {
          path.resourceDir().then(setResult)
        }}
      >
        click
      </button>
      <p>{result}</p>
    </div>
  )
}

export default App
