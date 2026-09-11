/* =========================================================
   NEXUS
   CATÁLOGO + COTIZADOR + WHATSAPP
========================================================= */


/* =========================================================
   WHATSAPP
   60% -> 573228182311
   40% -> 573117161043
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

  const url =
    `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}


/* =========================================================
   IMÁGENES
========================================================= */

const images = {

  computer:
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80",

  monitor:
    "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=80",

  gaming:
    "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=900&q=80",

  keyboard:
    "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80",

  mouse:
    "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=80",

  headphones:
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",

  camera:
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80",

  phone:
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",

  printer:
    "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=900&q=80",

  storage:
    "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=900&q=80",

  office:
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80",

  chair:
    "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=900&q=80",

  accessories:
    "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=900&q=80",

  power:
    "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80"

};


/* =========================================================
   CATÁLOGO COMPLETO
========================================================= */

const catalog = [

  {
    name: "Computadores",
    image: images.computer,
    subcategories: [
      "PCs",
      "Torres",
      "All in One",
      "Corporativos",
      "Gaming"
    ]
  },

  {
    name: "Monitores y TV",
    image: images.monitor,
    subcategories: [
      "Monitores",
      "Monitores Gaming",
      "TV"
    ]
  },

  {
    name: "Gaming",
    image: images.gaming,
    subcategories: [
      "Consolas",
      "Controles",
      "Accesorios Gaming"
    ]
  },

  {
    name: "Periféricos",
    image: images.keyboard,
    groups: {
      "Teclados": [
        "Gaming",
        "Cableados",
        "Inalámbricos"
      ],
      "Mouse": [
        "Gaming",
        "Cableados",
        "Inalámbricos"
      ],
      "Combos": [
        "Teclado + Mouse",
        "Combo Gaming",
        "Combo Inalámbrico"
      ],
      "Audio": [
        "Audífonos",
        "Micrófonos",
        "Parlantes"
      ],
      "Cámaras": [
        "Cámaras web",
        "Cámaras fotográficas",
        "Trípodes"
      ]
    }
  },

  {
    name: "Accesorios",
    image: images.accessories,
    groups: {

      "Cargadores": [
        "Para PC / portátil",
        "Para celular"
      ],

      "Cables": [
        "Cables USB",
        "HDMI",
        "DisplayPort",
        "Red",
        "Audio",
        "Para celular",
        "Para computador"
      ],

      "Adaptadores": [
        "USB",
        "HDMI",
        "DisplayPort",
        "Video",
        "Red"
      ],

      "Conectividad": [
        "Hubs USB",
        "Wi-Fi",
        "Bluetooth"
      ],

      "Soportes": [
        "Para monitor",
        "Para portátil",
        "Para celular"
      ],

      "Bases": [
        "Para portátil",
        "Bases refrigerantes con ventilador"
      ],

      "Accesorios para computadores": [
        "Lectores",
        "Ventiladores",
        "Accesorios internos",
        "Accesorios externos"
      ],

      "Accesorios para celulares": [
        "Soportes",
        "Cargadores",
        "Cables"
      ]

    }
  },

  {
    name: "Memorias y Almacenamiento",
    image: images.storage,
    subcategories: [
      "Memorias USB",
      "Memoria RAM",
      "Discos HDD",
      "Discos SSD",
      "SSD M.2",
      "Tarjetas MicroSD",
      "Tarjetas SD"
    ]
  },

  {
    name: "Impresoras y Suministros",
    image: images.printer,
    groups: {

      "Impresoras": [
        "Impresoras",
        "Multifuncionales",
        "Fotocopiadoras",
        "Impresoras térmicas",
        "Impresoras de tinta",
        "Impresoras láser",
        "Impresoras Wi-Fi"
      ],

      "Suministros": [
        "Tintas",
        "Tóner",
        "Cartuchos",
        "Papel"
      ],

      "Accesorios": [
        "Accesorios para impresora"
      ]

    }
  },

  {
    name: "Celulares y Accesorios",
    image: images.phone,
    subcategories: [
      "Celulares",
      "Cargadores",
      "Cables",
      "Fundas",
      "Vidrios templados",
      "Audífonos",
      "Soportes",
      "Accesorios para teléfonos"
    ]
  },

  {
    name: "Sillas",
    image: images.chair,
    subcategories: [
      "Sillas Gaming",
      "Sillas de oficina"
    ]
  },

  {
    name: "Energía",
    image: images.power,
    subcategories: [
      "UPS",
      "Reguladores de voltaje"
    ]
  }

];


/* =========================================================
   SERVICIOS
========================================================= */

