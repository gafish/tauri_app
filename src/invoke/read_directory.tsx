import { useState } from 'react'
import * as utils from '../utils'

const App = () => {
  const [fileList, setFileList] = useState<any[]>([]);
  return (
    <div>
      <h3>read_directory</h3>
      <button
        onClick={() => {
          // 用rust实现的读取目录文件信息功能
          utils.getFiles('/Users/gafish/Desktop/').then((result) => {
            console.log('result: ', result);
            setFileList(result.files)
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
