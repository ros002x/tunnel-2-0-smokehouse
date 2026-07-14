const menu = {
  evidenza: [
    ["Brisket Masurya", "Punta di petto di scottona Masurya affumicata con legno di quercia.", "15 EUR"],
    ["Bacon Crispy 2.0", "Wagyu, cheddar, bacon croccante e salsa crispy.", "15 EUR"],
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
    ["Costate", "", "al peso"],
    ["Fiorentine", "", "al peso"],
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
    ["Polpette al sugo", "", "6 EUR"],
    ["Baltimore Pit Beef", "Salsa tonnata e fior di cappero.", "8 EUR"],
    ["Picanha stagionata", "Picanha stagionata con nocciole tostate.", "10 EUR"],
  ],
  sides: [
    ["Patatine", "Small, medium o large.", "3 / 5 / 8 EUR"],
    ["Patatine cheddar & bacon", "Cheddar e bacon.", "7 EUR"],
    ["Patatine pulled pork", "Pulled pork.", "7 EUR"],
    ["Peperoni cruschi", "Small, medium o large.", "3 / 6 / 10 EUR"],
    ["Coleslaw", "", "5 EUR"],
    ["Cicoria campestre", "", "4 EUR"],
    ["Verdure pastellate", "Fritto vegetale.", "5 EUR"],
    ["Mix verdure grigliate", "Melanzane, zucchine e verdure alla griglia.", "5 EUR"],
  ],
  dolci: [
    ["Tiramisu", "", "4 EUR"],
    ["Cheesecake frutti di bosco", "", "4 EUR"],
    ["Mousse limone", "", "4 EUR"],
    ["Torta Sacher", "", "4 EUR"],
    ["Souffle al cioccolato", "", "4 EUR"],
  ],
  beverage: [
    ["Lattina 33cl", "Coca-Cola, Coca-Cola Zero, Fanta, Estathe e altre disponibilita.", "2,50 EUR"],
    ["Lattina 33cl birra artigianale", "", "6 EUR"],
    ["Lattina 50cl birra artigianale", "", "7 / 8 EUR"],
    ["Krombacher alla spina 0,2", "Birra alla spina Krombacher.", "2,50 EUR"],
    ["Krombacher alla spina 0,4", "Birra alla spina Krombacher.", "4 EUR"],
    ["IPA / Rossa / Blanche alla spina 0,2", "Birre speciali alla spina.", "3,50 EUR"],
    ["IPA / Rossa / Blanche alla spina 0,4", "Birre speciali alla spina.", "6 EUR"],
  ],
  vini: [
    {
      title: "Bollicine",
      items: [
        ["Altacosta", "Metodo classico VSQ, Tenuta San Francesco, Campania. Biancazita 50%, Biancatenera 50%.", "45 EUR"],
        ["Malbolle", "Metodo classico VDSQ, Podere Il Saliceto, Emilia Romagna. Malbo Gentile 100%.", "35 EUR"],
        ["Ringadora", "Metodo classico, Podere Il Saliceto, Emilia Romagna. Lambrusco Sorbara 100%.", "40 EUR"],
        ["Alta Langa Spumante Extra Brut", "Ettore Germano, Piemonte.", "48 EUR"],
        ["Trentodoc", "Tonini, Trentino Alto Adige.", "50 EUR"],
      ],
    },
    {
      title: "Champagne",
      items: [
        ["Brut Millesime Premier Cru 2017", "Francois Lecompte, Francia. Chardonnay 40%, Pinot Noir 30%, Pinot Meunier 30%.", "60 EUR"],
        ["Extra Brut Millesime 2017", "Francois Lecompte, Francia. Chardonnay 40%, Pinot Noir 30%, Pinot Meunier 30%.", "65 EUR"],
        ["Nature Millesime 2017", "Francois Lecompte, Francia. Chardonnay 40%, Pinot Noir 30%, Pinot Meunier 30%.", "70 EUR"],
        ["Brut Rose", "Francois Lecompte, Francia. Pinot Meunier 30%, Chardonnay 40%, Pinot Noir 30%.", "70 EUR"],
      ],
    },
    {
      title: "Vini bianchi",
      items: [
        ["Terra Aspra Greco 2019", "Tenuta Marino, Basilicata.", "16 EUR"],
        ["Terra Aspra Aglianico 2019", "Vinificato in bianco, Tenuta Marino, Basilicata.", "16 EUR"],
        ["Terre Rosse di Gabbiascio", "Centopassi, Sicilia. Catarratto 100%.", "29 EUR"],
        ["Leuconoe", "Cantina Madonna delle Grazie, Basilicata. Aglianico del Vulture 100%.", "18 EUR"],
        ["Schwarzhaus", "Strobhof, Alto Adige. Chardonnay 100%.", "35 EUR"],
        ["Nico", "Strobhof, Alto Adige. Sauvignon 100%.", "39 EUR"],
        ["Valle Isarco Kerner", "Taschlerhof, Alto Adige. Kerner 100%.", "36 EUR"],
        ["Segreto di Bianca", "Masseria Cuturi, Puglia. Fiano 100%.", "24 EUR"],
        ["Costa d'Amalfi Tramonti Bianco DOC", "Tenuta San Francesco, Campania. Falanghina 40%, Bianconela 40%, Pepella 20%.", "27 EUR"],
      ],
    },
    {
      title: "Vini rosati",
      items: [
        ["Terra Aspra Primitivo 2021", "Tenuta Marino, Basilicata.", "16 EUR"],
        ["Tuttovaben", "Centopassi, Sicilia. Nocera 90%, Lucignola 10%.", "19 EUR"],
        ["DOC Ciro Rosato", "L'Arciglione, Calabria. Gaglioppo 100%.", "24 EUR"],
        ["Costa d'Amalfi Rosato DOC", "Tenuta San Francesco, Campania. Tintore 80%, Aglianico 10%, Piedirosso 10%.", "29 EUR"],
        ["Garage Mandrolisai DOC", "I Garagisti Sorgono, Sardegna. Monica 30%, Cannonau 30%, Murtiseddu 40%.", "29 EUR"],
        ["Rosato IGT Toscana", "Tenuta di Carleone. Sangiovese 100%.", "27 EUR"],
        ["Sagaris", "Cantina Madonna delle Grazie, Basilicata. Aglianico del Vulture 100%.", "18 EUR"],
      ],
    },
    {
      title: "Vini rossi",
      items: [
        ["Terra Aspra Syrah 2023", "Tenuta Marino, Basilicata.", "16 EUR"],
        ["Terra Aspra Merlot 2015", "Tenuta Marino, Basilicata.", "24 EUR"],
        ["Terra Aspra Primitivo 2013", "Tenuta Marino, Basilicata.", "28 EUR"],
        ["Terra Aspra Aglianico 2013", "Tenuta Marino, Basilicata.", "24 EUR"],
        ["Cimento di Perricone", "Centopassi, Sicilia. Perricone 100%.", "28 EUR"],
        ["Ciro Rosso Classico Superiore DOC", "L'Arciglione, Calabria. Gaglioppo 100%.", "28 EUR"],
        ["Castiello", "Perillo, Campania. Aglianico coda di cavallo 100%.", "33 EUR"],
        ["Costa d'Amalfi Tramonti Rosso DOC", "Tenuta San Francesco, Campania. Tintore 50%, Aglianico 30%, Piedirosso 20%.", "30 EUR"],
        ["Garage Rosso Mandrolisai DOC", "I Garagisti di Sorgono, Sardegna. Muristeddu 40%, Cannonau 30%, Monica 30%.", "29 EUR"],
        ["Parisi Bovale IGT Isola dei Nuraghi", "I Garagisti di Sorgono, Sardegna. Muristeddu 100%.", "33 EUR"],
        ["Il Randagio IGT Toscana", "Tenuta di Carleone, Toscana. Cabernet Franc 50%, Merlot 50%.", "31 EUR"],
        ["Iuli IGP Toscana", "Sangiovese Grosso 100%.", "21 EUR"],
        ["Rosso di Montalcino DOC", "Castello Tricerchi, Toscana. Sangiovese Grosso 100%.", "35 EUR"],
        ["Ciliegiolo Toscana IGT Antonio Camillo", "Antonio Camillo, Toscana. Ciliegiolo 100%.", "27 EUR"],
        ["Bolgheri Rosso DOC", "Le Macchiole, Toscana. Merlot, Cabernet Franc, Cabernet Sauvignon, Syrah e Sangiovese.", "40 EUR"],
        ["I Luoghi Rosso Bolgheri DOC", "I Luoghi, Toscana. Cabernet Sauvignon 100%.", "34 EUR"],
        ["Poderi Ritorti Bolgheri Superiore DOC", "I Luoghi, Toscana. Cabernet Sauvignon 80%, Cabernet Franc 15%, Merlot e Syrah 5%.", "44 EUR"],
        ["Canaiolo Toscana IGT", "Ascione Alongi, Toscana. Canaiolo 100%.", "27 EUR"],
        ["Emilia Rosso IGP Malbo", "Podere Il Saliceto, Emilia Romagna. Malbo Gentile 100%.", "25 EUR"],
        ["Barolo Serralunga", "Ettore Germano, Piemonte. Nebbiolo 100%.", "59 EUR"],
        ["Valpolicella Classica Superiore Ripasso", "Antolini, Veneto. Corvina 35%, Corvinone 35%, Rondinella 25%, Molinara 5%.", "27 EUR"],
        ["Amarone della Valpolicella Classico Moropio", "Antolini, Veneto. Corvina 35%, Corvinone 35%, Rondinella 25%, Molinara 5%.", "55 EUR"],
      ],
    },
    {
      title: "Vini rossi Francia",
      items: [
        ["Bourgogne Pinot Noir", "Domaine Chicotot, Borgogna. Pinot Noir 100%.", "53 EUR"],
        ["Cote de Nuits Villages Vignes", "Jean Marc Millot, Borgogna. Pinot Noir 100%.", "75 EUR"],
        ["Bourgogne Rouge Vieilles Vignes", "Domaine Joseph Voillot, Borgogna. Pinot Noir 100%.", "50 EUR"],
        ["F.lli Brunier Le Pigeoulet", "Vieux Telegraphe, Rodano. Grenache 80%, Syrah 10%, Carignan 5%, Cinsault 5%.", "34 EUR"],
        ["Crozes-Hermitage Rouge", "Yann Chave, Rodano Nord. Syrah 100%.", "49 EUR"],
        ["Clos de Gamot Cahors", "Clos de Gamot, Cahors. Malbec 100%.", "30 EUR"],
        ["Les Ormeaux Castillon Cotes de Bordeaux", "Clos Puy Arnaud, Bordeaux. Merlot 75%, Cabernet Franc 25%.", "40 EUR"],
        ["Saumur-Champigny Coup d'Ouze", "Le P'tit Domaine, Saumurois. Cabernet Franc 100%.", "35 EUR"],
        ["Pinot Noir Hugel", "Alsazia. Pinot Noir 100%.", "34 EUR"],
      ],
    },
  ],
};

