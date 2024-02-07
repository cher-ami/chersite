import { resolve } from "path"

export default {
  frontSrcDir: resolve("apps/front/src"),

  // Scaffold components
  componentCompatibleFolders: ["components", "pages"],
  componentsTemplatesDir: resolve("cli/tasks/scaffold-component/templates"),

  // Scaffold WP
  wpTheme: resolve("apps/back/web/app/themes/CherAmi"),
  wpTemplatesPath: resolve("cli/tasks/scaffold-wp/templates"),

  // setup
  taskSetupFolder: resolve("cli/tasks/setup"),
  installFile: resolve("cli/install"),
  setupFakeMode: false,
}
