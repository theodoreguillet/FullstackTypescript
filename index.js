if(process.env.NODE_ENV !== 'production') {
  const tsConfig = require("./src/server/tsconfig.json");
  const tsConfigPaths = require("tsconfig-paths");

  const baseUrl = "./dist/server-root/"; // Either absolute or relative path. If relative it's resolved to current working directory.
  const cleanup = tsConfigPaths.register({
    baseUrl,
    paths: tsConfig.compilerOptions.paths
  });

  require('./dist/server-root/main');

  // When path registration is no longer needed
  cleanup();
} else {
  require('./dist/server-root/main');
}