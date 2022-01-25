import { useState } from 'react'
import { os } from '@tauri-apps/api'

const App = () => {
  const [result, setResult] = useState<string>('')
  return (
    <div>
      <h3>platform</h3>
      <button
        onClick={() => {
          os.platform().then(setResult)
        }}
      >
        click
      </button>
      <p>{result}</p>
    </div>
  )
}

export default App
