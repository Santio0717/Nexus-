/* =========================================================
   NEXUS
   JAVASCRIPT PRINCIPAL
========================================================= */


/* =========================================================
   WHATSAPP
   60% -> 322 818 2311
   40% -> 311 716 1043
========================================================= */

const WHATSAPP_60 = "573228182311";
const WHATSAPP_40 = "573117161043";


function getWhatsAppNumber() {
  return Math.random() < 0.60
    ? WHATSAPP_60
    : WHATSAPP_40;
}


function openWhatsApp(message) {

  const number = getWhatsAppNumber();

  const encodedMessage =
    encodeURIComponent(message);

  const url =
    `https://wa.me/${number}?text=${encodedMessage}`;

  /*
    window.location.href se utiliza para que funcione
    correctamente en móviles y especialmente en iPhone.
  */

  window.location.href = url;
}


/* =========================================================
   IMÁGENES GENERALES
========================================================= */

const IMAGES = {

  computers:
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80",

  monitors:
    "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=80",

  gaming:
    "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=900&q=80",

  keyboard:
    "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80",

  mouse:
    "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=80",

  audio:
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",

  camera:
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80",

  accessories:
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",

  storage:
    "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=900&q=80",

  printers:
    "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=900&q=80",

  phone:
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",

  chairs:
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=80",

  power:
    "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=900&q=80",

  services:
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80"

};


/* =========================================================
   CATÁLOGO COMPLETO
========================================================= */

