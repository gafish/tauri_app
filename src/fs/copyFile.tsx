import { useState } from 'react'
import { fs } from '@tauri-apps/api'

const App = () => {
  const [ok, setOk] = useState<boolean>(false)
  return (
    <div>
      <h3>copyFile</h3>
      <button
        onClick={() => {
          fs.copyFile(
            '/Users/gafish/Desktop/hello.txt',
            '/Users/gafish/Desktop/hello_copy.txt', 
            {
              // dir: 1,
            }
          ).then(() => {
            setOk(true)
          })
        }}
      >
        click
      </button>
      <p>{ok && '复制完成'}</p>
    </div>
  )
}

export default App
