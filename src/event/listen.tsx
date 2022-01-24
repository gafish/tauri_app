import { useEffect, useState } from 'react'
import { event } from '@tauri-apps/api'

const App = () => {
  const [result, setResult] = useState<any>({})
  useEffect(() => {
    event.listen('tauri://resize', setResult)
  }, [])

  return (
    <div>
      <h3>listen</h3>
      <p>缩放窗口大小查看效果: {JSON.stringify(result)}</p>
    </div>
  )
}

export default App
