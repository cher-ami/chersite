<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>App PHP</title>

      <script type="module">
        import RefreshRuntime from 'http://192.168.1.91:3000/@react-refresh'
        RefreshRuntime.injectIntoGlobalHook(window);
        window.$RefreshReg$ = () => {};
        window.$RefreshSig$ = () => (type) => type;
        window.__vite_plugin_react_preamble_installed__ = true;
      </script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="http://192.168.1.91:3000/@vite/client"></script>
    <script type="module" src="http://192.168.1.91:3000/src/index.tsx"></script>
  </body>
</html>
