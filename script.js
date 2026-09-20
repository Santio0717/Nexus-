/* =========================================================
   NEXUS CALI - CATÁLOGO
   ========================================================= */

const IMAGE_BASE = "Nexus_Imagenes/";

const imagePath = (fileName) =>
  `${IMAGE_BASE}${encodeURIComponent(fileName)}`;

const LOGO_URL = imagePath("Logo.jpg");

const WHATSAPP_ADVISOR = "573228182311";
const WHATSAPP_ADVISOR_2 = "573117161043";

/* =========================================================
   DATOS DEL CATÁLOGO
   ========================================================= */

const makeItems = (items) =>
  items.map(([name, file]) => ({
    name,
    image: imagePath(file)
  }));

const catalogData = [
  /* 1. COMPUTADORES */
  {
    name: "Computadores",
    image: imagePath("Computadores.jpg"),
    items: makeItems([
      ["Portátiles", "Portatiles.jpg"],
      ["Torres", "Torres.jpg"],
      ["All in One", "All in One.jpg"],
      ["Procesadores", "Procesadores.jpg"],
      ["Board", "Board.jpg"],
      ["Tarjetas gráficas", "Tarjeta Grafica.jpg"],
      ["Fuentes de poder", "Fuente de Poder .jpg"],
      ["Chasis", "Chasis.jpg"],
      ["Refrigeración", "Refrigeracion.jpg"]
    ])
  },

  /* 2. MONITORES Y TV */
  {
    name: "Monitores y TV",
    image: imagePath("Monitores y TV.jpg"),
    items: makeItems([
      ["Monitores", "Monitores.jpg"],
      ["Monitores Gaming", "Monitores Gaming.jpg"],
      ["TV", "TV.jpg"]
    ])
  },

  /* 3. GAMING */
  {
    name: "Gaming",
    image: imagePath("Gaming.jpg"),
    items: makeItems([
      ["Consolas", "Consolas.jpg"],
      ["Controles", "Controles.jpg"],
      ["Accesorios Gaming", "Accesorios Gaming.jpg"]
    ])
  },

  /* 4. PERIFÉRICOS */
  {
    name: "Periféricos",
    image: imagePath("Perifericos.jpg"),
    items: makeItems([
      ["Teclados Gaming", "Teclados Gaming.jpg"],
      ["Teclados Cableados", "Teclados Cableados.jpg"],
      ["Teclados Inalámbricos", "Teclados Inalambricos.jpg"],
      ["Mouse Gaming", "Mouse Gaming.jpg"],
      ["Mouse Cableados", "Mouse Cableados.jpg"],
      ["Mouse Inalámbricos", "Mouse Inalambricos.jpg"],
      ["Combo Teclado + Mouse", "Combo Teclado + Mouse.jpg"],
      ["Combo Gaming", "Combo Gaming.jpg"],
      ["Combo Inalámbrico", "Combo Inalambrico.jpg"],
      ["Audífonos", "Audifonos.jpg"],
      ["Micrófonos", "Microfonos.jpg"],
      ["Parlantes", "Parlantes.jpg"],
      ["Cámaras web", "Camaras web.jpg"],
      ["Cámaras fotográficas", "Camaras fotográficas.jpg"],
      ["Trípodes", "Tripodes.jpg"],
      ["Cargadores para PC / portátil", "Cargadores para PC- portatil.jpg"],
      ["Cargadores para celular", "Cargadores para Celular.jpg"],
      ["Cables USB", "Cable Usb.jpg"],
      ["Cables HDMI", "Cables HDMI.jpg"],
      ["Cables de red", "Cables de Red.jpg"],
      ["Cables de audio", "Cables de Audio.jpg"],
      ["Cables para celular", "Cables para Celular.jpg"],
      ["Cables para computador", "Cables para Computador.jpg"],
      ["Adaptadores USB", "Adaptadores USB.jpg"],
      ["Adaptadores HDMI", "Adaptadores HDMI.jpg"],
      ["Adaptadores de video", "Adaptadores de Video.jpg"],
      ["Adaptadores de red", "Adaptadores de Red.jpg"],
      ["Hubs USB", "Hubs USB.jpg"],
      ["Wi-Fi", "Wi-Fi.jpg"],
      ["Soportes para monitor", "Soportes para Monitor.jpg"],
      ["Soportes para portátil", "Soportes para Portatil.jpg"],
      ["Bases para portátil", "Bases para Portatil.jpg"],
      ["Bases refrigerantes con ventilador", "Bases Refrigerantes con Ventilador.jpg"],
      ["Lectores", "Lectores.jpg"],
      ["Accesorios internos", "Accesorios internos.jpg"]
    ])
  },

  /* 5. ALMACENAMIENTO */
  {
    name: "Almacenamiento",
    image: imagePath("Almacenamiento.jpg"),
    items: makeItems([
      ["Memorias USB", "Memorias USB.jpg"],
      ["RAM", "RAM.jpg"],
      ["HDD", "HDD.jpg"],
      ["SSD", "SSD.jpg"],
      ["SSD M.2", "SSD M.2.jpg"],
      ["MicroSD", "MicroSD.jpg"],
      ["SD", "SD.jpg"]
    ])
  },

  /* 6. IMPRESORAS */
  {
    name: "Impresoras",
    image: imagePath("Impresoras.jpg"),
    items: makeItems([
      ["Multifuncionales", "Multifuncionales.jpg"],
      ["Fotocopiadoras", "Fotocopiadoras.jpg"],
      ["Impresoras térmicas", "Impresoras termicas.jpg"],
      ["Impresoras de tinta", "Impresoras de tinta.jpg"],
      ["Impresoras láser", "Impresoras laser.jpg"],
      ["Impresoras Wi-Fi", "Impresoras Wi-Fi.jpg"],
      ["Tintas", "Tintas.jpg"],
      ["Cartuchos", "Cartuchos.jpg"],
      ["Tóner", "Toner.jpg"]
    ])
  },

  /* 7. CELULARES */
  {
    name: "Celulares",
    image: imagePath("Celulares categoria.jpg"),
    items: makeItems([
      ["Celulares", "Celulares.jpg"],
      ["Cargadores", "Cargadores.jpg"],
      ["Vidrios templados", "Vidrios templados.jpg"],
      ["Fundas / Forros", "Fundas-Forros.jpg"],
      ["Audífonos", "Audifonos Celular.jpg"]
    ])
  },

  /* 8. SILLAS */
  {
    name: "Sillas",
    image: imagePath("Sillas Categoria.jpg"),
    items: makeItems([
      ["Sillas Gaming", "Sillas Gaming.jpg"],
      ["Sillas de oficina", "Sillas de Oficina.jpg"]
    ])
  },

  /* 9. ENERGÍA */
  {
    name: "Energía",
    image: imagePath("Energia.jpg"),
    items: makeItems([
      ["UPS", "UPS.jpg"],
      ["Reguladores de voltaje", "Reguladores de Voltaje.jpg"]
    ])
  },

  /* 10. SERVICIOS TÉCNICOS */
  {
    name: "Servicios Técnicos",
    image: imagePath("Servicios Tecnicos.jpg"),
    items: makeItems([
      ["Mantenimiento", "Mantenimiento.jpg"],
      ["Reparación", "Reparacion.jpg"],
      ["Instalación de programas y configuración", "Instalacion de Programas y Configuracion.jpg"]
    ])
  }
];

