const sections = [
  {
    id: "bbq",
    label: "BBQ",
    intro: "Affumicatura, cotture lente e tagli serviti con carattere.",
    items: [
      { name: "Brisket Masurya", price: "15 EUR", desc: "Punta di petto di scottona affumicata con legno di quercia.", badge: "scelta smokehouse", featured: true },
      { name: "Baby Back Ribs", price: "15 EUR", desc: "Costine di maiale affumicate con ciliegio, servite con patatine.", badge: "best seller", featured: true },
      { name: "Beef Ribs", price: "25 / 35 / 45 EUR", desc: "Costine di scottona affumicate con hickory. Tre formati.", badge: "per veri carnivori", featured: true },
      { name: "Ali di pollo BBQ", price: "6 / 10 EUR", desc: "Ali affumicate con legno di melo. Singola o doppia porzione." },
      { name: "Salsiccia lucana", price: "8 EUR", desc: "Salsiccia lucana affumicata con ciliegio, servita con patatine.", badge: "territorio" },
      { name: "Salsiccia cheddar & bacon", price: "8 EUR", desc: "Versione piu ricca, affumicata e servita con patatine." },
    ],
  },
  {
    id: "mix",
    label: "Mix BBQ",
    intro: "La scelta piu semplice per tavoli che vogliono assaggiare tanto.",
    items: [
      { name: "Kentucky", price: "40 EUR", desc: "Consigliato per 2: ribs, pollo fritto, pulled pork, ali BBQ, chili con carne, patatine.", badge: "entry sharing", featured: true },
      { name: "Missouri", price: "65 EUR", desc: "Per 3-4: brisket, baby back ribs, salsicce, ali BBQ, pulled pork, chili, patatine.", badge: "piu equilibrato", featured: true },
      { name: "Arizona", price: "75 EUR", desc: "Per 4-5: ribs di vitello, brisket, salsicce BBQ, ali BBQ, chili e patatine." },
      { name: "Texas", price: "100 EUR", desc: "Per 5-6: ribs di vitello, baby back ribs, brisket, pulled pork, salsicce, ali, chili.", badge: "tavolata completa" },
    ],
  },
  {
    id: "frollatore",
    label: "Frollatore",
    intro: "Tagli selezionati, peso e cottura da scegliere con lo staff.",
    items: [
      { name: "Selezione carni", price: "al peso", desc: "Rubia Gallega, Minhota Portoghese, Chianina IGP, Angus, Masurya, Wagyu A5.", badge: "premium", featured: true },
      { name: "Costate", price: "al peso", desc: "Taglio importante da condividere o scegliere al banco." },
      { name: "Fiorentine", price: "al peso", desc: "Scelta scenica, ideale per chi vuole vivere il frollatore." },
    ],
  },
  {
    id: "burger",
    label: "Burger",
    intro: "Burger pieni, smash croccanti e panini con identita chiara.",
    items: [
      { name: "Bacon Crispy 2.0", price: "15 EUR", desc: "Wagyu, cheddar, bacon croccante, salsa crispy.", badge: "firma 2.0", featured: true },
      { name: "Toro Seduto", price: "13 EUR", desc: "Angus frollato 30 giorni, mayo basilico, rucola, grana e balsamico." },
      { name: "Los Pollos Hermanos", price: "8 EUR", desc: "Pollo fritto, lattuga, salsa Alabama, cheddar." },
      { name: "Cheese Smash", price: "8 EUR", desc: "Doppio patty, cheddar, cipolla caramellata, bacon, salsa crispy." },
      { name: "Jam Smash", price: "9 EUR", desc: "Doppio patty, cheddar, salsa burger, bacon jam, doppio bacon.", badge: "goloso" },
      { name: "Carbo Smash", price: "10 EUR", desc: "Guanciale croccante, doppio patty, pecorino romano, carbocrema.", badge: "da provare" },
      { name: "Smoke Pork", price: "9 EUR", desc: "Pulled pork e coleslaw." },
      { name: "Come vuoi tu", price: "su richiesta", desc: "Composizione personalizzata." },
    ],
  },
  {
    id: "antipasti",
    label: "Antipasti",
    intro: "Aperture di carne e piccoli piatti prima della brace.",
    items: [
      { name: "Tartare", price: "9 EUR", desc: "Acciughe del Cantabrico, capperi Pantelleria, senape, cetriolini, cipolla rossa." },
      { name: "Carpaccio", price: "8 EUR", desc: "Carpaccio con citronette." },
      { name: "Polpette al sugo", price: "6 EUR", desc: "Classico caldo e diretto." },
      { name: "Baltimore Pit Beef", price: "8 EUR", desc: "Salsa tonnata e fior di cappero." },
      { name: "Picanha stagionata", price: "10 EUR", desc: "Picanha stagionata con nocciole tostate." },
    ],
  },
  {
    id: "sides",
    label: "Sides",
    intro: "Contorni e fritti per completare BBQ, burger e carni.",
    items: [
      { name: "Patatine", price: "3 / 5 / 8 EUR", desc: "Small, medium, large." },
      { name: "Patatine cheddar & bacon", price: "7 EUR", desc: "Side ricco, perfetto con burger e ribs.", badge: "spinta vendita" },
      { name: "Patatine pulled pork", price: "7 EUR", desc: "Patatine cariche con pulled pork." },
      { name: "Peperoni cruschi", price: "3 / 6 / 10 EUR", desc: "Il dettaglio lucano da tenere visibile.", badge: "lucano" },
      { name: "Coleslaw", price: "5 EUR", desc: "Insalata BBQ ideale con pulled pork e ribs." },
      { name: "Cicoria campestre", price: "4 EUR", desc: "Contorno amaro, territoriale." },
      { name: "Verdure pastellate", price: "5 EUR", desc: "Fritto vegetale." },
      { name: "Mix verdure grigliate", price: "5 EUR", desc: "Melanzane, zucchine e verdure alla griglia." },
    ],
  },
  {
    id: "dolci",
    label: "Dolci",
    intro: "Finale semplice, leggibile, prezzo unico.",
    items: [
      { name: "Tiramisu", price: "4 EUR", desc: "Classico di fine pasto." },
      { name: "Cheesecake frutti di bosco", price: "4 EUR", desc: "Fresca e facile dopo BBQ intenso." },
      { name: "Mousse limone", price: "4 EUR", desc: "Finale leggero." },
      { name: "Torta Sacher", price: "4 EUR", desc: "Cioccolato, decisa." },
      { name: "Souffle al cioccolato", price: "4 EUR", desc: "Caldo e goloso." },
    ],
  },
];

