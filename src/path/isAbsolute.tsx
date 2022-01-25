import { useState } from 'react'
import { path } from '@tauri-apps/api'

const App = () => {
  const [result, setResult] = useState<boolean>()
  return (
    <div>
      <h3>isAbsolute</h3>
      <button
        onClick={() => {
          path.isAbsolute('~/Library/Audio').then(setResult)
        }}
      >
        click
      </button>
      <p>{result === undefined ? null : `${result ? '是': '不是'}绝对路径`}</p>
    </div>
  )
}

export default App
