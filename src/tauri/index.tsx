import ConvertFileSrc from './convertFileSrc'
import Invoke from './invoke'
import TransformCallback from './transformCallback'

const App = () => {
  return (
    <div>
      <h2>tauri</h2>
      <ConvertFileSrc />
      <Invoke />
      <TransformCallback />
    </div>
  )
}

export default App
