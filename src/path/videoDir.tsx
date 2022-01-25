import { useState } from 'react'
import { path } from '@tauri-apps/api'

const App = () => {
  const [result, setResult] = useState<string>('')
  return (
    <div>
      <h3>videoDir</h3>
      <button
        onClick={() => {
          path.videoDir().then(setResult).catch(setResult)
        }}
      >
        click
      </button>
      <p>{result}</p>
    </div>
  )
}

export default App