const catalogData = [

  {
    name: "Computadores",

    description:
      "Equipos para trabajo, estudio, hogar y gaming.",

    image: IMAGES.computers,

    groups: [

      {
        name: null,

        items: [
          "PCs",
          "Torres",
          "All in One",
          "Corporativos",
          "Gaming"
        ]
      }

    ]
  },


  {
    name: "Monitores y TV",

    description:
      "Pantallas para trabajo, entretenimiento y gaming.",

    image: IMAGES.monitors,

    groups: [

      {
        name: null,

        items: [
          "Monitores",
          "Monitores Gaming",
          "TV"
        ]
      }

    ]
  },


  {
    name: "Gaming",

    description:
      "Productos y accesorios para tu experiencia gaming.",

    image: IMAGES.gaming,

    groups: [

      {
        name: null,

        items: [
          "Consolas",
          "Controles",
          "Accesorios Gaming"
        ]
      }

    ]
  },


  {
    name: "Periféricos",

    description:
      "Periféricos para computador, oficina, gaming y entretenimiento.",

    image: IMAGES.accessories,

    groups: [

      {
        name: "Teclados",

        image: IMAGES.keyboard,

        items: [
          "Gaming",
          "Cableados",
          "Inalámbricos"
        ]
      },

      {
        name: "Mouse",

        image: IMAGES.mouse,

        items: [
          "Gaming",
          "Cableados",
          "Inalámbricos"
        ]
      },

      {
        name: "Combos",

        image: IMAGES.keyboard,

        items: [
          "Teclado + Mouse",
          "Combo Gaming",
          "Combo Inalámbrico"
        ]
      },

      {
        name: "Audio",

        image: IMAGES.audio,

        items: [
          "Audífonos",
          "Micrófonos",
          "Parlantes"
        ]
      },

      {
        name: "Cámaras",

        image: IMAGES.camera,

        items: [
          "Cámaras web",
          "Cámaras fotográficas",
          "Trípodes"
        ]
      }

    ]
  },


  {
    name: "Accesorios",

    description:
      "Conectividad, cargadores, cables, soportes y accesorios.",

    image: IMAGES.accessories,

    groups: [

      {
        name: "Cargadores",

        image: IMAGES.accessories,

        items: [
          "Para PC / portátil",
          "Para celular"
        ]
      },

      {
        name: "Cables",

        image: IMAGES.accessories,

        items: [
          "Cables USB",
          "HDMI",
          "DisplayPort",
          "Red",
          "Audio",
          "Para celular",
          "Para computador"
        ]
      },

      {
        name: "Adaptadores",

        image: IMAGES.accessories,

        items: [
          "USB",
          "HDMI",
          "DisplayPort",
          "Video",
          "Red"
        ]
      },

      {
        name: "Conectividad",

        image: IMAGES.accessories,

        items: [
          "Hubs USB",
          "Wi-Fi",
          "Bluetooth"
        ]
      },

      {
        name: "Soportes",

        image: IMAGES.accessories,

        items: [
          "Para monitor",
          "Para portátil",
          "Para celular"
        ]
      },

      {
        name: "Bases",

        image: IMAGES.accessories,

        items: [
          "Para portátil",
          "Bases refrigerantes con ventilador"
        ]
      },

      {
        name: "Accesorios para computadores",

        image: IMAGES.accessories,

        items: [
          "Lectores",
          "Ventiladores",
          "Accesorios internos",
          "Accesorios externos"
        ]
      },

      {
        name: "Accesorios para celulares",

        image: IMAGES.phone,

        items: [
          "Soportes",
          "Cargadores",
          "Cables"
        ]
      }

    ]
  },


  {
    name: "Memorias y Almacenamiento",

    description:
      "Memorias, discos y soluciones de almacenamiento.",

    image: IMAGES.storage,

    groups: [

      {
        name: null,

        items: [
          "Memorias USB",
          "Memoria RAM",
          "Discos HDD",
          "Discos SSD",
          "SSD M.2",
          "Tarjetas MicroSD",
          "Tarjetas SD"
        ]
      }

    ]
  },


  {
    name: "Impresoras y Suministros",

    description:
      "Impresoras, consumibles y accesorios para impresión.",

    image: IMAGES.printers,

    groups: [

      {
        name: "Impresoras",

        image: IMAGES.printers,

        items: [
          "Impresoras",
          "Multifuncionales",
          "Fotocopiadoras",
          "Impresoras térmicas",
          "Impresoras de tinta",
          "Impresoras láser",
          "Impresoras Wi-Fi"
        ]
      },

      {
        name: "Suministros",

        image: IMAGES.printers,

        items: [
          "Tintas",
          "Tóner",
          "Cartuchos",
          "Papel"
        ]
      },

      {
        name: "Accesorios",

        image: IMAGES.printers,

        items: [
          "Accesorios para impresora"
        ]
      }

    ]
  },


  {
    name: "Celulares y Accesorios",

    description:
      "Celulares y accesorios para tus dispositivos móviles.",

    image: IMAGES.phone,

    groups: [

      {
        name: null,

        items: [
          "Celulares",
          "Cargadores",
          "Cables",
          "Fundas",
          "Vidrios templados",
          "Audífonos",
          "Soportes",
          "Accesorios para teléfonos"
        ]
      }

    ]
  },


  {
    name: "Sillas",

    description:
      "Sillas para gaming, oficina y trabajo.",

    image: IMAGES.chairs,

    groups: [

      {
        name: null,

        items: [
          "Sillas Gaming",
          "Sillas de oficina"
        ]
      }

    ]
  },


  {
    name: "Energía",

    description:
      "Protección eléctrica y respaldo para tus equipos.",

    image: IMAGES.power,

    groups: [

      {
        name: null,

        items: [
          "UPS",
          "Reguladores de voltaje"
        ]
      }

    ]
  },


  {
    name: "Servicios Técnicos",

    description:
      "Soluciones profesionales para mantenimiento y soporte.",

    image: IMAGES.services,

    groups: [

      {
        name: null,

        items: [
          "Mantenimiento",
          "Reparación",
          "Instalación de programas y configuración",
          "Optimización de equipos",
          "Diagnóstico técnico",
          "Soporte técnico"
        ]
      }

    ]
  }

];


/* =========================================================
   ICONOS DE CATEGORÍAS
========================================================= */

const categoryIcons = {
  "Computadores": "PC",
  "Monitores y TV": "TV",
  "Gaming": "GM",
  "Periféricos": "PF",
  "Accesorios": "AC",
  "Memorias y Almacenamiento": "AL",
  "Impresoras y Suministros": "IM",
  "Celulares y Accesorios": "CE",
  "Sillas": "SI",
  "Energía": "EN",
  "Servicios Técnicos": "ST"
};


/* =========================================================
   NORMALIZAR TEXTO
========================================================= */

function normalizeText(text) {

  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

}


