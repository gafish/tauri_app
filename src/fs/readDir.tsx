import { useState } from 'react'
import { fs } from '@tauri-apps/api'

const App = () => {
  const [fileList, setFileList] = useState<any[]>([]);
  return (
    <div>
      <h3>readDir</h3>
      <button
        onClick={() => {
          fs.readDir(
            '/Users/gafish/Desktop/',
            {
              // dir: 1,
              // recursive: true
            }
          ).then((result) => {
            setFileList(result)
          })
        }}
      >
        click
      </button>
      <p>桌面文件列表</p>
      <ul>
        {fileList.map((file) => {
          return <li key={file.name}>{file.name}</li>
        })}
      </ul>
    </div>
  )
}

export default App
