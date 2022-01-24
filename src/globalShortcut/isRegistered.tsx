import { useState } from 'react'
import { globalShortcut } from '@tauri-apps/api'

const App = () => {
  const [ok, setOk] = useState<boolean>()
  return (
    <div>
      <h3>isRegistered</h3>
      <button
        onClick={() => {
          globalShortcut.isRegistered('Cmd+Q').then(setOk)
        }}
      >
        click
      </button>
      <p>{ok !== undefined && `Cmd+Q ${ok ? '已' : '未'}注册`}</p>
    </div>
  )
}

export default App
