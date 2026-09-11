/* =========================================================
   NEXUS
   SCRIPT.JS
========================================================= */
/* =========================================================
   WHATSAPP
========================================================= */
const WHATSAPP_60 = "573228182311";
const WHATSAPP_40 = "573117161043";
/*
  60% de los clics:
  573228182311
  40% de los clics:
  573117161043
*/
function getWhatsAppNumber() {
  return Math.random() < 0.60
    ? WHATSAPP_60
    : WHATSAPP_40;
}
/*
  Abre WhatsApp usando el formato oficial wa.me.
*/
function openWhatsApp(message) {
  const number = getWhatsAppNumber();
  const encodedMessage =
    encodeURIComponent(message);
  const url =
    `https://wa.me/${number}?text=${encodedMessage}`;
  window.location.href = url;
}
/* =========================================================
   IMÁGENES
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
  energy:
    "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=900&q=80",
  services:
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80"
};
/* =========================================================
   CATÁLOGO
========================================================= */
const catalogData = [
  {
    name: "Computadores",
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
  /* =====================================================
     PERIFÉRICOS
  ===================================================== */
  {
    name: "Periféricos",
    image: IMAGES.keyboard,
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
  /* =====================================================
     ACCESORIOS
  ===================================================== */
  {
    name: "Accesorios",
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
  /* =====================================================
     MEMORIAS Y ALMACENAMIENTO
  ===================================================== */
  {
    name: "Memorias y Almacenamiento",
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
  /* =====================================================
     IMPRESORAS
  ===================================================== */
  {
    name: "Impresoras y Suministros",
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
  /* =====================================================
     CELULARES
  ===================================================== */
  {
    name: "Celulares y Accesorios",
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
  /* =====================================================
     SILLAS
  ===================================================== */
  {
    name: "Sillas",
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
  /* =====================================================
     ENERGÍA
  ===================================================== */
  {
    name: "Energía",
    image: IMAGES.energy,
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
  /* =====================================================
     SERVICIOS TÉCNICOS
  ===================================================== */
  {
    name: "Servicios Técnicos",
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
   CREAR TARJETA
========================================================= */
function createSubcategoryCard(
  item,
  categoryName,
  groupName,
  image
) {
  const card =
    document.createElement("article");
  card.className =
    "subcategory-card";
  const imageContainer =
    document.createElement("div");
  imageContainer.className =
    "subcategory-image";
  const img =
    document.createElement("img");
  img.src = image;
  img.alt =
    `${item} - ${categoryName}`;
  img.loading = "lazy";
  imageContainer.appendChild(img);
  const content =
    document.createElement("div");
  content.className =
    "subcategory-content";
  const title =
    document.createElement("h4");
  title.textContent = item;
  const button =
    document.createElement("button");
  button.type = "button";
  button.className =
    "btn btn-whatsapp";
  button.innerHTML = `
    <span class="whatsapp-icon">⌕</span>
    Cotizar
  `;
  button.addEventListener("click", () => {
    let message;
    if (groupName) {
      message =
        `Hola Nexus, quiero cotizar ${categoryName} - ${groupName} - ${item}.`;
    } else {
      message =
        `Hola Nexus, quiero cotizar ${categoryName} - ${item}.`;
    }
    openWhatsApp(message);
  });
  content.appendChild(title);
  content.appendChild(button);
  card.appendChild(imageContainer);
  card.appendChild(content);
  return card;
}
/* =========================================================
   CREAR CATEGORÍA
========================================================= */
function createCategory(
  category,
  index,
  searchTerm = ""
) {
  const categoryElement =
    document.createElement("section");
  categoryElement.className =
    "category";
  const header =
    document.createElement("div");
  header.className =
    "category-header";
  const title =
    document.createElement("h3");
  title.className =
    "category-title";
  title.textContent =
    category.name;
  const number =
    document.createElement("span");
  number.className =
    "category-number";
  number.textContent =
    String(index + 1).padStart(2, "0");
  header.appendChild(title);
  header.appendChild(number);
  categoryElement.appendChild(header);
  let visibleItems = 0;
  category.groups.forEach(group => {
    const matchingItems =
      group.items.filter(item => {
        if (!searchTerm) {
          return true;
        }
        const completeText = [
          category.name,
          group.name || "",
          item
        ]
          .join(" ")
          .toLowerCase();
        return completeText.includes(
          searchTerm
        );
      });
    if (matchingItems.length === 0) {
      return;
    }
    visibleItems +=
      matchingItems.length;
    const groupElement =
      document.createElement("div");
    groupElement.className =
      "group";
    if (group.name) {
      const groupTitle =
        document.createElement("h4");
      groupTitle.className =
        "group-title";
      groupTitle.textContent =
        group.name;
      groupElement.appendChild(
        groupTitle
      );
    }
    const grid =
      document.createElement("div");
    grid.className =
      "subcategory-grid";
    matchingItems.forEach(item => {
      const image =
        group.image ||
        category.image ||
        IMAGES.accessories;
      const card =
        createSubcategoryCard(
          item,
          category.name,
          group.name,
          image
        );
      grid.appendChild(card);
    });
    groupElement.appendChild(grid);
    categoryElement.appendChild(
      groupElement
    );
  });
  if (visibleItems === 0) {
    return null;
  }
  return categoryElement;
}
/* =========================================================
   RENDER
========================================================= */
function renderCatalog(
  searchValue = ""
) {
  const catalog =
    document.getElementById("catalog");
  const noResults =
    document.getElementById("noResults");
  catalog.innerHTML = "";
  const searchTerm =
    searchValue
      .trim()
      .toLowerCase();
  let totalVisible = 0;
  catalogData.forEach(
    (category, index) => {
      const categoryElement =
        createCategory(
          category,
          index,
          searchTerm
        );
      if (categoryElement) {
        catalog.appendChild(
          categoryElement
        );
        totalVisible++;
      }
    }
  );
  noResults.hidden =
    totalVisible !== 0;
}
/* =========================================================
   BUSCADOR
========================================================= */
function setupSearch() {
  const input =
    document.getElementById(
      "searchInput"
    );
  if (!input) {
    return;
  }
  input.addEventListener(
    "input",
    event => {
      renderCatalog(
        event.target.value
      );
    }
  );
}
/* =========================================================
   BOTONES GENERALES WHATSAPP
========================================================= */
function setupWhatsAppButtons() {
  const heroButton =
    document.getElementById(
      "heroWhatsapp"
    );
  const contactButton =
    document.getElementById(
      "contactWhatsapp"
    );
  if (heroButton) {
    heroButton.addEventListener(
      "click",
      () => {
        openWhatsApp(
          "Hola Nexus, quiero recibir asesoría y una cotización sobre sus productos."
        );
      }
    );
  }
  if (contactButton) {
    contactButton.addEventListener(
      "click",
      () => {
        openWhatsApp(
          "Hola Nexus, quiero recibir asesoría y una cotización sobre sus productos."
        );
      }
    );
  }
}
/* =========================================================
   MENÚ MÓVIL
========================================================= */
function setupMobileMenu() {
  const menuButton =
    document.getElementById(
      "menuButton"
    );
  const nav =
    document.getElementById(
      "mainNav"
    );
  if (!menuButton || !nav) {
    return;
  }
  menuButton.addEventListener(
    "click",
    () => {
      const isOpen =
        nav.classList.toggle("open");
      menuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
      );
    }
  );
  nav
    .querySelectorAll("a")
    .forEach(link => {
      link.addEventListener(
        "click",
        () => {
          nav.classList.remove(
            "open"
          );
          menuButton.setAttribute(
            "aria-expanded",
            "false"
          );
        }
      );
    });
}
/* =========================================================
   AÑO
========================================================= */
function setCurrentYear() {
  const year =
    document.getElementById(
      "currentYear"
    );
  if (year) {
    year.textContent =
      new Date().getFullYear();
  }
}
/* =========================================================
   INICIAR
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
