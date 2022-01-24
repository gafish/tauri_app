import { useState } from 'react'
import * as helpers_os_check from '@tauri-apps/api/helpers/os-check'

const App = () => {
  const [value, setValue] = useState<any>()
  return (
    <div>
      <h3>isWindows</h3>
      <button
        onClick={() => {
          setValue(helpers_os_check.isWindows())
        }}
      >
        click
      </button>
      <p>isWindows: {value !== undefined && String(value)}</p>
    </div>
  )
}

export default App
