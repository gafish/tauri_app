import { useState } from 'react'
import { fs } from '@tauri-apps/api'

const App = () => {
  const [ok, setOk] = useState<boolean>(false)
  return (
    <div>
      <h3>writeFile</h3>
      <button
        onClick={() => {
          fs.writeFile(
            {
              contents: 'hello world',
              path: '/Users/gafish/Desktop/hello.txt',
            },
            {
              // dir: 1,
            }
          ).then(() => {
            setOk(true)
          })
        }}
      >
        write
      </button>
      <p>{ok && '文件写入完成'}</p>
    </div>
  )
}

export default App
