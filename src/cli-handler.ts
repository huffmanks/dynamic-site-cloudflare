export function handleCliRequest(request: Request): Response | null {
  const userAgent = (request.headers.get("user-agent") || "").toLowerCase();
  const isCli = ["curl", "wget", "httpie"].some((cli) => userAgent.includes(cli));

  if (!isCli) return null;

  const esc = "\u001b";
  const reset = `${esc}[0m`;
  const cyan = `${esc}[36m`;
  const yellow = `${esc}[33m`;
  const green = `${esc}[32m`;
  const bold = `${esc}[1m`;

  const cliOutput = [
    `${cyan}==========================================${reset}`,
    `  ${bold}${yellow}🚀 WELCOME TO THE TS TERMINAL API 🚀${reset}`,
    `${cyan}==========================================${reset}`,
    ` Status:  [ ${green}ONLINE${reset} ]`,
    ` Service: Edge / Dev Unified Handler`,
    ` Note:    You are viewing the CLI optimized version.`,
    `${cyan}------------------------------------------${reset}`,
    "",
  ].join("\n");

  return new Response(cliOutput, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}
