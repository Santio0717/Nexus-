/* =========================================================
   NEXUS - CATÁLOGO
   ========================================================= */


/* =========================================================
   WHATSAPP
   60% ASESOR 1
   40% ASESORA 2
========================================================= */

const WHATSAPP_NUMBERS = [
  {
    name: "Asesor",
    number: "573228182311"
  },
  {
    name: "Asesora Nexus",
    number: "573117161043"
  }
];


/* =========================================================
   GOOGLE MAPS
========================================================= */

const GOOGLE_MAPS_URL =
  "https://maps.google.com/maps/place//data=!4m2!3m1!1s0x8e30a7f29313e393:0xdeb926ad2f00177e?entry=s&sa=X&ved=2ahUKEwiGi-HJqP2WAxX_p7AFHVxxMjAQ4kB6BAgcEAA&hl=es";


/* =========================================================
   CATÁLOGO
========================================================= */

const catalog = [

  /* =======================================================
     1. COMPUTADORES
  ======================================================= */

  {
    name: "Computadores",

    description:
      "Portátiles, torres, All in One y componentes para computadores.",

    flat: true,

    groups: [

      {
        name: "Computadores",

        items: [

          {
            name: "Portátiles",
            image:
              "https://refurbi.com.co/cdn/shop/files/nPeqtNAN7v.jpg?v=1760546728"
          },

          {
            name: "Torres",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHmMUjEDTwLqjN4330uBSKSW7rmrbwM9qlSOX5GR441A&s=10"
          },

          {
            name: "All in One",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbkPt9FQcNfcF363V3TvjX8PIYMlYFdgCOjdnGdGIUZA&s=10"
          }

        ]
      },

      {
        name: "Componentes",

        items: [

          {
            name: "Procesadores",
            image:
              "https://americanas.vtexassets.com/arquivos/ids/18858668-768-auto/7508705827_1_xlarge.webp?quality=9&v=638754899508270000"
          },

          {
            name: "Board",
            image:
              "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjEakxJ-gKEsCVDCidynb0svId8C92v6p12z4yRxO4NwtTiLnGWuwPvo_LnXhnEloifnXMpAGnLIYb2PFNvt0GAEh_yP0wT4A5m1BPzQAOH5w9g_C6_jJUXzYv5jusXqh9gmJa5_vm9qEA/s640/Tarjeta+Madre.png"
          },

          {
            name: "Tarjetas gráficas",
            image:
              "https://pcmastersbogota.com.co/wp-content/uploads/2022/03/Radeon-RX-6600-Challenger-D-8GBL1-768x640.png"
          },

          {
            name: "Fuentes de poder",
            image:
              "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6492/6492464_sd.jpg"
          },

          {
            name: "Chasis",
            image:
              "https://www.esgamingpc.com/lifisher-m5725/1735301825196-roke-02-tg/png80-t1-scale100.webp"
          },

          {
            name: "Refrigeración",
            image:
              "https://m.media-amazon.com/images/I/718f527QL0L._AC_SL1500_.jpg"
          }

        ]
      }

    ]
  },


  /* =======================================================
     2. MONITORES Y TV
  ======================================================= */

  {
    name: "Monitores y TV",

    description:
      "Monitores, monitores gaming y televisores.",

    flat: true,

    groups: [

      {
        name: "Monitores y TV",

        items: [

          {
            name: "Monitores",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fPTNR6sij2ELmoKGaoUoqQP6jqx2-I69_bmimytgMQ&s=10"
          },

          {
            name: "Monitores Gaming",
            image:
              "https://jyrtechnology.com.co/wp-content/uploads/2023/01/MTJR-003-1-scaled.jpg"
          },

          {
            name: "TV",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU_dPbiIzR6yf6pwZpfFQhg8jhDH-A_JX3I-uy_Wv2Q&s=10"
          }

        ]
      }

    ]
  },


  /* =======================================================
     3. GAMING
  ======================================================= */

  {
    name: "Gaming",

    description:
      "Consolas, controles y accesorios para gaming.",

    flat: true,

    groups: [

      {
        name: "Gaming",

        items: [

          {
            name: "Consolas",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEKGIFAzUWZ6tolR0uo8O7pXcvlr1-blLNv4yna8p8mg&s=10"
          },

          {
            name: "Controles",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHdMwv5kzu5FfCAKz72UXZRMup0tDqEkhwBz4fv_7nEQ&s=10"
          },

          {
            name: "Accesorios Gaming",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA-mC9fAccf4WurNG0Dbo5oiiaG3SZLkzWTeKITTvFaQ&s=10"
          }

        ]
      }

    ]
  },


  /* =======================================================
     4. PERIFÉRICOS
  ======================================================= */

  {
    name: "Periféricos",

    description:
      "Teclados, mouse, combos, audio, cámaras y accesorios.",

    groups: [

      {
        name: "Teclados",

        items: [

          {
            name: "Gaming",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBgoiMfort3NKseaja6N5UK70hHCJFW_VIsBkUJCLN0Q&s=10"
          },

          {
            name: "Cableados",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLp_Ayt7kAwMA3X7c095gjhDQD1Z_w2RUyR-YoXMGvw&s=10"
          },

          {
            name: "Inalámbricos",
            image:
              "https://www.omega-store.co/wp-content/uploads/2025/03/KB6756BK_.png"
          }

        ]
      },


      {
        name: "Mouse",

        items: [

          {
            name: "Gaming",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAqn9VYEyesnUWKvO-3eHDxsBd70Bw8DWLcs_VgPH2zg&s=10"
          },

          {
            name: "Cableados",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyPTNeq86JQ1So0SE_LiBQUEnGlpce-u1Cs-2Tkik9QQ&s=10"
          },

          {
            name: "Inalámbricos",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa1mg9AAtS6Odj4ZrU89pZcZ2g8H3b-vqK2fmYIJzcKw&s=10"
          }

        ]
      },


      {
        name: "Combos",

        items: [

          {
            name: "Teclado + Mouse",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSfKhhmksMDEeGi6C_V4PTXLn6YBpifB0FisPrgkkJA&s=10"
          },

          {
            name: "Combo Gaming",
            image:
              "https://s3.pagegear.co/4/articulos/57988/37173_700x933.jpg?2133331"
          },

          {
            name: "Combo Inalámbrico",
            image:
              "https://jaltechsas.com/wp-content/uploads/2022/08/COMBO-BASIK-TECH-INALAMBRICO_80163_BSK-300C_1.png"
          }

        ]
      },


      {
        name: "Audio",

        items: [

          {
            name: "Audífonos",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFnFbxiJ6hZizmizIVZgD3Q54wDHxNcaTuij-__WFwXQ&s=10"
          },

          {
            name: "Micrófonos",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOZ70hgwXVXQHSGcZnoNBupWS-zUh_P2rfBHGDniZ9lA&s"
          },

          {
            name: "Parlantes",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd1BkIZMe69uHbJ-vG99jQV2nh6Xx3ayHKlMw8LiRtvw&s=10"
          }

        ]
      },


      {
        name: "Cámaras",

        items: [

          {
            name: "Cámaras web",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ7FEHnyc3WPjN0ZcAzHGQBztfg2GGO4pnJZvXrcIqxg&s=10"
          },

          {
            name: "Cámaras fotográficas",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjH0ndUNv4KNUFDafDMAMe8OUr5YB-M5vbMmNRnWDXug&s=10"
          },

          {
            name: "Trípodes",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9SoMWDyfPWCXRXhoNTVyGst_xFEg7GRO0fAJmHcaUFA&s=10"
          }

        ]
      },


      {
        name: "Cargadores",

        items: [

          {
            name: "Para PC / portátil",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBu1lqYdxe2BzaO3Cwg7fBEiA4OUTQpHwxFKgNsy7d5w&s=10"
          },

          {
            name: "Para celular",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdTa6V9cX51V0KPLOaB2IeGG1LRT3pFji22pofxVkPOg&s=10"
          }

        ]
      },


      {
        name: "Cables",

        items: [

          {
            name: "Cables USB",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpi-m3tUKs1nkpcteyzTCszRZT9xzF2AtwzUnrN-PmA&s=10"
          },

          {
            name: "HDMI",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLbBmf-ay8faUrPlGSXAwZ3HY6swAZHItvQqNbIU_fuw&s=10"
          },

          {
            name: "Red",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx_xppnDa93OfcpMuMHiNeE7GS_oBUlFergGBhPV5huw&s=10"
          },

          {
            name: "Audio",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlzPcaoQVkN4mXKmbYhcdLGJwWeECCVvRRzTo8BCxmAg&s=10"
          },

          {
            name: "Para celular",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjYLGu6opBd_A-95-yDztgy8l2sE94jNxqSNhqM7wTAA&s=10"
          },

          {
            name: "Para computador",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnJPaLt43ahWCX63O4WgXR6mixoVyA9s9rEgQV-PTlEw&s=10"
          }

        ]
      },


      {
        name: "Adaptadores",

        items: [

          {
            name: "USB",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9sNX2Uz8xPczEZ7y02Rcr-HKhMcYFbzIJ_b0ZQCv47w&s=10"
          },

          {
            name: "HDMI",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaeZj4cbEPjpK_odmQtZuQetpp9dQ6cA-FvIOCbFD5AA&s=10"
          },

          {
            name: "Video",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsa_WKhKspk8YjmRzADHXzp2bkT5x87oYPj8KG_FW1Bg&s=10"
          },

          {
            name: "Red",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH2Y0gr9TbYqwxQdoJj_cOT3t_dqTIyMPlPwqCRj32tA&s=10"
          }

        ]
      },


      {
        name: "Conectividad",

        items: [

          {
            name: "Hubs USB",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeudb2pl1vpEih3Q14h_eov2XyGg2-7QV8uEqX9eSI4A&s=10"
          },

          {
            name: "Wi-Fi",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZn7EW_CNlsecd7qgXdeo5V6TpP3d2arQu7UOVzkfJyw&s=10"
          }

        ]
      },


      {
        name: "Soportes",

        items: [

          {
            name: "Para monitor",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQicyTTniZLerv8Ihx_bYlR_cdm5d5N8As1G9TDLVea5Q&s=10"
          },

          {
            name: "Para portátil",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBNET5DusrZBnNjiUlmaGrVjfRrb0PD0Qib-8WLTE-yQ&s=10"
          }

        ]
      },


      {
        name: "Bases",

        items: [

          {
            name: "Para portátil",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUTyVPrWSMn4FhD3gyOiKnviM8isiFpO00N_sxhBMsuQ&s=10"
          },

          {
            name: "Bases refrigerantes con ventilador",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv68yEKtAT_3hdei3QXhALooRTqymZdFDrZfBaHbf6Ow&s=10"
          }

        ]
      },


      {
        name: "Accesorios para computadores",

        items: [

          {
            name: "Lectores",
            image:
              "https://exitocol.vtexassets.com/arquivos/ids/29590549/unidad-cd-dvd-externa-usb-30-alta-velocidad-portatil-lector.jpg?v=638902638595630000"
          },

          {
            name: "Accesorios internos",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtR_OPgPASTwh5G1iJCsSCH6pql_RjciJ8BOAj75LUqA&s=10"
          }

        ]
      }

    ]
  },


  /* =======================================================
     5. ALMACENAMIENTO
  ======================================================= */

  {
    name: "Almacenamiento",

    description:
      "Memorias, RAM, discos y tarjetas de almacenamiento.",

    flat: true,

    groups: [

      {
        name: "Almacenamiento",

        items: [

          {
            name: "Memorias USB",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIlID-0UCkmEZEx4IQYSB4l720vh5qlZgCkMRtkah_nA&s=10"
          },

          {
            name: "RAM",
            image:
              "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/47773192/resize/300/300?1713402658"
          },

          {
            name: "HDD",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkvaPfRSmQwtD5vtNYpG3ifpA7GZ3kDmQQ3mZxTNc5iQ&s=10"
          },

          {
            name: "SSD",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDMP6n3awyzmgrqdQ1eu7ynxckwpn92NLZ4KJ-kFJSew&s=10"
          },

          {
            name: "SSD M.2",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDMP6n3awyzmgrqdQ1eu7ynxckwpn92NLZ4KJ-kFJSew&s=10"
          },

          {
            name: "MicroSD",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcMkeFdwyH4dUIZsFeLAcuRBJbXrZBMxWDg5ij00ouyg&s=10"
          },

          {
            name: "SD",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxOIo9RkOxtQmPp9qQxoofwmDaVRzql1TuN299WzAtBA&s=10"
          }

        ]
      }

    ]
  },


  /* =======================================================
     6. IMPRESORAS
  ======================================================= */

  {
    name: "Impresoras",

    description:
      "Impresoras, multifuncionales y suministros.",

    flat: true,

    groups: [

      {
        name: "Impresoras",

        items: [

          {
            name: "Multifuncionales",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4_Iy-24jYfVPpU0Mi_93Jht59z5BeTgYLZxJisLc6pw&s=10"
          },

          {
            name: "Fotocopiadoras",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvL1YK-beAtm--p_BzVO9Y_JPBwAkbGgEJzoHRFR30BA&s=10"
          },

          {
            name: "Impresoras térmicas",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyYtOqC7wlL3p0JCKrVXYdGzPFn7zXf9-EQa23JNGH-Q&s=10"
          },

          {
            name: "Impresoras de tinta",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9ER522Vy-V9BHyETK5K04zZDToO3BEjrlRtz2c-NDNA&s=10"
          },

          {
            name: "Impresoras láser",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7dq--y-C8cysoSPrGnJLRrkH6rFLm-w4WXPS_bESnnw&s=10"
          },

          {
            name: "Impresoras Wi-Fi",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeMHgQGOwCppd6wT8xfhvKXZNXEpt11C9Yks-V1es3oA&s=10"
          },

          {
            name: "Tintas",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFvkdz6vCtz8ygvStG0jrBjvTy5Ganjzy6wPqDLLjYLw&s=10"
          },

          {
            name: "Cartuchos",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuLxujWt_ZkGmGl07ZTER25Gb4AhnBpNK-UtmomGYngg&s=10"
          },

          {
            name: "Tóner",
            image:
              "https://media.falabella.com/falabellaCO/119012439_01/w=1500,h=1500,fit=cover"
          }

        ]
      }

    ]
  },


  /* =======================================================
     7. CELULARES
  ======================================================= */

  {
    name: "Celulares",

    description:
      "Celulares y accesorios para dispositivos móviles.",

    flat: true,

    groups: [

      {
        name: "Celulares",

        items: [

          {
            name: "Celulares",
            image:
              "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80"
          },

          {
            name: "Cargadores",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp7K94cb294GvIwR4FgrHCt06EanLJDuawelLHuS3-1g&s=10"
          },

          {
            name: "Vidrios templados",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNiQQMPVAPUtLUoy_a9yQLUDBUeiuHVTMPnBJY-ooCwg&s=10"
          },

          {
            name: "Fundas / Forros",
            image:
              "https://i.ebayimg.com/images/g/FaYAAOSwX-pkRsF5/s-l1200.webp"
          },

          {
            name: "Audífonos",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnmrJ6EdwbyaRmY_ohdswNGos5D2FUt6tPUiQAaNwhXQ&s=10"
          }

        ]
      }

    ]
  },


  /* =======================================================
     8. SILLAS
  ======================================================= */

  {
    name: "Sillas",

    description:
      "Sillas gaming y soluciones para espacios de trabajo.",

    flat: true,

    groups: [

      {
        name: "Sillas",

        items: [

          {
            name: "Sillas Gaming",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJY2CwTpFDZxEIienFiA_CBLBtr87ZgFHOoZssYlqjOw&s=10"
          },

          {
            name: "Sillas de oficina",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO5L6KExbFaqA4PDugyx1EZQiQhp4yrGnbjSZJv0Zw0Q&s=10"
          }

        ]
      }

    ]
  },


  /* =======================================================
     9. ENERGÍA
  ======================================================= */

  {
    name: "Energía",

    description:
      "Protección eléctrica, UPS y reguladores.",

    flat: true,

    groups: [

      {
        name: "Energía",

        items: [

          {
            name: "UPS",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8NuJkjD66X3YLf2LHdT0mTDFDTXBjlLE92LLyfh4zzA&s=10"
          },

          {
            name: "Reguladores de voltaje",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRII_MTif-i9fjBUspBT5phl5-ZkZpks2a9NdrEmiirjg&s=10"
          }

        ]
      }

    ]
  },


  /* =======================================================
     10. SERVICIOS TÉCNICOS
  ======================================================= */

  {
    name: "Servicios Técnicos",

    description:
      "Mantenimiento, reparación e instalación de programas.",

    flat: true,

    groups: [

      {
        name: "Servicios Técnicos",

        items: [

          {
            name: "Mantenimiento",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRv1NbZPj78y229SADhRen6c4pUgTxyzhBW9Gvr9wz_Q&s=10"
          },

          {
            name: "Reparación",
            image:
              "https://www.computronixco.com/wp-content/uploads/2020/02/mantenimiento-de-computadores-cali-reparacion-computadores-06.jpg"
          },

          {
            name: "Instalación de programas y configuración",
            image:
              "https://www.appvizer.com/media/application/26556/logo/26556.png"
          }

        ]
      }

    ]
  }

];


