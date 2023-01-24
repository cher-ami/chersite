import { resolve } from "path"

export default {
  // Build dotenv outDir array
  // This task can build the same dotenv files in different directories
  buildDotenvOutDir: [
    // resolve("dist/")
  ],

  // Build htaccess
  htaccessTemplateFilePath: resolve(
    "config/tasks/build-htaccess/templates/.htaccess.template"
  ),

  // Scaffold components
  bundleType: ["react", "dom"],
  componentCompatibleFolders: ["components", "pages", "popin"],
  componentsTemplatesDir: resolve("config/tasks/scaffold-component/templates"),
  twigTemplates: resolve("dist/web/app/themes/CherAmi/templates"),

  // Scaffold WP
  wpTheme: resolve("dist/api/web/app/themes/CherAmi"),
  wpTemplatesPath: resolve("config/tasks/scaffold-wp/templates"),

  // setup
  taskSetupFolder: resolve("config/tasks/setup"),
  installFile: resolve("../../install"),
  setupFakeMode: false,
}
