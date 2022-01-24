import { useState } from 'react'
import { globalShortcut } from '@tauri-apps/api'

const App = () => {
  const [ok, setOk] = useState<boolean>()
  return (
    <div>
      <h3>registerAll</h3>
      <button
        onClick={() => {
          globalShortcut
            .registerAll(['Cmd+Q', 'Cmd+P'], shortcut => console.log(`当前按下的是 ${shortcut}`))
            .then(() => setOk(true))
        }}
      >
        click
      </button>
      <p>{ok && `注册 Cmd+Q Cmd+P`}</p>
    </div>
  )
}

export default App
