import { shell } from '@tauri-apps/api'

const App = () => {
  return (
    <div>
      <h3>open</h3>
      <button
        onClick={() => {
          shell.open('https://github.com/tauri-apps/tauri', 'firefox')
        }}
      >
        click
      </button>
    </div>
  )
}

export default App
