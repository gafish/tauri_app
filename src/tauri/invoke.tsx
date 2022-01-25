import { useState } from 'react'
import { tauri } from '@tauri-apps/api'

const App = () => {
  const [fileList, setFileList] = useState<any[]>([]);
  return (
    <div>
      <h3>invoke</h3>
      <button
        onClick={() => {
          // 用rust实现的读取目录文件信息功能
          tauri.invoke('read_directory', { dir: '/Users/gafish/Desktop/' }).then((result: any) => {
            setFileList(result.files)
            console.log('result: ', result);
          })
        }}
      >
        click
      </button>
      <p>桌面文件列表</p>
      <ul>
        {fileList.map((file) => {
          return (
            <li key={file.basename}>
              {file.basename} - {new Date(file.created.secs_since_epoch * 1000).toLocaleString()}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
