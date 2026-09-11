```javascript
/* =========================================================
   NEXUS - SCRIPT
========================================================= */


/* =========================================================
   WHATSAPP
========================================================= */

/*
    60% → 573228182311
    40% → 573117161043

    Se utiliza el formato internacional sin +, espacios
    ni guiones, compatible con wa.me.
*/

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

    /*
        location.href es intencional:
        evita problemas de bloqueadores de ventanas emergentes
        especialmente en algunos navegadores móviles.
    */

    window.location.href = url;
}


/* =========================================================
   CATÁLOGO
========================================================= */

const catalog = {

    "Computadores": {

        icon: "▣",

        image:
            "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=900&q=80",

        description:
            "Computadores para trabajo, estudio, productividad y gaming.",

        subcategories: {

            "PCs": {
                product: "PC de escritorio",
                description: "Computador de escritorio para uso diario, estudio y trabajo."
            },

            "Torres": {
                product: "Torre para computador",
                description: "Torres para diferentes configuraciones y necesidades."
            },

            "All in One": {
                product: "Computador All in One",
                description: "Equipo compacto con pantalla integrada."
            },

            "Corporativos": {
                product: "Computador corporativo",
                description: "Equipos orientados a empresas, oficinas y productividad."
            },

            "Gaming": {
                product: "PC Gaming",
                description: "Computadores diseñados para videojuegos y alto rendimiento."
            }

        }

    },


    "Monitores y TV": {

        icon: "▤",

        image:
            "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=80",

        description:
            "Monitores y televisores para trabajo, entretenimiento y gaming.",

        subcategories: {

            "Monitores": {
                product: "Monitor",
                description: "Monitores para trabajo, estudio y entretenimiento."
            },

            "Monitores Gaming": {
                product: "Monitor Gaming",
                description: "Monitores orientados a videojuegos y experiencias fluidas."
            },

            "TV": {
                product: "Televisor Smart TV",
                description: "Televisores para entretenimiento y contenido multimedia."
            }

        }

    },


    "Gaming": {

        icon: "◈",

        image:
            "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=900&q=80",

        description:
            "Consolas, controles y accesorios para gaming.",

        subcategories: {

            "Consolas": {
                product: "Consola de videojuegos",
                description: "Consolas para entretenimiento y videojuegos."
            },

            "Controles": {
                product: "Control para consola",
                description: "Controles para diferentes plataformas de videojuegos."
            },

            "Accesorios Gaming": {
                product: "Accesorio Gaming",
                description: "Accesorios para complementar tu experiencia gaming."
            }

        }

    },


    "Periféricos": {

        icon: "⌨",

        image:
            "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80",

        description:
            "Periféricos para computadores, gaming, audio y creación de contenido.",

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


    "Accesorios": {

        icon: "⌁",

        image:
            "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=900&q=80",

        description:
            "Accesorios para computadores, celulares, conectividad y organización.",

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


    "Memorias y Almacenamiento": {

        icon: "▥",

        image:
            "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=900&q=80",

        description:
            "Memorias y almacenamiento para computadores y dispositivos.",

        subcategories: {

            "Memorias USB": {
                product: "Memoria USB",
                description: "Memorias USB para transportar y almacenar archivos."
            },

            "Memoria RAM": {
                product: "Memoria RAM",
                description: "Memoria para mejorar la capacidad y rendimiento del equipo."
            },

            "Discos HDD": {
                product: "Disco duro HDD",
                description: "Almacenamiento tradicional para computadores."
            },

            "Discos SSD": {
                product: "Disco SSD",
                description: "Almacenamiento de estado sólido para mayor velocidad."
            },

            "SSD M.2": {
                product: "SSD M.2",
                description: "Almacenamiento compacto y de alto rendimiento."
            },

            "Tarjetas MicroSD": {
                product: "Tarjeta MicroSD",
                description: "Memoria para celulares, cámaras y dispositivos compatibles."
            },

            "Tarjetas SD": {
                product: "Tarjeta SD",
                description: "Memorias SD para cámaras y dispositivos compatibles."
            }

        }

    },


    "Impresoras y Suministros": {

        icon: "▣",

        image:
            "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=900&q=80",

        description:
            "Impresoras, suministros y accesorios para impresión.",

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


    "Celulares y Accesorios": {

        icon: "▯",

        image:
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",

        description:
            "Celulares, accesorios, cables, cargadores y protección.",

        subcategories: {

            "Celulares": {
                product: "Celular",
                description: "Celulares de diferentes características y gamas."
            },

            "Cargadores": {
                product: "Cargador para celular",
                description: "Cargadores para diferentes dispositivos móviles."
            },

            "Cables": {
                product: "Cable para celular",
                description: "Cables para carga y transferencia de datos."
            },

            "Fundas": {
                product: "Funda para celular",
                description: "Fundas para proteger diferentes modelos de celulares."
            },

            "Vidrios templados": {
                product: "Vidrio templado",
                description: "Protección para la pantalla del celular."
            },

            "Audífonos": {
                product: "Audífonos para celular",
                description: "Audífonos para música, llamadas y entretenimiento."
            },

            "Soportes": {
                product: "Soporte para celular",
                description: "Soportes para escritorio, vehículo y diferentes espacios."
            },

            "Accesorios para teléfonos": {
                product: "Accesorio para teléfono",
                description: "Accesorios complementarios para dispositivos móviles."
            }

        }

    },


    "Sillas": {

        icon: "▰",

        image:
            "https://images.unsplash.com/photo-1596162954151-cdcb4c0f70f0?auto=format&fit=crop&w=900&q=80",

        description:
            "Sillas para gaming, trabajo y oficina.",

        subcategories: {

            "Sillas Gaming": {
                product: "Silla Gaming",
                description: "Sillas diseñadas para largas sesiones de juego."
            },

            "Sillas de oficina": {
                product: "Silla de oficina",
                description: "Sillas para espacios de trabajo y oficina."
            }

        }

    },


    "Energía": {

        icon: "⚡",

        image:
            "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=80",

        description:
            "Soluciones para protección y respaldo eléctrico.",

        subcategories: {

            "UPS": {
                product: "UPS",
                description: "Sistemas de respaldo eléctrico para equipos tecnológicos."
            },

            "Reguladores de voltaje": {
                product: "Regulador de voltaje",
                description: "Protección y regulación para equipos electrónicos."
            }

        }

    }

};


/* =========================================================
   SERVICIOS
========================================================= */

const services = [

    {
        id: "mantenimiento",

        title: "Mantenimiento",

        icon: "⚙",

        short:
            "Mantenimiento preventivo para conservar tus equipos en buenas condiciones.",

        description:
            "Servicio orientado a revisar, limpiar y mantener el funcionamiento adecuado de computadores y equipos tecnológicos.",

        includes: [
            "Revisión general del equipo",
            "Limpieza interna y externa",
            "Revisión de componentes",
            "Revisión de temperaturas",
            "Verificación general de funcionamiento"
        ],

        audience:
            "Personas, estudiantes, profesionales y empresas que desean mantener sus equipos en buenas condiciones.",

        benefit:
            "Ayuda a prevenir problemas, mantener el rendimiento y prolongar la vida útil del equipo."
    },


    {
        id: "reparacion",

        title: "Reparación",

        icon: "🔧",

        short:
            "Atención de fallas y problemas en equipos tecnológicos.",

        description:
            "Servicio técnico para identificar y solucionar problemas relacionados con computadores y dispositivos tecnológicos.",

        includes: [
            "Recepción y revisión del equipo",
            "Identificación de la falla",
            "Diagnóstico técnico",
            "Propuesta de solución",
            "Reparación según el caso"
        ],

        audience:
            "Usuarios y empresas que presentan fallas de funcionamiento en sus equipos.",

        benefit:
            "Permite identificar la causa del problema y establecer una solución técnica adecuada."
    },


    {
        id: "instalacion",

        title: "Instalación de programas y configuración",

        icon: "▣",

        short:
            "Instalación, configuración y puesta a punto de software.",

        description:
            "Servicio para instalar y configurar programas, aplicaciones y diferentes herramientas necesarias para trabajar o estudiar.",

        includes: [
            "Instalación de programas",
            "Configuración inicial",
            "Configuración de periféricos",
            "Configuración básica del sistema",
            "Verificación de funcionamiento"
        ],

        audience:
            "Usuarios que necesitan preparar un computador para estudio, trabajo o uso personal.",

        benefit:
            "Deja el equipo configurado para que puedas comenzar a utilizarlo correctamente."
    },


    {
        id: "optimizacion",

        title: "Optimización de equipos",

        icon: "↗",

        short:
            "Mejora del rendimiento y funcionamiento general del equipo.",

        description:
            "Servicio enfocado en revisar configuraciones y posibles puntos de mejora para obtener un funcionamiento más eficiente.",

        includes: [
            "Revisión del rendimiento",
            "Revisión del almacenamiento",
            "Revisión de programas",
            "Revisión de configuración",
            "Recomendaciones de mejora"
        ],

        audience:
            "Usuarios que sienten que su computador funciona lento o desean mejorar su experiencia.",

        benefit:
            "Ayuda a identificar oportunidades para mejorar el rendimiento del equipo."
    },


    {
        id: "diagnostico",

        title: "Diagnóstico técnico",

        icon: "⌕",

        short:
            "Identificación de problemas y posibles causas.",

        description:
            "Servicio para revisar un equipo cuando presenta síntomas, errores o comportamientos que requieren una evaluación técnica.",

        includes: [
            "Inspección inicial",
            "Pruebas de funcionamiento",
            "Identificación de síntomas",
            "Análisis de posibles causas",
            "Recomendación técnica"
        ],

        audience:
            "Usuarios que no saben exactamente qué problema presenta su equipo.",

        benefit:
            "Permite conocer mejor la situación antes de tomar una decisión de reparación o actualización."
    },


    {
        id: "soporte",

        title: "Soporte técnico",

        icon: "◉",

        short:
            "Asistencia para resolver dudas y problemas tecnológicos.",

        description:
            "Servicio de acompañamiento para resolver diferentes necesidades relacionadas con equipos, programas, configuraciones y tecnología.",

        includes: [
            "Orientación técnica",
            "Resolución de dudas",
            "Configuración básica",
            "Ayuda con periféricos",
            "Recomendaciones tecnológicas"
        ],

        audience:
            "Personas y empresas que necesitan orientación o ayuda con sus equipos tecnológicos.",

        benefit:
            "Recibe orientación para resolver problemas y utilizar mejor tus herramientas tecnológicas."
    }

];


/* =========================================================
   IMÁGENES GENÉRICAS PARA PRODUCTOS
========================================================= */

const productImages = {

    "Computadores":
        "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=900&q=80",

    "Monitores y TV":
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=80",

    "Gaming":
        "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=900&q=80",

    "Periféricos":
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80",

    "Accesorios":
        "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=900&q=80",

    "Memorias y Almacenamiento":
        "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=900&q=80",

    "Impresoras y Suministros":
        "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=900&q=80",

    "Celulares y Accesorios":
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",

    "Sillas":
        "https://images.unsplash.com/photo-1596162954151-cdcb4c0f70f0?auto=format&fit=crop&w=900&q=80",

    "Energía":
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=80"
};


/* =========================================================
   ESTADO
========================================================= */

let currentCategory = null;
let currentSubcategory = null;
let currentSearch = "";

let productList = [];


/* =========================================================
   CREAR PRODUCTOS
========================================================= */

function buildProducts() {

    productList = [];

    Object.entries(catalog).forEach(
        ([categoryName, categoryData]) => {

            /*
                Categorías con subcategorías directas
            */

            if (categoryData.subcategories) {

                Object.entries(categoryData.subcategories).forEach(
                    ([subcategoryName, productData]) => {

                        productList.push({
                            id:
                                slugify(
                                    `${categoryName}-${subcategoryName}`
                                ),

                            name: productData.product,

                            description: productData.description,

                            category: categoryName,

                            group: null,

                            subcategory: subcategoryName,

                            image:
                                productImages[categoryName]
                        });

                    }
                );

            }


            /*
                Categorías con grupos
            */

            if (categoryData.groups) {

                Object.entries(categoryData.groups).forEach(
                    ([groupName, subcategories]) => {

                        subcategories.forEach(
                            subcategoryName => {

                                const generatedName =
                                    getGeneratedProductName(
                                        categoryName,
                                        groupName,
                                        subcategoryName
                                    );

                                productList.push({

                                    id:
                                        slugify(
                                            `${categoryName}-${groupName}-${subcategoryName}`
                                        ),

                                    name: generatedName,

                                    description:
                                        `Producto de ${subcategoryName.toLowerCase()} para ${categoryName.toLowerCase()}.`,

                                    category: categoryName,

                                    group: groupName,

                                    subcategory: subcategoryName,

                                    image:
                                        productImages[categoryName]
                                });

                            }
                        );

                    }
                );

            }

        }
    );

}


/* =========================================================
   NOMBRES GENERADOS
========================================================= */

function getGeneratedProductName(
    category,
    group,
    subcategory
) {

    if (category === "Periféricos") {

        if (group === "Teclados") {
            return `Teclado ${subcategory}`;
        }

        if (group === "Mouse") {
            return `Mouse ${subcategory}`;
        }

        if (group === "Combos") {
            return subcategory;
        }

        if (group === "Audio") {
            return subcategory;
        }

        if (group === "Cámaras") {
            return subcategory;
        }

    }


    if (category === "Accesorios") {
        return subcategory;
    }


    if (category === "Impresoras y Suministros") {

        if (group === "Impresoras") {
            return subcategory;
        }

        if (group === "Suministros") {
            return subcategory;
        }

        if (group === "Accesorios") {
            return subcategory;
        }

    }


    return subcategory;
}


/* =========================================================
   UTILIDADES
========================================================= */

function slugify(text) {

    return text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
}


function escapeHtml(value) {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}


/* =========================================================
   ELEMENTOS
========================================================= */

const categoriesGrid =
    document.getElementById("categoriesGrid");

const productsGrid =
    document.getElementById("productsGrid");

const servicesGrid =
    document.getElementById("servicesGrid");

const subcategoryArea =
    document.getElementById("subcategoryArea");

const subcategoryGrid =
    document.getElementById("subcategoryGrid");

const subcategoryTitle =
    document.getElementById("subcategoryTitle");

const catalogTitle =
    document.getElementById("catalogTitle");

const catalogDescription =
    document.getElementById("catalogDescription");

const catalogResultsInfo =
    document.getElementById("catalogResultsInfo");

const breadcrumbCategory =
    document.getElementById("breadcrumbCategory");

const breadcrumbSeparator =
    document.getElementById("breadcrumbSeparator");

const breadcrumbSubcategory =
    document.getElementById("breadcrumbSubcategory");

const emptyState =
    document.getElementById("emptyState");

const heroSearch =
    document.getElementById("heroSearch");

const heroSearchButton =
    document.getElementById("heroSearchButton");

const clearSearchButton =
    document.getElementById("clearSearchButton");


/* =========================================================
   RENDER CATEGORÍAS
========================================================= */

function renderCategories() {

    categoriesGrid.innerHTML = "";

    Object.entries(catalog).forEach(
        ([categoryName, categoryData]) => {

            const subcategoryCount =
                categoryData.subcategories
                    ? Object.keys(categoryData.subcategories).length
                    : Object.values(categoryData.groups)
                        .reduce(
                            (total, items) =>
                                total + items.length,
                            0
                        );

            const button =
                document.createElement("button");

            button.type = "button";

            button.className = "category-card";

            button.innerHTML = `

                <img
                    class="category-card-image"
                    src="${categoryData.image}"
                    alt="${escapeHtml(categoryName)}"
                    loading="lazy"
                >

                <div class="category-content">

                    <div class="category-icon">
                        ${categoryData.icon}
                    </div>

                    <h3>
                        ${escapeHtml(categoryName)}
                    </h3>

                    <p>
                        ${subcategoryCount} opciones para explorar
                    </p>

                </div>
            `;

            button.addEventListener(
                "click",
                () => selectCategory(categoryName)
            );

            categoriesGrid.appendChild(button);

        }
    );

}


/* =========================================================
   SELECCIONAR CATEGORÍA
========================================================= */

function selectCategory(categoryName) {

    currentCategory = categoryName;
    currentSubcategory = null;
    currentSearch = "";

    heroSearch.value = "";

    const category =
        catalog[categoryName];

    catalogTitle.textContent =
        categoryName;

    catalogDescription.textContent =
        category.description;

    breadcrumbCategory.textContent =
        categoryName;

    breadcrumbSeparator.classList.add("hidden");

    breadcrumbSubcategory.textContent = "";
    breadcrumbSubcategory.classList.add("hidden");

    renderSubcategories(categoryName);

    renderProducts();

    subcategoryArea.classList.remove("hidden");

    document
        .getElementById("catalogo")
        .scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

}


/* =========================================================
   RENDER SUBCATEGORÍAS
========================================================= */

function renderSubcategories(categoryName) {

    const category =
        catalog[categoryName];

    subcategoryGrid.innerHTML = "";

    subcategoryTitle.textContent =
        "Selecciona una categoría";

    /*
        Subcategorías directas
    */

    if (category.subcategories) {

        Object.keys(
            category.subcategories
        ).forEach(
            subcategoryName => {

                const button =
                    createSubcategoryButton(
                        subcategoryName,
                        subcategoryName
                    );

                subcategoryGrid.appendChild(button);

            }
        );

        return;
    }


    /*
        Categorías con grupos
    */

    Object.entries(category.groups)
        .forEach(
            ([groupName, subcategories]) => {

                const groupWrapper =
                    document.createElement("div");

                groupWrapper.className =
                    "subcategory-group";

                const groupTitle =
                    document.createElement("strong");

                groupTitle.textContent =
                    groupName;

                groupTitle.style.width = "100%";
                groupTitle.style.marginBottom = "2px";
                groupTitle.style.color = "var(--ink-strong)";
                groupTitle.style.fontSize = "0.8rem";

                groupWrapper.appendChild(
                    groupTitle
                );


                subcategories.forEach(
                    subcategoryName => {

                        const button =
                            createSubcategoryButton(
                                subcategoryName,
                                subcategoryName,
                                groupName
                            );

                        groupWrapper.appendChild(
                            button
                        );

                    }
                );


                subcategoryGrid.appendChild(
                    groupWrapper
                );

            }
        );

}


/* =========================================================
   BOTÓN SUBCATEGORÍA
========================================================= */

function createSubcategoryButton(
    name,
    subcategoryName,
    groupName = null
) {

    const button =
        document.createElement("button");

    button.type = "button";

    button.className =
        "subcategory-button";

    button.textContent =
        name;

    button.addEventListener(
        "click",
        () => {

            currentSubcategory =
                subcategoryName;

            renderProducts(
                currentCategory,
                currentSubcategory,
                groupName
            );

            breadcrumbSeparator.classList.remove(
                "hidden"
            );

            breadcrumbSubcategory.textContent =
                subcategoryName;

            breadcrumbSubcategory.classList.remove(
                "hidden"
            );

            catalogTitle.textContent =
                subcategoryName;

            catalogDescription.textContent =
                `Productos disponibles en ${subcategoryName}.`;

            document
                .querySelectorAll(
                    ".subcategory-button"
                )
                .forEach(
                    item =>
                        item.classList.remove("active")
                );

            button.classList.add("active");

        }
    );

    return button;
}


/* =========================================================
   RENDER PRODUCTOS
========================================================= */

function renderProducts(
    category = currentCategory,
    subcategory = currentSubcategory,
    group = null
) {

    let results =
        [...productList];


    /*
        Búsqueda
    */

    if (currentSearch.trim()) {

        const query =
            currentSearch
                .toLowerCase()
                .trim();

        results =
            results.filter(
                product => {

                    const searchable =
                        [
                            product.name,
                            product.description,
                            product.category,
                            product.group,
                            product.subcategory
                        ]
                            .filter(Boolean)
                            .join(" ")
                            .toLowerCase();

                    return searchable.includes(query);

                }
            );

    }


    /*
        Categoría
    */

    if (category) {

        results =
            results.filter(
                product =>
                    product.category === category
            );

    }


    /*
        Grupo
    */

    if (group) {

        results =
            results.filter(
                product =>
                    product.group === group
            );

    }


    /*
        Subcategoría
    */

    if (subcategory) {

        results =
            results.filter(
                product =>
                    product.subcategory === subcategory
            );

    }


    productsGrid.innerHTML = "";


    if (!results.length) {

        emptyState.classList.remove(
            "hidden"
        );

        catalogResultsInfo.textContent =
            "No se encontraron productos.";

        return;

    }


    emptyState.classList.add(
        "hidden"
    );


    catalogResultsInfo.textContent =
        `${results.length} producto${results.length === 1 ? "" : "s"} encontrado${results.length === 1 ? "" : "s"}.`;


    results.forEach(
        product => {

            const card =
                document.createElement("article");

            card.className =
                "product-card";

            card.innerHTML = `

                <div class="product-image">

                    <img
                        src="${product.image}"
                        alt="${escapeHtml(product.name)}"
                        loading="lazy"
                    >

                    <span class="product-tag">
                        Cotizar
                    </span>

                </div>


                <div class="product-content">

                    <span class="product-category">
                        ${escapeHtml(product.category)}
                    </span>

                    <h3>
                        ${escapeHtml(product.name)}
                    </h3>

                    <p>
                        ${escapeHtml(product.description)}
                    </p>


                    <div class="product-button">

                        <button
                            type="button"
                            class="product-whatsapp"
                        >
                            Cotizar por WhatsApp
                        </button>

                    </div>

                </div>
            `;


            const button =
                card.querySelector(
                    ".product-whatsapp"
                );


            button.addEventListener(
                "click",
                () => {

                    const message =
                        `Hola Nexus, estoy interesado en cotizar el siguiente producto:

