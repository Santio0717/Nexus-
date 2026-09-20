// Datos de productos por categoría
const products = {
    computadores: [
        {
            name: 'Laptop Gaming HP',
            price: '$1,299',
            gradient: 'blue',
            image: 'https://via.placeholder.com/400x300?text=HP+Gaming+Laptop'
        },
        {
            name: 'Laptop Ultrabook Dell',
            price: '$899',
            gradient: 'blue',
            image: 'https://via.placeholder.com/400x300?text=Dell+Ultrabook'
        },
        {
            name: 'MacBook Pro 16',
            price: '$2,499',
            gradient: 'blue',
            image: 'https://via.placeholder.com/400x300?text=MacBook+Pro'
        }
    ],
    gaming: [
        {
            name: 'ASUS TUF Gaming Laptop',
            price: '$1,599',
            gradient: 'green',
            image: 'https://via.placeholder.com/400x300?text=ASUS+TUF'
        },
        {
            name: 'Razer Blade 15',
            price: '$1,799',
            gradient: 'green',
            image: 'https://via.placeholder.com/400x300?text=Razer+Blade'
        },
        {
            name: 'NVIDIA RTX 4090',
            price: '$1,699',
            gradient: 'green',
            image: 'https://via.placeholder.com/400x300?text=RTX+4090'
        }
    ],
    accesorios: [
        {
            name: 'Audífonos Inalámbricos Premium',
            price: '$299',
            gradient: 'dark',
            image: 'https://via.placeholder.com/400x300?text=Wireless+Headphones'
        },
        {
            name: 'Mouse Gaming RGB',
            price: '$79',
            gradient: 'dark',
            image: 'https://via.placeholder.com/400x300?text=Gaming+Mouse'
        },
        {
            name: 'Teclado Mecánico',
            price: '$189',
            gradient: 'dark',
            image: 'https://via.placeholder.com/400x300?text=Mechanical+Keyboard'
        }
    ],
    tablets: [
        {
            name: 'iPad Pro 12.9"',
            price: '$1,099',
            gradient: 'blue',
            image: 'https://via.placeholder.com/400x300?text=iPad+Pro'
        },
        {
            name: 'Samsung Galaxy Tab S9',
            price: '$799',
            gradient: 'blue',
            image: 'https://via.placeholder.com/400x300?text=Galaxy+Tab'
        },
        {
            name: 'Lenovo Tab P12 Pro',
            price: '$749',
            gradient: 'blue',
            image: 'https://via.placeholder.com/400x300?text=Lenovo+Tab'
        }
    ]
};

// Elementos del DOM
const openCatalogBtn = document.getElementById('openCatalog');
const modal = document.getElementById('catalogModal');
const modalOverlay = document.getElementById('modalOverlay');
const closeModalBtn = document.querySelector('.close-modal');
const tabButtons = document.querySelectorAll('.tab-btn');
const productsGrid = document.getElementById('productsGrid');

// Evento: Abrir catálogo
openCatalogBtn.addEventListener('click', () => {
    modal.classList.add('active');
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Cargar productos de la primera categoría
    displayProducts('computadores');
});

// Evento: Cerrar catálogo
closeModalBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

function closeModal() {
    modal.classList.remove('active');
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Evento: Cambiar categoría
tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remover clase activa de todos los botones
        tabButtons.forEach(b => b.classList.remove('active'));
        // Agregar clase activa al botón clickeado
        btn.classList.add('active');
        
        // Cargar productos de la categoría
        const category = btn.dataset.category;
        displayProducts(category);
    });
});

// Función para mostrar productos
function displayProducts(category) {
    const categoryProducts = products[category] || [];
    
    productsGrid.innerHTML = categoryProducts.map(product => `
        <div class="product-card ${product.gradient}">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <div class="product-label">Producto destacado</div>
                <div class="product-name">${product.name}</div>
                <div class="product-price">${product.price}</div>
            </div>
        </div>
    `).join('');
}

// Cerrar modal con tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// Scroll suave para tabs
document.addEventListener('DOMContentLoaded', () => {
    const tabsContainer = document.querySelector('.category-tabs');
    if (tabsContainer) {
        let isDown = false;
        let startX;
        let scrollLeft;

        tabsContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - tabsContainer.offsetLeft;
            scrollLeft = tabsContainer.scrollLeft;
        });

        tabsContainer.addEventListener('mouseleave', () => {
            isDown = false;
        });

        tabsContainer.addEventListener('mouseup', () => {
            isDown = false;
        });

        tabsContainer.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - tabsContainer.offsetLeft;
            const walk = (x - startX) * 2;
            tabsContainer.scrollLeft = scrollLeft - walk;
        });
    }
});