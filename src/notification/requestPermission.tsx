import { useState } from 'react'
import { notification } from '@tauri-apps/api'

const App = () => {
  const [result, setResult] = useState<string>('')
  return (
    <div>
      <h3>requestPermission</h3>
      <button
        onClick={() => {
          notification.requestPermission().then(setResult)
        }}
      >
        click
      </button>
      <p>权限结果: {result}</p>
    </div>
  )
}

export default App
