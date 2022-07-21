import { mkdir, mkdirSync, promises as fsp } from "fs"
import { dirname, join } from "path"

export default class Fs {
  constructor(path) {
    this.path = path
  }

  async fileExists() {
    try {
      return (await fsp.stat(this.path)).isFile()
    } catch (e) {}
    return false
  }

  async removeFile() {
    const exist = await this.fileExists()
    if (exist) fsp.unlink(this.path)
  }

  async writeFile(content, path = this.path) {
    try {
      await mkdirSync(dirname(path), { recursive: true })
      fsp.writeFile(path, content)
    } catch (e) {
      return false
    }
  }

  async readFile() {
    try {
      return await fsp.readFile(this.path).then((res) => res.toString())
    } catch (e) {
      return false
    }
  }

  static async copyFile(src, dest, { transform, force } = {}) {
    if (!force) {
      const file = new Fs(dest)
      const exist = await file.fileExists()
      if (exist) {
        console.warn(`Can't copy file "${file}" because it already exist. return`)
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

  async dirExists() {
    try {
      return (await fsp.stat(this.path)).isDirectory()
    } catch (e) {}
    return false
  }

  async readDir(recursive = true, path = this.path) {
    const ents = await fsp.readdir(path, { withFileTypes: true })
    const results = await Promise.all(
      ents.map((ent) => {
        if (ent.isDirectory() && recursive) {
          return this.readDir(recursive, join(path, ent.name))
        } else {
          return join(path, ent.name)
        }
      })
    )
    return [...(results || [])].flat()
  }

  async removeDir() {
    const exist = await new Fs(this.path).dirExists()
    if (!exist) {
      console.warn(`Can't remove "${this.path}" because it doesn't exist. return`)
      return
    }
    return fsp.rm(this.path, { recursive: true })
  }

  createDir() {
    return fsp.mkdir(this.path, { recursive: true })
  }

  static async copyDir(src, dest, { force } = {}) {
    if (!force) {
      const exist = await new Fs(dest).dirExists()
      if (exist) {
        console.warn(
          `Can't copy folder "${dest}" because it already exist on destination. return`
        )
        return
      }
    }

    try {
      if (!(await fsp.stat(src)).isDirectory()) throw new Error()
    } catch (e) {
      return false
    }

    const instance = new Fs(src)
    const files = await instance.readDir()
    await Promise.all(files.map((file) => Fs.copyFile(file, file.replace(src, dest))))
  }
}
