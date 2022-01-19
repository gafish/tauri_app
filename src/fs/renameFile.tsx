import { useState } from 'react'
import { fs } from '@tauri-apps/api'

const App = () => {
  const [ok, setOk] = useState<boolean>(false)
  return (
    <div>
      <h3>renameFile</h3>
      <button
        onClick={() => {
          fs.renameFile(
            '/Users/gafish/Desktop/hello_copy.txt',
            '/Users/gafish/Desktop/hello_rename.txt', 
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
      <p>{ok && '重命名完成'}</p>
    </div>
  )
}

export default App
