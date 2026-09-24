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
      ["Soportes para monitor", "Soportes para Monitor.jpg"],
      ["Soportes para portátil", "Soportes para Portatil.jpg"],
      ["Bases para portátil", "Bases para Portatil.jpg"],
      ["Bases refrigerantes con ventilador", "Bases Refrigerantes con Ventilador.jpg"]
    ])
  },

  /* 5. CABLES */
  {
    name: "Cables",
    image: imagePath("Cable Usb.jpg"),
    items: makeItems([
      ["Cables USB", "Cable Usb.jpg"],
      ["Cables HDMI", "Cables HDMI.jpg"],
      ["Cables de red", "Cables de Red.jpg"],
      ["Cables de audio", "Cables de Audio.jpg"],
      ["Cables para celular", "Cables para Celular.jpg"],
      ["Cables para computador", "Cables para Computador.jpg"],
      ["Cargadores para PC / portátil", "Cargadores para PC- portatil.jpg"],
      ["Cargadores para celular", "Cargadores para Celular.jpg"]
    ])
  },

  /* 6. ADAPTADORES Y REDES */
  {
    name: "Adaptadores y Redes",
    image: imagePath("Wi-Fi.jpg"),
    items: makeItems([
      ["Adaptadores USB", "Adaptadores USB.jpg"],
      ["Adaptadores HDMI", "Adaptadores HDMI.jpg"],
      ["Adaptadores de video", "Adaptadores de Video.jpg"],
      ["Adaptadores de red", "Adaptadores de Red.jpg"],
      ["Hubs USB", "Hubs USB.jpg"],
      ["Wi-Fi", "Wi-Fi.jpg"],
      ["Lectores", "Lectores.jpg"],
      ["Accesorios internos", "Accesorios internos.jpg"]
    ])
  },

  /* 7. ALMACENAMIENTO */
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

  /* 8. IMPRESORAS */
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

  /* 9. CELULARES */
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

  /* 10. SILLAS */
  {
    name: "Sillas",
    image: imagePath("Sillas Categoria.jpg"),
    items: makeItems([
      ["Sillas Gaming", "Sillas Gaming.jpg"],
      ["Sillas de oficina", "Sillas de Oficina.jpg"]
    ])
  },

  /* 11. ENERGÍA */
  {
    name: "Energía",
    image: imagePath("Energia.jpg"),
    items: makeItems([
      ["UPS", "UPS.jpg"],
      ["Reguladores de voltaje", "Reguladores de Voltaje.jpg"]
    ])
  },

  /* 12. SERVICIOS TÉCNICOS */
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
  return catalogData.find(
    (category) => category.name === categoryName
  );
}

function setFooterVisible(visible) {
  if (!footerElement) return;

  footerElement.classList.toggle(
    "is-hidden",
    !visible
  );
}

function setBannerVisible(visible) {
  if (!infoBanner) return;

  infoBanner.hidden = !visible;
}

function updateSearchStatus(text = "") {
  if (!searchStatus) return;

  searchStatus.textContent = text;
}

/* =========================================================
   WHATSAPP - 60% / 40%
   ========================================================= */

function getWhatsAppNumber() {
  return Math.random() < 0.60
    ? WHATSAPP_ADVISOR
    : WHATSAPP_ADVISOR_2;
}

/* =========================================================
   MENSAJES DE COTIZACIÓN
   ========================================================= */

/*
   Convierte el nombre de la subcategoría en un mensaje
   natural para WhatsApp.

   La categoría principal NO se envía.
*/

