import { useState } from 'react'
import { dialog } from '@tauri-apps/api'

const App = () => {
  const [paths, setPaths] = useState<string>('')
  return (
    <div>
      <h3>save</h3>
      <button
        onClick={() => {
          dialog.save({
            // defaultPath: '/Users/gafish/Desktop/test.txt',
            filters: [{ name: 'Images', extensions: ['jpg', 'png'] }],
          }).then(path => {
            setPaths(path)
          })
        }}
      >
        click
      </button>
      <p>保存路径: {paths}</p>
    </div>
  )
}

export default App
