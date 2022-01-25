import { useState } from 'react'
import { os } from '@tauri-apps/api'

const App = () => {
  const [result, setResult] = useState<string>('')
  return (
    <div>
      <h3>arch</h3>
      <button
        onClick={() => {
          os.arch().then(setResult)
        }}
      >
        click
      </button>
      <p>{result}</p>
    </div>
  )
}

export default App
