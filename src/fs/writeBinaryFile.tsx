import { useState } from 'react'
import { fs } from '@tauri-apps/api'

const App = () => {
  const [ok, setOk] = useState<boolean>(false)
  return (
    <div>
      <h3>writeBinaryFile</h3>
      <button
        onClick={() => {
          fs.writeBinaryFile(
            {
              contents: new ArrayBuffer(10),
              path: '/Users/gafish/Desktop/hello.jpg',
            },
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
      <p>{ok && '文件写入完成'}</p>
    </div>
  )
}

export default App
