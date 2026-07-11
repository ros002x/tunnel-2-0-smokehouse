const dishes = [
  { name: "Brisket Masurya", category: "BBQ", price: 15, note: "Punta di petto di scottona affumicata con quercia.", featured: true },
  { name: "Baby Back Ribs", category: "BBQ", price: 15, note: "Costine di maiale affumicate con ciliegio e patatine.", featured: true },
  { name: "Beef Ribs", category: "BBQ", price: 25, note: "Costine di scottona con hickory. Piccola, media o grande.", featured: true },
  { name: "Ali di pollo BBQ", category: "BBQ", price: 6, note: "Affumicate con legno di melo, disponibili anche doppie." },
  { name: "Salsiccia lucana", category: "BBQ", price: 8, note: "Affumicata con ciliegio, servita con patatine." },
  { name: "Tartare", category: "Antipasti", price: 9, note: "Cantabrico, capperi, senape, cetriolini e cipolla rossa." },
  { name: "Carpaccio", category: "Antipasti", price: 8, note: "Carpaccio con citronette." },
  { name: "Picanha stagionata", category: "Antipasti", price: 10, note: "Picanha stagionata con nocciole tostate." },
  { name: "Selezione dal frollatore", category: "Carni", price: 0, note: "Rubia Gallega, Chianina IGP, Angus, Masurya e Wagyu A5.", featured: true },
  { name: "Bacon Crispy 2.0", category: "Burger", price: 15, note: "Wagyu, cheddar, bacon croccante e salsa crispy.", featured: true },
  { name: "Toro Seduto", category: "Burger", price: 13, note: "Angus frollato 30 giorni, rucola, grana, mayo basilico." },
  { name: "Cheese Smash", category: "Burger", price: 8, note: "Doppio patty, cheddar, cipolla caramellata, bacon e salsa crispy." },
  { name: "Jam Smash", category: "Burger", price: 9, note: "Doppio patty, cheddar, bacon jam e doppio bacon." },
  { name: "Carbo Smash", category: "Burger", price: 10, note: "Guanciale, doppio patty, pecorino romano e carbocrema." },
  { name: "Smoke Pork", category: "Burger", price: 9, note: "Pulled pork e coleslaw." },
  { name: "Kentucky", category: "Mix BBQ", price: 40, note: "Per 2: ribs, pollo fritto, pulled pork, ali BBQ, chili, patatine.", featured: true },
  { name: "Missouri", category: "Mix BBQ", price: 65, note: "Per 3-4: brisket, ribs, salsicce, ali BBQ, pulled pork e chili.", featured: true },
  { name: "Arizona", category: "Mix BBQ", price: 75, note: "Per 4-5: beef ribs, brisket, salsicce BBQ, ali e chili." },
  { name: "Texas", category: "Mix BBQ", price: 100, note: "Per 5-6: ribs, brisket, pulled pork, salsicce, ali e chili." },
  { name: "Patate cheddar & bacon", category: "Sides", price: 7, note: "Contorno forte per burger e BBQ." },
  { name: "Peperoni cruschi", category: "Sides", price: 3, note: "Formato piccolo, medio o grande." },
  { name: "Coleslaw", category: "Sides", price: 5, note: "Insalata BBQ ideale con pulled pork e ribs." },
  { name: "Mix verdure grigliate", category: "Sides", price: 5, note: "Verdure grigliate miste." },
  { name: "Tiramisu", category: "Dolci", price: 4, note: "Classico di fine pasto." },
  { name: "Cheesecake frutti di bosco", category: "Dolci", price: 4, note: "Fresca dopo BBQ e carni." },
];

const categories = ["Tutto", ...new Set(dishes.map((dish) => dish.category))];
const ticket = new Map();

const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");
const menuCards = document.getElementById("menuCards");
const menuStatus = document.getElementById("menuStatus");
const ticketItems = document.getElementById("ticketItems");
const ticketTotal = document.getElementById("ticketTotal");
const clearTicket = document.getElementById("clearTicket");
const sharingGrid = document.getElementById("sharingGrid");

