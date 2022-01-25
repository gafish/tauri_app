import { useState } from 'react'
import { notification } from '@tauri-apps/api'

const App = () => {
  const [ok, setOk] = useState<boolean | null | undefined>(undefined)
  return (
    <div>
      <h3>isPermissionGranted</h3>
      <button
        onClick={() => {
          notification.isPermissionGranted().then(result => {
            console.log('result: ', result);
            setOk(result)
          })
        }}
      >
        click
      </button>
      <p>{ok === undefined ? null : `${ok ? '有' : '无'}通知权限`}</p>
    </div>
  )
}

export default App