function getQuoteMessage(product) {
  const messages = {
    /* COMPUTADORES */
    "Portátiles": "un portátil",
    "Torres": "una torre",
    "All in One": "un computador All in One",
    "Procesadores": "un procesador",
    "Board": "una board",
    "Tarjetas gráficas": "una tarjeta gráfica",
    "Fuentes de poder": "una fuente de poder",
    "Chasis": "un chasis",
    "Refrigeración": "un sistema de refrigeración",

    /* MONITORES Y TV */
    "Monitores": "un monitor",
    "Monitores Gaming": "un monitor gaming",
    "TV": "un televisor",

    /* GAMING */
    "Consolas": "una consola",
    "Controles": "un control",
    "Accesorios Gaming": "un accesorio gaming",

    /* PERIFÉRICOS */
    "Teclados Gaming": "un teclado gaming",
    "Teclados Cableados": "un teclado cableado",
    "Teclados Inalámbricos": "un teclado inalámbrico",
    "Mouse Gaming": "un mouse gaming",
    "Mouse Cableados": "un mouse cableado",
    "Mouse Inalámbricos": "un mouse inalámbrico",
    "Combo Teclado + Mouse": "un combo de teclado y mouse",
    "Combo Gaming": "un combo gaming",
    "Combo Inalámbrico": "un combo inalámbrico",
    "Audífonos": "unos audífonos",
    "Micrófonos": "un micrófono",
    "Parlantes": "unos parlantes",
    "Cámaras web": "una cámara web",
    "Cámaras fotográficas": "una cámara fotográfica",
    "Trípodes": "un trípode",
    "Soportes para monitor": "un soporte para monitor",
    "Soportes para portátil": "un soporte para portátil",
    "Bases para portátil": "una base para portátil",
    "Bases refrigerantes con ventilador": "una base refrigerante para portátil",

    /* CABLES */
    "Cables USB": "un cable USB",
    "Cables HDMI": "un cable HDMI",
    "Cables de red": "un cable de red",
    "Cables de audio": "un cable de audio",
    "Cables para celular": "un cable para celular",
    "Cables para computador": "un cable para computador",
    "Cargadores para PC / portátil": "un cargador para PC o portátil",
    "Cargadores para celular": "un cargador para celular",

    /* ADAPTADORES Y REDES */
    "Adaptadores USB": "un adaptador USB",
    "Adaptadores HDMI": "un adaptador HDMI",
    "Adaptadores de video": "un adaptador de video",
    "Adaptadores de red": "un adaptador de red",
    "Hubs USB": "un hub USB",
    "Wi-Fi": "un adaptador Wi-Fi",
    "Lectores": "un lector",
    "Accesorios internos": "un accesorio interno",

    /* ALMACENAMIENTO */
    "Memorias USB": "una memoria USB",
    "RAM": "una memoria RAM",
    "HDD": "un disco HDD",
    "SSD": "un disco SSD",
    "SSD M.2": "un SSD M.2",
    "MicroSD": "una memoria MicroSD",
    "SD": "una memoria SD",

    /* IMPRESORAS */
    "Multifuncionales": "una impresora multifuncional",
    "Fotocopiadoras": "una fotocopiadora",
    "Impresoras térmicas": "una impresora térmica",
    "Impresoras de tinta": "una impresora de tinta",
    "Impresoras láser": "una impresora láser",
    "Impresoras Wi-Fi": "una impresora Wi-Fi",
    "Tintas": "tinta para impresora",
    "Cartuchos": "un cartucho para impresora",
    "Tóner": "un tóner",

    /* CELULARES */
    "Celulares": "un celular",
    "Cargadores": "un cargador para celular",
    "Vidrios templados": "un vidrio templado",
    "Fundas / Forros": "una funda para celular",

    /* SILLAS */
    "Sillas Gaming": "una silla gaming",
    "Sillas de oficina": "una silla de oficina",

    /* ENERGÍA */
    "UPS": "una UPS",
    "Reguladores de voltaje": "un regulador de voltaje",

    /* SERVICIOS */
    "Mantenimiento": "un servicio de mantenimiento",
    "Reparación": "un servicio de reparación",
    "Instalación de programas y configuración":
      "un servicio de instalación y configuración"
  };

  const productText =
    messages[product] ||
    `un ${product.toLowerCase()}`;

  return `Hola, quiero cotizar ${productText}.`;
}

/* =========================================================
   WHATSAPP GENERAL
   ========================================================= */

