import { useState } from 'react'
import { updater } from '@tauri-apps/api'

const App = () => {
  const [result, setResult] = useState<string>('')
  return (
    <div>
      <h3>checkUpdate</h3>
      <button
        onClick={() => {
          // updater.checkUpdate().then(r => setResult(JSON.stringify(r)))
          updater.checkUpdate()
            .then(r => console.log(r))
            .catch(e => console.error(e))
            .finally(() => setResult('done'))
        }}
      >
        click
      </button>
      <p>{result}</p>
    </div>
  )
}

export default App
