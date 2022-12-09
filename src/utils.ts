import fs from 'fs'
import fsp from 'fs/promises'
import path from 'path'

export function ensureFileSync(file: string) {
  let stats
  try {
    stats = fs.statSync(file)
  }
  catch {}
  if (stats && stats.isFile())
    return

  const dir = path.dirname(file)
  try {
    if (!fs.statSync(dir).isDirectory()) {
      // parent is not a directory
      // This is just to cause an internal ENOTDIR error to be thrown
      fs.readdirSync(dir)
    }
  }
  catch (err: any) {
    // If the stat call above failed because the directory doesn't exist, create it
    if (err && err.code === 'ENOENT')
      fs.mkdirSync(dir, { recursive: true })
    else throw err
  }

  fs.writeFileSync(file, '')
}

export function remove(path: string) {
  return fsp.rm(path, { recursive: true, force: true })
}

export function removeSync(path: string) {
  fs.rmSync(path, { recursive: true, force: true })
}

export async function readJson(file: string) {
  const content = await fsp.readFile(file, 'utf-8')
  return JSON.parse(content)
}

export async function readJsonSync(file: string) {
  const content = fs.readFileSync(file, 'utf-8')
  return JSON.parse(content)
}

export async function wirteJson(file: string, data: Record<string, any>, space = 0) {
  const str = JSON.stringify(data, null, space)

  await fsp.writeFile(file, str)
}

export async function wirteJsonSync(file: string, data: Record<string, any>, space = 0) {
  const str = JSON.stringify(data, null, space)

  fs.writeFileSync(file, str)
}
