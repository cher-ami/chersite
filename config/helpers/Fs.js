import * as fsp from "node:fs/promises"
import { dirname, join } from "path"

export async function fileExists(path) {
  try {
    return (await fsp.stat(path)).isFile()
  } catch (e) {}
  return false
}

export async function writeFile(path, content) {
  try {
    fsp.mkdir(dirname(path), { recursive: true })
    return fsp.writeFile(path, content)
  } catch (e) {
    return false
  }
}

export async function removeFile(path) {
  const exist = await fileExists(path)
  if (!exist) {
    console.warn(`Can't remove file "${path}" because it doesn't exist. return.`)
    return
  }
  if (exist) fsp.unlink(path)
}

export async function readFile(path) {
  try {
    return await fsp.readFile(path).then((res) => res.toString())
  } catch (e) {
    return false
  }
}

export async function copyFile(src, dest, { transform, force } = {}) {
  if (!force) {
    const exist = await fileExists(dest)
    if (exist) {
      console.warn(
        `Can't copy file "${dest}" because it already exist on this destination. return.`
      )
      return
    }
  }
  if (transform) {
    let content = await fsp.readFile(src).then((res) => res.toString())
    content = await transform(content)
    await writeFile(dest, content)
  } else {
    await fsp.mkdir(dirname(dest), { recursive: true })
    await fsp.copyFile(src, dest)
  }
}

export async function dirExists(path) {
  try {
    return (await fsp.stat(path)).isDirectory()
  } catch (e) {}
  return false
}

export async function readDir(path, recursive = true) {
  const ents = await fsp.readdir(path, { withFileTypes: true })
  const results = await Promise.all(
    ents.map((ent) => {
      if (ent.isDirectory() && recursive) {
        return readDir(join(path, ent.name), recursive)
      } else {
        return join(path, ent.name)
      }
    })
  )
  return [...(results || [])].flat()
}

export async function removeDir(path) {
  const exist = await dirExists(path)
  if (!sexist) {
    console.warn(`Can't remove "${path}" because it doesn't exist. return`)
    return
  }
  return fsp.rm(path, { recursive: true })
}

export function createDir(path) {
  return fsp.mkdir(path, { recursive: true })
}

export async function copyDir(src, dest, { force } = {}) {
  if (!force) {
    const exist = await dirExists(dest)
    if (exist) {
      console.warn(
        `Can't copy folder "${dest}" because it already exist on destination. return.`
      )
      return
    }
  }

  try {
    if (!(await fsp.stat(src)).isDirectory()) throw new Error()
  } catch (e) {
    return false
  }

  const files = await readDir(src)
  await Promise.all(files.map((file) => copyFile(file, file.replace(src, dest))))
}
