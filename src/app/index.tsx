import GetName from './getName'
import GetTauriVersion from './getTauriVersion'
import GetVersion from './getVersion'

const App = () => {
  return (
    <div>
      <h2>app</h2>
      <GetName />
      <GetTauriVersion />
      <GetVersion />
    </div>
  )
}

export default App
