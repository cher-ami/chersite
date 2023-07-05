import { resolve } from "path"

export default {
  frontSrcDir: resolve("apps/front/src"),

  // Scaffold components
  bundleType: ["react", "dom"],
  componentCompatibleFolders: ["components", "pages"],
  componentsTemplatesDir: resolve("cli/tasks/scaffold-component/templates"),
  twigTemplates: resolve("apps/back/web/app/themes/CherAmi/templates"),

  // Scaffold WP
  wpTheme: resolve("apps/back/web/app/themes/CherAmi"),
  wpTemplatesPath: resolve("api/tasks/scaffold-wp/templates"),

  // setup
  taskSetupFolder: resolve("api/tasks/setup"),
  installFile: resolve("api/install"),
  setupFakeMode: false,
}