/* =========================================================
   UTILIDADES
========================================================= */

function escapeHtml(value) {

  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

}


/* =========================================================
   DOM
========================================================= */

const catalogElement =
  document.getElementById("catalog");

const resultCount =
  document.getElementById("resultCount");

const catalogStatus =
  document.getElementById("catalogStatus");

const catalogTitle =
  document.getElementById("catalogTitle");

const searchInput =
  document.getElementById("searchInput");

const brandHome =
  document.getElementById("brandHome");

const footerWhatsapp =
  document.getElementById("footerWhatsapp");


/* =========================================================
   ESTADO
========================================================= */

let currentCategory = null;
let currentGroup = null;


/* =========================================================
   CONTADOR
========================================================= */

function getTotalItems() {

  return catalog.reduce(
    (total, category) => {

      return total +
        category.groups.reduce(
          (groupTotal, group) =>
            groupTotal + group.items.length,
          0
        );

    },
    0
  );

}


/* =========================================================
   WHATSAPP 60/40
========================================================= */

function createWhatsAppSequence() {

  const sequence = [
    WHATSAPP_NUMBERS[0].number,
    WHATSAPP_NUMBERS[0].number,
    WHATSAPP_NUMBERS[0].number,
    WHATSAPP_NUMBERS[0].number,
    WHATSAPP_NUMBERS[0].number,
    WHATSAPP_NUMBERS[0].number,

    WHATSAPP_NUMBERS[1].number,
    WHATSAPP_NUMBERS[1].number,
    WHATSAPP_NUMBERS[1].number,
    WHATSAPP_NUMBERS[1].number
  ];

  return sequence.sort(
    () => Math.random() - 0.5
  );

}