const services = [
  {
    name: "Mantenimiento",
    description:
      "Limpieza y mantenimiento preventivo para computadores y equipos."
  },

  {
    name: "Reparación",
    description:
      "Diagnóstico y reparación de fallas de hardware y software."
  },

  {
    name: "Instalación de programas y configuración",
    description:
      "Instalación, configuración y puesta a punto de programas."
  },

  {
    name: "Optimización de equipos",
    description:
      "Mejoramos el rendimiento y funcionamiento general de tu equipo."
  },

  {
    name: "Diagnóstico técnico",
    description:
      "Revisión técnica para identificar problemas y posibles soluciones."
  },

  {
    name: "Soporte técnico",
    description:
      "Asistencia técnica para resolver problemas y dudas tecnológicas."
  }
];


/* =========================================================
   PRODUCTOS GENERADOS
========================================================= */

let products = [];

let productId = 1;


const imageFor = (category, subcategory) => {

  const text =
    `${category} ${subcategory}`.toLowerCase();

  if (
    text.includes("monitor") ||
    text.includes("tv")
  ) return images.monitor;

  if (
    text.includes("gaming") ||
    text.includes("consola") ||
    text.includes("control")
  ) return images.gaming;

  if (
    text.includes("teclado")
  ) return images.keyboard;

  if (
    text.includes("mouse")
  ) return images.mouse;

  if (
    text.includes("audífono") ||
    text.includes("micro") ||
    text.includes("parlante")
  ) return images.headphones;

  if (
    text.includes("cámara") ||
    text.includes("trípode")
  ) return images.camera;

  if (
    text.includes("celular") ||
    text.includes("teléfono") ||
    text.includes("funda") ||
    text.includes("vidrio")
  ) return images.phone;

  if (
    text.includes("impres") ||
    text.includes("tinta") ||
    text.includes("tóner") ||
    text.includes("cartucho") ||
    text.includes("papel")
  ) return images.printer;

  if (
    text.includes("memoria") ||
    text.includes("disco") ||
    text.includes("ssd") ||
    text.includes("hdd") ||
    text.includes("micro")
  ) return images.storage;

  if (
    text.includes("silla")
  ) return images.chair;

  if (
    text.includes("ups") ||
    text.includes("regulador")
  ) return images.power;

  if (
    category === "Accesorios"
  ) return images.accessories;

  return images.computer;
};


catalog.forEach(category => {

  if (category.subcategories) {

    category.subcategories.forEach(sub => {

      products.push({
        id: productId++,
        name: `${sub}`,
        category: category.name,
        subcategory: sub,
        group: "",
        image: imageFor(category.name, sub),
        description:
          `Solución ${sub.toLowerCase()} disponible para cotización.`
      });

    });

  }


  if (category.groups) {

    Object.entries(category.groups).forEach(
      ([group, subs]) => {

        subs.forEach(sub => {

          products.push({
            id: productId++,
            name: `${sub}`,
            category: category.name,
            subcategory: sub,
            group: group,
            image: imageFor(category.name, sub),
            description:
              `${sub} dentro de ${group.toLowerCase()}.`
          });

        });

      }
    );

  }

});


/* =========================================================
   ESTADO
========================================================= */

let selectedCategory = "Todos";
let selectedSubcategory = "Todos";

let quoteItems =
  JSON.parse(localStorage.getItem("nexusQuote")) || [];


/* =========================================================
   ELEMENTOS
========================================================= */

const categoryGrid =
  document.getElementById("categoryGrid");

const categoryFilters =
  document.getElementById("categoryFilters");

const subcategoryArea =
  document.getElementById("subcategoryArea");

const productGrid =
  document.getElementById("productGrid");

const searchInput =
  document.getElementById("searchInput");

const quoteCount =
  document.getElementById("quoteCount");

const quoteOverlay =
  document.getElementById("quoteOverlay");

const quoteItems =
  document.getElementById("quoteItems");

const emptyQuote =
  document.getElementById("emptyQuote");

const quoteForm =
  document.getElementById("quoteForm");

const toast =
  document.getElementById("toast");


/* =========================================================
   CATEGORÍAS
========================================================= */

function renderCategories() {

  categoryGrid.innerHTML = catalog.map(category => {

    const count =
      products.filter(
        p => p.category === category.name
      ).length;

    return `
      <article
        class="category-card"
        onclick="selectCategory('${category.name}')"
      >

        <img
          src="${category.image}"
          alt="${category.name}"
          loading="lazy"
        >

        <div class="category-content">

          <h3>${category.name}</h3>

          <span>
            ${count} opciones para cotizar
          </span>

        </div>

      </article>
    `;

  }).join("");
}


