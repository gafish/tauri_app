
import { invoke } from '@tauri-apps/api'

/**
 * Get files inside a directory
 */
export const getFiles = (dir: string): Promise<any> => {
  return new Promise((resolve) => {
    invoke('read_directory', { dir }).then((files: any) => {
      resolve(files)
    })
  })
}