import Dialog from './dialog'
import FS from './fs'
import App from './app'
import Cli from './cli'
import Clipboard from './clipboard'
import Event from './event'
import Invoke from './invoke'

export default function Entry() {
  return (
    <div style={{ padding: 10 }}>
      <Dialog />
      <FS />
      <App />
      <Cli />
      <Clipboard />
      <Event />
      <Invoke />
    </div>
  )
}