function openWhatsApp(productName = "") {
  const number = getWhatsAppNumber();

  let message;

  if (productName) {
    message = getQuoteMessage(productName);
  } else {
    message =
      "Hola, quiero recibir información sobre un producto del catálogo de Nexus.";
  }

  const url =
    `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  window.open(
    url,
    "_blank",
    "noopener,noreferrer"
  );
}

/* =========================================================
   ERROR DE IMAGEN
   ========================================================= */

function handleImageError(image) {
  if (!image) return;

  image.onerror = null;
  image.style.display = "none";

  const wrapper = image.parentElement;

  if (wrapper) {
    wrapper.classList.add("image-error");
  }
}

/* =========================================================
   TARJETAS DE CATEGORÍAS
   ========================================================= */

function createCategoryCard(category) {
  const previewItems = category.items
    ? category.items.slice(0, 5)
    : [];

  const previewListHTML = previewItems
    .map(
      (item) =>
        `<li class="popover-item">${escapeHTML(item.name)}</li>`
    )
    .join("");

  return `
    <article class="category-card">

      <div class="category-preview-popover">
        <div class="popover-title">Incluye:</div>

        <ul class="popover-list">
          ${previewListHTML}

          ${
            category.items.length > 5
              ? `<li class="popover-item" style="font-style: italic; opacity: 0.8;">y más...</li>`
              : ""
          }
        </ul>
      </div>

      <div class="category-content">
        <h3 class="category-title">
          ${escapeHTML(category.name)}
        </h3>
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

/* =========================================================
   TARJETAS DE SUBCATEGORÍAS
   ========================================================= */

function createItemCard(item, categoryName) {
  return `
    <article class="subcategory-card">

      <h3 class="subcategory-title">
        ${escapeHTML(item.name)}
      </h3>

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
  const {
    updateHistory = true,
    scroll = false
  } = options;

  currentCategory = null;

  setBannerVisible(true);
  setFooterVisible(true);

  if (catalogTitle) {
    catalogTitle.textContent = "CATÁLOGO";
  }

  updateSearchStatus("");

  const query = normalizeText(currentSearch);

  let filteredCategories = catalogData;

  if (query) {
    filteredCategories =
      catalogData.filter((category) => {

        const categoryMatch =
          normalizeText(category.name)
            .includes(query);

        const itemMatch =
          category.items.some((item) =>
            normalizeText(item.name)
              .includes(query)
          );

        return categoryMatch || itemMatch;
      });
  }

  if (catalogCount) {
    catalogCount.textContent = query
      ? `${filteredCategories.length} ${
          filteredCategories.length === 1
            ? "categoría"
            : "categorías"
        }`
      : "12 categorías";
  }

  if (query) {
    updateSearchStatus(
      `Resultados para “${currentSearch}”`
    );
  }

  catalogElement.style.opacity = "0";
  catalogElement.style.transition =
    "opacity 0.2s ease";

  setTimeout(() => {

    if (!filteredCategories.length) {

      catalogElement.innerHTML = `
        <div class="empty-state">
          <h3>No encontramos una categoría relacionada</h3>

          <p>
            Prueba con otro término o selecciona
            una categoría cercana a lo que estás buscando.
          </p>
        </div>
      `;

    } else {

      catalogElement.innerHTML =
        filteredCategories
          .map(createCategoryCard)
          .join("");
    }

    catalogElement.style.opacity = "1";

  }, 150);

  if (updateHistory) {
    history.pushState(
      { page: "home" },
      "",
      window.location.pathname
    );
  }

  if (scroll) {
    document
      .getElementById("catalogSection")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
  }
}

/* =========================================================
   RENDER DE SUBCATEGORÍAS
   ========================================================= */

function renderCategory(categoryName, options = {}) {

  const {
    updateHistory = true,
    scroll = true
  } = options;

  const category =
    getCategory(categoryName);

  if (!category) {
    renderCategories({
      updateHistory: false,
      scroll: false
    });

    return;
  }

  currentCategory = category.name;

  setBannerVisible(false);
  setFooterVisible(false);

  if (catalogTitle) {
    catalogTitle.textContent =
      category.name;
  }

  const query =
    normalizeText(currentSearch);

  let filteredItems =
    category.items;

  if (query) {
    filteredItems =
      category.items.filter((item) =>
        normalizeText(item.name)
          .includes(query)
      );
  }

  if (catalogCount) {
    catalogCount.textContent = query
      ? `${filteredItems.length} ${
          filteredItems.length === 1
            ? "opción"
            : "opciones"
        }`
      : `${category.items.length} opciones`;
  }

  updateSearchStatus(
    query
      ? `Resultados para “${currentSearch}”`
      : ""
  );

  let content = "";

  if (!filteredItems.length) {

    content += `
      <div class="empty-state">

        <h3>
          No encontramos ese producto
        </h3>

        <p>
          Prueba con otro término o selecciona
          una opción similar. Un asesor te ayudará
          a encontrar la alternativa que necesitas.
        </p>

      </div>
    `;

  } else {

    content += `
      <div class="subcategory-grid">

        ${filteredItems
          .map((item) =>
            createItemCard(
              item,
              category.name
            )
          )
          .join("")}

      </div>
    `;
  }

  content += `
    <div class="back-button-wrap">

      <button
        type="button"
        class="back-to-catalog"
      >
        Volver al catálogo
      </button>

    </div>
  `;

  catalogElement.style.opacity = "0";

  setTimeout(() => {

    catalogElement.innerHTML = content;
    catalogElement.style.opacity = "1";

  }, 150);

  if (updateHistory) {
    history.pushState(
      {
        page: "category",
        category: category.name
      },
      "",
      window.location.pathname
    );
  }

  if (scroll) {
    document
      .getElementById("catalogSection")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
  }
}

/* =========================================================
   VOLVER AL CATÁLOGO
   ========================================================= */

function goBackToCatalog(options = {}) {

  const {
    updateHistory = true,
    scroll = true
  } = options;

  currentCategory = null;
  currentSearch = "";

  if (searchInput) {
    searchInput.value = "";
  }

  if (updateHistory) {
    history.pushState(
      { page: "home" },
      "",
      window.location.pathname
    );
  }

  renderCategories({
    updateHistory: false,
    scroll: false
  });

  if (scroll) {
    document
      .getElementById("catalogSection")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
  }
}

/* =========================================================
   BÚSQUEDA
   ========================================================= */

function performSearch() {

  if (!searchInput) return;

  currentSearch =
    searchInput.value.trim();

  if (currentCategory) {

    renderCategory(
      currentCategory,
      {
        updateHistory: false,
        scroll: false
      }
    );

  } else {

    renderCategories(
      {
        updateHistory: false,
        scroll: false
      }
    );
  }

  document
    .getElementById("catalogSection")
    ?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
}

searchForm?.addEventListener(
  "submit",
  (event) => {

    event.preventDefault();

    performSearch();
  }
);

/* =========================================================
   EVENTOS DEL CATÁLOGO
   ========================================================= */

catalogElement?.addEventListener(
  "click",
  (event) => {

    /* VOLVER AL CATÁLOGO */
    const backButton =
      event.target.closest(
        ".back-to-catalog"
      );

    if (backButton) {

      event.preventDefault();

      goBackToCatalog();

      return;
    }

    /* ENTRAR A CATEGORÍA */
    const categoryButton =
      event.target.closest(
        ".explore-button"
      );

    if (categoryButton) {

      event.preventDefault();

      const categoryName =
        categoryButton.dataset.category;

      renderCategory(
        categoryName
      );

      return;
    }

    /* COTIZAR */
    const quoteButton =
      event.target.closest(
        ".quote-button"
      );

    if (quoteButton) {

      event.preventDefault();

      const product =
        quoteButton.dataset.product;

      const number =
        getWhatsAppNumber();

      /*
        IMPORTANTE:
        Solo usamos el producto.
        NO enviamos la categoría principal
        ni la subcategoría.
      */

      const message =
        getQuoteMessage(product);

      const url =
        `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

      window.open(
        url,
        "_blank",
        "noopener,noreferrer"
      );

      return;
    }
  }
);

