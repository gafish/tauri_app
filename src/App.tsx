import DialogOpen from './dialog/open'
import DialogSave from './dialog/save'

function App() {
  return (
    <div style={{ padding: 10 }}>
      <div>
        <h2>dialog</h2>
        <DialogOpen />
        <DialogSave />
      </div>
    </div>
  )
}

export default App
