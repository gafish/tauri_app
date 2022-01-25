import Delimiter from './delimiter'
import Sep from './sep'
import AppDir from './appDir'
import AudioDir from './audioDir'
import Basename from './basename'
import CacheDir from './cacheDir'
import ConfigDir from './configDir'
import CurrentDir from './currentDir'
import DataDir from './dataDir'
import DesktopDir from './desktopDir'
import Dirname from './dirname'
import DocumentDir from './documentDir'
import DownloadDir from './downloadDir'
import ExecutableDir from './executableDir'
import Extname from './extname'
import FontDir from './fontDir'
import HomeDir from './homeDir'
import IsAbsolute from './isAbsolute'
import Join from './join'
import LocalDataDir from './localDataDir'
import Normalize from './normalize'
import PictureDir from './pictureDir'
import PublicDir from './publicDir'
import Resolve from './resolve'
import ResourceDir from './resourceDir'
import RuntimeDir from './runtimeDir'
import RemplateDir from './templateDir'
import VideoDir from './videoDir'

const App = () => {
  return (
    <div>
      <h2>path</h2>
      <Delimiter />
      <Sep />
      <AppDir />
      <AudioDir />
      <Basename />
      <CacheDir />
      <ConfigDir />
      <CurrentDir />
      <DataDir />
      <DesktopDir />
      <Dirname />
      <DocumentDir />
      <DownloadDir />
      <ExecutableDir />
      <Extname />
      <FontDir />
      <HomeDir />
      <IsAbsolute />
      <Join />
      <LocalDataDir />
      <Normalize />
      <PictureDir />
      <PublicDir />
      <Resolve />
      <ResourceDir />
      <RuntimeDir />
      <RemplateDir />
      <VideoDir />
    </div>
  )
}

export default App
