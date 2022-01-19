import { useState } from 'react'
import { fs } from '@tauri-apps/api'

const App = () => {
  const [ok, setOk] = useState<boolean>(false)
  return (
    <div>
      <h3>removeFile</h3>
      <button
        onClick={() => {
          fs.removeFile(
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
      <p>{ok && '删除文件完成'}</p>
    </div>
  )
}

export default App
