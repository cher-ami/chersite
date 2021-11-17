const { resolve } = require("path")

// prettier-ignore
module.exports = {

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
  input: [
    'src/index.tsx',
    // ... other entry files
  ],

  // --------------------------------------------------------------------------- TASKS

  // Build dotenv outDir array
  // This task can build the same dotenv files in different directories
  buildDotenvOutDir: [resolve('dist/front/www/')],

  // Build Atoms
  atomsDir: resolve('src/atoms'),
  atomsPartialsDir: resolve('src/atoms/partials'),
  atomsFilesToWatch: resolve('src/atoms/partials/*.less'),
  atomsGeneratedFilename: 'atoms.ts',

  // Build htaccess
  htaccessTemplateFilePath: resolve('src/.htaccess'),

  // Scaffold
  componentCompatibleFolders: ['components', 'pages', 'popin'],
  componentsTemplatesDir: resolve('config/tasks/scaffold-component/templates'),
  bundleType: ['react', 'dom'],
  
  // setup
  taskSetupFolder: resolve("config/tasks/setup"),
  installFile: resolve("config/install"),
  setupFakeMode: false
};
