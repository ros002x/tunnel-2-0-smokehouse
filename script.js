const menu = {
  evidenza: [
    ["Brisket Masurya", "Punta di petto di scottona affumicata con quercia. Il piatto che fa capire la smokehouse.", "15 EUR", "pork-ribs.jpg"],
    ["Bacon Crispy 2.0", "Wagyu, cheddar, bacon croccante e salsa crispy. Burger firma da mettere in evidenza.", "15 EUR", "bacon-crispy.jpg"],
    ["Missouri", "Mix per 3-4 persone: brisket, ribs, salsicce, ali BBQ, pulled pork, chili e patatine.", "65 EUR", "pulled.jpg"],
  ],
  bbq: [
    ["Brisket Masurya", "Punta di petto di scottona Masurya affumicata lentamente con legno di quercia.", "15 EUR", "pork-ribs.jpg"],
    ["Baby Back Ribs", "Costine di maiale affumicate con legno di ciliegio, servite con patatine.", "15 EUR", "pork-ribs.jpg"],
    ["Beef Ribs", "Costine di scottona affumicate con hickory. Formato piccolo, medio o grande.", "25 / 35 / 45 EUR", "pork-ribs.jpg"],
    ["Ali di pollo BBQ", "Ali affumicate con legno di melo. Una o due porzioni.", "6 / 10 EUR", "los-pollos.jpg"],
    ["Salsiccia lucana", "Salsiccia lucana affumicata con ciliegio, servita con patatine.", "8 EUR"],
    ["Salsiccia cheddar & bacon", "Versione ricca con cheddar e bacon, affumicata e servita con patatine.", "8 EUR"],
  ],
  frollatore: [
    ["Selezione carni", "Rubia Gallega, Minhota Portoghese, Chianina IGP, Angus, Masurya e Wagyu A5.", "al peso", "toro-seduto.jpg"],
    ["Costate", "Taglio importante da scegliere al banco con peso e cottura consigliata.", "al peso"],
    ["Fiorentine", "Scelta scenica, pensata per chi vuole vivere il frollatore.", "al peso"],
  ],
  mix: [
    ["Kentucky", "Per 2: baby back ribs, stick pollo fritto, pulled pork, ali BBQ, chili con carne, patatine.", "40 EUR", "pork-ribs.jpg"],
    ["Missouri", "Per 3-4: brisket, baby back ribs, salsicce, ali BBQ, pulled pork, chili, patatine.", "65 EUR", "pulled.jpg"],
    ["Arizona", "Per 4-5: ribs di vitello, brisket, salsicce BBQ, ali BBQ, chili e patatine.", "75 EUR", "pork-ribs.jpg"],
    ["Texas", "Per 5-6: ribs di vitello, baby back ribs, brisket, pulled pork, salsicce, ali, chili.", "100 EUR", "pork-ribs.jpg"],
  ],
  burger: [
    ["Bacon Crispy 2.0", "Wagyu, cheddar, bacon croccante, salsa crispy.", "15 EUR", "bacon-crispy.jpg"],
    ["Toro Seduto", "Angus frollato 30 giorni, mayo basilico, rucola, grana e balsamico.", "13 EUR", "toro-seduto.jpg"],
    ["Los Pollos Hermanos", "Pollo fritto, lattuga, salsa Alabama e cheddar.", "8 EUR", "los-pollos.jpg"],
    ["Cheese Smash", "Doppio patty, cheddar, cipolla caramellata, bacon e salsa crispy.", "8 EUR", "cheeseburger.jpg"],
    ["Jam Smash", "Doppio patty, cheddar, salsa burger, bacon jam homemade e doppio bacon.", "9 EUR", "bacon-crispy.jpg"],
    ["Carbo Smash", "Guanciale croccante, doppio patty, pecorino romano e carbocrema.", "10 EUR", "bacon-crispy.jpg"],
    ["Smoke Pork", "Pulled pork e coleslaw.", "9 EUR", "pulled.jpg"],
    ["Come vuoi tu", "Composizione personalizzata con lo staff.", "su richiesta"],
  ],
  antipasti: [
    ["Tartare", "Acciughe del Cantabrico, capperi di Pantelleria, senape, cetriolini e cipolla rossa.", "9 EUR", "crudo-royale.jpg"],
    ["Carpaccio", "Carpaccio con citronette.", "8 EUR", "crudo-royale.jpg"],
    ["Polpette al sugo", "Classico caldo, semplice e diretto.", "6 EUR", "bombette.jpg"],
    ["Baltimore Pit Beef", "Salsa tonnata e fior di cappero.", "8 EUR"],
    ["Picanha stagionata", "Picanha stagionata con nocciole tostate.", "10 EUR"],
  ],
  sides: [
    ["Patatine", "Small, medium o large.", "3 / 5 / 8 EUR", "patatine.jpg"],
    ["Patatine cheddar & bacon", "Side ricco da spingere con burger e ribs.", "7 EUR", "patatine-bacon.jpg"],
    ["Patatine pulled pork", "Patatine cariche con pulled pork.", "7 EUR", "patatine-pulled.jpg"],
    ["Peperoni cruschi", "Small, medium o large. Il dettaglio lucano da tenere visibile.", "3 / 6 / 10 EUR"],
    ["Coleslaw", "Insalata BBQ ideale con pulled pork e ribs.", "5 EUR"],
    ["Cicoria campestre", "Contorno amaro e territoriale.", "4 EUR"],
    ["Verdure pastellate", "Fritto vegetale.", "5 EUR", "fried-pulled.jpg"],
    ["Mix verdure grigliate", "Melanzane, zucchine e verdure alla griglia.", "5 EUR"],
  ],
  dolci: [
    ["Tiramisu", "Classico di fine pasto.", "4 EUR", "birramisu.jpg"],
    ["Cheesecake frutti di bosco", "Fresca e facile dopo BBQ intenso.", "4 EUR"],
    ["Mousse limone", "Finale leggero.", "4 EUR"],
    ["Torta Sacher", "Cioccolato, decisa.", "4 EUR"],
    ["Souffle al cioccolato", "Caldo e goloso.", "4 EUR"],
  ],
};

