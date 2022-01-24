import Dialog from './dialog'
import FS from './fs'
import App from './app'
import Cli from './cli'
import Clipboard from './clipboard'
import Invoke from './invoke'

export default function Entry() {
  return (
    <div style={{ padding: 10 }}>
      <Dialog />
      <FS />
      <App />
      <Cli />
      <Clipboard />
      <Invoke />
    </div>
  )
}
