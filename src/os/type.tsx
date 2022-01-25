import { useState } from 'react'
import { os } from '@tauri-apps/api'

const App = () => {
  const [result, setResult] = useState<string>('')
  return (
    <div>
      <h3>type</h3>
      <button
        onClick={() => {
          os.type().then(setResult)
        }}
      >
        click
      </button>
      <p>{result}</p>
    </div>
  )
}

export default App