Producto: ${product.name}
Categoría: ${product.category}
${product.group ? `Grupo: ${product.group}\n` : ""}Subcategoría: ${product.subcategory}

Quisiera conocer disponibilidad y opciones.`;

                    openWhatsApp(message);

                }
            );


            productsGrid.appendChild(
                card
            );

        }
    );

}


/* =========================================================
   BÚSQUEDA
========================================================= */

function performSearch() {

    currentSearch =
        heroSearch.value.trim();

    currentCategory = null;
    currentSubcategory = null;

    subcategoryArea.classList.add(
        "hidden"
    );

    breadcrumbCategory.textContent =
        currentSearch
            ? `Búsqueda: "${currentSearch}"`
            : "Catálogo";

    breadcrumbSeparator.classList.add(
        "hidden"
    );

    breadcrumbSubcategory.classList.add(
        "hidden"
    );

    catalogTitle.textContent =
        currentSearch
            ? `Resultados para "${currentSearch}"`
            : "Todos los productos";

    catalogDescription.textContent =
        currentSearch
            ? "Productos relacionados con tu búsqueda."
            : "Explora todo nuestro catálogo.";

    renderProducts();

    document
        .getElementById("catalogo")
        .scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

}


heroSearchButton.addEventListener(
    "click",
    performSearch
);


heroSearch.addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {
            performSearch();
        }

    }
);


/* =========================================================
   LIMPIAR BÚSQUEDA
========================================================= */

clearSearchButton.addEventListener(
    "click",
    () => {

        currentSearch = "";
        currentCategory = null;
        currentSubcategory = null;

        heroSearch.value = "";

        subcategoryArea.classList.add(
            "hidden"
        );

        breadcrumbCategory.textContent =
            "Catálogo";

        breadcrumbSeparator.classList.add(
            "hidden"
        );

        breadcrumbSubcategory.classList.add(
            "hidden"
        );

        catalogTitle.textContent =
            "Todos los productos";

        catalogDescription.textContent =
            "Explora todo nuestro catálogo.";

        renderProducts();

    }
);


/* =========================================================
   BOTÓN "TODOS"
========================================================= */

document
    .querySelector(
        '[data-action="all"]'
    )
    .addEventListener(
        "click",
        () => {

            currentCategory = null;
            currentSubcategory = null;
            currentSearch = "";

            heroSearch.value = "";

            subcategoryArea.classList.add(
                "hidden"
            );

            breadcrumbCategory.textContent =
                "Catálogo";

            breadcrumbSeparator.classList.add(
                "hidden"
            );

            breadcrumbSubcategory.classList.add(
                "hidden"
            );

            catalogTitle.textContent =
                "Todos los productos";

            catalogDescription.textContent =
                "Explora todo nuestro catálogo.";

            renderProducts();

        }
    );


/* =========================================================
   VOLVER DESDE SUBCATEGORÍA
========================================================= */

document
    .getElementById(
        "backCategoryButton"
    )
    .addEventListener(
        "click",
        () => {

            if (!currentCategory) {
                return;
            }

            currentSubcategory = null;

            breadcrumbSeparator.classList.add(
                "hidden"
            );

            breadcrumbSubcategory.classList.add(
                "hidden"
            );

            catalogTitle.textContent =
                currentCategory;

            catalogDescription.textContent =
                catalog[currentCategory].description;

            renderSubcategories(
                currentCategory
            );

            renderProducts();

        }
    );


/* =========================================================
   SERVICIOS
========================================================= */

function renderServices() {

    servicesGrid.innerHTML = "";

    services.forEach(
        service => {

            const card =
                document.createElement("button");

            card.type = "button";

            card.className =
                "service-card";

            card.innerHTML = `

                <div class="service-icon">
                    ${service.icon}
                </div>

                <h3>
                    ${escapeHtml(service.title)}
                </h3>

                <p>
                    ${escapeHtml(service.short)}
                </p>

                <span class="service-card-button">
                    Ver información →
                </span>

            `;


            card.addEventListener(
                "click",
                () => openServiceModal(service)
            );


            servicesGrid.appendChild(
                card
            );

        }
    );

}


/* =========================================================
   MODAL SERVICIOS
========================================================= */

const serviceModal =
    document.getElementById(
        "serviceModal"
    );

const serviceModalTitle =
    document.getElementById(
        "serviceModalTitle"
    );

const serviceModalIcon =
    document.getElementById(
        "serviceModalIcon"
    );

const serviceModalDescription =
    document.getElementById(
        "serviceModalDescription"
    );

const serviceModalIncludes =
    document.getElementById(
        "serviceModalIncludes"
    );

const serviceModalAudience =
    document.getElementById(
        "serviceModalAudience"
    );

const serviceModalBenefit =
    document.getElementById(
        "serviceModalBenefit"
    );

const serviceWhatsappButton =
    document.getElementById(
        "serviceWhatsappButton"
    );

let selectedService = null;


function openServiceModal(service) {

    selectedService = service;

    serviceModalTitle.textContent =
        service.title;

    serviceModalIcon.textContent =
        service.icon;

    serviceModalDescription.textContent =
        service.description;

    serviceModalAudience.textContent =
        service.audience;

    serviceModalBenefit.textContent =
        service.benefit;


    serviceModalIncludes.innerHTML =
        service.includes
            .map(
                item =>
                    `<li>${escapeHtml(item)}</li>`
            )
            .join("");


    serviceModal.classList.remove(
        "hidden"
    );

    serviceModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "modal-open"
    );

}


function closeServiceModal() {

    serviceModal.classList.add(
        "hidden"
    );

    serviceModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "modal-open"
    );

    selectedService = null;

}


document
    .getElementById(
        "serviceModalClose"
    )
    .addEventListener(
        "click",
        closeServiceModal
    );


serviceModal.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            serviceModal
        ) {
            closeServiceModal();
        }

    }
);


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            !serviceModal.classList.contains("hidden")
        ) {

            closeServiceModal();

        }

    }
);


serviceWhatsappButton.addEventListener(
    "click",
    () => {

        if (!selectedService) {
            return;
        }

        const message =
            `Hola Nexus, estoy interesado en solicitar el siguiente servicio:

