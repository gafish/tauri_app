import { useState } from 'react'
import { process } from '@tauri-apps/api'

const App = () => {
  const [ok, setOk] = useState<boolean>(false)
  return (
    <div>
      <h3>exit</h3>
      <button
        onClick={() => {
          // process.exit().then(() => setOk(true))
          setOk(true)
        }}
      >
        click
      </button>
      <p>{ok && '模拟关闭app'}</p>
    </div>
  )
}

export default App
