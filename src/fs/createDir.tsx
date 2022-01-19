import { useState } from 'react'
import { fs } from '@tauri-apps/api'

const App = () => {
  const [ok, setOk] = useState<boolean>(false)
  return (
    <div>
      <h3>createDir</h3>
      <button
        onClick={() => {
          fs.createDir(
            '/Users/gafish/Desktop/abc/test_dir',
            {
              // dir: 1,
              recursive: true
            }
          ).then(() => {
            setOk(true)
          })
        }}
      >
        click
      </button>
      <p>{ok && '目录创建完成'}</p>
    </div>
  )
}

export default App