/* =========================================================
   LOGO → VOLVER AL INICIO
   ========================================================= */

brandLink?.addEventListener(
  "click",
  (event) => {

    event.preventDefault();

    currentSearch = "";

    if (searchInput) {
      searchInput.value = "";
    }

    goBackToCatalog();
  }
);

/* =========================================================
   BOTÓN WHATSAPP DEL FOOTER
   ========================================================= */

footerWhatsapp?.addEventListener(
  "click",
  () => {
    openWhatsApp();
  }
);

/* =========================================================
   HEADER DINÁMICO AL HACER SCROLL
   ========================================================= */

window.addEventListener(
  "scroll",
  () => {

    const header =
      document.querySelector(
        ".header"
      );

    if (!header) return;

    if (window.scrollY > 40) {

      header.style.boxShadow =
        "0 4px 20px rgba(0, 0, 0, 0.6)";

      header.style.padding =
        "0.7rem 1.5rem";

    } else {

      header.style.boxShadow =
        "none";

      header.style.padding =
        "1rem 1.5rem";
    }
  }
);

/* =========================================================
   BOTÓN ATRÁS DEL NAVEGADOR
   ========================================================= */

window.addEventListener(
  "popstate",
  (event) => {

    const state =
      event.state;

    if (
      state &&
      state.page === "category" &&
      state.category
    ) {

      renderCategory(
        state.category,
        {
          updateHistory: false,
          scroll: false
        }
      );

      return;
    }

    currentCategory = null;
    currentSearch = "";

    if (searchInput) {
      searchInput.value = "";
    }

    renderCategories(
      {
        updateHistory: false,
        scroll: false
      }
    );
  }
);

/* =========================================================
   INICIALIZACIÓN
   ========================================================= */

renderCategories({
  updateHistory: false,
  scroll: false
});