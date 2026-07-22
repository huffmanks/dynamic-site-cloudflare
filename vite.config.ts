import { defineConfig, PreviewServer, ViteDevServer, type Connect, type Plugin } from "vite";

import { handleCliRequest } from "./src/cli-handler";

function createMiddleware(server: ViteDevServer | PreviewServer): Connect.NextHandleFunction {
  return async (req, res, next) => {
    const protocol = server.config.server.https ? "https" : "http";
    const host = req.headers.host ?? "localhost";
    const url = `${protocol}://${host}${req.url ?? "/"}`;

    const webRequest = new Request(url, {
      method: req.method ?? "GET",
      headers: req.headers as HeadersInit,
    });

    const response = handleCliRequest(webRequest);

    if (response) {
      res.statusCode = response.status;
      response.headers.forEach((value, key) => res.setHeader(key, value));
      res.end(await response.text());
      return;
    }

    next();
  };
}

function terminalMiddleware(): Plugin {
  return {
    name: "cli-handler",
    configureServer(server) {
      server.middlewares.use(createMiddleware(server));
    },
    configurePreviewServer(server) {
      server.middlewares.use(createMiddleware(server));
    },
  };
}

export default defineConfig({
  plugins: [terminalMiddleware()],
});
