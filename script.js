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

  /* =======================================================
     1. COMPUTADORES
  ======================================================= */

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


  /* =======================================================
     2. MONITORES Y TV
  ======================================================= */

  {
    name: "Monitores y TV",
    image: imagePath("Monitores y TV.jpg"),

    items: makeItems([
      ["Monitores", "Monitores.jpg"],
      ["Monitores Gaming", "Monitores Gaming.jpg"],
      ["TV", "TV.jpg"]
    ])
  },


  /* =======================================================
     3. GAMING
  ======================================================= */

  {
    name: "Gaming",
    image: imagePath("Gaming.jpg"),

    items: makeItems([
      ["Consolas", "Consolas.jpg"],
      ["Controles", "Controles.jpg"],
      ["Accesorios Gaming", "Accesorios Gaming.jpg"]
    ])
  },


  /* =======================================================
     4. PERIFÉRICOS
  ======================================================= */

  {
    name: "Periféricos",
    image: imagePath("Perifericos.jpg"),

    items: makeItems([

      /* Teclados */
      ["Teclados Gaming", "Teclados Gaming.jpg"],
      ["Teclados Cableados", "Teclados Cableados.jpg"],
      ["Teclados Inalámbricos", "Teclados Inalambricos.jpg"],

      /* Mouse */
      ["Mouse Gaming", "Mouse Gaming.jpg"],
      ["Mouse Cableados", "Mouse Cableados.jpg"],
      ["Mouse Inalámbricos", "Mouse Inalambricos.jpg"],

      /* Combos */
      ["Combo Teclado + Mouse", "Combo Teclado + Mouse.jpg"],
      ["Combo Gaming", "Combo Gaming.jpg"],
      ["Combo Inalámbrico", "Combo Inalambrico.jpg"],

      /* Audio */
      ["Audífonos", "Audifonos.jpg"],
      ["Micrófonos", "Microfonos.jpg"],
      ["Parlantes", "Parlantes.jpg"],

      /* Cámaras */
      ["Cámaras web", "Camaras web.jpg"],
      ["Cámaras fotográficas", "Camaras fotográficas.jpg"],
      ["Trípodes", "Tripodes.jpg"],

      /* Cargadores */
      [
        "Cargadores para PC / portátil",
        "Cargadores para PC- portatil.jpg"
      ],

      [
        "Cargadores para celular",
        "Cargadores para Celular.jpg"
      ],

      /* Cables */
      ["Cables USB", "Cable Usb.jpg"],
      ["Cables HDMI", "Cables HDMI.jpg"],
      ["Cables de red", "Cables de Red.jpg"],
      ["Cables de audio", "Cables de Audio.jpg"],
      ["Cables para celular", "Cables para Celular.jpg"],
      ["Cables para computador", "Cables para Computador.jpg"],

      /* Adaptadores */
      ["Adaptadores USB", "Adaptadores USB.jpg"],
      ["Adaptadores HDMI", "Adaptadores HDMI.jpg"],
      ["Adaptadores de video", "Adaptadores de Video.jpg"],
      ["Adaptadores de red", "Adaptadores de Red.jpg"],

      /* Conectividad */
      ["Hubs USB", "Hubs USB.jpg"],
      ["Wi-Fi", "Wi-Fi.jpg"],

      /* Soportes */
      ["Soportes para monitor", "Soportes para Monitor.jpg"],
      ["Soportes para portátil", "Soportes para Portatil.jpg"],

      /* Bases */
      ["Bases para portátil", "Bases para Portatil.jpg"],
      [
        "Bases refrigerantes con ventilador",
        "Bases Refrigerantes con Ventilador.jpg"
      ],

      /* Accesorios */
      ["Lectores", "Lectores.jpg"],
      ["Accesorios internos", "Accesorios internos.jpg"]

    ])
  },


  /* =======================================================
     5. ALMACENAMIENTO
  ======================================================= */

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
      ["SD", "SD.jpg.jpg"]
    ])
  },


  /* =======================================================
     6. IMPRESORAS
  ======================================================= */

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


  /* =======================================================
     7. CELULARES
  ======================================================= */

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


  /* =======================================================
     8. SILLAS
  ======================================================= */

  {
    name: "Sillas",
    image: imagePath("Sillas Categoria.jpg"),

    items: makeItems([
      ["Sillas Gaming", "Sillas Gaming.jpg"],
      ["Sillas de oficina", "Sillas de Oficina.jpg"]
    ])
  },


  /* =======================================================
     9. ENERGÍA
  ======================================================= */

  {
    name: "Energía",
    image: imagePath("Energia.jpg"),

    items: makeItems([
      ["UPS", "UPS.jpg"],
      ["Reguladores de voltaje", "Reguladores de Voltaje.jpg"]
    ])
  },


  /* =======================================================
     10. SERVICIOS TÉCNICOS
  ======================================================= */

  {
    name: "Servicios Técnicos",
    image: imagePath("Servicios Tecnicos.jpg"),

    items: makeItems([
      ["Mantenimiento", "Mantenimiento.jpg.jpg"],
      ["Reparación", "Reparacion.jpg"],
      [
        "Instalación de programas y configuración",
        "Instalacion de Programas y Configuracion.jpg"
      ]
    ])
  }

];