/* =========================================================
   ELEMENTOS DEL HTML
   ========================================================= */
const catalogElement = document.getElementById("catalog");
const catalogTitle = document.getElementById("catalogTitle");
const catalogCount = document.getElementById("catalogCount");
const searchStatus = document.getElementById("searchStatus");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const infoBanner = document.getElementById("infoBanner");
const footerElement = document.getElementById("contacto");
const brandLink = document.querySelector(".brand");
const footerWhatsapp = document.getElementById("footerWhatsapp");

/* LOGO LOCAL */
const brandLogo = brandLink?.querySelector(".brand-logo");
if (brandLogo) {
  brandLogo.src = LOGO_URL;
}

/* ESTADO */
let currentCategory = null;
let currentSearch = "";

/* =========================================================
   FUNCIONES GENERALES
   ========================================================= */
function normalizeText(text) {
  return String(text || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function escapeHTML(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function getCategory(categoryName) {
  return catalogData.find((category) => category.name === categoryName);
}

function setFooterVisible(visible) {
  if (!footerElement) return;
  footerElement.classList.toggle("is-hidden", !visible);
}

function setBannerVisible(visible) {
  if (!infoBanner) return;
  infoBanner.hidden = !visible;
}

function updateSearchStatus(text = "") {
  if (!searchStatus) return;
  searchStatus.textContent = text;
}

/* WHATSAPP (60% / 40%) */
function getWhatsAppNumber() {
  return Math.random() < 0.60 ? WHATSAPP_ADVISOR : WHATSAPP_ADVISOR_2;
}

function openWhatsApp(productName = "") {
  const number = getWhatsAppNumber();
  const message = `Hola, quiero recibir información sobre ${productName || "un producto del catálogo de Nexus"}.`;
  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function handleImageError(image) {
  if (!image) return;
  image.onerror = null;
  image.style.display = "none";
  const wrapper = image.parentElement;
  if (wrapper) wrapper.classList.add("image-error");
}

/* =========================================================
   TARJETAS DENSAS (HTML) CON HOVER POP-OVER
   ========================================================= */
function createCategoryCard(category) {
  // Extrae los primeros 4 o 5 elementos para mostrarlos en el panel desplegable
  const previewItems = category.items ? category.items.slice(0, 5) : [];
  const previewListHTML = previewItems
    .map(item => `<li class="popover-item">${escapeHTML(item.name)}</li>`)
    .join('');

  return `
    <article class="category-card">
      <!-- VISTA PREVIA FLOTANTE EN HOVER -->
      <div class="category-preview-popover">
        <div class="popover-title">Incluye:</div>
        <ul class="popover-list">
          ${previewListHTML}
          ${category.items.length > 5 ? `<li class="popover-item" style="font-style: italic; opacity: 0.8;">y más...</li>` : ''}
        </ul>
      </div>

      <div class="category-content">
        <h3 class="category-title">${escapeHTML(category.name)}</h3>
      </div>
      <div class="category-image-wrap">
        <img
          src="${category.image}"
          alt="${escapeHTML(category.name)}"
          loading="lazy"
          onerror="handleImageError(this)"
        >
      </div>
      <div class="category-actions">
        <button
          type="button"
          class="explore-button"
          data-category="${escapeHTML(category.name)}"
        >
          Conocer productos
        </button>
      </div>
    </article>
  `;
}

function createItemCard(item, categoryName) {
  return `
    <article class="subcategory-card">
      <h3 class="subcategory-title">${escapeHTML(item.name)}</h3>
      <div class="subcategory-image-wrap">
        <img
          src="${item.image}"
          alt="${escapeHTML(item.name)}"
          loading="lazy"
          onerror="handleImageError(this)"
        >
      </div>
      <div class="subcategory-actions">
        <button
          type="button"
          class="quote-button"
          data-product="${escapeHTML(item.name)}"
          data-category="${escapeHTML(categoryName)}"
        >
          Cotizar
        </button>
      </div>
    </article>
  `;
}

/* =========================================================
   RENDER DE CATEGORÍAS
   ========================================================= */
function renderCategories(options = {}) {
  const { updateHistory = true, scroll = false } = options;
  currentCategory = null;

  setBannerVisible(true);
  setFooterVisible(true);

  if (catalogTitle) catalogTitle.textContent = "CATÁLOGO";
  updateSearchStatus("");

  const query = normalizeText(currentSearch);
  let filteredCategories = catalogData;

  if (query) {
    filteredCategories = catalogData.filter((category) => {
      const categoryMatch = normalizeText(category.name).includes(query);
      const itemMatch = category.items.some((item) =>
        normalizeText(item.name).includes(query)
      );
      return categoryMatch || itemMatch;
    });
  }

  if (catalogCount) {
    catalogCount.textContent = query
      ? `${filteredCategories.length} ${filteredCategories.length === 1 ? "categoría" : "categorías"}`
      : "10 categorías";
  }

  if (query) {
    updateSearchStatus(`Resultados para “${currentSearch}”`);
  }

  if (!filteredCategories.length) {
    catalogElement.innerHTML = `
      <div class="empty-state">
        <h3>No encontramos una categoría relacionada</h3>
        <p>Prueba con otro término o selecciona una categoría cercana a lo que estás buscando.</p>
      </div>
    `;
  } else {
    catalogElement.innerHTML = filteredCategories.map(createCategoryCard).join("");
  }

  if (updateHistory) {
    history.pushState({ page: "home" }, "", window.location.pathname);
  }

  if (scroll) {
    document.getElementById("catalogSection")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/* =========================================================
   RENDER DE SUBCATEGORÍAS
   ========================================================= */
function renderCategory(categoryName, options = {}) {
  const { updateHistory = true, scroll = true } = options;
  const category = getCategory(categoryName);

  if (!category) {
    renderCategories({ updateHistory: false, scroll: false });
    return;
  }

  currentCategory = category.name;

  setBannerVisible(false);
  setFooterVisible(false);

  if (catalogTitle) catalogTitle.textContent = category.name;

  const query = normalizeText(currentSearch);
  let filteredItems = category.items;

  if (query) {
    filteredItems = category.items.filter((item) =>
      normalizeText(item.name).includes(query)
    );
  }

  if (catalogCount) {
    catalogCount.textContent = query
      ? `${filteredItems.length} ${filteredItems.length === 1 ? "opción" : "opciones"}`
      : `${category.items.length} opciones`;
  }

  updateSearchStatus(query ? `Resultados para “${currentSearch}”` : "");

  let content = "";

  if (!filteredItems.length) {
    content += `
      <div class="empty-state">
        <h3>No encontramos ese producto</h3>
        <p>Prueba con otro término o selecciona una opción similar. Un asesor te ayudará a encontrar la alternativa que necesitas.</p>
      </div>
    `;
  } else {
    content += `
      <div class="subcategory-grid">
        ${filteredItems.map((item) => createItemCard(item, category.name)).join("")}
      </div>
    `;
  }

  content += `
    <div class="back-button-wrap">
      <button type="button" class="back-to-catalog">Volver al catálogo</button>
    </div>
  `;

  catalogElement.innerHTML = content;

  if (updateHistory) {
    history.pushState({ page: "category", category: category.name }, "", window.location.pathname);
  }

  if (scroll) {
    document.getElementById("catalogSection")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/* =========================================================
   NAVEGACIÓN & EVENTOS
   ========================================================= */
function goBackToCatalog(options = {}) {
  const { updateHistory = true, scroll = true } = options;
  currentCategory = null;
  currentSearch = "";

  if (searchInput) searchInput.value = "";

  if (updateHistory) {
    history.pushState({ page: "home" }, "", window.location.pathname);
  }

  renderCategories({ updateHistory: false, scroll: false });

  if (scroll) {
    document.getElementById("catalogSection")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function performSearch() {
  if (!searchInput) return;
  currentSearch = searchInput.value.trim();

  if (currentCategory) {
    renderCategory(currentCategory, { updateHistory: false, scroll: false });
  } else {
    renderCategories({ updateHistory: false, scroll: false });
  }

  document.getElementById("catalogSection")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

searchForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  performSearch();
});

catalogElement?.addEventListener("click", (event) => {
  const backButton = event.target.closest(".back-to-catalog");
  if (backButton) {
    event.preventDefault();
    goBackToCatalog();
    return;
  }

  const categoryButton = event.target.closest(".explore-button");
  if (categoryButton) {
    event.preventDefault();
    const categoryName = categoryButton.dataset.category;
    renderCategory(categoryName);
    return;
  }

  const quoteButton = event.target.closest(".quote-button");
  if (quoteButton) {
    event.preventDefault();
    const product = quoteButton.dataset.product;
    const category = quoteButton.dataset.category;
    const number = getWhatsAppNumber();
    const message = `Hola, quiero cotizar ${product} de la categoría ${category}.`;
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }
});

brandLink?.addEventListener("click", (event) => {
  event.preventDefault();
  currentSearch = "";
  if (searchInput) searchInput.value = "";
  goBackToCatalog();
});

footerWhatsapp?.addEventListener("click", () => {
  openWhatsApp();
});

window.addEventListener("popstate", (event) => {
  const state = event.state;
  if (state && state.page === "category" && state.category) {
    renderCategory(state.category, { updateHistory: false, scroll: false });
    return;
  }
  currentCategory = null;
  currentSearch = "";
  if (searchInput) searchInput.value = "";
  renderCategories({ updateHistory: false, scroll: false });
});

/* INICIALIZACIÓN */
renderCategories({ updateHistory: false, scroll: false });
