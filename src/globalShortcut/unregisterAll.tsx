import { useState } from 'react'
import { globalShortcut } from '@tauri-apps/api'

const App = () => {
  const [ok, setOk] = useState<boolean>()
  return (
    <div>
      <h3>unregisterAll</h3>
      <button
        onClick={() => {
          globalShortcut
            .unregisterAll()
            .then(() => setOk(true))
        }}
      >
        click
      </button>
      <p>{ok && `取消所有注册`}</p>
    </div>
  )
}

export default App
