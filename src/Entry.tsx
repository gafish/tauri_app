import Dialog from './dialog'
import FS from './fs'
import App from './app'
import Cli from './cli'
import Clipboard from './clipboard'
import Event from './event'
import GlobalShortcut from './globalShortcut'
// import HelpersEvent from './helpers_event'
// import HelpersOSCheck from './helpers_os_check'
import Http from './http'
import Notification from './notification'
import OS from './os'
import Path from './path'
import Process from './process'
import Shell from './shell'
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
      <GlobalShortcut />
      {/* <HelpersEvent /> */}
      {/* <HelpersOSCheck /> */}
      <Http />
      <Notification />
      <OS />
      <Path />
      <Process />
      <Shell />
      <Invoke />
    </div>
  )
}
