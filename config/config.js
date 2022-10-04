import { resolve } from "path"

// prettier-ignore
export default {

  // --------------------------------------------------------------------------- PATHS / VITE CONFIG

  // sources
  srcDir: resolve('src'),

  // public assets from this folder will be copied in build folder
  publicDir: resolve('src/public'),

  // folder to deploy on front server
  wwwDir: resolve('dist/front/www/'),

  // Directory name of the build folder (will be cleaned before build)
  // If this value is change, modify "outDir" last folder with this new one
  buildDirname: 'static',

  // outDir: where files are built
  // last folder need to be sync with `buildDirname`
  // If this value is change, add this new path in .gitignore
  outDir: resolve('dist/front/www/static/'),

  // Input entry files array
  // Set the relative paths, don't resolve them.
  // This config is used only if the index is not generated by vite
  input: [
    'src/index.tsx',
    // ... other entry files
  ],

  // --------------------------------------------------------------------------- TASKS

  // Build dotenv outDir array
  // This task can build the same dotenv files in different directories
  buildDotenvOutDir: [resolve('dist/front/')],

  // Build htaccess
  htaccessTemplateFilePath: resolve('config/tasks/build-htaccess/templates/.htaccess.template'),

  // Scaffold components
  bundleType: ['react', 'dom'],
  componentCompatibleFolders: ['components', 'pages', 'popin'],
  componentsTemplatesDir: resolve('config/tasks/scaffold-component/templates'),

  // Scaffold WP
  wpTheme: resolve("dist/api/web/app/themes/CherAmi"),
  wpTemplatesPath: resolve("config/tasks/scaffold-wp/templates"),

  // setup
  taskSetupFolder: resolve("config/tasks/setup"),
  installFile: resolve("config/install"),
  setupFakeMode: false

};