function imagePath(fileName) {
  return `assets/menu/${fileName}`;
}

function renderList(section) {
  const node = document.querySelector(`#${section}-list`);
  if (!node) return;

  if (section === "evidenza") {
    node.innerHTML = menu[section].map(([name, description, price, image]) => `
      <article class="push-card">
        ${image ? `<img src="${imagePath(image)}" alt="${name} Tunnel 2.0" loading="lazy">` : ""}
        <span>Consigliato</span>
        <h3>${name}</h3>
        <p>${description}</p>
        <strong>${price}</strong>
      </article>
    `).join("");
    return;
  }

  node.innerHTML = menu[section].map(([name, description, price, image]) => `
    <article class="menu-item${image ? " has-image" : ""}">
      ${image ? `<img src="${imagePath(image)}" alt="${name} Tunnel 2.0" loading="lazy">` : ""}
      <h3>${name}</h3>
      <span class="dots"></span>
      <strong>${price}</strong>
      <p>${description}</p>
    </article>
  `).join("");
}

Object.keys(menu).forEach(renderList);

const lightbox = document.querySelector("#lightbox");
const lightboxImage = lightbox.querySelector("img");
const lightboxCaption = lightbox.querySelector("p");
const lightboxClose = lightbox.querySelector(".lightbox-close");

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");
}

function openLightbox(image) {
  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;
  lightboxCaption.textContent = image.alt;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
  lightboxClose.focus();
}

document.querySelectorAll(".food-showcase img, .section-photo img, .menu-item img, .hero-product img, .push-card img").forEach((image) => {
  image.tabIndex = 0;
  image.setAttribute("role", "button");
  image.setAttribute("aria-label", `Apri anteprima: ${image.alt}`);
  image.addEventListener("click", () => openLightbox(image));
  image.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openLightbox(image);
    }
  });
});

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.classList.contains("open")) closeLightbox();
});
