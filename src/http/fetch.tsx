import { useState } from 'react'
import { http } from '@tauri-apps/api'

const App = () => {
  const [ok, setOk] = useState<boolean>(false)
  return (
    <div>
      <h3>fetch</h3>
      <button
        onClick={() => {
          http.fetch('https://cnodejs.org/api/v1/topics', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then(res => {
            setOk(res.status === 200)
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