function getWhatsAppNumber() {

  const sequenceKey =
    "nexusWhatsAppSequence";

  const positionKey =
    "nexusWhatsAppPosition";

  let sequence;

  try {

    sequence = JSON.parse(
      localStorage.getItem(sequenceKey) || "null"
    );

  } catch {

    sequence = null;

  }


  let position =
    Number(
      localStorage.getItem(positionKey) || 0
    );


  if (
    !Array.isArray(sequence) ||
    sequence.length !== 10 ||
    position >= 10
  ) {

    sequence = createWhatsAppSequence();

    position = 0;

    localStorage.setItem(
      sequenceKey,
      JSON.stringify(sequence)
    );

  }


  const selectedNumber =
    sequence[position];


  localStorage.setItem(
    positionKey,
    String(position + 1)
  );


  return selectedNumber;

}


function openWhatsApp(itemName = "información general sobre productos y servicios") {

  const phoneNumber =
    getWhatsAppNumber();


  const message =
    `Hola, Nexus. Estoy interesado en ${itemName}. ¿Me pueden brindar información?`;


  const whatsappUrl =
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;


  window.open(
    whatsappUrl,
    "_blank",
    "noopener,noreferrer"
  );

}


/* =========================================================
   CARD DE COTIZACIÓN
========================================================= */