/* =========================================================
   FILTROS
========================================================= */

function renderFilters() {

  const categories = [
    "Todos",
    ...catalog.map(c => c.name)
  ];

  categoryFilters.innerHTML =
    categories.map(category => `
      <button
        class="filter ${
          selectedCategory === category
            ? "active"
            : ""
        }"
        onclick="selectCategory('${category}')"
      >
        ${category}
      </button>
    `).join("");
}


function selectCategory(category) {

  selectedCategory = category;
  selectedSubcategory = "Todos";

  renderFilters();
  renderSubcategories();
  renderProducts();

  document
    .querySelector("#productos")
    .scrollIntoView({
      behavior: "smooth"
    });
}


/* =========================================================
   SUBCATEGORÍAS
========================================================= */

function renderSubcategories() {

  if (selectedCategory === "Todos") {

    subcategoryArea.innerHTML = "";

    return;
  }

  const category =
    catalog.find(
      c => c.name === selectedCategory
    );

  if (!category) return;

  let subs = [];

  if (category.subcategories) {
    subs = category.subcategories;
  }

  if (category.groups) {

    Object.values(category.groups)
      .forEach(group => {
        subs.push(...group);
      });

  }

  subcategoryArea.innerHTML = `
    <div class="subcategory-list">

      <button
        class="subcategory ${
          selectedSubcategory === "Todos"
            ? "active"
            : ""
        }"
        onclick="selectSubcategory('Todos')"
      >
        Todos
      </button>

      ${subs.map(sub => `
        <button
          class="subcategory ${
            selectedSubcategory === sub
              ? "active"
              : ""
          }"
          onclick="selectSubcategory('${sub.replace(/'/g, "\\'")}')"
        >
          ${sub}
        </button>
      `).join("")}

    </div>
  `;
}


function selectSubcategory(subcategory) {

  selectedSubcategory = subcategory;

  renderSubcategories();
  renderProducts();
}


/* =========================================================
   PRODUCTOS
========================================================= */

function renderProducts() {

  const search =
    searchInput.value
      .trim()
      .toLowerCase();


  let filtered = products.filter(product => {

    const categoryMatch =
      selectedCategory === "Todos" ||
      product.category === selectedCategory;

    const subcategoryMatch =
      selectedSubcategory === "Todos" ||
      product.subcategory === selectedSubcategory;

    const searchMatch =
      !search ||
      product.name.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search) ||
      product.subcategory.toLowerCase().includes(search) ||
      product.group.toLowerCase().includes(search);

    return (
      categoryMatch &&
      subcategoryMatch &&
      searchMatch
    );

  });


  if (!filtered.length) {

    productGrid.innerHTML = `
      <div style="
        grid-column:1/-1;
        padding:60px 20px;
        text-align:center;
      ">
        <h3>No encontramos productos.</h3>
        <p style="color:#6b7280">
          Intenta con otra búsqueda o categoría.
        </p>
      </div>
    `;

    return;
  }


  productGrid.innerHTML =
    filtered.map(product => `

      <article class="product-card">

        <div class="product-image">

          <img
            src="${product.image}"
            alt="${product.name}"
            loading="lazy"
            onerror="this.src='${images.computer}'"
          >

        </div>

        <div class="product-info">

          <span class="product-category">
            ${product.category}
          </span>

          <h3>
            ${product.name}
          </h3>

          <p>
            ${product.description}
          </p>

          <button
            class="product-button"
            onclick="addToQuote(${product.id})"
          >
            Cotizar
          </button>

        </div>

      </article>

    `).join("");
}


/* =========================================================
   COTIZACIÓN
========================================================= */

function addToQuote(id) {

  const product =
    products.find(p => p.id === id);

  if (!product) return;


  const existing =
    quoteItems.find(
      item => item.id === product.id
    );


  if (existing) {

    existing.quantity += 1;

  } else {

    quoteItems.push({
      ...product,
      quantity: 1
    });

  }


  saveQuote();
  renderQuote();
  showToast("Producto agregado a tu cotización.");

}


function removeFromQuote(id) {

  quoteItems =
    quoteItems.filter(
      item => item.id !== id
    );

  saveQuote();
  renderQuote();
}


function changeQuantity(id, amount) {

  const item =
    quoteItems.find(
      item => item.id === id
    );

  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {

    quoteItems =
      quoteItems.filter(
        item => item.id !== id
      );

  }

  saveQuote();
  renderQuote();
}


