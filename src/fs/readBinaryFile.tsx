import { useState } from 'react'
import { fs } from '@tauri-apps/api'

const App = () => {
  const [ok, setOk] = useState<boolean>(false)
  return (
    <div>
      <h3>readBinaryFile</h3>
      <button
        onClick={() => {
          fs.readBinaryFile(
            '/Users/gafish/Desktop/avatar.png',
            {
              // dir: 1,
            }
          ).then((result) => {
            console.log('result: ', result);
            setOk(true)
          })
        }}
      >
        read
      </button>
      <p>{ok && '打开控制台查看打印结果'}</p>
    </div>
  )
}

export default App