function createItemCard(
  item,
  categoryName,
  groupName
) {

  return `
    <article class="subcategory-card">

      <div class="subcategory-image-wrap">

        <img
          src="${escapeHtml(item.image)}"
          alt="${escapeHtml(item.name)}"
          loading="lazy"
          onerror="this.style.display='none';"
        >

      </div>


      <div class="subcategory-content">

        <h4>
          ${escapeHtml(item.name)}
        </h4>

        <button
          class="quote-button"
          type="button"
          data-item="${escapeHtml(item.name)}"
          data-category="${escapeHtml(categoryName)}"
          data-group="${escapeHtml(groupName)}"
        >
          Cotizar
        </button>

      </div>

    </article>
  `;

}


/* =========================================================
   CATEGORÍAS PRINCIPALES
========================================================= */

function renderCategories() {

  currentCategory = null;
  currentGroup = null;

  if (!catalogElement) {
    return;
  }


  catalogTitle.textContent =
    "Encuentra lo que necesitas";


  resultCount.textContent =
    `${catalog.length} categorías`;


  catalogStatus.classList.add("hidden");


  const html = catalog.map(
    (category, index) => {

      const firstItem =
        category.groups[0]?.items[0];


      return `
        <article
          class="category-card"
        >

          <div class="category-image">

            ${
              firstItem
                ? `
                  <img
                    src="${escapeHtml(firstItem.image)}"
                    alt="${escapeHtml(category.name)}"
                    loading="${index < 3 ? "eager" : "lazy"}"
                    onerror="this.style.display='none';"
                  >
                `
                : ""
            }

          </div>


          <div class="category-info">

            <h3>
              ${escapeHtml(category.name)}
            </h3>

            <p>
              ${escapeHtml(category.description)}
            </p>


            <button
              type="button"
              class="explore-button"
              data-category="${escapeHtml(category.name)}"
            >
              Conocer productos
            </button>

          </div>

        </article>
      `;

    }
  ).join("");


  catalogElement.innerHTML = `
    <div class="category-grid">
      ${html}
    </div>
  `;


  bindCategoryButtons();

}