/* =========================================================
   CREAR MENSAJE WHATSAPP
========================================================= */

function createQuoteMessage(
  categoryName,
  groupName,
  item
) {

  if (groupName) {

    return `Hola Nexus, quiero cotizar ${categoryName} - ${groupName} - ${item}.`;

  }

  return `Hola Nexus, quiero cotizar ${categoryName} - ${item}.`;

}


/* =========================================================
   CREAR TARJETA
========================================================= */

function createSubcategoryCard(
  category,
  group,
  item
) {

  const card = document.createElement("article");

  card.className = "subcategory-card";

  const image =
    group.image ||
    category.image;

  const groupName =
    group.name || "";

  const message =
    createQuoteMessage(
      category.name,
      groupName,
      item
    );


  card.innerHTML = `

    <img
      class="subcategory-image"
      src="${image}"
      alt="${item}"
      loading="lazy"
    >

    <div class="subcategory-content">

      <h4 class="subcategory-name">
        ${item}
      </h4>

      <button
        type="button"
        class="quote-button"
        data-message="${escapeAttribute(message)}"
      >
        Cotizar
      </button>

    </div>

  `;


  const button =
    card.querySelector(".quote-button");


  button.addEventListener(
    "click",
    () => {

      openWhatsApp(message);

    }
  );


  return card;
}


/* =========================================================
   ESCAPAR ATRIBUTOS HTML
========================================================= */

function escapeAttribute(text) {

  return text
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

}


/* =========================================================
   CREAR GRUPO
========================================================= */

function createGroup(
  category,
  group
) {

  const groupElement =
    document.createElement("div");

  groupElement.className = "group";


  let titleHTML = "";

  if (group.name) {

    titleHTML = `
      <h4 class="group-title">
        ${group.name}
      </h4>
    `;

  }


  const grid =
    document.createElement("div");

  grid.className =
    "subcategory-grid";


  group.items.forEach(
    item => {

      const card =
        createSubcategoryCard(
          category,
          group,
          item
        );

      grid.appendChild(card);

    }
  );


  groupElement.innerHTML =
    titleHTML;

  groupElement.appendChild(grid);


  return groupElement;
}


/* =========================================================
   CREAR CATEGORÍA
========================================================= */

function createCategory(category) {

  const categoryElement =
    document.createElement("section");

  categoryElement.className =
    "category";

  categoryElement.dataset.category =
    category.name;


  const icon =
    categoryIcons[category.name] || "NX";


  categoryElement.innerHTML = `

    <div class="category-header">

      <div class="category-title-wrap">

        <div class="category-icon">
          ${icon}
        </div>

        <div>

          <h3>
            ${category.name}
          </h3>

          <p class="category-description">
            ${category.description}
          </p>

        </div>

      </div>

    </div>

    <div class="category-groups"></div>

  `;


  const groupsContainer =
    categoryElement.querySelector(
      ".category-groups"
    );


  category.groups.forEach(
    group => {

      groupsContainer.appendChild(
        createGroup(
          category,
          group
        )
      );

    }
  );


  return categoryElement;
}


/* =========================================================
   RENDERIZAR CATÁLOGO
========================================================= */

function renderCatalog() {

  const catalog =
    document.getElementById("catalog");

  catalog.innerHTML = "";


  catalogData.forEach(
    category => {

      catalog.appendChild(
        createCategory(category)
      );

    }
  );


  updateCatalogCount();

}


/* =========================================================
   CONTADOR
========================================================= */

function updateCatalogCount() {

  const count =
    catalogData.length;

  const element =
    document.getElementById(
      "catalogCount"
    );

  element.textContent =
    `${count} categorías`;

}


/* =========================================================
   BUSCADOR
========================================================= */

