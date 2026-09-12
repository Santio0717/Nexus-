const catalogData = [
  {
    category: "Computadores",
    items: [
      {
        name: "Portátil",
        image: "https://refurbi.com.co/cdn/shop/files/nPeqtNAN7v.jpg?v=1760546728"
      },
      {
        name: "Torres",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHmMUjEDTwLqjN4330uBSKSW7rmrbwM9qlSOX5GR441A&s=10"
      },
      {
        name: "All in One",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbkPt9FQcNfcF363V3TvjX8PIYMlYFdgCOjdnGdGIUZA&s=10"
      },
      {
        name: "Gaming",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLi1UqGDwIbmPSEtPn6HzNfC_Z3ICi0V2Xi6QT-dbq4Q&s=10"
      }
    ]
  },

  {
    category: "Monitores y TV",
    items: [
      {
        name: "Monitores",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fPTNR6sij2ELmoKGaoUoqQP6jqx2-I69_bmimytgMQ&s=10"
      },
      {
        name: "Monitores Gaming",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzO7pfeT08g32Xu0LkXKoL29--VTG2Q96nJSDSQLHZfA&s=10"
      },
      {
        name: "TV",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU_dPbiIzR6yf6pwZpfFQhg8jhDH-A_J3X1I-uy_Wv2Q&s=10"
      }
    ]
  },

  {
    category: "Gaming",
    items: [
      {
        name: "Consolas",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK6R3BLZzudo6giL57G5gHbkEK3NUFcNQtJZ-8h0WQdsgyw5yeFKj8Brao&s=10"
      },
      {
        name: "Controles",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHdMwv5kzu5FfCAKz72UXZRMup0tDqEkhwBz4fv_7nEQ&s=10"
      },
      {
        name: "Accesorios Gaming",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA-mC9fAccf4WurNG0Dbo5oiiaG3SZLkzWTeKITTvFaQ&s=10"
      }
    ]
  },

  {
    category: "Periféricos",
    items: [
      {
        name: "Teclados Gaming",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBgoiMfort3NKseaja6N5UK70hHCJFW_VIsBkUJCLN0Q&s=10"
      },
      {
        name: "Teclados Cableados",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLp_Ayt7kAwMA3X7c095gjhDQD1Z_w2RUyR-YoXMGvw&s=10"
      },
      {
        name: "Teclados Inalámbricos",
        image: "https://www.omega-store.co/wp-content/uploads/2025/03/KB6756BK_.png"
      },
      {
        name: "Mouse Gaming",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAqn9VYEyesnUWKvO-3eHDxsBd70Bw8DWLcs_VgPH2zg&s=10"
      },
      {
        name: "Mouse Cableados",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyPTNeq86JQ1So0SE_LiBQUEnGlpce-u1Cs-2Tkik9QQ&s=10"
      },
      {
        name: "Mouse Inalámbricos",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa1mg9AAtS6Odj4ZrU89pZcZ2g8H3b-vqK2fmYIJzcKw&s=10"
      },
      {
        name: "Teclado + Mouse",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSfKhhmksMDEeGi6C_V4PTXLn6YBpifB0FisPrgkkJA&s=10"
      },
      {
        name: "Combo Gaming",
        image: "https://s3.pagegear.co/4/articulos/57988/37173_700x933.jpg?2133331"
      },
      {
        name: "Combo Inalámbrico",
        image: "https://jaltechsas.com/wp-content/uploads/2022/08/COMBO-BASIK-TECH-INALAMBRICO_80163_BSK-300C_1.png"
      },
      {
        name: "Audífonos",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFnFbxiJ6hZizmizIVZgD3Q54wDHxNcaTuij-__WFwXQ&s=10"
      },
      {
        name: "Micrófonos",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOZ70hgwXVXQHSGcZnoNBupWS-zUh_P2rfBHGDniZ9lA&s"
      },
      {
        name: "Parlantes",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd1BkIZMe69uHbJ-vG99jQV2nh6Xx3ayHKlMw8LiRtvw&s=10"
      },
      {
        name: "Cámaras web",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ7FEHnyc3WPjN0ZcAzHGQBztfg2GGO4pnJZvXrcIqxg&s=10"
      },
      {
        name: "Cámaras fotográficas",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjH0ndUNv4KNUFDafDMAMe8OUr5YB-M5vbMmNRnWDXug&s=10"
      },
      {
        name: "Trípodes",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9SoMWDyfPWCXRXhoNTVyGst_xFEg7GRO0fAJmHcaUFA&s=10"
      }
    ]
  },

  {
    category: "Accesorios",
    items: [
      {
        name: "Cargadores para PC / portátil",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBu1lqYdxe2BzaO3Cwg7fBEiA4OUTQpHwxFKgNsy7d5w&s=10"
      },
      {
        name: "Cargadores para celular",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdTa6V9cX51V0KPLOaB2IeGG1LRT3pFji22pofxVkPOg&s=10"
      },
      {
        name: "Cables USB",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpi-m3-tUKs1nkpcteyzTCszRZT9xzF2AtwzUnrN-PmA&s=10"
      },
      {
        name: "HDMI",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLbBmf-ay8faUrPlGSXAwZ3HY6swAZHItvQqNbIU_fuw&s=10"
      },
      {
        name: "Red",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx_xppnDa93OfcpMuMHiNeE7GS_oBUlFergGBhPV5huw&s=10"
      },
      {
        name: "Audio",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlzPcaoQVkN4mXKmbYhcdLGJwWeECCVvRRzTo8BCxmAg&s"
      },
      {
        name: "Para celular",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjYLGu6opBd_A-95-yDztgy8l2sE94jNxqSNhqM7wTAA&s=10"
      },
      {
        name: "Para computador",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnJPaLt43ahWCX63O4WgXR6mixoVyA9s9rEgQV-PTlEw&s=10"
      },
      {
        name: "Adaptadores USB",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9sNX2Uz8xPczEZ7y02Rcr-HKhMcYFbzIJ_b0ZQCv47w&s=10"
      },
      {
        name: "Adaptadores HDMI",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaeZj4cbEPjpK_odmQtZuQetpp9dQ6cA-FvIOCbFD5AA&s=10"
      },
      {
        name: "Adaptadores de Video",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsa_WKhKspk8YjmRzADHXzp2bkT5x87oYPj8KG_FW1Bg&s=10"
      },
      {
        name: "Adaptadores Red",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH2Y0gr9TbYqwxQdoJj_cOT3t_dqTIyMPlPwqCRj32tA&s=10"
      },
      {
        name: "Hubs USB",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeudb2pl1vpEih3Q14h_eov2XyGg2-7QV8uEqX9eSI4A&s=10"
      },
      {
        name: "Wi-Fi",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZn7EW_CNlsecd7qgXdeo5V6TpP3d2arQu7UOVzkfJyw&s=10"
      },
      {
        name: "Soportes para monitor",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQicyTTniZLerv8Ihx_bYlR_cdm5d5N8As1G9TDLVea5Q&s=10"
      },
      {
        name: "Soportes para portátil",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBNET5DusrZBnNjiUlmaGrVjfRrb0PD0Qib-8WLTE-yQ&s=10"
      },
      {
        name: "Bases para portátil",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUTyVPrWSMn4FhD3gyOiKnviM8isiFpO00N_sxhBMsuQ&s=10"
      },
      {
        name: "Bases refrigerantes con ventilador",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv68yEKtAT_3hdei3QXhALooRTqymZdFDrZfBaHbf6Ow&s=10"
      },
      {
        name: "Lectores",
        image: "https://exitocol.vtexassets.com/arquivos/ids/29590549/unidad-cd-dvd-externa-usb-30-alta-velocidad-portatil-lector.jpg?v=638902638595630000"
      },
      {
        name: "Accesorios internos",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtR_OPgPASTwh5G1iJCsSCH6pql_RjciJ8BOAj75LUqA&s=10"
      }
    ]
  },

  {
    category: "Memorias y Almacenamiento",
    items: [
      {
        name: "Memorias USB",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIlID-0UCkmEZEx4IQYSB4l720vh5qlZgCkMRtkah_nA&s=10"
      },
      {
        name: "Memoria RAM",
        image: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/47773192/resize/300/300?1713402658"
      },
      {
        name: "Discos HDD",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkvaPfRSmQwtD5vtNYpG3ifpA7GZ3kDmQQ3mZxTNc5iQ&s=10"
      },
      {
        name: "Discos SSD",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDMP6n3awyzmgrqdQ1eu7ynxckwpn92NLZ4KJ-kFJSew&s=10"
      },
      {
        name: "Tarjetas MicroSD",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcMkeFdwyH4dUIZsFeLAcuRBJbXrZBMxWDg5ij00ouyg&s=10"
      },
      {
        name: "Tarjetas SD",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxOIo9RkOxtQmPp9qQxoofwmDaVRzql1TuN299WzAtBA&s=10"
      }
    ]
  },

  {
    category: "Impresoras y Suministros",
    items: [
      {
        name: "Multifuncionales",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4_Iy-24jYfVPpU0Mi_93Jht59z5BeTgYLZxJisLc6pw&s=10"
      },
      {
        name: "Fotocopiadoras",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvL1YK-beAtm--p_BzVO9Y_JPBwAkbGgEJzoHRFR30BA&s=10"
      },
      {
        name: "Impresoras térmicas",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyYtOqC7wlL3p0JCKrVXYdGzPFn7zXf9-EQa23JNGH-Q&s=10"
      },
      {
        name: "Impresoras de tinta",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9ER522Vy-V9BHyETK5K04zZDToO3BEjrlRtz2c-NDNA&s=10"
      },
      {
        name: "Impresoras láser",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7dq--y-C8cysoSPrGnJLRrkH6rFLm-w4WXPS_bESnnw&s=10"
      },
      {
        name: "Impresoras Wi-Fi",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeMHgQGOwCppd6wT8xfhvKXZNXEpt11C9Yks-V1es3oA&s=10"
      },
      {
        name: "Tintas",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFvkdz6vCtz8ygvStG0jrBjvTy5Ganjzy6wPqDLLjYLw&s=10"
      },
      {
        name: "Cartuchos",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuLxujWt_ZkGmGl07ZTER25Gb4AhnBpNK-UtmomGYngg&s=10"
      }
    ]
  },

  {
    category: "Celulares y Accesorios",
    items: [
      {
        name: "Celulares",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80"
      },
      {
        name: "Cargadores",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp7K94cb294GvIwR4FgrHCt06EanLJDuawelLHuS3-1g&s"
      },
      {
        name: "Vidrios templados",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNiQQMPVAPUtLUoy_a9yQLUDBUeiuHVTMPnBJY-ooCwg&s=10"
      },
      {
        name: "Fundas / Forros para celular",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOdu91HYOIpUT1Bn2ac4z413HT6qG2FWqa-enKOA207w&s=10"
      },
      {
        name: "Audífonos",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnmrJ6EdwbyaRmY_ohdswNGos5D2FUt6tPUiQAaNwhXQ&s=10"
      }
    ]
  },

  {
    category: "Sillas",
    items: [
      {
        name: "Sillas Gaming",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJY2CwTpFDZxEIienFiA_CBLBtr87ZgFHOoZssYlqjOw&s=10"
      },
      {
        name: "Sillas de oficina",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO5L6KExbFaqA4PDugyx1EZQiQhp4yrGnbjSZJv0Zw0Q&s=10"
      }
    ]
  },

  {
    category: "Energía",
    items: [
      {
        name: "UPS",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8NuJkjD66X3YLf2LHdT0mTDFDTXBjlLE92LLyfh4zzA&s=10"
      },
      {
        name: "Reguladores de voltaje",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRII_MTif-i9fjBUspBT5phl5-ZkZpks2a9NdrEmiirjg&s=10"
      }
    ]
  },

  {
    category: "Servicios Técnicos",
    items: [
      {
        name: "Mantenimiento",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRv1NbZPj78y229SADhRen6c4pUgTxyzhBW9Gvr9wz_Q&s=10"
      },
      {
        name: "Reparación",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST3q0-gKalMjD_N41oVeT5MZCHBDpEDxm9Xxf-sYKqHg&s=10"
      },
      {
        name: "Instalación de programas y configuración",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgw_EnuaAW1w5ypl3bPWRhskOOpdGOZPwMNXyG-I0G8Q&s=10"
      }
    ]
  }
];