/* =========================================================
   VISTA DE CATEGORÍA
========================================================= */

function renderCategory(categoryName) {

  const category =
    catalog.find(
      item => item.name === categoryName
    );


  if (!category) {
    return;
  }


  currentCategory = categoryName;
  currentGroup = null;


  window.scrollTo({
    top: document.querySelector(".catalog-section").offsetTop - 20,
    behavior: "smooth"
  });


  catalogTitle.textContent =
    category.name;


  const totalItems =
    category.groups.reduce(
      (total, group) =>
        total + group.items.length,
      0
    );


  resultCount.textContent =
    `${totalItems} opciones`;


  catalogStatus.classList.add("hidden");


  let groupsHTML = "";


  category.groups.forEach(
    group => {

      groupsHTML += `

        <section class="catalog-group">

          ${
            category.groups.length > 1
              ? `
                <div class="catalog-group-header">

                  <h3>
                    ${escapeHtml(group.name)}
                  </h3>

                </div>
              `
              : ""
          }


          <div class="subcategory-grid">

            ${group.items.map(
              item =>
                createItemCard(
                  item,
                  category.name,
                  group.name
                )
            ).join("")}

          </div>

        </section>

      `;

    }
  );


  catalogElement.innerHTML = `

    <div class="category-view">

      <div class="category-detail-heading">

        <button
          type="button"
          class="back-button"
          id="backToCatalog"
        >
          ← Volver al catálogo
        </button>


        <h2>
          ${escapeHtml(category.name)}
        </h2>


        <p>
          ${escapeHtml(category.description)}
        </p>

      </div>


      ${groupsHTML}

    </div>

  `;


  bindQuoteButtons();


  document
    .getElementById("backToCatalog")
    ?.addEventListener(
      "click",
      () => {

        renderCategories();

      }
    );

}