function money(value) {
  return value > 0 ? `${value} EUR` : "al peso";
}

function renderCategories() {
  categorySelect.innerHTML = categories
    .map((category) => `<option value="${category}">${category}</option>`)
    .join("");
}

function getFilteredDishes() {
  const query = searchInput.value.trim().toLowerCase();
  const category = categorySelect.value;

  return dishes
    .filter((dish) => category === "Tutto" || dish.category === category)
    .filter((dish) => {
      const text = `${dish.name} ${dish.category} ${dish.note}`.toLowerCase();
      return !query || text.includes(query);
    })
    .sort((a, b) => Number(b.featured) - Number(a.featured));
}

function renderMenu() {
  const visible = getFilteredDishes();
  menuStatus.textContent = `${visible.length} risultati`;

  if (visible.length === 0) {
    menuCards.innerHTML = `<p class="empty-state">Nessun piatto trovato. Prova con BBQ, burger o ribs.</p>`;
    return;
  }

  menuCards.innerHTML = visible.map((dish) => `
    <article class="dish-card ${dish.featured ? "featured" : ""}">
      <div class="dish-meta">
        <span>${dish.category}</span>
        <strong>${money(dish.price)}</strong>
      </div>
      <h3>${dish.name}</h3>
      <p>${dish.note}</p>
      <button type="button" data-add="${dish.name}" ${dish.price === 0 ? "disabled" : ""}>
        ${dish.price === 0 ? "Chiedi al banco" : "Aggiungi"}
      </button>
    </article>
  `).join("");
}

function renderTicket() {
  if (ticket.size === 0) {
    ticketItems.innerHTML = `<p>Seleziona i piatti e controlla il totale indicativo.</p>`;
    ticketTotal.textContent = "0 EUR";
    return;
  }

  let total = 0;
  ticketItems.innerHTML = Array.from(ticket.entries()).map(([name, qty]) => {
    const dish = dishes.find((item) => item.name === name);
    total += dish.price * qty;
    return `
      <div class="ticket-row">
        <span>${dish.name}<small>${qty} x ${money(dish.price)}</small></span>
        <div>
          <button type="button" data-minus="${dish.name}">-</button>
          <strong>${qty}</strong>
          <button type="button" data-plus="${dish.name}">+</button>
        </div>
      </div>
    `;
  }).join("");
  ticketTotal.textContent = money(total);
}

function addDish(name) {
  ticket.set(name, (ticket.get(name) || 0) + 1);
  renderTicket();
}

function changeDish(name, delta) {
  const next = (ticket.get(name) || 0) + delta;
  if (next <= 0) ticket.delete(name);
  else ticket.set(name, next);
  renderTicket();
}

function renderSharing() {
  const mixes = dishes.filter((dish) => dish.category === "Mix BBQ");
  sharingGrid.innerHTML = mixes.map((dish) => `
    <article>
      <span>${dish.note.split(":")[0]}</span>
      <h3>${dish.name}</h3>
      <strong>${money(dish.price)}</strong>
      <p>${dish.note}</p>
      <button type="button" data-add="${dish.name}">Aggiungi</button>
    </article>
  `).join("");
}

document.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add]");
  const minusButton = event.target.closest("[data-minus]");
  const plusButton = event.target.closest("[data-plus]");

  if (addButton) addDish(addButton.dataset.add);
  if (minusButton) changeDish(minusButton.dataset.minus, -1);
  if (plusButton) changeDish(plusButton.dataset.plus, 1);
});

searchInput.addEventListener("input", renderMenu);
categorySelect.addEventListener("change", renderMenu);
clearTicket.addEventListener("click", () => {
  ticket.clear();
  renderTicket();
});

renderCategories();
renderMenu();
renderTicket();
renderSharing();