/* =========================================================
   ELEMENTOS DEL HTML
========================================================= */

const catalogElement =
  document.getElementById("catalog");

const catalogTitle =
  document.getElementById("catalogTitle");

const catalogCount =
  document.getElementById("catalogCount");

const searchStatus =
  document.getElementById("searchStatus");

const searchForm =
  document.getElementById("searchForm");

const searchInput =
  document.getElementById("searchInput");

const infoBanner =
  document.getElementById("infoBanner");

const footerElement =
  document.getElementById("contacto");

const brandLink =
  document.querySelector(".brand");

const footerWhatsapp =
  document.getElementById("footerWhatsapp");


/* =========================================================
   LOGO LOCAL
========================================================= */

const brandLogo =
  brandLink?.querySelector(".brand-logo");

if (brandLogo) {
  brandLogo.src = LOGO_URL;
}


/* =========================================================
   ESTADO
========================================================= */

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

  const div =
    document.createElement("div");

  div.textContent = text;

  return div.innerHTML;

}


function getCategory(categoryName) {

  return catalogData.find(
    (category) =>
      category.name === categoryName
  );

}


/* =========================================================
   MOSTRAR / OCULTAR FOOTER
========================================================= */

function setFooterVisible(visible) {

  if (!footerElement) {
    return;
  }

  footerElement.classList.toggle(
    "is-hidden",
    !visible
  );

}


/* =========================================================
   MOSTRAR / OCULTAR BANNER
========================================================= */

function setBannerVisible(visible) {

  if (!infoBanner) {
    return;
  }

  infoBanner.hidden = !visible;

}


/* =========================================================
   ESTADO DE BÚSQUEDA
========================================================= */

function updateSearchStatus(text = "") {

  if (!searchStatus) {
    return;
  }

  searchStatus.textContent = text;

}


/* =========================================================
   WHATSAPP
   60% ASESOR
   40% ASESORA
========================================================= */

function getWhatsAppNumber() {

  return Math.random() < 0.60
    ? WHATSAPP_ADVISOR
    : WHATSAPP_ADVISOR_2;

}


