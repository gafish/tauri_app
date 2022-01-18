import WriteFile from './writeFile'
import CopyFile from './copyFile'
import RemoveFile from './removeFile'
import WriteBinaryFile from './writeBinaryFile'
import ReadBinaryFile from './readBinaryFile'
import CreateDir from './createDir'
import RemoveDir from './removeDir'
import ReadTextFile from './readTextFile'
import ReadDir from './readDir'
import RenameFile from './renameFile'

const App = () => {
  return (
    <div>
      <h2>fs</h2>
      <WriteFile />
      <CopyFile />
      <ReadTextFile />
      <RenameFile />
      <RemoveFile />

      <WriteBinaryFile />
      <ReadBinaryFile />

      <ReadDir />
      <CreateDir />
      <RemoveDir />
    </div>
  )
}

export default App
