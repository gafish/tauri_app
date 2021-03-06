import IsPermissionGranted from './isPermissionGranted'
import RequestPermission from './requestPermission'
import SendNotification from './sendNotification'

const App = () => {
  return (
    <div>
      <h2>notification</h2>
      <IsPermissionGranted />
      <RequestPermission />
      <SendNotification />
    </div>
  )
}

export default App
