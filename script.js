const WHATSAPP_NUMBERS = [
  { number: "573228182311", weight: 0.60 },
  { number: "573117161043", weight: 0.40 }
  {
    name: "Asesor 1",
    number: "573228182311"
  },
  {
    name: "Asesor 2",
    number: "573117161043"
  }
];

const catalog = [
  {
    id: "computadores",
    title: "Computadores",
    description: "Equipos completos y componentes para armar o actualizar tu computador.",
    name: "Computadores",
    groups: [
      {
        title: "Equipos",
        name: "Computadores",
        items: [
          ["Portátil", "https://refurbi.com.co/cdn/shop/files/nPeqtNAN7v.jpg?v=1760546728"],
          ["Torres", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHmMUjEDTwLqjN4330uBSKSW7rmrbwM9qlSOX5GR441A&s=10"],
          ["All in One", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbkPt9FQcNfcF363V3TvjX8PIYMlYFdgCOjdnGdGIUZA&s=10"],
          ["Gaming", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLi1UqGDwIbmPSEtPn6HzNfC_Z3ICi0V2Xi6QT-dbq4Q&s=10"]
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
        title: "Componentes",
        name: "Componentes",
        items: [
          ["Procesadores", "https://americanas.vtexassets.com/arquivos/ids/18858668-768-auto/7508705827_1_xlarge.webp?quality=9&v=638754899508270000"],

          ["Tarjetas madre", "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjEakxJ-gKEsCVDCidynb0svId8C92v6p12z4yRxO4NwtTiLnGWuwPvo_LnXhnEloifnXMpAGnLIYb2PFNvt0GAEh_yP0wT4A5m1BPzQAOH5w9g_C6_jJUXzYv5jusXqh9gmJa5_vm9qEA/s640/Tarjeta+Madre.png"],

          ["Tarjetas gráficas", "https://pcmastersbogota.com.co/wp-content/uploads/2022/03/Radeon-RX-6600-Challenger-D-8GBL1-768x640.png"],

          ["Fuentes de poder", "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6492/6492464_sd.jpg"],

          ["Chasis", "https://www.esgamingpc.com/lifisher-m5725/1735301825196-roke-02-tg/png80-t1-scale100.webp"],

          ["Refrigeración", "https://m.media-amazon.com/images/I/718f527QL0L._AC_SL1500_.jpg"]
          {
            name: "Procesadores",
            image: "https://americanas.vtexassets.com/arquivos/ids/18858668-768-auto/7508705827_1_xlarge.webp?quality=9&v=638754899508270000"
          },
          {
            name: "Tarjetas madre",
            image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjEakxJ-gKEsCVDCidynb0svId8C92v6p12z4yRxO4NwtTiLnGWuwPvo_LnXhnEloifnXMpAGnLIYb2PFNvt0GAEh_yP0wT4A5m1BPzQAOH5w9g_C6_jJUXzYv5jusXqh9gmJa5_vm9qEA/s640/Tarjeta+Madre.png"
          },
          {
            name: "Tarjetas gráficas",
            image: "https://pcmastersbogota.com.co/wp-content/uploads/2022/03/Radeon-RX-6600-Challenger-D-8GBL1-768x640.png"
          },
          {
            name: "Fuentes de poder",
            image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6492/6492464_sd.jpg"
          },
          {
            name: "Chasis",
            image: "https://www.esgamingpc.com/lifisher-m5725/1735301825196-roke-02-tg/png80-t1-scale100.webp"
          },
          {
            name: "Refrigeración",
            image: "https://m.media-amazon.com/images/I/718f527QL0L._AC_SL1500_.jpg"
          }
        ]
      }
    ]
  },

  {
    id: "monitores-tv",
    title: "Monitores y TV",
    description: "Pantallas para oficina, estudio, entretenimiento y gaming.",
    name: "Monitores y TV",
    groups: [
      {
        title: "Pantallas",
        name: "Monitores y TV",
        items: [
          ["Monitores", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fPTNR6sij2ELmoKGaoUoqQP6jqx2-I69_bmimytgMQ&s=10"],

          ["Monitores Gaming", "https://jyrtechnology.com.co/wp-content/uploads/2023/01/MTJR-003-1-scaled.jpg"],

          ["TV", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU_dPbiIzR6yf6pwZpfFQhg8jhDH-A_J3X1I-uy_Wv2Q&s=10"]
          {
            name: "Monitores",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fPTNR6sij2ELmoKGaoUoqQP6jqx2-I69_bmimytgMQ&s=10"
          },
          {
            name: "Monitores Gaming",
            image: "https://jyrtechnology.com.co/wp-content/uploads/2023/01/MTJR-003-1-scaled.jpg"
          },
          {
            name: "TV",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU_dPbiIzR6yf6pwZpfFQhg8jhDH-A_J3X1I-uy_Wv2Q&s=10"
          }
        ]
      }
    ]
  },

  {
    id: "gaming",
    title: "Gaming",
    description: "Consolas, controles y accesorios para tu experiencia de juego.",
    name: "Gaming",
    groups: [
      {
        title: "Gaming",
        name: "Gaming",
        items: [
          ["Consolas", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK6R3BLZzudo6giL57G5gHbkEK3NUFcNQtJZ-8h0WQdsgyw5yeFKj8Brao&s=10"],
          ["Controles", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHdMwv5kzu5FfCAKz72UXZRMup0tDqEkhwBz4fv_7nEQ&s=10"],
          ["Accesorios Gaming", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA-mC9fAccf4WurNG0Dbo5oiiaG3SZLkzWTeKITTvFaQ&s=10"]
          {
            name: "Consolas",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEKGIFAzUWZ6tolR0uo8O7pXcvlr1-blLNv4yna8p8mg&s=10"
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

  {
    id: "perifericos",
    title: "Periféricos",
    description: "Teclados, mouse, combos, audio y cámaras para completar tu estación.",
    name: "Periféricos",
    groups: [
      {
        title: "Teclados",
        name: "Teclados",
        items: [
          ["Gaming", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBgoiMfort3NKseaja6N5UK70hHCJFW_VIsBkUJCLN0Q&s=10"],
          ["Cableados", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLp_Ayt7kAwMA3X7c095gjhDQD1Z_w2RUyR-YoXMGvw&s=10"],
          ["Inalámbricos", "https://www.omega-store.co/wp-content/uploads/2025/03/KB6756BK_.png"]
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
        title: "Mouse",
        name: "Mouse",
        items: [
          ["Gaming", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAqn9VYEyesnUWKvO-3eHDxsBd70Bw8DWLcs_VgPH2zg&s=10"],
          ["Cableados", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyPTNeq86JQ1So0SE_LiBQUEnGlpce-u1Cs-2Tkik9QQ&s=10"],
          ["Inalámbricos", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa1mg9AAtS6Odj4ZrU89pZcZ2g8H3b-vqK2fmYIJzcKw&s=10"]
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
        title: "Combos",
        name: "Combos",
        items: [
          ["Teclado + Mouse", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSfKhhmksMDEeGi6C_V4PTXLn6YBpifB0FisPrgkkJA&s=10"],
          ["Combo Gaming", "https://s3.pagegear.co/4/articulos/57988/37173_700x933.jpg?2133331"],
          ["Combo Inalámbrico", "https://jaltechsas.com/wp-content/uploads/2022/08/COMBO-BASIK-TECH-INALAMBRICO_80163_BSK-300C_1.png"]
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
        title: "Audio",
        name: "Audio",
        items: [
          ["Audífonos", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFnFbxiJ6hZizmizIVZgD3Q54wDHxNcaTuij-__WFwXQ&s=10"],
          ["Micrófonos", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOZ70hgwXVXQHSGcZnoNBupWS-zUh_P2rfBHGDniZ9lA&s"],
          ["Parlantes", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd1BkIZMe69uHbJ-vG99jQV2nh6Xx3ayHKlMw8LiRtvw&s=10"]
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
        title: "Cámaras",
        name: "Cámaras",
        items: [
          ["Cámaras web", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ7FEHnyc3WPjN0ZcAzHGQBztfg2GGO4pnJZvXrcIqxg&s=10"],
          ["Cámaras fotográficas", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjH0ndUNv4KNUFDafDMAMe8OUr5YB-M5vbMmNRnWDXug&s=10"],
          ["Trípodes", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9SoMWDyfPWCXRXhoNTVyGst_xFEg7GRO0fAJmHcaUFA&s=10"]
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

  {
    id: "accesorios",
    title: "Accesorios",
    description: "Cargadores, cables, adaptadores, conectividad, soportes y accesorios para computadores.",
    name: "Accesorios",
    groups: [
      {
        title: "Cargadores",
        name: "Cargadores",
        items: [
          ["Para PC / portátil", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBu1lqYdxe2BzaO3Cwg7fBEiA4OUTQpHwxFKgNsy7d5w&s=10"],
          ["Para celular", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdTa6V9cX51V0KPLOaB2IeGG1LRT3pFji22pofxVkPOg&s=10"]
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
        title: "Cables",
        name: "Cables",
        items: [
          ["Cables USB", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpi-m3-tUKs1nkpcteyzTCszRZT9xzF2AtwzUnrN-PmA&s=10"],
          ["HDMI", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLbBmf-ay8faUrPlGSXAwZ3HY6swAZHItvQqNbIU_fuw&s=10"],
          ["Red", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx_xppnDa93OfcpMuMHiNeE7GS_oBUlFergGBhPV5huw&s=10"],
          ["Audio", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlzPcaoQVkN4mXKmbYhcdLGJwWeECCVvRRzTo8BCxmAg&s=10"],
          ["Para celular", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjYLGu6opBd_A-95-yDztgy8l2sE94jNxqSNhqM7wTAA&s=10"],
          ["Para computador", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnJPaLt43ahWCX63O4WgXR6mixoVyA9s9rEgQV-PTlEw&s=10"]
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
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlzPcaoQVkN4mXKmbYhcdLGJwWeECCVvRRzTo8BCxmAg&s=10"
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
        title: "Adaptadores",
        name: "Adaptadores",
        items: [
          ["USB", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9sNX2Uz8xPczEZ7y02Rcr-HKhMcYFbzIJ_b0ZQCv47w&s=10"],
          ["HDMI", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaeZj4cbEPjpK_odmQtZuQetpp9dQ6cA-FvIOCbFD5AA&s=10"],
          ["Video", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsa_WKhKspk8YjmRzADHXzp2bkT5x87oYPj8KG_FW1Bg&s=10"],
          ["Red", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH2Y0gr9TbYqwxQdoJj_cOT3t_dqTIyMPlPwqCRj32tA&s=10"]
          {
            name: "USB",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9sNX2Uz8xPczEZ7y02Rcr-HKhMcYFbzIJ_b0ZQCv47w&s=10"
          },
          {
            name: "HDMI",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaeZj4cbEPjpK_odmQtZuQetpp9dQ6cA-FvIOCbFD5AA&s=10"
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
        title: "Conectividad",
        name: "Conectividad",
        items: [
          ["Hubs USB", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeudb2pl1vpEih3Q14h_eov2XyGg2-7QV8uEqX9eSI4A&s=10"],
          ["Wi-Fi", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZn7EW_CNlsecd7qgXdeo5V6TpP3d2arQu7UOVzkfJyw&s=10"]
          {
            name: "Hubs USB",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeudb2pl1vpEih3Q14h_eov2XyGg2-7QV8uEqX9eSI4A&s=10"
          },
          {
            name: "Wi-Fi",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZn7EW_CNlsecd7qgXdeo5V6TpP3d2arQu7UOVzkfJyw&s=10"
          }
        ]
      },

      {
        title: "Soportes",
        name: "Soportes",
        items: [
          ["Para monitor", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQicyTTniZLerv8Ihx_bYlR_cdm5d5N8As1G9TDLVea5Q&s=10"],
          ["Para portátil", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBNET5DusrZBnNjiUlmaGrVjfRrb0PD0Qib-8WLTE-yQ&s=10"]
          {
            name: "Para monitor",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQicyTTniZLerv8Ihx_bYlR_cdm5d5N8As1G9TDLVea5Q&s=10"
          },
          {
            name: "Para portátil",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBNET5DusrZBnNjiUlmaGrVjfRrb0PD0Qib-8WLTE-yQ&s=10"
          }
        ]
      },

      {
        title: "Bases",
        name: "Bases",
        items: [
          ["Para portátil", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUTyVPrWSMn4FhD3gyOiKnviM8isiFpO00N_sxhBMsuQ&s=10"],
          ["Bases refrigerantes con ventilador", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv68yEKtAT_3hdei3QXhALooRTqymZdFDrZfBaHbf6Ow&s=10"]
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
        title: "Accesorios para computadores",
        name: "Accesorios para computadores",
        items: [
          ["Lectores", "https://exitocol.vtexassets.com/arquivos/ids/29590549/unidad-cd-dvd-externa-usb-30-alta-velocidad-portatil-lector.jpg?v=638902638595630000"],
          ["Accesorios internos", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtR_OPgPASTwh5G1iJCsSCH6pql_RjciJ8BOAj75LUqA&s=10"]
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

  {
    id: "almacenamiento",
    title: "Memorias y Almacenamiento",
    description: "Opciones para ampliar, actualizar y transportar tus datos.",
    name: "Memorias y Almacenamiento",
    groups: [
      {
        title: "Almacenamiento",
        name: "Memorias y Almacenamiento",
        items: [
          ["Memorias USB", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIlID-0UCkmEZEx4IQYSB4l720vh5qlZgCkMRtkah_nA&s=10"],
          ["Memoria RAM", "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/47773192/resize/300/300?1713402658"],
          ["Discos HDD", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkvaPfRSmQwtD5vtNYpG3ifpA7GZ3kDmQQ3mZxTNc5iQ&s=10"],
          ["Discos SSD", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDMP6n3awyzmgrqdQ1eu7ynxckwpn92NLZ4KJ-kFJSew&s=10"],
          ["Tarjetas MicroSD", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcMkeFdwyH4dUIZsFeLAcuRBJbXrZBMxWDg5ij00ouyg&s=10"],
          ["Tarjetas SD", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxOIo9RkOxtQmPp9qQxoofwmDaVRzql1TuN299WzAtBA&s=10"]
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
      }
    ]
  },

  {
    id: "impresoras",
    title: "Impresoras y Suministros",
    description: "Impresión para hogar, oficina, negocio y punto de venta.",
    name: "Impresoras y Suministros",
    groups: [
      {
        title: "Impresión",
        name: "Impresoras y Suministros",
        items: [
          ["Multifuncionales", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4_Iy-24jYfVPpU0Mi_93Jht59z5BeTgYLZxJisLc6pw&s=10"],
          ["Fotocopiadoras", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvL1YK-beAtm--p_BzVO9Y_JPBwAkbGgEJzoHRFR30BA&s=10"],
          ["Impresoras térmicas", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyYtOqC7wlL3p0JCKrVXYdGzPFn7zXf9-EQa23JNGH-Q&s=10"],
          ["Impresoras de tinta", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9ER522Vy-V9BHyETK5K04zZDToO3BEjrlRtz2c-NDNA&s=10"],
          ["Impresoras láser", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7dq--y-C8cysoSPrGnJLRrkH6rFLm-w4WXPS_bESnnw&s=10"],
          ["Impresoras Wi-Fi", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeMHgQGOwCppd6wT8xfhvKXZNXEpt11C9Yks-V1es3oA&s=10"],
          ["Tintas", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFvkdz6vCtz8ygvStG0jrBjvTy5Ganjzy6wPqDLLjYLw&s=10"],
          ["Cartuchos", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuLxujWt_ZkGmGl07ZTER25Gb4AhnBpNK-UtmomGYngg&s=10"],
          ["Tóner", "https://media.falabella.com/falabellaCO/119012439_01/w=1500,h=1500,fit=cover"]
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
          },
          {
            name: "Tóner",
            image: "https://media.falabella.com/falabellaCO/119012439_01/w=1500,h=1500,fit=cover"
          }
        ]
      }
    ]
  },

  {
    id: "celulares",
    title: "Celulares y Accesorios",
    description: "Celulares y accesorios esenciales para dispositivos móviles.",
    name: "Celulares y Accesorios",
    groups: [
      {
        title: "Tecnología móvil",
        name: "Celulares y Accesorios",
        items: [
          ["Celulares", "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80"],
          ["Cargadores", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp7K94cb294GvIwR4FgrHCt06EanLJDuawelLHuS3-1g&s=10"],
          ["Vidrios templados", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNiQQMPVAPUtLUoy_a9yQLUDBUeiuHVTMPnBJY-ooCwg&s=10"],
          ["Fundas / Forros para celular", "https://i.ebayimg.com/images/g/FaYAAOSwX-pkRsF5/s-l1200.webp"],
          ["Audífonos", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnmrJ6EdwbyaRmY_ohdswNGos5D2FUt6tPUiQAaNwhXQ&s=10"]
          {
            name: "Celulares",
            image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80"
          },
          {
            name: "Cargadores",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp7K94cb294GvIwR4FgrHCt06EanLJDuawelLHuS3-1g&s=10"
          },
          {
            name: "Vidrios templados",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNiQQMPVAPUtLUoy_a9yQLUDBUeiuHVTMPnBJY-ooCwg&s=10"
          },
          {
            name: "Fundas / Forros para celular",
            image: "https://i.ebayimg.com/images/g/FaYAAOSwX-pkRsF5/s-l1200.webp"
          },
          {
            name: "Audífonos",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnmrJ6EdwbyaRmY_ohdswNGos5D2FUt6tPUiQAaNwhXQ&s=10"
          }
        ]
      }
    ]
  },

  {
    id: "sillas",
    title: "Sillas",
    description: "Opciones para gaming, estudio y espacios de trabajo.",
    name: "Sillas",
    groups: [
      {
        title: "Sillas",
        name: "Sillas",
        items: [
          ["Sillas Gaming", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJY2CwTpFDZxEIienFiA_CBLBtr87ZgFHOoZssYlqjOw&s=10"],
          ["Sillas de oficina", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO5L6KExbFaqA4PDugyx1EZQiQhp4yrGnbjSZJv0Zw0Q&s=10"]
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

  {
    id: "energia",
    title: "Energía",
    description: "Protección y respaldo eléctrico para tus equipos.",
    name: "Energía",
    groups: [
      {
        title: "Energía",
        name: "Energía",
        items: [
          ["UPS", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8NuJkjD66X3YLf2LHdT0mTDFDTXBjlLE92LLyfh4zzA&s=10"],
          ["Reguladores de voltaje", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRII_MTif-i9fjBUspBT5phl5-ZkZpks2a9NdrEmiirjg&s=10"]
          {
            name: "UPS",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8NuJkjD66X3YLf2LHdT0mTDFDTXBjlLE92LLyfh4zzA&s=10"
          },
          {
            name: "Reguladores de voltaje",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRII_MTif-i9fjBUspBT5phl5-ZkZpks2a9NdrEmiirjg&s=10"
          }
        ]
      }
    ]
  },

  {
    id: "servicios-tecnicos",
    title: "Servicios Técnicos",
    description: "Soluciones técnicas para mantenimiento, reparación y configuración.",
    name: "Servicios Técnicos",
    groups: [
      {
        title: "Servicios",
        name: "Servicios Técnicos",
        items: [

          ["Mantenimiento", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRv1NbZPj78y229SADhRen6c4pUgTxyzhBW9Gvr9wz_Q&s=10"],

          ["Reparación", "https://www.computronixco.com/wp-content/uploads/2020/02/mantenimiento-de-computadores-cali-reparacion-computadores-06.jpg"],

          ["Instalación de programas y configuración", "https://www.appvizer.com/media/application/26556/logo/26556.png"]
          {
            name: "Mantenimiento",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRv1NbZPj78y229SADhRen6c4pUgTxyzhBW9Gvr9wz_Q&s=10"
          },
          {
            name: "Reparación",
            image: "https://www.computronixco.com/wp-content/uploads/2020/02/mantenimiento-de-computadores-cali-reparacion-computadores-06.jpg"
          },
          {
            name: "Instalación de programas y configuración",
            image: "https://www.appvizer.com/media/application/26556/logo/26556.png"
          }
        ]
      }
    ]
  }
];

const catalogElement = document.getElementById("catalog");
const searchInput = document.getElementById("searchInput");
const resultCount = document.getElementById("resultCount");
const catalogStatus = document.getElementById("catalogStatus");
const floatingWhatsapp = document.getElementById("floatingWhatsapp");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function allItems() {
  return catalog.flatMap(category =>
    category.groups.flatMap(group =>
      group.items.map(([name]) => ({
        category: category.title,
        group: group.title,
        name
      }))
    )
  );
function getAllItems() {
  const items = [];

  catalog.forEach(category => {
    category.groups.forEach(group => {
      group.items.forEach(item => {
        items.push({
          ...item,
          category: category.name,
          group: group.name
        });
      });
    });
  });

  return items;
}

function filteredCatalog() {
  const query = searchInput.value.trim().toLowerCase();
const allItems = getAllItems();

  if (!query) return catalog;
let filteredCatalog = [...catalog];

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
function renderCatalog(data = filteredCatalog) {
  const catalogElement = document.getElementById("catalog");
  const resultCount = document.getElementById("resultCount");
  const catalogStatus = document.getElementById("catalogStatus");

function renderCatalog() {
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
  if (!catalogElement) return;

  const query = searchInput.value.trim();
  catalogElement.innerHTML = "";

  resultCount.textContent =
    `${total} opción${total === 1 ? "" : "es"}`;
  let visibleItems = 0;

  if (query) {
    catalogStatus.textContent = total
      ? `Mostrando resultados para: “${query}”`
      : `No encontramos resultados para “${query}”. Prueba con otra palabra.`;
  data.forEach(category => {
    const categoryCard = document.createElement("article");
    categoryCard.className = "catalog-category";

    catalogStatus.classList.remove("hidden");
  } else {
    catalogStatus.classList.add("hidden");
  }
    let groupsHTML = "";

  if (!total) {
    catalogElement.innerHTML = `
      <div class="no-results">
        <h3>No encontramos esa opción</h3>
        <p>
          Prueba con otra palabra o solicita asesoría
          directamente por WhatsApp.
        </p>
      </div>
    `;
    category.groups.forEach(group => {
      visibleItems += group.items.length;

    return;
  }
      groupsHTML += `
        <div class="catalog-group">

  catalogElement.innerHTML = filtered
    .map(category => {
      const categoryTotal = category.groups.reduce(
        (sum, group) => sum + group.items.length,
        0
      );

      return `
        <section
          class="catalog-category"
          data-category="${escapeHtml(category.id)}"
        >

          <div class="category-header">
            <div>
              <h3>${escapeHtml(category.title)}</h3>
              <p>${escapeHtml(category.description)}</p>
            </div>

            <span class="category-count">
              ${categoryTotal} opciones
            </span>
          <div class="group-heading">
            <h3>${escapeHtml(group.name)}</h3>
          </div>

          ${category.groups
            .map(
              group => `
                <div class="subcategory-group">
          <div class="subcategory-grid">

                  <h4 class="subcategory-group-title">
                    ${escapeHtml(group.title)}
            ${group.items.map(item => `
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

                  <div class="subcategory-grid">

                    ${group.items
                      .map(
                        ([name, image]) => `
                          <article
                            class="subcategory-card"
                            data-item="${escapeHtml(
                              name.toLowerCase()
                            )}"
                          >

                            <div class="subcategory-image-wrap">

                              <img
                                src="${image}"
                                alt="${escapeHtml(name)}"
                                loading="lazy"
                                onerror="
                                  this.closest(
                                    '.subcategory-image-wrap'
                                  ).classList.add(
                                    'image-error'
                                  );
                                  this.style.display='none';
                                "
                              >

                            </div>

                            <div class="subcategory-body">

                              <h4>
                                ${escapeHtml(name)}
                              </h4>

                              <button
                                class="quote-button"
                                type="button"
                                data-quote-item="${escapeHtml(name)}"
                              >
                                Cotizar
                              </button>

                            </div>

                          </article>
                        `
                      )
                      .join("")}

                  </div>
                  <button
                    class="quote-button"
                    type="button"
                    data-item="${escapeHtml(item.name)}"
                    data-category="${escapeHtml(category.name)}"
                    data-group="${escapeHtml(group.name)}"
                  >
                    Cotizar
                  </button>

                </div>
              `
            )
            .join("")}

        </section>
              </article>
            `).join("")}

          </div>

        </div>
      `;
    })
    .join("");
}
    });

    categoryCard.innerHTML = `
      <div class="category-heading">
        <h2>${escapeHtml(category.name)}</h2>
      </div>

/* =========================================================
   WHATSAPP
   =========================================================
      ${groupsHTML}
    `;

   Cada bloque de 10 solicitudes contiene:
    catalogElement.appendChild(categoryCard);
  });

   6 → 573228182311
   4 → 573117161043
  if (resultCount) {
    resultCount.textContent =
      `${visibleItems} ${visibleItems === 1 ? "opción" : "opciones"}`;
  }

   Los 10 números se mezclan aleatoriamente.
  if (catalogStatus) {
    if (visibleItems === 0) {
      catalogStatus.textContent =
        "No encontramos resultados para tu búsqueda.";
      catalogStatus.classList.remove("hidden");
    } else {
      catalogStatus.textContent = "";
      catalogStatus.classList.add("hidden");
    }
  }

   La secuencia se guarda en localStorage para que
   el orden permanezca durante ese bloque de 10.
   ========================================================= */
  bindQuoteButtons();
}

function shuffleArray(array) {
  const shuffled = [...array];

  for (
    let i = shuffled.length - 1;
    i > 0;
    i--
  ) {
    const randomIndex =
      Math.floor(Math.random() * (i + 1));
  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    [
      shuffled[i],
      shuffled[randomIndex]
    ] = [
    [shuffled[i], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[i]
    ];
@@ -529,7 +655,6 @@ function shuffleArray(array) {

function createWhatsAppSequence() {
  const sequence = [

    WHATSAPP_NUMBERS[0].number,
    WHATSAPP_NUMBERS[0].number,
    WHATSAPP_NUMBERS[0].number,
@@ -541,18 +666,14 @@ function createWhatsAppSequence() {
    WHATSAPP_NUMBERS[1].number,
    WHATSAPP_NUMBERS[1].number,
    WHATSAPP_NUMBERS[1].number

  ];

  return shuffleArray(sequence);
}

function getWhatsAppNumber() {
  const sequenceKey =
    "nexusWhatsAppSequence";

  const positionKey =
    "nexusWhatsAppPosition";
  const sequenceKey = "nexusWhatsAppSequence";
  const positionKey = "nexusWhatsAppPosition";

  let sequence;

@@ -574,7 +695,6 @@ function getWhatsAppNumber() {
    position >= 10
  ) {
    sequence = createWhatsAppSequence();

    position = 0;

    localStorage.setItem(
@@ -583,8 +703,7 @@ function getWhatsAppNumber() {
    );
  }

  const selectedNumber =
    sequence[position];
  const selectedNumber = sequence[position];

  localStorage.setItem(
    positionKey,
@@ -594,63 +713,133 @@ function getWhatsAppNumber() {
  return selectedNumber;
}

function openWhatsApp(item) {
function openWhatsApp(itemName) {
  const phoneNumber = getWhatsAppNumber();

  const message =
    `Hola, equipo Nexus. Estoy interesado(a) en cotizar: ${item}. ` +
    `Agradezco su asesoría y quedo atento(a) a opciones disponibles. ` +
    `Muchas gracias.`;
    `Hola, Nexus. Estoy interesado en cotizar: ${itemName}. ¿Me pueden brindar información?`;

  const number =
    getWhatsAppNumber();
  const whatsappUrl =
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.location.href =
    `https://wa.me/${number}?text=${encodeURIComponent(
      message
    )}`;
  window.open(
    whatsappUrl,
    "_blank",
    "noopener,noreferrer"
  );
}

function bindQuoteButtons() {
  const buttons = document.querySelectorAll(".quote-button");

/* =========================================================
   EVENTOS
   ========================================================= */
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const itemName = button.dataset.item;

catalogElement.addEventListener(
  "click",
  event => {

    const button =
      event.target.closest(
        "[data-quote-item]"
      );
      if (itemName) {
        openWhatsApp(itemName);
      }
    });
  });
}

    if (!button) return;
function filterCatalog(searchTerm) {
  const term = searchTerm
    .trim()
    .toLowerCase();

    openWhatsApp(
      button.dataset.quoteItem
    );
  if (!term) {
    filteredCatalog = [...catalog];
    renderCatalog();
    return;
  }
);

searchInput.addEventListener(
  "input",
  renderCatalog
);
  filteredCatalog = catalog
    .map(category => {

floatingWhatsapp.addEventListener(
  "click",
  event => {
      const categoryMatches =
        category.name
          .toLowerCase()
          .includes(term);

    event.preventDefault();
      const filteredGroups = category.groups
        .map(group => {

    openWhatsApp(
      "información general sobre productos y servicios"
          const groupMatches =
            group.name
              .toLowerCase()
              .includes(term);

          const filteredItems = group.items.filter(item =>
            item.name
              .toLowerCase()
              .includes(term)
          );

          if (
            groupMatches ||
            categoryMatches
          ) {
            return {
              ...group,
              items: [...group.items]
            };
          }

          return {
            ...group,
            items: filteredItems
          };
        })
        .filter(group => group.items.length > 0);

      if (
        categoryMatches ||
        filteredGroups.length > 0
      ) {
        return {
          ...category,
          groups: filteredGroups
        };
      }

      return null;
    })
    .filter(Boolean);

  renderCatalog(filteredCatalog);
}

document.addEventListener("DOMContentLoaded", () => {

  renderCatalog();

  const searchInput =
    document.getElementById("searchInput");

  if (searchInput) {
    searchInput.addEventListener(
      "input",
      event => {
        filterCatalog(event.target.value);
      }
    );
  }
);

  const floatingWhatsapp =
    document.getElementById("floatingWhatsapp");

/* =========================================================
   INICIALIZAR CATÁLOGO
   ========================================================= */
  if (floatingWhatsapp) {
    floatingWhatsapp.addEventListener(
      "click",
      event => {
        event.preventDefault();

        openWhatsApp(
          "información general sobre productos y servicios"
        );
      }
    );
  }

renderCatalog();
});
