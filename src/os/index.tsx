import Arch from './arch'
import Platform from './platform'
import Tempdir from './tempdir'
import Type from './type'
import Version from './version'

const App = () => {
  return (
    <div>
      <h2>os</h2>
      <Arch />
      <Platform />
      <Tempdir />
      <Type />
      <Version />
    </div>
  )
}

export default App
