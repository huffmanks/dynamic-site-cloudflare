# dynamic-site-cloudflare

A web app that serves different responses for browsers and the terminal.

- **Browser:** Serves a basic HTML interface.
- **CLI:** Returns a formatted terminal response for `curl`, `wget`, and `httpie`.

## How it works

A Cloudflare Pages middleware checks the incoming `User-Agent` header. If it detects a supported CLI tool, it returns a plain-text response with ANSI colors. Otherwise, the request continues to the normal web app.

## Tech stack

- TypeScript
- Vite
- Cloudflare Pages Functions