Servicio: ${selectedService.title}

Quisiera conocer disponibilidad, proceso y opciones para realizarlo.`;

        openWhatsApp(message);

    }
);


/* =========================================================
   WHATSAPP - ASESORÍA / GENERAL
========================================================= */

document
    .querySelectorAll(
        "[data-whatsapp]"
    )
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    const type =
                        button.dataset.whatsapp;

                    let message =
                        "Hola Nexus, quiero comunicarme con un asesor.";

                    if (type === "asesoria") {

                        message =
                            `Hola Nexus, quiero solicitar asesoría.

Necesito ayuda para elegir una solución tecnológica y quisiera hablar con un asesor.`;

                    }

                    if (type === "general") {

                        message =
                            `Hola Nexus, quiero información sobre sus productos y servicios.`;

                    }

                    openWhatsApp(message);

                }
            );

        }
    );


/* =========================================================
   FOOTER CATEGORÍAS
========================================================= */

document
    .querySelectorAll(
        "[data-footer-category]"
    )
    .forEach(
        link => {

            link.addEventListener(
                "click",
                event => {

                    event.preventDefault();

                    const category =
                        link.dataset.footerCategory;

                    selectCategory(category);

                }
            );

        }
    );


/* =========================================================
   MENÚ MÓVIL
========================================================= */

const mobileMenuButton =
    document.getElementById(
        "mobileMenuButton"
    );

const mainNav =
    document.getElementById(
        "mainNav"
    );


mobileMenuButton.addEventListener(
    "click",
    () => {

        const isOpen =
            mainNav.classList.toggle(
                "open"
            );

        mobileMenuButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

    }
);


mainNav
    .querySelectorAll("a")
    .forEach(
        link => {

            link.addEventListener(
                "click",
                () => {

                    mainNav.classList.remove(
                        "open"
                    );

                    mobileMenuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        }
    );


/* =========================================================
   AÑO
========================================================= */

document.getElementById(
    "currentYear"
).textContent =
    new Date().getFullYear();


/* =========================================================
   INICIALIZACIÓN
========================================================= */

buildProducts();

renderCategories();

renderServices();

renderProducts();
```
