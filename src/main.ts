
const app = document.querySelector<HTMLDivElement>("#app");

if (!app) throw new Error("No se encontró #app");

app.innerHTML = `
  <main style="font-family: system-ui, Arial; max-width: 720px; margin: 40px auto; padding: 16px;">
    <h1>Hola 👋 TypeScript + Web</h1>
    <p>Esto es una página básica con un botón que cuenta clicks.</p>

    <section style="display:flex; gap:12px; align-items:center; margin-top: 16px;">
      <button id="btn" style="padding:10px 14px; border-radius:10px; border:1px solid #ccc; cursor:pointer;">
        Click
      </button>
      <span>Contador: <b id="count">0</b></span>
    </section>

    <hr style="margin: 24px 0;" />

    <label style="display:block; margin-bottom: 8px;">Tu nombre:</label>
    <input id="name" placeholder="Escribe aquí..." style="padding:10px; width:100%; border-radius:10px; border:1px solid #ccc;" />
    <p id="hello" style="margin-top: 12px;"></p>

    <hr style="margin: 24px 0;" />

    <section style="display:flex; gap:12px; align-items:center; margin-top: 16px;">
      <button id="btnCamila" style="padding:10px 14px; border-radius:10px; border:1px solid #ccc; cursor:pointer;">
        Mostrar mensaje
      </button>

      <span id="camilaOut" style="font-weight:700;"></span>
    </section>


  </main>
`;

let count = 0;

const btn = document.querySelector<HTMLButtonElement>("#btn");
const countEl = document.querySelector<HTMLElement>("#count");
const nameInput = document.querySelector<HTMLInputElement>("#name");
const hello = document.querySelector<HTMLElement>("#hello");
const btnCamila = document.querySelector<HTMLButtonElement>("#btnCamila");
const camilaOut = document.querySelector<HTMLElement>("#camilaOut");


if (!btn || !countEl || !nameInput || !hello || !btnCamila || !camilaOut) {
  throw new Error("Faltan elementos en el HTML");
}


btn.addEventListener("click", () => {
  count += 1;
  countEl.textContent = String(count);
});

nameInput.addEventListener("input", () => {
  const name = nameInput.value.trim();
  hello.textContent = name ? `Mucho gusto, ${name} ✨` : "";
});

btnCamila.addEventListener("click", () => {
  camilaOut.textContent = camilaOut.textContent ? "" : "REGRESA VALERIA";
});

