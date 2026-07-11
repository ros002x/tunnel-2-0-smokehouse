const euro = new Intl.NumberFormat("it-IT", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

const categories = [
  { id: "all", label: "Tutto" },
  { id: "starter", label: "Inizio" },
  { id: "bbq", label: "BBQ" },
  { id: "mix", label: "Mix" },
  { id: "meat", label: "Frollatore" },
  { id: "burger", label: "Burger" },
  { id: "side", label: "Sides" },
  { id: "dessert", label: "Dolci" },
  { id: "drink", label: "Drink" },
];

const menu = [
  { id: "brisket", cat: "bbq", title: "Brisket Masurya", price: 15, tag: "Quercia", desc: "Punta di petto di scottona Masurya affumicata lentamente.", detail: "Piatto manifesto: va messo in alto per far capire subito che Tunnel 2.0 non e un pub generico.", hot: true },
  { id: "baby-ribs", cat: "bbq", title: "Baby Back Ribs", price: 15, tag: "Ciliegio", desc: "Costine di maiale affumicate con legno di ciliegio e patatine.", detail: "La scelta piu immediata per chi vuole BBQ senza pensarci troppo.", hot: true },
  { id: "beef-ribs", cat: "bbq", title: "Beef Ribs", price: 25, tag: "Hickory", desc: "Costine di scottona in formato piccolo, medio o grande.", detail: "Prezzo da 25 a 45 euro: perfette da spiegare per peso e fame del tavolo.", hot: true },
  { id: "ali-bbq", cat: "bbq", title: "Ali di pollo BBQ", price: 6, tag: "Melo", desc: "Ali affumicate con legno di melo, disponibili 1 o 2 pezzi.", detail: "Ingresso economico alla parte smokehouse, utile anche in condivisione." },
  { id: "salsiccia-lucana", cat: "bbq", title: "Salsiccia lucana", price: 8, tag: "Territorio", desc: "Salsiccia lucana affumicata con ciliegio e patatine.", detail: "Collega la smokehouse americana alla Basilicata." },
  { id: "tartare", cat: "starter", title: "Tartare", price: 9, tag: "Crudo", desc: "Cantabrico, capperi Pantelleria, senape, cetriolini e cipolla rossa.", detail: "Apre il menu con un tono piu gastronomico." },
  { id: "carpaccio", cat: "starter", title: "Carpaccio", price: 8, tag: "Citronette", desc: "Carpaccio condito con citronette.", detail: "Semplice, pulito, buono per chi non parte dal fritto." },
  { id: "picanha", cat: "starter", title: "Picanha stagionata", price: 10, tag: "Nocciole", desc: "Picanha stagionata con nocciole tostate.", detail: "Antipasto con identita carne forte." },
  { id: "frollatore", cat: "meat", title: "Selezione dal frollatore", price: 0, tag: "Al peso", desc: "Rubia Gallega, Minhota, Chianina IGP, Angus, Masurya e Wagyu A5.", detail: "Qui il personale guida scelta, peso e cottura: e la parte piu premium.", hot: true },
  { id: "bacon-crispy", cat: "burger", title: "Bacon Crispy 2.0", price: 15, tag: "Wagyu", desc: "Wagyu, cheddar, bacon croccante e salsa crispy.", detail: "Burger bandiera: prezzo alto ma nome forte e ingredienti chiari.", hot: true },
  { id: "toro-seduto", cat: "burger", title: "Toro Seduto", price: 13, tag: "Angus", desc: "Angus frollato 30 giorni, rucola, grana, mayo basilico e balsamico.", detail: "Il burger piu italiano della linea." },
  { id: "cheese-smash", cat: "burger", title: "Cheese Smash", price: 8, tag: "Smash", desc: "Doppio patty, cheddar, cipolla caramellata, bacon e salsa crispy.", detail: "Entry point perfetto per pranzo, asporto o scelta veloce." },
  { id: "jam-smash", cat: "burger", title: "Jam Smash", price: 9, tag: "Bacon jam", desc: "Doppio patty, cheddar, salsa burger, bacon jam e doppio bacon.", detail: "Da spingere per chi cerca qualcosa di piu goloso." },
  { id: "carbo-smash", cat: "burger", title: "Carbo Smash", price: 10, tag: "Carbonara", desc: "Guanciale croccante, doppio patty, pecorino e carbocrema.", detail: "Nome facile da ricordare, molto social anche senza foto." },
  { id: "smoke-pork", cat: "burger", title: "Smoke Pork", price: 9, tag: "Pulled", desc: "Pulled pork e coleslaw.", detail: "Burger ponte tra BBQ e panino." },
  { id: "kentucky", cat: "mix", title: "Kentucky", price: 40, tag: "2 persone", desc: "Ribs, pollo fritto, pulled pork, ali BBQ, chili con carne e patatine.", detail: "Mix piccolo: perfetto per coppie che vogliono assaggiare piu cose.", hot: true },
  { id: "missouri", cat: "mix", title: "Missouri", price: 65, tag: "3-4 persone", desc: "Brisket, ribs, salsicce, ali BBQ, pulled pork, chili e patatine.", detail: "Il formato piu equilibrato per tavoli medi.", hot: true },
  { id: "arizona", cat: "mix", title: "Arizona", price: 75, tag: "4-5 persone", desc: "Beef ribs, brisket, salsicce BBQ, ali, chili e patatine.", detail: "Sale di intensita con le beef ribs." },
  { id: "texas", cat: "mix", title: "Texas", price: 100, tag: "5-6 persone", desc: "Ribs vitello, baby ribs, brisket, pulled pork, salsicce, ali e chili.", detail: "La tavolata completa: ottimo anchor price." },
  { id: "patate-bacon", cat: "side", title: "Patate cheddar & bacon", price: 7, tag: "Fritti", desc: "Patatine con cheddar e bacon.", detail: "Side molto vendibile accanto ai burger." },
  { id: "cruschi", cat: "side", title: "Peperoni cruschi", price: 3, tag: "Lucania", desc: "Formati piccolo, medio o grande.", detail: "Dettaglio territoriale da tenere visibile." },
  { id: "coleslaw", cat: "side", title: "Coleslaw", price: 5, tag: "BBQ side", desc: "Insalata di cavolo in stile BBQ.", detail: "Taglia grasso e affumicato, ideale con pulled pork e ribs." },
  { id: "verdure", cat: "side", title: "Mix verdure grigliate", price: 5, tag: "Griglia", desc: "Verdure grigliate miste.", detail: "Opzione leggera da non nascondere." },
  { id: "tiramisu", cat: "dessert", title: "Tiramisu", price: 4, tag: "Dolce", desc: "Classico di fine pasto.", detail: "Prezzo semplice, scelta senza attrito." },
  { id: "cheesecake", cat: "dessert", title: "Cheesecake frutti di bosco", price: 4, tag: "Dolce", desc: "Cheesecake con frutti di bosco.", detail: "Alternativa fresca dopo BBQ intenso." },
  { id: "krombacher", cat: "drink", title: "Krombacher", price: 0, tag: "Birra", desc: "Birre in carta da abbinare a fritti, burger e BBQ.", detail: "La carta drink va raccontata per abbinamenti, non solo per lista." },
  { id: "aglianico", cat: "drink", title: "Aglianico e rossi strutturati", price: 0, tag: "Vino", desc: "Rossi indicati per tagli frollati, brisket e ribs.", detail: "Qui si alza lo scontrino medio con un consiglio chiaro." },
];

const state = {
  category: "all",
  query: "",
  sort: "default",
  order: new Map(),
  selectedId: null,
};

const $ = (selector) => document.querySelector(selector);
const topbar = $("[data-topbar]");
const categoryRail = $("[data-categories]");
const results = $("[data-menu-results]");
const resultCount = $("[data-result-count]");
const activeLabel = $("[data-active-label]");
const searchInput = $("#menuSearch");
const sortSelect = $("#menuSort");
const orderItems = $("[data-order-items]");
const orderTotal = $("[data-order-total]");
const clearOrder = $("[data-clear-order]");
const drawer = $("[data-drawer]");

function priceLabel(item) {
  return item.price > 0 ? euro.format(item.price) : item.tag;
}

function categoryLabel(id) {
  return categories.find((category) => category.id === id)?.label || id;
}

function visibleItems() {
  const query = state.query.trim().toLowerCase();
  let items = menu.filter((item) => {
    const matchesCategory = state.category === "all" || item.cat === state.category;
    const haystack = `${item.title} ${item.desc} ${item.tag}`.toLowerCase();
    return matchesCategory && (!query || haystack.includes(query));
  });

  if (state.sort === "price-asc") {
    items = items.slice().sort((a, b) => (a.price || 999) - (b.price || 999));
  } else if (state.sort === "price-desc") {
    items = items.slice().sort((a, b) => b.price - a.price);
  } else if (state.sort === "name") {
    items = items.slice().sort((a, b) => a.title.localeCompare(b.title));
  } else {
    items = items.slice().sort((a, b) => Number(b.hot) - Number(a.hot));
  }

  return items;
}

function renderCategories() {
  categoryRail.innerHTML = categories.map((category) => {
    const count = category.id === "all" ? menu.length : menu.filter((item) => item.cat === category.id).length;
    const active = state.category === category.id ? "is-active" : "";
    return `<button class="${active}" type="button" data-category="${category.id}">
      <span>${category.label}</span><strong>${count}</strong>
    </button>`;
  }).join("");
}

function renderMenu() {
  const items = visibleItems();
  resultCount.textContent = `${items.length} ${items.length === 1 ? "piatto" : "piatti"}`;
  activeLabel.textContent = state.category === "all" ? "Tutto il menu" : categoryLabel(state.category);

  results.innerHTML = items.map((item) => `
    <article class="menu-card ${item.hot ? "is-hot" : ""}">
      <div class="card-top">
        <span class="pill">${categoryLabel(item.cat)} / ${item.tag}</span>
        <strong>${priceLabel(item)}</strong>
      </div>
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
      <div class="card-actions">
        <button type="button" data-detail="${item.id}">Dettagli</button>
        <button type="button" data-add="${item.id}">+ Tavolo</button>
      </div>
    </article>
  `).join("");
}

function renderMixGrid() {
  const mixGrid = $("[data-mix-grid]");
  if (!mixGrid) return;

  mixGrid.innerHTML = menu.filter((item) => item.cat === "mix").map((item) => `
    <article>
      <span>${item.tag}</span>
      <h3>${item.title}</h3>
      <strong>${priceLabel(item)}</strong>
      <p>${item.desc}</p>
      <button type="button" data-add="${item.id}">+ Tavolo</button>
    </article>
  `).join("");
}

function addToOrder(id) {
  const item = menu.find((entry) => entry.id === id);
  if (!item || item.price <= 0) return;
  const current = state.order.get(id) || 0;
  state.order.set(id, current + 1);
  renderOrder();
}

function changeQty(id, delta) {
  const current = state.order.get(id) || 0;
  const next = current + delta;
  if (next <= 0) state.order.delete(id);
  else state.order.set(id, next);
  renderOrder();
}

function renderOrder() {
  if (state.order.size === 0) {
    orderItems.innerHTML = `<p class="empty">Aggiungi piatti per creare una bozza rapida.</p>`;
    orderTotal.innerHTML = "&euro;0";
    return;
  }

  let total = 0;
  orderItems.innerHTML = Array.from(state.order.entries()).map(([id, qty]) => {
    const item = menu.find((entry) => entry.id === id);
    total += item.price * qty;
    return `<div class="order-row">
      <span>${item.title}<small>${qty} x ${priceLabel(item)}</small></span>
      <div>
        <button type="button" data-qty="${id}" data-delta="-1">-</button>
        <strong>${qty}</strong>
        <button type="button" data-qty="${id}" data-delta="1">+</button>
      </div>
    </div>`;
  }).join("");
  orderTotal.textContent = euro.format(total);
}

function openDrawer(id) {
  const item = menu.find((entry) => entry.id === id);
  if (!item) return;
  state.selectedId = id;
  $("[data-drawer-category]").textContent = `${categoryLabel(item.cat)} / ${item.tag}`;
  $("[data-drawer-title]").textContent = item.title;
  $("[data-drawer-price]").textContent = priceLabel(item);
  $("[data-drawer-description]").textContent = item.detail;
  $("[data-drawer-tags]").innerHTML = [item.desc, item.hot ? "Da spingere" : "Scelta menu"].map((tag) => `<span>${tag}</span>`).join("");
  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");
}

function closeDrawer() {
  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
}

document.addEventListener("click", (event) => {
  const categoryButton = event.target.closest("[data-category]");
  if (categoryButton) {
    state.category = categoryButton.dataset.category;
    renderCategories();
    renderMenu();
    return;
  }

  const detailButton = event.target.closest("[data-detail]");
  if (detailButton) openDrawer(detailButton.dataset.detail);

  const addButton = event.target.closest("[data-add]");
  if (addButton) addToOrder(addButton.dataset.add);

  const qtyButton = event.target.closest("[data-qty]");
  if (qtyButton) changeQty(qtyButton.dataset.qty, Number(qtyButton.dataset.delta));

  if (event.target.closest("[data-close-drawer]")) closeDrawer();
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderMenu();
});

sortSelect.addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderMenu();
});

clearOrder.addEventListener("click", () => {
  state.order.clear();
  renderOrder();
});

$("[data-drawer-add]").addEventListener("click", () => {
  addToOrder(state.selectedId);
  closeDrawer();
});

window.addEventListener("scroll", () => {
  topbar.classList.toggle("is-solid", window.scrollY > 18);
}, { passive: true });

renderCategories();
renderMenu();
renderMixGrid();
renderOrder();
