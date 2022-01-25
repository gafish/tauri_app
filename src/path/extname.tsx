import { useState } from 'react'
import { path } from '@tauri-apps/api'

const App = () => {
  const [result, setResult] = useState<string>('')
  return (
    <div>
      <h3>extname</h3>
      <button
        onClick={() => {
          path.extname('testabc.jpg').then(setResult)
        }}
      >
        click
      </button>
      <p>{result}</p>
    </div>
  )
}

export default App
