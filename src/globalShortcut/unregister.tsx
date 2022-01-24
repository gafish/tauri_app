import { useState } from 'react'
import { globalShortcut } from '@tauri-apps/api'

const App = () => {
  const [ok, setOk] = useState<boolean>()
  return (
    <div>
      <h3>unregister</h3>
      <button
        onClick={() => {
          globalShortcut
            .unregister('Cmd+Q')
            .then(() => setOk(true))
        }}
      >
        click
      </button>
      <p>{ok && `取消注册 Cmd+Q`}</p>
    </div>
  )
}

export default App
