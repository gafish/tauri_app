import { useState } from 'react'
import { http } from '@tauri-apps/api'

const App = () => {
  const [ok, setOk] = useState<boolean>(false)
  return (
    <div>
      <h3>getClient</h3>
      <button
        onClick={() => {
          http.getClient({
            maxRedirections: 5,
            connectTimeout: 5,
          })
          .then(client => {
            client.get('https://cnodejs.org/api/v1/topics').then(res => setOk(res.status === 200))
          })
        }}
      >
        click
      </button>
      <p>{ok && '请求成功'}</p>
    </div>
  )
}

export default App
