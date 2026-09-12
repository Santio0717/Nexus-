/* =========================================================
   NEXUS
   Catálogo + búsqueda + WhatsApp
   ========================================================= */


/* =========================================================
   WHATSAPP
   ========================================================= */

const WHATSAPP_60 = "573228182311";
const WHATSAPP_40 = "573117161043";


function getWhatsAppNumber() {
  return Math.random() < 0.60
    ? WHATSAPP_60
    : WHATSAPP_40;
}


function openWhatsApp(category, group, item) {

  const parts = [
    category,
    group,
    item
  ].filter(Boolean);

  const productName = parts.join(" - ");

  const message =
    `Hola, equipo Nexus. Estoy interesado(a) en cotizar: ${productName}. ` +
    `Agradezco su asesoría y quedo atento(a) a la disponibilidad y opciones disponibles. ` +
    `Muchas gracias.`;

  const number = getWhatsAppNumber();

  const url =
    `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  /*
    window.location.href funciona correctamente tanto
    en teléfonos como en WhatsApp Web.
  */
  window.location.href = url;
}


/* =========================================================
   IMÁGENES
   ========================================================= */

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80";

const PHONE_FALLBACK =
  "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80";


/* =========================================================
   CATÁLOGO
   ========================================================= */

const catalogData = [

  /* =======================================================
     COMPUTADORES
     ======================================================= */

  {
    category: "Computadores",
    groups: [
      {
        name: "",
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
      }
    ]
  },


  /* =======================================================
     MONITORES Y TV
     ======================================================= */

  {
    category: "Monitores y TV",
    groups: [
      {
        name: "",
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
      }
    ]
  },


  /* =======================================================
     GAMING
     ======================================================= */

  {
    category: "Gaming",
    groups: [
      {
        name: "",
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
      }
    ]
  },


  /* =======================================================
     PERIFÉRICOS
     ======================================================= */

  {
    category: "Periféricos",
    groups: [

      {
        name: "Teclados",
        items: [
          {
            name: "Gaming",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBgoiMfort3NKseaja6N5UK70hHCJFW_VIsBkUJCLN0Q&s=10"
          },
          {
            name: "Cableados",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLp_Ayt7kAwMA3X7c095gjhDQD1Z_w2RUyR-YoXMGvw&s=10"
          },
          {
            name: "Inalámbricos",
            image: "https://www.omega-store.co/wp-content/uploads/2025/03/KB6756BK_.png"
          }
        ]
      },

      {
        name: "Mouse",
        items: [
          {
            name: "Gaming",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAqn9VYEyesnUWKvO-3eHDxsBd70Bw8DWLcs_VgPH2zg&s=10"
          },
          {
            name: "Cableados",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyPTNeq86JQ1So0SE_LiBQUEnGlpce-u1Cs-2Tkik9QQ&s=10"
          },
          {
            name: "Inalámbricos",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa1mg9AAtS6Odj4ZrU89pZcZ2g8H3b-vqK2fmYIJzcKw&s=10"
          }
        ]
      },

      {
        name: "Combos",
        items: [
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
          }
        ]
      },

      {
        name: "Audio",
        items: [
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
          }
        ]
      },

      {
        name: "Cámaras",
        items: [
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
      }

    ]
  },


  /* =======================================================
     ACCESORIOS
     ======================================================= */

  {
    category: "Accesorios",
    groups: [

      {
        name: "Cargadores",
        items: [
          {
            name: "Para PC / portátil",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBu1lqYdxe2BzaO3Cwg7fBEiA4OUTQpHwxFKgNsy7d5w&s=10"
          },
          {
            name: "Para celular",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdTa6V9cX51V0KPLOaB2IeGG1LRT3pFji22pofxVkPOg&s=10"
          }
        ]
      },

      {
        name: "Cables",
        items: [
          {
            name: "Cables USB",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpi-m3-tUKs1nkpcteyzTCszRZT9xzF2AtwzUnrN-PmA&s=10"
          },
          {
            name: "HDMI",
            image: "https://www.google.com/aclk?sa=L&ai=DChsSEwim0bOW-OeWAxU8m1oFHfGZCPsYACICCAEQLxoCdnU&co=1&gclid=Cj0KCQjwzY7VBhDwARIsAFtPvBQI7u9w-2npDhTDQJv-m-uVzx1aaIMUU7kVUR4LpQ5W8l97l2KIivUaArebEALw_wcB&cid=CAASWuRoSaMyemn_plFjE4QqoGmCitF9S2Rae1KFL4RxLu8tRHIFvdZyc6FPcMGPMZiMs3ZLVGERn-3tyyuDKpMjUilDZ0x5V68osuhIZEWqj_fXxii4E-W5iI--6w&cce=2&sig=AOD64_2bvJYfchGHc69opJbAkg33PwV3Rg&ctype=5&q=&ved=2ahUKEwj8x6-W-OeWAxUgTDABHQbSPOoQ8w4oAHoECC8QAQ&adurl="
          },
          {
            name: "DisplayPort",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa3Z2ka-vlfekIcy4FlBwidSbnXjhqJogsAZl-V8jh-Q&s=10"
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
          }
        ]
      },

      {
        name: "Adaptadores",
        items: [
          {
            name: "USB",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9sNX2Uz8xPczEZ7y02Rcr-HKhMcYFbzIJ_b0ZQCv47w&s=10"
          },
          {
            name: "HDMI",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaeZj4cbEPjpK_odmQtZuQetpp9dQ6cA-FvIOCbFD5AA&s=10"
          },
          {
            name: "DisplayPort",
            image: "https://www.google.com/aclk?sa=L&ai=DChsSEwjDz_Lu-ueWAxXauFoFHbFZJtQYACICCAEQMRoCdnU&co=1&gclid=Cj0KCQjwzY7VBhDwARIsAFtPvBQleG5yHPURHP7URlvX_RyKnP0P3xHtpvwgU4HYBhGr_pj-NbwLaQoaArbbEALw_wcB&cid=CAASWuRoNO9uwtLOjwDoN84NMGlfj43wrJ8QU9b2opd3KHhyJDAknsBwpwjnWB4tYD_ULuvi8RzKM6YMlikZWBGfE_8Pjrmo9F7OqEVr-S-YrOs9mwpsHbNylpuxag&cce=2&sig=AOD64_2n6oM05wi8FtutuD-RCtdP2MroOA&ctype=5&q=&ved=2ahUKEwjLt-_u-ueWAxVNTDABHaPnL0oQ8w4oAHoECE8QAQ&adurl="
          },
          {
            name: "Video",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsa_WKhKspk8YjmRzADHXzp2bkT5x87oYPj8KG_FW1Bg&s=10"
          },
          {
            name: "Red",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH2Y0gr9TbYqwxQdoJj_cOT3t_dqTIyMPlPwqCRj32tA&s=10"
          }
        ]
      },

      {
        name: "Conectividad",
        items: [
          {
            name: "Hubs USB",
            image: "https://www.google.com/aclk?sa=L&ai=DChsSEwiH4prz--eWAxUvhloFHbbTIEUYACICCAEQDhoCdnU&co=1&gclid=Cj0KCQjwzY7VBhDwARIsAFtPvBSBpnC2DyFZfkcpMa9g4wVvtFULOSRYTe4sTmduVZDiRF768bltqQYaAq2REALw_wcB&sph=&cid=CAASWuRo4T0TmWGHZQZpfT6zEyBDlB4lq_YVH_dJOIXnwRWXGHsLhef73ovmudkhgAAEEmqOINN_YnVfTfHWe0-7UmOUFeESlb5iLyBFOnyUvb_t5ruHKfxYQRAdPA&cce=2&sig=AOD64_3skXMXMhXxv7piZimRiUxc_Hs6fw&ctype=5&q=&ved=2ahUKEwj0kZXz--eWAxXPSTABHaPPJvwQwg8oAHoECA0QDA&adurl="
          },
          {
            name: "Wi-Fi",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZn7EW_CNlsecd7qgXdeo5V6TpP3d2arQu7UOVzkfJyw&s=10"
          }
        ]
      },

      {
        name: "Soportes",
        items: [
          {
            name: "Para monitor",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQicyTTniZLerv8Ihx_bYlR_cdm5d5N8As1G9TDLVea5Q&s=10"
          },
          {
            name: "Para portátil",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBNET5DusrZBnNjiUlmaGrVjfRrb0PD0Qib-8WLTE-yQ&s=10"
          },
          {
            name: "Para celular",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqQ9t7f9Yw2L9lJ5W3m4v6b8N2z7r1c0X5&s=10"
          }
        ]
      },

      {
        name: "Bases",
        items: [
          {
            name: "Para portátil",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUTyVPrWSMn4FhD3gyOiKnviM8isiFpO00N_sxhBMsuQ&s=10"
          },
          {
            name: "Bases refrigerantes con ventilador",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv68yEKtAT_3hdei3QXhALooRTqymZdFDrZfBaHbf6Ow&s=10"
          }
        ]
      },

      {
        name: "Accesorios para computadores",
        items: [
          {
            name: "Lectores",
            image: "https://exitocol.vtexassets.com/arquivos/ids/29590549/unidad-cd-dvd-externa-usb-30-alta-velocidad-portatil-lector.jpg?v=638902638595630000"
          },
          {
            name: "Accesorios internos",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtR_OPgPASTwh5G1iJCsSCH6pql_RjciJ8BOAj75LUqA&s=10"
          }
        ]
      }

    ]
  },


  /* =======================================================
     MEMORIAS Y ALMACENAMIENTO
     ======================================================= */

  {
    category: "Memorias y Almacenamiento",
    groups: [
      {
        name: "",
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
            name: "SSD M.2",
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
      }
    ]
  },


  /* =======================================================
     IMPRESORAS Y SUMINISTROS
     ======================================================= */

  {
    category: "Impresoras y Suministros",
    groups: [
      {
        name: "",
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
      }
    ]
  },


  /* =======================================================
     CELULARES Y ACCESORIOS
     ======================================================= */

  {
    category: "Celulares y Accesorios",
    groups: [
      {
        name: "",
        items: [
          {
            name: "Celulares",
            image: PHONE_FALLBACK
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
      }
    ]
  },


  /* =======================================================
     SILLAS
     ======================================================= */

  {
    category: "Sillas",
    groups: [
      {
        name: "",
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
      }
    ]
  },


  /* =======================================================
     ENERGÍA
     ======================================================= */

  {
    category: "Energía",
    groups: [
      {
        name: "",
        items: [
          {
            name: "UPS",
            image: "https://www.google.com/aclk?sa=L&ai=DChsSEwiX3pfaiOiWAxVLlFoFHd4XAPkYACICCAEQNRoCdnU&co=1&gclid=Cj0KCQjwzY7VBhDwARIsAFtPvBQcuCEWK4tlFv_2wgfxL2S7UZi5GGKN52kBPkPgDOPqMiSADbLN9qYaApVeEALw_wcB&cid=CAASWuRo62EGd_GYgdL7avCJgVUFYePQxq3_D7MXEAoLgFIoDLMPJgnT934KT3hfBIoPWvFQpAz9Ywo7--mCRaRH5_rxiu0_bGlgnxwAYMKOHvsStdUvOk47zYiNsw&cce=2&sig=AOD64_3VqNWi6HGRysQp9nnEC9GroOehMA&ctype=5&q=&ved=2ahUKEwiOkJTaiOiWAxUQSzABHW0CL1wQ8w4oAHoECGoQAQ&adurl="
          },
          {
            name: "Reguladores de voltaje",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRII_MTif-i9fjBUspBT5phl5-ZkZpks2a9NdrEmiirjg&s=10"
          }
        ]
      }
    ]
  },


  /* =======================================================
     SERVICIOS TÉCNICOS
     ======================================================= */

  {
    category: "Servicios Técnicos",
    groups: [
      {
        name: "",
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
    ]
  }

];


/* =========================================================
   UTILIDADES
   ========================================================= */

function normalizeText(text) {
  return String(text)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}


function escapeHTML(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


/* =========================================================
   FALLBACK DE IMÁGENES
   ========================================================= */

function createImage(src, alt) {

  const safeSrc = escapeHTML(src);
  const safeAlt = escapeHTML(alt);

  return `
    <img
      class="subcategory-image"
      src="${safeSrc}"
      alt="${safeAlt}"
      loading="lazy"
      onerror="this.onerror=null;this.src='${FALLBACK_IMAGE}'"
    >
  `;
}


/* =========================================================
   RENDERIZAR CATÁLOGO
   ========================================================= */

function renderCatalog(searchTerm = "") {

  const catalog = document.getElementById("catalog");

  if (!catalog) {
    return;
  }

  const query = normalizeText(searchTerm);

  let html = "";
  let totalResults = 0;


  catalogData.forEach(category => {

    const categoryMatch =
      !query ||
      normalizeText(category.category).includes(query);


    const filteredGroups = [];

    category.groups.forEach(group => {

      const groupMatch =
        !query ||
        normalizeText(group.name).includes(query);

      const filteredItems = group.items.filter(item => {

        const itemMatch =
          !query ||
          normalizeText(item.name).includes(query);

        return categoryMatch || groupMatch || itemMatch;
      });

      if (filteredItems.length > 0) {
        filteredGroups.push({
          ...group,
          items: filteredItems
        });
      }

    });


    if (filteredGroups.length === 0) {
      return;
    }


    const categoryItems = filteredGroups.reduce(
      (total, group) => total + group.items.length,
      0
    );

    totalResults += categoryItems;


    html += `
      <section class="category">

        <div class="category-header">
          <h3>${escapeHTML(category.category)}</h3>
          <span class="category-count">
            ${categoryItems} ${categoryItems === 1 ? "opción" : "opciones"}
          </span>
        </div>
    `;


    filteredGroups.forEach(group => {

      html += `
        <div class="catalog-group">
      `;


      if (group.name) {
        html += `
          <h4 class="group-title">
            ${escapeHTML(group.name)}
          </h4>
        `;
      }


      html += `
        <div class="subcategory-grid">
      `;


      group.items.forEach(item => {

        html += `
          <article class="subcategory-card">

            ${createImage(item.image, item.name)}

            <div class="subcategory-content">

              <h4>
                ${escapeHTML(item.name)}
              </h4>

              <button
                type="button"
                class="quote-btn"
                data-category="${escapeHTML(category.category)}"
                data-group="${escapeHTML(group.name)}"
                data-item="${escapeHTML(item.name)}"
              >
                Cotizar
              </button>

            </div>

          </article>
        `;
      });


      html += `
        </div>
        </div>
      `;
    });


    html += `
      </section>
    `;

  });


  if (totalResults === 0) {

    catalog.innerHTML = `
      <div class="no-results">
        <h3>No encontramos coincidencias</h3>
        <p>
          Prueba con otro producto, categoría o servicio.
        </p>
      </div>
    `;

    return;
  }


  catalog.innerHTML = html;


  /* =======================================================
     BOTONES COTIZAR
     ======================================================= */

  const quoteButtons =
    document.querySelectorAll(".quote-btn");


  quoteButtons.forEach(button => {

    button.addEventListener("click", () => {

      const category =
        button.dataset.category || "";

      const group =
        button.dataset.group || "";

      const item =
        button.dataset.item || "";

      openWhatsApp(
        category,
        group,
        item
      );

    });

  });

}


/* =========================================================
   BÚSQUEDA
   ========================================================= */

const searchInput =
  document.getElementById("catalogSearch");


if (searchInput) {

  searchInput.addEventListener(
    "input",
    event => {

      renderCatalog(
        event.target.value
      );

    }
  );

}


/* =========================================================
   MENÚ MÓVIL
   ========================================================= */

const menuToggle =
  document.getElementById("menuToggle");

const mainNav =
  document.getElementById("mainNav");


if (menuToggle && mainNav) {

  menuToggle.addEventListener(
    "click",
    () => {

      const isOpen =
        mainNav.classList.toggle("active");

      menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

    }
  );


  mainNav.querySelectorAll("a").forEach(link => {

    link.addEventListener(
      "click",
      () => {

        mainNav.classList.remove("active");

        menuToggle.setAttribute(
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

const currentYear =
  document.getElementById("currentYear");

if (currentYear) {
  currentYear.textContent =
    new Date().getFullYear();
}


/* =========================================================
   INICIAR
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderCatalog();

  }
);