import { useState } from 'react'
import { fs } from '@tauri-apps/api'

const App = () => {
  const [ok, setOk] = useState<boolean>(false)
  return (
    <div>
      <h3>removeDir</h3>
      <button
        onClick={() => {
          fs.removeDir(
            '/Users/gafish/Desktop/abc',
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
      <p>{ok && '目录删除完成'}</p>
    </div>
  )
}

export default App