/* =========================
   WHATSAPP
========================= */

function getWhatsAppNumber() {
  return Math.random() < 0.60
    ? "573228182311"
    : "573117161043";
}


function openWhatsApp(item) {

  const message =
    `Hola, equipo Nexus. Estoy interesado(a) en cotizar: ${item}. ` +
    `Agradezco su asesoría y quedo atento(a) a opciones disponibles. ` +
    `Muchas gracias.`;

  const number = getWhatsAppNumber();

  window.location.href =
    `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}


/* =========================
   RENDER
========================= */

function renderCatalog(searchTerm = "") {

  const container =
    document.getElementById("catalogContainer");

  const noResults =
    document.getElementById("noResults");

  container.innerHTML = "";

  const term =
    searchTerm.trim().toLowerCase();

  let categoriesFound = 0;


  catalogData.forEach(category => {

    const categoryMatch =
      category.category.toLowerCase().includes(term);


    const items = category.items.filter(item => {

      if (!term) return true;

      return (
        categoryMatch ||
        item.name.toLowerCase().includes(term)
      );
    });


    if (!items.length) return;


    categoriesFound++;


    /* TARJETA PRINCIPAL */

    const categoryCard =
      document.createElement("section");

    categoryCard.className =
      "catalog-category";


    /* CABECERA */

    const header =
      document.createElement("div");

    header.className =
      "category-header";


    const title =
      document.createElement("h3");

    title.textContent =
      category.category;


    const count =
      document.createElement("span");

    count.textContent =
      `${items.length} opciones`;


    header.appendChild(title);
    header.appendChild(count);


    /* GRID */

    const grid =
      document.createElement("div");

    grid.className =
      "subcategory-grid";


    items.forEach(item => {

      const card =
        document.createElement("article");

      card.className =
        "subcategory-card";


      const imageWrap =
        document.createElement("div");

      imageWrap.className =
        "subcategory-image-wrap";


      const image =
        document.createElement("img");

      image.src = item.image;
      image.alt = item.name;
      image.loading = "lazy";


      imageWrap.appendChild(image);


      const content =
        document.createElement("div");

      content.className =
        "subcategory-content";


      const itemTitle =
        document.createElement("h4");

      itemTitle.textContent =
        item.name;


      const button =
        document.createElement("button");

      button.className =
        "quote-button";

      button.type =
        "button";

      button.textContent =
        "Cotizar";


      button.addEventListener("click", () => {
        openWhatsApp(item.name);
      });


      content.appendChild(itemTitle);
      content.appendChild(button);


      card.appendChild(imageWrap);
      card.appendChild(content);


      grid.appendChild(card);
    });


    categoryCard.appendChild(header);
    categoryCard.appendChild(grid);

    container.appendChild(categoryCard);
  });


  noResults.hidden =
    categoriesFound !== 0;
}


/* =========================
   BUSCADOR
========================= */

document
  .getElementById("searchInput")
  .addEventListener("input", event => {

    renderCatalog(event.target.value);

  });


/* =========================
   MENÚ
========================= */

const menuToggle =
  document.getElementById("menuToggle");

const mainNav =
  document.getElementById("mainNav");


menuToggle.addEventListener("click", () => {

  const active =
    mainNav.classList.toggle("active");

  menuToggle.setAttribute(
    "aria-expanded",
    active ? "true" : "false"
  );
});


mainNav.querySelectorAll("a").forEach(link => {

  link.addEventListener("click", () => {

    mainNav.classList.remove("active");

  });

});


/* =========================
   INICIAR
========================= */

renderCatalog();