function openWhatsApp(productName = "") {

  const number =
    getWhatsAppNumber();

  const message =
    `Hola, quiero recibir información sobre ${
      productName ||
      "un producto del catálogo de Nexus"
    }.`;

  const url =
    `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  window.open(
    url,
    "_blank",
    "noopener,noreferrer"
  );

}


/* =========================================================
   MANEJO DE ERROR DE IMAGEN
========================================================= */

function handleImageError(image) {

  if (!image) {
    return;
  }

  image.onerror = null;

  image.style.display = "none";

  const wrapper =
    image.parentElement;

  if (wrapper) {

    wrapper.classList.add(
      "image-error"
    );

  }

}


/* =========================================================
   CARD DE CATEGORÍA PRINCIPAL

   ORDEN:
   TÍTULO
   IMAGEN
   BOTÓN
========================================================= */

function createCategoryCard(category) {

  return `
    <article class="category-card">

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
   CARD DE SUBCATEGORÍA

   ORDEN:
   TÍTULO
   IMAGEN
   BOTÓN
========================================================= */

function createItemCard(
  item,
  categoryName
) {

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
   RENDER DEL CATÁLOGO PRINCIPAL
========================================================= */

function renderCategories(options = {}) {

  const {
    updateHistory = true,
    scroll = false
  } = options;


  currentCategory = null;


  /* Mostrar banner y footer */

  setBannerVisible(true);
  setFooterVisible(true);


  /* Título */

  if (catalogTitle) {

    catalogTitle.textContent =
      "CATÁLOGO";

  }


  updateSearchStatus("");


  const query =
    normalizeText(currentSearch);


  let filteredCategories =
    catalogData;


  /* =======================================================
     FILTRAR CATEGORÍAS
  ======================================================= */

  if (query) {

    filteredCategories =
      catalogData.filter(
        (category) => {

          const categoryMatch =
            normalizeText(
              category.name
            ).includes(query);


          const itemMatch =
            category.items.some(
              (item) =>
                normalizeText(
                  item.name
                ).includes(query)
            );


          return (
            categoryMatch ||
            itemMatch
          );

        }
      );

  }


  /* =======================================================
     CONTADOR
  ======================================================= */

  if (catalogCount) {

    catalogCount.textContent =
      query
        ? `${filteredCategories.length} ${
            filteredCategories.length === 1
              ? "categoría"
              : "categorías"
          }`
        : "10 categorías";

  }


  /* =======================================================
     ESTADO DE BÚSQUEDA
  ======================================================= */

  if (query) {

    updateSearchStatus(
      `Resultados para “${currentSearch}”`
    );

  }


  /* =======================================================
     MOSTRAR RESULTADOS
  ======================================================= */

  if (!filteredCategories.length) {

    catalogElement.innerHTML = `

      <div class="empty-state">

        <h3>
          No encontramos una categoría relacionada
        </h3>

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


  /* =======================================================
     HISTORIAL
  ======================================================= */

  if (updateHistory) {

    history.pushState(
      {
        page: "home"
      },
      "",
      window.location.pathname
    );

  }


  /* =======================================================
     SCROLL
  ======================================================= */

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
   RENDER DE CATEGORÍA / SUBCATEGORÍAS
========================================================= */

function renderCategory(
  categoryName,
  options = {}
) {

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


  currentCategory =
    category.name;


  /* Ocultar banner y footer */

  setBannerVisible(false);
  setFooterVisible(false);


  /* Título */

  if (catalogTitle) {

    catalogTitle.textContent =
      category.name;

  }


  const query =
    normalizeText(currentSearch);


  let filteredItems =
    category.items;


  /* =======================================================
     FILTRAR SUBCATEGORÍAS
  ======================================================= */

  if (query) {

    filteredItems =
      category.items.filter(
        (item) =>
          normalizeText(
            item.name
          ).includes(query)
      );

  }


  /* =======================================================
     CONTADOR
  ======================================================= */

  if (catalogCount) {

    catalogCount.textContent =
      query
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


  /* =======================================================
     SIN RESULTADOS
  ======================================================= */

  if (!filteredItems.length) {

    content += `

      <div class="empty-state">

        <h3>
          No encontramos ese producto
        </h3>

        <p>
          Prueba con otro término o selecciona
          una opción similar. Un asesor de Nexus
          te ayudará a encontrar la alternativa
          que necesitas.
        </p>

      </div>

    `;

  } else {

    /* =====================================================
       SUBCATEGORÍAS
    ===================================================== */

    content += `

      <div class="subcategory-grid">

        ${filteredItems
          .map(
            (item) =>
              createItemCard(
                item,
                category.name
              )
          )
          .join("")}

      </div>

    `;

  }


  /* =======================================================
     BOTÓN VOLVER
  ======================================================= */

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


  catalogElement.innerHTML =
    content;


  /* =======================================================
     HISTORIAL
  ======================================================= */

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


  /* =======================================================
     SCROLL
  ======================================================= */

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

function goBackToCatalog(
  options = {}
) {

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
      {
        page: "home"
      },
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
   BUSCADOR
========================================================= */

function performSearch() {

  if (!searchInput) {
    return;
  }


  currentSearch =
    searchInput.value.trim();


  /* =======================================================
     BUSCAR DENTRO DE CATEGORÍA
  ======================================================= */

  if (currentCategory) {

    renderCategory(
      currentCategory,
      {
        updateHistory: false,
        scroll: false
      }
    );

  }

  /* =======================================================
     BUSCAR EN CATEGORÍAS
  ======================================================= */

  else {

    renderCategories({
      updateHistory: false,
      scroll: false
    });

  }


  document
    .getElementById("catalogSection")
    ?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

}


/* =========================================================
   EVENTO DEL BUSCADOR
========================================================= */

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


    /* =====================================================
       VOLVER AL CATÁLOGO
    ===================================================== */

    const backButton =
      event.target.closest(
        ".back-to-catalog"
      );


    if (backButton) {

      event.preventDefault();

      goBackToCatalog();

      return;

    }


    /* =====================================================
       ENTRAR A CATEGORÍA
    ===================================================== */

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


    /* =====================================================
       COTIZAR PRODUCTO
    ===================================================== */

    const quoteButton =
      event.target.closest(
        ".quote-button"
      );


    if (quoteButton) {

      event.preventDefault();


      const product =
        quoteButton.dataset.product;


      const category =
        quoteButton.dataset.category;


      const number =
        getWhatsAppNumber();


      const message =
        `Hola, quiero cotizar ${product} de la categoría ${category}.`;


      const url =
        `https://wa.me/${number}?text=${encodeURIComponent(message)}`;


      window.open(
        url,
        "_blank",
        "noopener,noreferrer"
      );

    }

  }
);


/* =========================================================
   LOGO → INICIO
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
   WHATSAPP DEL FOOTER
========================================================= */

footerWhatsapp?.addEventListener(
  "click",
  () => {

    openWhatsApp();

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


    /* =====================================================
       VOLVER A UNA CATEGORÍA
    ===================================================== */

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


    /* =====================================================
       VOLVER AL INICIO
    ===================================================== */

    currentCategory = null;
    currentSearch = "";


    if (searchInput) {

      searchInput.value = "";

    }


    renderCategories({
      updateHistory: false,
      scroll: false
    });

  }
);


/* =========================================================
   INICIO
========================================================= */

renderCategories({
  updateHistory: false,
  scroll: false
});
