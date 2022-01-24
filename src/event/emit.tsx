import { event } from '@tauri-apps/api'

const App = () => {
  return (
    <div>
      <h3>emit</h3>
      <button
        onClick={() => {
          event.emit('tauri://resize', 'aaaaa')
        }}
      >
        click
      </button>
      <p>在 listen 中查看效果</p>
    </div>
  )
}

export default App
