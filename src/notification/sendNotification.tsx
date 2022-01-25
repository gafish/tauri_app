import { notification } from '@tauri-apps/api'

const App = () => {
  return (
    <div>
      <h3>sendNotification</h3>
      <button
        onClick={() => {
          notification.sendNotification({
            title: 'hello',
            body: 'world',
            icon: 'https://tauri.app/img/favicon-32x32.png',
          })
        }}
      >
        click
      </button>
    </div>
  )
}

export default App
