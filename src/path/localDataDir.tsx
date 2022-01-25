import { useState } from 'react'
import { path } from '@tauri-apps/api'

const App = () => {
  const [result, setResult] = useState<string>('')
  return (
    <div>
      <h3>localDataDir</h3>
      <button
        onClick={() => {
          path.localDataDir().then(setResult)
        }}
      >
        click
      </button>
      <p>{result}</p>
    </div>
  )
}

export default App
