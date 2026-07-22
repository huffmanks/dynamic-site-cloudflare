import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div class="card">
  <h1>Welcome to the GUI App!</h1>
  <p>You are viewing this interface because you used a web browser.</p>
  <p><strong>Try running this in your terminal:</strong></p>
  <code>curl ${window.location.origin}</code>
</div>
`;
