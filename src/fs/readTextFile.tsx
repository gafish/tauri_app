import { useState } from 'react'
import { fs } from '@tauri-apps/api'

const App = () => {
  const [text, setText] = useState<string>('')
  return (
    <div>
      <h3>readTextFile</h3>
      <button
        onClick={() => {
          fs.readTextFile(
            '/Users/gafish/Desktop/hello.txt',
            {
              // dir: 1,
            }
          ).then((result) => {
            setText(result)
          })
        }}
      >
        click
      </button>
      <p>{text}</p>
    </div>
  )
}

export default App
