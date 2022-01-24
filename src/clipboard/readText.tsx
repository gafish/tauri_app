import { useState } from 'react'
import { clipboard } from '@tauri-apps/api'

const App = () => {
  const [text, setText] = useState<string | null>('')
  return (
    <div>
      <h3>readText</h3>
      <button
        onClick={() => {
          clipboard.readText()
            .then(setText)
        }}
      >
        click
      </button>
      <p>剪贴板内容：{text}</p>
    </div>
  )
}

export default App
