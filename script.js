const menu = {
  evidenza: [
    ["Brisket Masurya", "Punta di petto di scottona affumicata con quercia. Il piatto che fa capire la smokehouse.", "15 EUR"],
    ["Bacon Crispy 2.0", "Wagyu, cheddar, bacon croccante e salsa crispy. Burger firma da mettere in evidenza.", "15 EUR"],
    ["Missouri", "Mix per 3-4 persone: brisket, ribs, salsicce, ali BBQ, pulled pork, chili e patatine.", "65 EUR"],
  ],
  bbq: [
    ["Brisket Masurya", "Punta di petto di scottona Masurya affumicata lentamente con legno di quercia.", "15 EUR"],
    ["Baby Back Ribs", "Costine di maiale affumicate con legno di ciliegio, servite con patatine.", "15 EUR"],
    ["Beef Ribs", "Costine di scottona affumicate con hickory. Formato piccolo, medio o grande.", "25 / 35 / 45 EUR"],
    ["Ali di pollo BBQ", "Ali affumicate con legno di melo. Una o due porzioni.", "6 / 10 EUR"],
    ["Salsiccia lucana", "Salsiccia lucana affumicata con ciliegio, servita con patatine.", "8 EUR"],
    ["Salsiccia cheddar & bacon", "Versione ricca con cheddar e bacon, affumicata e servita con patatine.", "8 EUR"],
  ],
  frollatore: [
    ["Selezione carni", "Rubia Gallega, Minhota Portoghese, Chianina IGP, Angus, Masurya e Wagyu A5.", "al peso"],
    ["Costate", "Taglio importante da scegliere al banco con peso e cottura consigliata.", "al peso"],
    ["Fiorentine", "Scelta scenica, pensata per chi vuole vivere il frollatore.", "al peso"],
  ],
  mix: [
    ["Kentucky", "Per 2: baby back ribs, stick pollo fritto, pulled pork, ali BBQ, chili con carne, patatine.", "40 EUR"],
    ["Missouri", "Per 3-4: brisket, baby back ribs, salsicce, ali BBQ, pulled pork, chili, patatine.", "65 EUR"],
    ["Arizona", "Per 4-5: ribs di vitello, brisket, salsicce BBQ, ali BBQ, chili e patatine.", "75 EUR"],
    ["Texas", "Per 5-6: ribs di vitello, baby back ribs, brisket, pulled pork, salsicce, ali, chili.", "100 EUR"],
  ],
  burger: [
    ["Bacon Crispy 2.0", "Wagyu, cheddar, bacon croccante, salsa crispy.", "15 EUR"],
    ["Toro Seduto", "Angus frollato 30 giorni, mayo basilico, rucola, grana e balsamico.", "13 EUR"],
    ["Los Pollos Hermanos", "Pollo fritto, lattuga, salsa Alabama e cheddar.", "8 EUR"],
    ["Cheese Smash", "Doppio patty, cheddar, cipolla caramellata, bacon e salsa crispy.", "8 EUR"],
    ["Jam Smash", "Doppio patty, cheddar, salsa burger, bacon jam homemade e doppio bacon.", "9 EUR"],
    ["Carbo Smash", "Guanciale croccante, doppio patty, pecorino romano e carbocrema.", "10 EUR"],
    ["Smoke Pork", "Pulled pork e coleslaw.", "9 EUR"],
    ["Come vuoi tu", "Composizione personalizzata con lo staff.", "su richiesta"],
  ],
  antipasti: [
    ["Tartare", "Acciughe del Cantabrico, capperi di Pantelleria, senape, cetriolini e cipolla rossa.", "9 EUR"],
    ["Carpaccio", "Carpaccio con citronette.", "8 EUR"],
    ["Polpette al sugo", "Classico caldo, semplice e diretto.", "6 EUR"],
    ["Baltimore Pit Beef", "Salsa tonnata e fior di cappero.", "8 EUR"],
    ["Picanha stagionata", "Picanha stagionata con nocciole tostate.", "10 EUR"],
  ],
  sides: [
    ["Patatine", "Small, medium o large.", "3 / 5 / 8 EUR"],
    ["Patatine cheddar & bacon", "Side ricco con cheddar e bacon, ideale con burger e ribs.", "7 EUR"],
    ["Patatine pulled pork", "Patatine cariche con pulled pork.", "7 EUR"],
    ["Peperoni cruschi", "Small, medium o large. Il dettaglio lucano da tenere visibile.", "3 / 6 / 10 EUR"],
    ["Coleslaw", "Insalata BBQ ideale con pulled pork e ribs.", "5 EUR"],
    ["Cicoria campestre", "Contorno amaro e territoriale.", "4 EUR"],
    ["Verdure pastellate", "Fritto vegetale.", "5 EUR"],
    ["Mix verdure grigliate", "Melanzane, zucchine e verdure alla griglia.", "5 EUR"],
  ],
  dolci: [
    ["Tiramisu", "Classico di fine pasto.", "4 EUR"],
    ["Cheesecake frutti di bosco", "Fresca e facile dopo BBQ intenso.", "4 EUR"],
    ["Mousse limone", "Finale leggero.", "4 EUR"],
    ["Torta Sacher", "Cioccolato, decisa.", "4 EUR"],
    ["Souffle al cioccolato", "Caldo e goloso.", "4 EUR"],
  ],
};

function renderList(section) {
  const node = document.querySelector(`#${section}-list`);
  if (!node) return;

  if (section === "evidenza") {
    node.innerHTML = menu[section].map(([name, description, price]) => `
      <article class="push-card reveal">
        <span>Consigliato</span>
        <h3>${name}</h3>
        <p>${description}</p>
        <strong>${price}</strong>
      </article>
    `).join("");
    return;
  }

  node.innerHTML = menu[section].map(([name, description, price]) => `
    <article class="menu-item reveal">
      <h3>${name}</h3>
      <span class="dots"></span>
      <strong>${price}</strong>
      <p>${description}</p>
    </article>
  `).join("");
}

Object.keys(menu).forEach(renderList);

const categoryLinks = [...document.querySelectorAll(".category-nav a")];
const scrollLinks = [...document.querySelectorAll('a[href^="#"]')];

function getScrollOffset(target) {
  if (target.id === "menu") return 12;
  return window.matchMedia("(max-width: 760px)").matches ? 16 : 92;
}

scrollLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    event.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - getScrollOffset(target);
    window.scrollTo({ top, behavior: "smooth" });
  });
});

const revealNodes = [
  ...document.querySelectorAll(".hero-inner, .menu-title, .board-section, .signature, .note, .push-card, .menu-item, .practical div, footer"),
];

revealNodes.forEach((node, index) => {
  node.classList.add("reveal");
  if (node.classList.contains("menu-item") || node.classList.contains("push-card")) {
    node.style.setProperty("--delay", `${Math.min(index % 6, 5) * 45}ms`);
  }
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("is-visible");
    revealObserver.unobserve(entry.target);
  });
}, {
  threshold: 0.12,
  rootMargin: "0px 0px -8% 0px",
});

revealNodes.forEach((node) => revealObserver.observe(node));

const sectionObserver = new IntersectionObserver((entries) => {
  const visible = entries
    .filter((entry) => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

  if (!visible) return;

  categoryLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${visible.target.id}`);
  });
}, {
  threshold: [0.18, 0.32, 0.48],
  rootMargin: "-18% 0px -62% 0px",
});

document.querySelectorAll(".board-section").forEach((section) => sectionObserver.observe(section));
