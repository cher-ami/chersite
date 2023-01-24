import { resolve } from "path"

const root = "../../"
const appsApiRoot = `${root}apps/api/`
const appsFrontRoot = `${root}apps/front/`

// prettier-ignore
export default {

  // Scaffold components
  srcDir: resolve(`${appsFrontRoot}/src`), // TODO ne devrait pas être specifié ici
  bundleType: ["react", "dom"],
  componentCompatibleFolders: ["components", "pages", "popin"],
  componentsTemplatesDir: resolve(`src/tasks/scaffold-component/templates`),
  twigTemplates: resolve(`${appsApiRoot}/web/app/themes/CherAmi/templates`),

  // Scaffold WP
  wpTheme: resolve(`${appsApiRoot}/web/app/themes/CherAmi`),
  wpTemplatesPath: resolve("src/tasks/scaffold-wp/templates"),

  // Setup
  taskSetupFolder: resolve("config/tasks/setup"),
  installFile: resolve(`${root}install`),
  setupFakeMode: false,
}
