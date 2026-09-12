const WHATSAPP_NUMBERS = [
  { number: "573228182311", weight: 0.60 },
  { number: "573117161043", weight: 0.40 }
];

const catalog = [
  {
    id: "computadores",
    title: "Computadores",
    description: "Equipos completos y componentes para armar o actualizar tu computador.",
    groups: [
      {
        title: "Equipos",
        items: [
          ["Portátil", "https://refurbi.com.co/cdn/shop/files/nPeqtNAN7v.jpg?v=1760546728"],
          ["Torres", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHmMUjEDTwLqjN4330uBSKSW7rmrbwM9qlSOX5GR441A&s=10"],
          ["All in One", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbkPt9FQcNfcF363V3TvjX8PIYMlYFdgCOjdnGdGIUZA&s=10"],
          ["Gaming", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLi1UqGDwIbmPSEtPn6HzNfC_Z3ICi0V2Xi6QT-dbq4Q&s=10"]
        ]
      },
      {
        title: "Componentes",
        items: [
          ["Procesadores", "https://americanas.vtexassets.com/arquivos/ids/18858668-768-auto/7508705827_1_xlarge.webp?quality=9&v=638754899508270000"],
          ["Tarjetas madre", "https://upload.wikimedia.org/wikipedia/commons/a/ac/Motherboard_computer.jpg"],
          ["Tarjetas gráficas", "https://noahsartt.com/wp-content/uploads/2023/10/pc-parts2.png"],
          ["Fuentes de poder", "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6492/6492464_sd.jpg"],
          ["Gabinetes", "https://storage-asset.msi.com/global/picture/news/2026/case/case-20260720-4.jpg"],
          ["Refrigeración", "https://m.media-amazon.com/images/I/718f527QL0L._AC_SL1500_.jpg"]
        ]
      }
    ]
  },

  {
    id: "monitores-tv",
    title: "Monitores y TV",
    description: "Pantallas para oficina, estudio, entretenimiento y gaming.",
    groups: [{
      title: "Pantallas",
      items: [
        ["Monitores", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fPTNR6sij2ELmoKGaoUoqQP6jqx2-I69_bmimytgMQ&s=10"],
        ["Monitores Gaming", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzO7pfeT08g32Xu0LkXKoL29--VTG2Q96nJSDSQLHZfA&s=10"],
        ["TV", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU_dPbiIzR6yf6pwZpfFQhg8jhDH-A_J3X1I-uy_Wv2Q&s=10"]
      ]
    }]
  },

  {
    id: "gaming",
    title: "Gaming",
    description: "Consolas, controles y accesorios para tu experiencia de juego.",
    groups: [{
      title: "Gaming",
      items: [
        ["Consolas", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK6R3BLZzudo6giL57G5gHbkEK3NUFcNQtJZ-8h0WQdsgyw5yeFKj8Brao&s=10"],
        ["Controles", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHdMwv5kzu5FfCAKz72UXZRMup0tDqEkhwBz4fv_7nEQ&s=10"],
        ["Accesorios Gaming", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA-mC9fAccf4WurNG0Dbo5oiiaG3SZLkzWTeKITTvFaQ&s=10"]
      ]
    }]
  },

  {
    id: "perifericos",
    title: "Periféricos",
    description: "Teclados, mouse, combos, audio y cámaras para completar tu estación.",
    groups: [
      {
        title: "Teclados",
        items: [
          ["Gaming", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBgoiMfort3NKseaja6N5UK70hHCJFW_VIsBkUJCLN0Q&s=10"],
          ["Cableados", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLp_Ayt7kAwMA3X7c095gjhDQD1Z_w2RUyR-YoXMGvw&s=10"],
          ["Inalámbricos", "https://www.omega-store.co/wp-content/uploads/2025/03/KB6756BK_.png"]
        ]
      },

      {
        title: "Mouse",
        items: [
          ["Gaming", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAqn9VYEyesnUWKvO-3eHDxsBd70Bw8DWLcs_VgPH2zg&s=10"],
          ["Cableados", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyPTNeq86JQ1So0SE_LiBQUEnGlpce-u1Cs-2Tkik9QQ&s=10"],
          ["Inalámbricos", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa1mg9AAtS6Odj4ZrU89pZcZ2g8H3b-vqK2fmYIJzcKw&s=10"]
        ]
      },

      {
        title: "Combos",
        items: [
          ["Teclado + Mouse", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSfKhhmksMDEeGi6C_V4PTXLn6YBpifB0FisPrgkkJA&s=10"],
          ["Combo Gaming", "https://s3.pagegear.co/4/articulos/57988/37173_700x933.jpg?2133331"],
          ["Combo Inalámbrico", "https://jaltechsas.com/wp-content/uploads/2022/08/COMBO-BASIK-TECH-INALAMBRICO_80163_BSK-300C_1.png"]
        ]
      },

      {
        title: "Audio",
        items: [
          ["Audífonos", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFnFbxiJ6hZizmizIVZgD3Q54wDHxNcaTuij-__WFwXQ&s=10"],
          ["Micrófonos", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOZ70hgwXVXQHSGcZnoNBupWS-zUh_P2rfBHGDniZ9lA&s"],
          ["Parlantes", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd1BkIZMe69uHbJ-vG99jQV2nh6Xx3ayHKlMw8LiRtvw&s=10"]
        ]
      },

      {
        title: "Cámaras",
        items: [
          ["Cámaras web", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ7FEHnyc3WPjN0ZcAzHGQBztfg2GGO4pnJZvXrcIqxg&s=10"],
          ["Cámaras fotográficas", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjH0ndUNv4KNUFDafDMAMe8OUr5YB-M5vbMmNRnWDXug&s=10"],
          ["Trípodes", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9SoMWDyfPWCXRXhoNTVyGst_xFEg7GRO0fAJmHcaUFA&s=10"]
        ]
      }
    ]
  },

  {
    id: "accesorios",
    title: "Accesorios",
    description: "Cargadores, cables, adaptadores, conectividad, soportes y accesorios para computadores.",
    groups: [
      {
        title: "Cargadores",
        items: [
          ["Para PC / portátil", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBu1lqYdxe2BzaO3Cwg7fBEiA4OUTQpHwxFKgNsy7d5w&s=10"],
          ["Para celular", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdTa6V9cX51V0KPLOaB2IeGG1LRT3pFji22pofxVkPOg&s=10"]
        ]
      },

      {
        title: "Cables",
        items: [
          ["Cables USB", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpi-m3-tUKs1nkpcteyzTCszRZT9xzF2AtwzUnrN-PmA&s=10"],
          ["HDMI", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLbBmf-ay8faUrPlGSXAwZ3HY6swAZHItvQqNbIU_fuw&s=10"],
          ["Red", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx_xppnDa93OfcpMuMHiNeE7GS_oBUlFergGBhPV5huw&s=10"],
          ["Audio", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlzPcaoQVkN4mXKmbYhcdLGJwWeECCVvRRzTo8BCxmAg&s=10"],
          ["Para celular", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjYLGu6opBd_A-95-yDztgy8l2sE94jNxqSNhqM7wTAA&s=10"],
          ["Para computador", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnJPaLt43ahWCX63O4WgXR6mixoVyA9s9rEgQV-PTlEw&s=10"]
        ]
      },

      {
        title: "Adaptadores",
        items: [
          ["USB", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9sNX2Uz8xPczEZ7y02Rcr-HKhMcYFbzIJ_b0ZQCv47w&s=10"],
          ["HDMI", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaeZj4cbEPjpK_odmQtZuQetpp9dQ6cA-FvIOCbFD5AA&s=10"],
          ["Video", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsa_WKhKspk8YjmRzADHXzp2bkT5x87oYPj8KG_FW1Bg&s=10"],
          ["Red", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH2Y0gr9TbYqwxQdoJj_cOT3t_dqTIyMPlPwqCRj32tA&s=10"]
        ]
      },

      {
        title: "Conectividad",
        items: [
          ["Hubs USB", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeudb2pl1vpEih3Q14h_eov2XyGg2-7QV8uEqX9eSI4A&s=10"],
          ["Wi-Fi", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZn7EW_CNlsecd7qgXdeo5V6TpP3d2arQu7UOVzkfJyw&s=10"]
        ]
      },

      {
        title: "Soportes",
        items: [
          ["Para monitor", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQicyTTniZLerv8Ihx_bYlR_cdm5d5N8As1G9TDLVea5Q&s=10"],
          ["Para portátil", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBNET5DusrZBnNjiUlmaGrVjfRrb0PD0Qib-8WLTE-yQ&s=10"]
        ]
      },

      {
        title: "Bases",
        items: [
          ["Para portátil", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUTyVPrWSMn4FhD3gyOiKnviM8isiFpO00N_sxhBMsuQ&s=10"],
          ["Bases refrigerantes con ventilador", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv68yEKtAT_3hdei3QXhALooRTqymZdFDrZfBaHbf6Ow&s=10"]
        ]
      },

      {
        title: "Accesorios para computadores",
        items: [
          ["Lectores", "https://exitocol.vtexassets.com/arquivos/ids/29590549/unidad-cd-dvd-externa-usb-30-alta-velocidad-portatil-lector.jpg?v=638902638595630000"],
          ["Accesorios internos", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtR_OPgPASTwh5G1iJCsSCH6pql_RjciJ8BOAj75LUqA&s=10"]
        ]
      }
    ]
  },

  {
    id: "almacenamiento",
    title: "Memorias y Almacenamiento",
    description: "Opciones para ampliar, actualizar y transportar tus datos.",
    groups: [{
      title: "Almacenamiento",
      items: [
        ["Memorias USB", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIlID-0UCkmEZEx4IQYSB4l720vh5qlZgCkMRtkah_nA&s=10"],
        ["Memoria RAM", "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/47773192/resize/300/300?1713402658"],
        ["Discos HDD", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkvaPfRSmQwtD5vtNYpG3ifpA7GZ3kDmQQ3mZxTNc5iQ&s=10"],
        ["Discos SSD", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDMP6n3awyzmgrqdQ1eu7ynxckwpn92NLZ4KJ-kFJSew&s=10"],
        ["Tarjetas MicroSD", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcMkeFdwyH4dUIZsFeLAcuRBJbXrZBMxWDg5ij00ouyg&s=10"],
        ["Tarjetas SD", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxOIo9RkOxtQmPp9qQxoofwmDaVRzql1TuN299WzAtBA&s=10"]
      ]
    }]
  },

  {
    id: "impresoras",
    title: "Impresoras y Suministros",
    description: "Impresión para hogar, oficina, negocio y punto de venta.",
    groups: [{
      title: "Impresión",
      items: [
        ["Multifuncionales", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4_Iy-24jYfVPpU0Mi_93Jht59z5BeTgYLZxJisLc6pw&s=10"],
        ["Fotocopiadoras", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvL1YK-beAtm--p_BzVO9Y_JPBwAkbGgEJzoHRFR30BA&s=10"],
        ["Impresoras térmicas", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyYtOqC7wlL3p0JCKrVXYdGzPFn7zXf9-EQa23JNGH-Q&s=10"],
        ["Impresoras de tinta", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9ER522Vy-V9BHyETK5K04zZDToO3BEjrlRtz2c-NDNA&s=10"],
        ["Impresoras láser", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7dq--y-C8cysoSPrGnJLRrkH6rFLm-w4WXPS_bESnnw&s=10"],
        ["Impresoras Wi-Fi", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeMHgQGOwCppd6wT8xfhvKXZNXEpt11C9Yks-V1es3oA&s=10"],
        ["Tintas", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFvkdz6vCtz8ygvStG0jrBjvTy5Ganjzy6wPqDLLjYLw&s=10"],
        ["Cartuchos", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuLxujWt_ZkGmGl07ZTER25Gb4AhnBpNK-UtmomGYngg&s=10"]
      ]
    }]
  },

  {
    id: "celulares",
    title: "Celulares y Accesorios",
    description: "Celulares y accesorios esenciales para dispositivos móviles.",
    groups: [{
      title: "Tecnología móvil",
      items: [
        ["Celulares", "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80"],
        ["Cargadores", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp7K94cb294GvIwR4FgrHCt06EanLJDuawelLHuS3-1g&s=10"],
        ["Vidrios templados", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNiQQMPVAPUtLUoy_a9yQLUDBUeiuHVTMPnBJY-ooCwg&s=10"],
        ["Fundas / Forros para celular", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOdu91HYOIpUT1Bn2ac4z413HT6qG2FWqa-enKOA207w&s=10"],
        ["Audífonos", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnmrJ6EdwbyaRmY_ohdswNGos5D2FUt6tPUiQAaNwhXQ&s=10"]
      ]
    }]
  },

  {
    id: "sillas",
    title: "Sillas",
    description: "Opciones para gaming, estudio y espacios de trabajo.",
    groups: [{
      title: "Sillas",
      items: [
        ["Sillas Gaming", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJY2CwTpFDZxEIienFiA_CBLBtr87ZgFHOoZssYlqjOw&s=10"],
        ["Sillas de oficina", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO5L6KExbFaqA4PDugyx1EZQiQhp4yrGnbjSZJv0Zw0Q&s=10"]
      ]
    }]
  },

  {
    id: "energia",
    title: "Energía",
    description: "Protección y respaldo eléctrico para tus equipos.",
    groups: [{
      title: "Energía",
      items: [
        ["UPS", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8NuJkjD66X3YLf2LHdT0mTDFDTXBjlLE92LLyfh4zzA&s=10"],
        ["Reguladores de voltaje", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRII_MTif-i9fjBUspBT5phl5-ZkZpks2a9NdrEmiirjg&s=10"]
      ]
    }]
  },

  {
    id: "servicios-tecnicos",
    title: "Servicios Técnicos",
    description: "Soluciones técnicas para mantenimiento, reparación y configuración.",
    groups: [{
      title: "Servicios",
      items: [
        ["Mantenimiento", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRv1NbZPj78y229SADhRen6c4pUgTxyzhBW9Gvr9wz_Q&s=10"],
        ["Reparación", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST3q0-gKalMjD_N41oVeT5MZCHBDpEDxm9Xxf-sYKqHg&s=10"],
        ["Instalación de programas y configuración", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgw_EnuaAW1w5ypl3bPWRhskOOpdGOZPwMNXyG-I0G8Q&s=10"]
      ]
    }]
  }
];

const catalogElement = document.getElementById("catalog");
const searchInput = document.getElementById("searchInput");
const resultCount = document.getElementById("resultCount");
const catalogStatus = document.getElementById("catalogStatus");
const floatingWhatsapp = document.getElementById("floatingWhatsapp");

function escapeHtml(value){
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function allItems(){
  return catalog.flatMap(category =>
    category.groups.flatMap(group =>
      group.items.map(([name]) => ({
        category: category.title,
        group: group.title,
        name
      }))
    )
  );
}

function filteredCatalog(){
  const query = searchInput.value.trim().toLowerCase();

  if(!query) return catalog;

  return catalog
    .map(category => ({
      ...category,
      groups: category.groups
        .map(group => ({
          ...group,
          items: group.items.filter(([name]) =>
            `${category.title} ${group.title} ${name}`
              .toLowerCase()
              .includes(query)
          )
        }))
        .filter(group => group.items.length)
    }))
    .filter(category => category.groups.length);
}

function renderCatalog(){
  const filtered = filteredCatalog();

  const total = filtered.reduce(
    (sum, category) =>
      sum +
      category.groups.reduce(
        (groupSum, group) => groupSum + group.items.length,
        0
      ),
    0
  );

  const query = searchInput.value.trim();

  resultCount.textContent =
    `${total} opción${total === 1 ? "" : "es"}`;

  if(query){
    catalogStatus.textContent = total
      ? `Mostrando resultados para: “${query}”`
      : `No encontramos resultados para “${query}”. Prueba con otra palabra.`;

    catalogStatus.classList.remove("hidden");
  }else{
    catalogStatus.classList.add("hidden");
  }

  if(!total){
    catalogElement.innerHTML = `
      <div class="no-results">
        <h3>No encontramos esa opción</h3>
        <p>Prueba con otra palabra o solicita asesoría directamente por WhatsApp.</p>
      </div>`;

    return;
  }

  catalogElement.innerHTML = filtered.map(category => {
    const categoryTotal = category.groups.reduce(
      (sum, group) => sum + group.items.length,
      0
    );

    return `
      <section class="catalog-category" data-category="${escapeHtml(category.id)}">

        <div class="category-header">
          <div>
            <h3>${escapeHtml(category.title)}</h3>
            <p>${escapeHtml(category.description)}</p>
          </div>

          <span class="category-count">
            ${categoryTotal} opciones
          </span>
        </div>

        ${category.groups.map(group => `
          <div class="subcategory-group">

            ${
              category.groups.length > 1
                ? `<h4 class="subcategory-group-title">
                    ${escapeHtml(group.title)}
                  </h4>`
                : ""
            }

            <div class="subcategory-grid">

              ${group.items.map(([name, image]) => `
                <article
                  class="subcategory-card"
                  data-item="${escapeHtml(name.toLowerCase())}"
                >

                  <div class="subcategory-image-wrap">
                    <img
                      src="${image}"
                      alt="${escapeHtml(name)}"
                      loading="lazy"
                      onerror="this.closest('.subcategory-image-wrap').classList.add('image-error'); this.style.display='none';"
                    >
                  </div>

                  <div class="subcategory-body">
                    <h4>${escapeHtml(name)}</h4>

                    <button
                      class="quote-button"
                      type="button"
                      data-quote-item="${escapeHtml(name)}"
                    >
                      Cotizar
                    </button>
                  </div>

                </article>
              `).join("")}

            </div>
          </div>
        `).join("")}

      </section>
    `;
  }).join("");
}

function getWhatsAppNumber(){
  const random = Math.random();

  return random < WHATSAPP_NUMBERS[0].weight
    ? WHATSAPP_NUMBERS[0].number
    : WHATSAPP_NUMBERS[1].number;
}

function openWhatsApp(item){
  const message =
    `Hola, equipo Nexus. Estoy interesado(a) en cotizar: ${item}. Agradezco su asesoría y quedo atento(a) a opciones disponibles. Muchas gracias.`;

  const number = getWhatsAppNumber();

  window.location.href =
    `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

catalogElement.addEventListener("click", event => {
  const button = event.target.closest("[data-quote-item]");

  if(!button) return;

  openWhatsApp(button.dataset.quoteItem);
});

searchInput.addEventListener("input", renderCatalog);

floatingWhatsapp.addEventListener("click", event => {
  event.preventDefault();

  openWhatsApp(
    "información general sobre productos y servicios"
  );
});

renderCatalog();
