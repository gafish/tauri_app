import { useState } from 'react'
import { cli } from '@tauri-apps/api'

const App = () => {
  const [ok, setOk] = useState<boolean>(false)
  return (
    <div>
      <h3>getMatches (暂不清楚用法)</h3>
      <button
        onClick={() => {
          cli.getMatches()
            .then(matches => {
              console.log('cli - matches', matches)
              setOk(true)
            }).finally(() => {
              console.log('cli - matches(finally)')
            })
        }}
      >
        click
      </button>
      <p>{ok && '打开控制台查看打印结果'}</p>
    </div>
  )
}

export default App
