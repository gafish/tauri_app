import * as helpers_event from '@tauri-apps/api/helpers/event'

const App = () => {
  return (
    <div>
      <h3>emit</h3>
      <button
        onClick={() => {
          helpers_event.emit('tauri://resize', null, 'bbbbb')
        }}
      >
        click
      </button>
      <p>在 listen 中查看效果</p>
    </div>
  )
}

export default App