function saveQuote() {

  localStorage.setItem(
    "nexusQuote",
    JSON.stringify(quoteItems)
  );

}


/* =========================================================
   RENDER COTIZADOR
========================================================= */

function renderQuote() {

  quoteCount.textContent =
    quoteItems.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );


  if (!quoteItems.length) {

    quoteItems.innerHTML = "";

    emptyQuote.style.display = "block";

    quoteForm.classList.remove("active");

    return;
  }


  emptyQuote.style.display = "none";

  quoteForm.classList.add("active");


  quoteItems.innerHTML =
    quoteItems.map(item => `

      <div class="quote-item">

        <img
          src="${item.image}"
          alt="${item.name}"
        >

        <div>

          <h4>
            ${item.name}
          </h4>

          <span>
            ${item.category}
          </span>

          <div style="
            margin-top:7px;
            display:flex;
            align-items:center;
            gap:7px;
          ">

            <button
              onclick="changeQuantity(${item.id}, -1)"
              style="
                width:25px;
                height:25px;
                border:1px solid #d1d5db;
                border-radius:50%;
                background:white;
              "
            >
              −
            </button>

            <strong>
              ${item.quantity}
            </strong>

            <button
              onclick="changeQuantity(${item.id}, 1)"
              style="
                width:25px;
                height:25px;
                border:1px solid #d1d5db;
                border-radius:50%;
                background:white;
              "
            >
              +
            </button>

          </div>

        </div>

        <button
          class="remove-item"
          onclick="removeFromQuote(${item.id})"
        >
          Eliminar
        </button>

      </div>

    `).join("");
}


/* =========================================================
   ABRIR / CERRAR COTIZADOR
========================================================= */

function openQuote() {

  quoteOverlay.classList.add("active");

  document.body.style.overflow = "hidden";

  renderQuote();
}


function closeQuote() {

  quoteOverlay.classList.remove("active");

  document.body.style.overflow = "";

}


function closeQuoteOutside(event) {

  if (event.target === quoteOverlay) {
    closeQuote();
  }

}


/* =========================================================
   FORMULARIO
========================================================= */

document
  .getElementById("quoteForm")
  .addEventListener("submit", function(event) {

    event.preventDefault();


    if (!quoteItems.length) {
      return;
    }


    const name =
      document.getElementById("clientName").value.trim();

    const email =
      document.getElementById("clientEmail").value.trim();

    const phone =
      document.getElementById("clientPhone").value.trim();

    const company =
      document.getElementById("clientCompany").value.trim();

    const details =
      document.getElementById("clientDetails").value.trim();


    let message =
      `Hola Nexus, quiero solicitar una cotización.%0A%0A`;


    message =
      `Hola Nexus, quiero solicitar una cotización:\n\n`;


    quoteItems.forEach(item => {

      message +=
        `• ${item.name} — Cantidad: ${item.quantity}\n`;

    });


    message += `\nDatos del cliente:\n`;

    message += `Nombre: ${name}\n`;

    if (email)
      message += `Correo: ${email}\n`;

    if (phone)
      message += `Teléfono: ${phone}\n`;

    if (company)
      message += `Empresa: ${company}\n`;

    if (details)
      message += `\nDetalles:\n${details}\n`;


    openWhatsApp(message);

  });


/* =========================================================
   SERVICIOS
========================================================= */

function renderServices() {

  const serviceGrid =
    document.getElementById("serviceGrid");


  serviceGrid.innerHTML =
    services.map((service, index) => `

      <article class="service-card">

        <span class="service-number">
          ${String(index + 1).padStart(2, "0")}
        </span>

        <h3>
          ${service.name}
        </h3>

        <p>
          ${service.description}
        </p>

        <button
          onclick="requestService('${service.name.replace(/'/g, "\\'")}')"
        >
          Solicitar servicio →
        </button>

      </article>

    `).join("");
}


function requestService(service) {

  const message =
    `Hola Nexus, quiero solicitar el servicio de ${service}.`;

  openWhatsApp(message);
}


/* =========================================================
   BUSCADOR
========================================================= */

searchInput.addEventListener(
  "input",
  renderProducts
);


/* =========================================================
   MENÚ MÓVIL
========================================================= */

function toggleMenu() {

  document
    .getElementById("mobileMenu")
    .classList.toggle("active");

}


/* =========================================================
   TOAST
========================================================= */

let toastTimer;

function showToast(message) {

  toast.textContent = message;

  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer =
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2200);

}


/* =========================================================
   INICIALIZACIÓN
========================================================= */

renderCategories();

renderFilters();

renderSubcategories();

renderProducts();

renderServices();

renderQuote();