/* =========================================================
   BOTONES DE CATEGORÍAS
========================================================= */

function bindCategoryButtons() {

  const buttons =
    document.querySelectorAll(
      ".explore-button"
    );


  buttons.forEach(
    button => {

      button.addEventListener(
        "click",
        () => {

          const categoryName =
            button.dataset.category;

          renderCategory(
            categoryName
          );

        }
      );

    }
  );

}


/* =========================================================
   BOTONES COTIZAR
========================================================= */

function bindQuoteButtons() {

  const buttons =
    document.querySelectorAll(
      ".quote-button"
    );


  buttons.forEach(
    button => {

      button.addEventListener(
        "click",
        () => {

          const item =
            button.dataset.item ||
            "un producto";


          const category =
            button.dataset.category ||
            "";


          const group =
            button.dataset.group ||
            "";


          const itemText =
            [
              item,
              group,
              category
            ]
            .filter(Boolean)
            .join(" - ");


          openWhatsApp(
            `cotizar ${itemText}`
          );

        }
      );

    }
  );

}


/* =========================================================
   BÚSQUEDA
========================================================= */

function getAllItems() {

  const items = [];


  catalog.forEach(
    category => {

      category.groups.forEach(
        group => {

          group.items.forEach(
            item => {

              items.push({
                ...item,
                category:
                  category.name,
                group:
                  group.name
              });

            }
          );

        }
      );

    }
  );


  return items;

}


