import Listen from './listen'
import Emit from './emit'
import Once from './once'

const App = () => {
  return (
    <div>
      <h2>event</h2>
      <Listen />
      <Emit />
      <Once />
    </div>
  )
}

export default App