const tabs = document.getElementById("tabs");
const list = document.getElementById("menuList");
const search = document.getElementById("menuSearch");
const featuredGrid = document.getElementById("featuredGrid");
let active = "all";

function allItems() {
  return sections.flatMap((section) => section.items.map((item) => ({ ...item, section: section.label, sectionId: section.id })));
}

function itemMarkup(item, compact = false) {
  return `
    <article class="menu-card ${item.featured ? "is-featured" : ""}">
      <div class="item-top">
        <span>${item.badge || item.section}</span>
        <strong>${item.price}</strong>
      </div>
      <h3>${item.name}</h3>
      <p>${item.desc}</p>
      ${compact ? `<small>${item.section}</small>` : ""}
    </article>
  `;
}

function renderTabs() {
  const buttons = [{ id: "all", label: "Tutto" }, ...sections].map((section) => {
    const label = section.label;
    const className = active === section.id ? "active" : "";
    return `<button class="${className}" type="button" data-tab="${section.id}">${label}</button>`;
  });
  tabs.innerHTML = buttons.join("");
}

function renderFeatured() {
  const featured = allItems().filter((item) => item.featured).slice(0, 6);
  featuredGrid.innerHTML = featured.map((item) => itemMarkup(item, true)).join("");
}

function renderMenu() {
  const query = search.value.trim().toLowerCase();
  const visibleSections = sections
    .filter((section) => active === "all" || section.id === active)
    .map((section) => {
      const items = section.items.filter((item) => {
        const text = `${item.name} ${item.desc} ${item.badge || ""} ${section.label}`.toLowerCase();
        return !query || text.includes(query);
      });
      return { ...section, items };
    })
    .filter((section) => section.items.length > 0);

  if (visibleSections.length === 0) {
    list.innerHTML = `<p class="empty">Nessun risultato. Prova con brisket, burger, ribs o smash.</p>`;
    return;
  }

  list.innerHTML = visibleSections.map((section) => `
    <section class="menu-group" id="${section.id}">
      <div class="group-head">
        <span>${section.label}</span>
        <p>${section.intro}</p>
      </div>
      <div class="group-items">
        ${section.items.map((item) => itemMarkup({ ...item, section: section.label })).join("")}
      </div>
    </section>
  `).join("");
}

tabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-tab]");
  if (!button) return;
  active = button.dataset.tab;
  renderTabs();
  renderMenu();
});

search.addEventListener("input", renderMenu);

renderTabs();
renderFeatured();
renderMenu();