const allItems =
  getAllItems();


function searchCatalog(query) {

  const normalized =
    query
      .trim()
      .toLowerCase();


  if (!normalized) {

    renderCategories();

    return;

  }


  currentCategory = null;
  currentGroup = null;


  const results =
    allItems.filter(
      item => {

        const searchable =
          [
            item.name,
            item.category,
            item.group
          ]
            .join(" ")
            .toLowerCase();


        return searchable.includes(
          normalized
        );

      }
    );


  catalogTitle.textContent =
    "Resultados de búsqueda";


  resultCount.textContent =
    `${results.length} ${
      results.length === 1
        ? "resultado"
        : "resultados"
    }`;


  if (!results.length) {

    catalogStatus.textContent =
      "No encontramos resultados para tu búsqueda.";


    catalogStatus.classList.remove(
      "hidden"
    );


    catalogElement.innerHTML = "";


    return;

  }


  catalogStatus.classList.add(
    "hidden"
  );


  catalogElement.innerHTML = `

    <div class="search-results">

      ${results.map(
        item => `

          <article
            class="search-result-card"
          >

            <div class="search-result-image">

              <img
                src="${escapeHtml(item.image)}"
                alt="${escapeHtml(item.name)}"
                loading="lazy"
                onerror="this.style.display='none';"
              >

            </div>


            <div class="search-result-content">

              <small>
                ${escapeHtml(item.category)}
              </small>

              <h3>
                ${escapeHtml(item.name)}
              </h3>


              <button
                type="button"
                class="quote-button"
                data-item="${escapeHtml(item.name)}"
                data-category="${escapeHtml(item.category)}"
                data-group="${escapeHtml(item.group)}"
              >
                Cotizar
              </button>

            </div>

          </article>

        `
      ).join("")}

    </div>

  `;


  bindQuoteButtons();

}


/* =========================================================
   EVENTOS
========================================================= */

searchInput?.addEventListener(
  "input",
  event => {

    searchCatalog(
      event.target.value
    );

  }
);


/* =========================================================
   LOGO
========================================================= */

brandHome?.addEventListener(
  "click",
  event => {

    event.preventDefault();

    searchInput.value = "";

    renderCategories();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }
);


/* =========================================================
   FOOTER WHATSAPP
========================================================= */

footerWhatsapp?.addEventListener(
  "click",
  () => {

    openWhatsApp(
      "información general sobre productos y servicios"
    );

  }
);


/* =========================================================
   INICIO
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderCategories();

  }
);