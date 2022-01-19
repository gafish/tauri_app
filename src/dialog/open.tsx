import { useState } from 'react'
import { dialog } from '@tauri-apps/api'

const App = () => {
  const [paths, setPaths] = useState<string[]>([])
  return (
    <div>
      <h3>open</h3>
      <button
        onClick={() => {
          dialog.open({
            // defaultPath: '/Users/gafish/Desktop',
            // directory: true,
            // filters: [{ name: 'Images', extensions: ['jpg', 'png'] }],
            multiple: true,
          }).then(path => {
            if (typeof path === 'string') setPaths([path])
            if (Array.isArray(path)) setPaths(path)
          })
        }}
      >
        click
      </button>
      <p>所选目录或文件: </p>
      <ul>
        {paths.map(path => (
          <li key={path}>{path}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
