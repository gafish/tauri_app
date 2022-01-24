import { clipboard } from '@tauri-apps/api'

const App = () => {
  return (
    <div>
      <h3>writeText</h3>
      <button
        onClick={() => {
          clipboard.writeText('hello world')
        }}
      >
        click
      </button>
      <p>在 readText 中查看效果</p>
    </div>
  )
}

export default App
