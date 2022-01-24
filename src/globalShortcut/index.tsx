import IsRegistered from './isRegistered'
import RegisterAll from './registerAll'
import Unregister from './unregister'
import UnregisterAll from './unregisterAll'

const App = () => {
  return (
    <div>
      <h2>globalShortcut</h2>
      <IsRegistered />
      <RegisterAll />
      <Unregister />
      <UnregisterAll />
    </div>
  )
}

export default App