function setupSearch() {

  const searchInput =
    document.getElementById(
      "searchInput"
    );

  const catalog =
    document.getElementById(
      "catalog"
    );

  const noResults =
    document.getElementById(
      "noResults"
    );

  const clearSearch =
    document.getElementById(
      "clearSearch"
    );

  const message =
    document.getElementById(
      "searchResultsMessage"
    );


  function performSearch() {

    const query =
      normalizeText(
        searchInput.value.trim()
      );


    if (!query) {

      document
        .querySelectorAll(".category")
        .forEach(
          category => {

            category.style.display =
              "";

          }
        );


      document
        .querySelectorAll(".group")
        .forEach(
          group => {

            group.style.display =
              "";

          }
        );


      document
        .querySelectorAll(".subcategory-card")
        .forEach(
          card => {

            card.style.display =
              "";

          }
        );


      noResults.hidden = true;

      message.textContent = "";

      return;

    }


    let totalMatches = 0;


    catalogData.forEach(
      (category, categoryIndex) => {

        const categoryElement =
          catalog.children[
            categoryIndex
          ];


        const categoryMatch =
          normalizeText(
            category.name
          ).includes(query);


        let categoryHasMatch =
          categoryMatch;


        const groups =
          categoryElement.querySelectorAll(
            ".group"
          );


        category.groups.forEach(
          (group, groupIndex) => {

            const groupElement =
              groups[groupIndex];


            const groupMatch =
              group.name &&
              normalizeText(
                group.name
              ).includes(query);


            let groupHasMatch =
              groupMatch;


            const cards =
              groupElement.querySelectorAll(
                ".subcategory-card"
              );


            group.items.forEach(
              (item, itemIndex) => {

                const card =
                  cards[itemIndex];


                const itemMatch =
                  normalizeText(
                    item
                  ).includes(query);


                const shouldShow =
                  categoryMatch ||
                  groupMatch ||
                  itemMatch;


                card.style.display =
                  shouldShow
                    ? ""
                    : "none";


                if (shouldShow) {

                  totalMatches++;

                }


                if (shouldShow) {

                  groupHasMatch =
                    true;

                }

              }
            );


            groupElement.style.display =
              groupHasMatch
                ? ""
                : "none";


            if (groupHasMatch) {

              categoryHasMatch =
                true;

            }

          }
        );


        categoryElement.style.display =
          categoryHasMatch
            ? ""
            : "none";

      }
    );


    noResults.hidden =
      totalMatches !== 0;


    if (totalMatches === 0) {

      message.textContent = "";

    } else {

      message.textContent =
        `${totalMatches} resultado${
          totalMatches === 1
            ? ""
            : "s"
        } encontrado${
          totalMatches === 1
            ? ""
            : "s"
        } para "${searchInput.value.trim()}"`;

    }

  }


  searchInput.addEventListener(
    "input",
    performSearch
  );


  clearSearch.addEventListener(
    "click",
    () => {

      searchInput.value = "";

      performSearch();

      searchInput.focus();

      document
        .getElementById("catalogo")
        .scrollIntoView({
          behavior: "smooth"
        });

    }
  );

}


/* =========================================================
   BOTONES GENERALES DE WHATSAPP
========================================================= */

function setupWhatsAppButtons() {

  document
    .querySelectorAll(".js-whatsapp")
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            const message =
              button.dataset.message ||
              "Hola Nexus, quiero recibir asesoría y una cotización sobre sus productos.";

            openWhatsApp(message);

          }
        );

      }
    );

}


/* =========================================================
   MENÚ MOBILE
========================================================= */

function setupMobileMenu() {

  const menuToggle =
    document.getElementById(
      "menuToggle"
    );

  const mainMenu =
    document.getElementById(
      "mainMenu"
    );


  menuToggle.addEventListener(
    "click",
    () => {

      const isOpen =
        mainMenu.classList.toggle(
          "active"
        );


      menuToggle.setAttribute(
        "aria-expanded",
        isOpen
          ? "true"
          : "false"
      );

    }
  );


  mainMenu
    .querySelectorAll("a")
    .forEach(
      link => {

        link.addEventListener(
          "click",
          () => {

            mainMenu.classList.remove(
              "active"
            );

            menuToggle.setAttribute(
              "aria-expanded",
              "false"
            );

          }
        );

      }
    );

}


/* =========================================================
   AÑO DEL FOOTER
========================================================= */

function setCurrentYear() {

  const year =
    document.getElementById(
      "currentYear"
    );

  year.textContent =
    new Date().getFullYear();

}


/* =========================================================
   INICIALIZACIÓN
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderCatalog();

    setupSearch();

    setupWhatsAppButtons();

    setupMobileMenu();

    setCurrentYear();

  }
);