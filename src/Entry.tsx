import Dialog from './dialog'
import FS from './fs'
import Invoke from './invoke'
import App from './app'

export default function Entry() {
  return (
    <div style={{ padding: 10 }}>
      <Dialog />
      <FS />
      <App />
      <Invoke />
    </div>
  )
}