function renderList(section) {
  const node = document.querySelector(`#${section}-list`);
  if (!node) return;

  if (section === "vini") {
    node.innerHTML = menu[section].map((group) => `
      <div class="wine-group">
        <h3>${group.title}</h3>
        <div class="menu-list wine-items">
          ${group.items.map(([name, description, price]) => `
            <article class="menu-item reveal">
              <h3>${name}</h3>
              <span class="dots"></span>
              <strong>${price}</strong>
              <p>${description}</p>
            </article>
          `).join("")}
        </div>
      </div>
    `).join("");
    return;
  }

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
      ${description ? `<p>${description}</p>` : ""}
    </article>
  `).join("");
}

Object.keys(menu).forEach(renderList);

const sectionLinks = [...document.querySelectorAll(".category-nav a, .mobile-shortcuts a")];
const scrollLinks = [...document.querySelectorAll('a[href^="#"]')];

function getScrollOffset(target) {
  if (target.id === "menu") return 12;
  return window.matchMedia("(max-width: 760px)").matches ? 74 : 92;
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

  sectionLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${visible.target.id}`);
  });
}, {
  threshold: [0.18, 0.32, 0.48],
  rootMargin: "-18% 0px -62% 0px",
});

document.querySelectorAll(".board-section").forEach((section) => sectionObserver.observe(section));
