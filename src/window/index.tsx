import AvailableMonitors from './availableMonitors'
import CurrentMonitor from './currentMonitor'
import GetAll from './getAll'
import GetCurrent from './getCurrent'
import PrimaryMonitor from './primaryMonitor'

const App = () => {
  return (
    <div>
      <h2>window</h2>
      <AvailableMonitors />
      <CurrentMonitor />
      <GetAll />
      <GetCurrent />
      <PrimaryMonitor />
    </div>
  )
}

export default App
