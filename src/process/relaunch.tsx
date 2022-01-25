import { useState } from 'react'
import { process } from '@tauri-apps/api'

const App = () => {
  const [ok, setOk] = useState<boolean>(false)
  return (
    <div>
      <h3>relaunch</h3>
      <button
        onClick={() => {
          process.relaunch().then(() => setOk(true))
          // setOk(true)
        }}
      >
        click
      </button>
      <p>{ok && '模拟重启app'}</p>
    </div>
  )
}

export default App
