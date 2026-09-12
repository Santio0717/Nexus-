:root {
  --bg: #f3f4f6;
  --bg-soft: #e5e7eb;
  --card: #f8fafc;
  --card-strong: #ffffff;

  --ink: #1f2937;
  --ink-strong: #111827;
  --muted: #6b7280;

  --line: #d1d5db;

  --accent: #8b5cf6;
  --accent-dark: #7c3aed;
  --accent-soft: rgba(139, 92, 246, 0.10);

  --navy: #1e3a5f;
  --navy-dark: #14253d;

  --shadow-sm: 0 8px 20px rgba(15, 23, 42, 0.06);
  --shadow-md: 0 18px 36px rgba(15, 23, 42, 0.09);
  --shadow-lg: 0 24px 52px rgba(15, 23, 42, 0.12);

  --radius-sm: 12px;
  --radius-md: 18px;
  --radius-lg: 24px;
  --radius-pill: 999px;

  --max-width: 1240px;
}


/* RESET */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  background: var(--bg);
  color: var(--ink);
  font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  line-height: 1.5;
}

img {
  display: block;
  max-width: 100%;
}

button,
input {
  font: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}

.container {
  width: min(calc(100% - 40px), var(--max-width));
  margin-inline: auto;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}


/* HEADER */

.site-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(248, 250, 252, 0.96);
  border-bottom: 1px solid var(--line);
  backdrop-filter: blur(16px);
}

.header-container {
  width: min(calc(100% - 40px), var(--max-width));
  min-height: 82px;
  margin-inline: auto;

  display: flex;
  align-items: center;
  gap: 22px;
}

.brand {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
}

.brand img {
  width: 120px;
  height: 48px;
  object-fit: contain;
}


/* BUSCADOR */

.header-search {
  flex: 1;
  max-width: 520px;
}

.header-search input {
  width: 100%;
  height: 46px;
  padding: 0 18px;

  border: 1px solid var(--line);
  border-radius: var(--radius-pill);

  background: var(--card-strong);
  color: var(--ink-strong);

  outline: none;
  transition: 0.2s ease;
}

.header-search input::placeholder {
  color: var(--muted);
}

.header-search input:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 4px var(--accent-soft);
}


/* NAV */

.main-nav {
  margin-left: auto;

  display: flex;
  align-items: center;
  gap: 8px;
}

.main-nav a {
  padding: 10px 14px;
  border-radius: var(--radius-pill);

  color: var(--muted);
  font-size: 14px;
  font-weight: 600;

  transition: 0.2s ease;
}

.main-nav a:hover {
  color: var(--ink-strong);
  background: var(--accent-soft);
}


/* MOBILE MENU */

.menu-toggle {
  display: none;

  width: 44px;
  height: 44px;

  border: 1px solid var(--line);
  border-radius: var(--radius-sm);

  background: var(--card-strong);

  cursor: pointer;
}

.menu-toggle span {
  display: block;
  width: 20px;
  height: 2px;
  margin: 4px auto;

  background: var(--ink-strong);
  border-radius: 4px;
}


/* HERO */

.hero {
  padding: 46px 0 20px;
}

.hero-card {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 32px;
  align-items: stretch;

  padding: 42px;

  border: 1px solid var(--line);
  border-radius: var(--radius-lg);

  background:
    linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.98),
      rgba(248, 250, 252, 0.92)
    );

  box-shadow: var(--shadow-md);
}

.hero-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.eyebrow,
.section-kicker {
  display: inline-block;
  margin-bottom: 10px;

  color: var(--accent-dark);

  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.14em;
}

.hero h1 {
  margin-bottom: 14px;

  color: var(--ink-strong);

  font-size: clamp(30px, 4vw, 48px);
  line-height: 1.08;
  letter-spacing: -0.035em;
}

.hero p {
  max-width: 760px;

  color: var(--muted);
  font-size: 16px;
}

.hero p strong {
  color: var(--ink-strong);
}


/* HORARIO */

.schedule-card {
  min-height: 170px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 28px;

  border-radius: var(--radius-md);

  background: var(--navy);
  color: white;

  box-shadow: var(--shadow-sm);
}

.schedule-card span {
  margin-bottom: 10px;

  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.12em;

  opacity: 0.75;
}

.schedule-card strong {
  margin-bottom: 4px;
  font-size: 18px;
}

.schedule-card b {
  font-size: 17px;
}


/* UBICACIÓN */

.location-section {
  padding: 8px 0 28px;
}

.location-link {
  min-height: 62px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  padding: 0 22px;

  border: 1px solid var(--line);
  border-radius: var(--radius-md);

  background: var(--card-strong);

  box-shadow: var(--shadow-sm);

  transition: 0.2s ease;
}

.location-link:hover {
  transform: translateY(-2px);
  border-color: var(--accent);
  box-shadow: var(--shadow-md);
}

.location-link span {
  color: var(--ink-strong);
  font-weight: 700;
}

.location-link strong {
  color: var(--accent-dark);
  font-size: 14px;
}


/* CATÁLOGO */

.catalog-section {
  padding: 32px 0 80px;
}

.catalog-heading {
  margin-bottom: 34px;
}

.catalog-heading h2 {
  color: var(--ink-strong);
  font-size: clamp(25px, 3vw, 36px);
  letter-spacing: -0.025em;
}


/* CATEGORÍAS */

.catalog-category {
  margin-bottom: 54px;
}

.category-header {
  display: flex;
  align-items: center;
  gap: 14px;

  margin-bottom: 20px;
}

.category-header::before {
  content: "";
  width: 5px;
  height: 30px;

  flex: 0 0 auto;

  border-radius: var(--radius-pill);
  background: var(--accent);
}

.category-header h3 {
  color: var(--ink-strong);
  font-size: 22px;
  line-height: 1.2;
}


/* SUBCATEGORÍAS */

.subcategory-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}


/* TARJETA */

.subcategory-card {
  min-width: 0;

  display: flex;
  flex-direction: column;

  overflow: hidden;

  border: 1px solid var(--line);
  border-radius: var(--radius-md);

  background: var(--card-strong);

  box-shadow: var(--shadow-sm);

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;
}

.subcategory-card:hover {
  transform: translateY(-4px);
  border-color: rgba(139, 92, 246, 0.35);
  box-shadow: var(--shadow-md);
}


/* IMAGEN
   Todas tienen exactamente el mismo espacio.
   contain evita deformación y recorte.
*/

.subcategory-image-wrap {
  width: 100%;
  height: 190px;
  min-height: 190px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 18px;

  overflow: hidden;

  background: #ffffff;
}

.subcategory-image-wrap img {
  width: 100%;
  height: 100%;

  max-width: 100%;
  max-height: 100%;

  object-fit: contain;
  object-position: center;
}


/* CONTENIDO */

.subcategory-content {
  flex: 1;

  display: flex;
  flex-direction: column;

  padding: 20px;
}

.subcategory-content h4 {
  min-height: 48px;

  display: flex;
  align-items: center;

  margin-bottom: 16px;

  color: var(--ink-strong);

  font-size: 16px;
  line-height: 1.35;
}


/* BOTÓN */

.quote-button {
  width: 100%;
  min-height: 44px;

  margin-top: auto;

  border: 0;
  border-radius: var(--radius-pill);

  background: var(--navy);
  color: white;

  font-size: 14px;
  font-weight: 700;

  cursor: pointer;

  transition: 0.2s ease;
}

.quote-button:hover {
  background: var(--navy-dark);
  transform: translateY(-1px);
}


/* SIN RESULTADOS */

.no-results {
  padding: 50px 20px;

  border: 1px solid var(--line);
  border-radius: var(--radius-md);

  background: var(--card-strong);
  text-align: center;
}

.no-results h3 {
  margin-bottom: 6px;
  color: var(--ink-strong);
}

.no-results p {
  color: var(--muted);
}


/* CONTACTO */

.contact-section {
  padding: 0 0 80px;
}

.contact-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;

  padding: 36px;

  border-radius: var(--radius-lg);

  background: var(--navy);
  color: white;

  box-shadow: var(--shadow-md);
}

.contact-card .section-kicker {
  color: rgba(255, 255, 255, 0.65);
}

.contact-card h2 {
  margin-bottom: 8px;

  font-size: clamp(22px, 3vw, 32px);
}

.contact-card p {
  max-width: 650px;
  color: rgba(255, 255, 255, 0.75);
}

.contact-button {
  flex: 0 0 auto;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 48px;
  padding: 0 22px;

  border-radius: var(--radius-pill);

  background: white;
  color: var(--navy);

  font-size: 14px;
  font-weight: 800;

  transition: 0.2s ease;
}

.contact-button:hover {
  transform: translateY(-2px);
}


/* FOOTER */

.site-footer {
  border-top: 1px solid var(--line);
  background: var(--card-strong);
}

.footer-content {
  min-height: 120px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

.footer-content strong {
  display: block;
  margin-bottom: 4px;

  color: var(--ink-strong);
  letter-spacing: 0.08em;
}

.footer-content p,
.footer-content span {
  color: var(--muted);
  font-size: 13px;
}

.footer-content > div:last-child {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}


/* TABLET */

@media (max-width: 1100px) {

  .subcategory-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .header-container {
    flex-wrap: wrap;
    padding: 14px 0;
  }

  .header-search {
    order: 3;
    flex-basis: 100%;
    max-width: none;
  }

}


/* TABLET PEQUEÑA */

@media (max-width: 800px) {

  .hero-card {
    grid-template-columns: 1fr;
    padding: 30px;
  }

  .schedule-card {
    min-height: auto;
  }

  .subcategory-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .contact-card {
    align-items: flex-start;
    flex-direction: column;
  }

  .footer-content {
    padding: 26px 0;
    flex-direction: column;
    align-items: flex-start;
  }

  .footer-content > div:last-child {
    align-items: flex-start;
  }

}


/* MÓVIL */

@media (max-width: 620px) {

  .container,
  .header-container {
    width: min(calc(100% - 28px), var(--max-width));
  }

  .site-header {
    position: relative;
  }

  .header-container {
    min-height: 72px;
    gap: 12px;
  }

  .brand img {
    width: 105px;
    height: 42px;
  }

  .menu-toggle {
    display: block;
    margin-left: auto;
  }

  .main-nav {
    position: absolute;
    top: 72px;
    left: 14px;
    right: 14px;

    display: none;
    flex-direction: column;
    align-items: stretch;

    padding: 10px;

    border: 1px solid var(--line);
    border-radius: var(--radius-md);

    background: var(--card-strong);
    box-shadow: var(--shadow-md);
  }

  .main-nav.open {
    display: flex;
  }

  .main-nav a {
    padding: 13px 14px;
  }

  .header-search {
    order: 3;
    flex-basis: 100%;
    margin-bottom: 4px;
  }

  .hero {
    padding-top: 24px;
  }

  .hero-card {
    padding: 24px;
    border-radius: var(--radius-md);
  }

  .hero h1 {
    font-size: 31px;
  }

  .hero p {
    font-size: 15px;
  }

  .location-link {
    padding: 0 16px;
  }

  .catalog-section {
    padding-bottom: 55px;
  }

  .subcategory-grid {
    grid-template-columns: 1fr;
  }

  .subcategory-image-wrap {
    height: 210px;
    min-height: 210px;
  }

  .subcategory-content h4 {
    min-height: auto;
  }

  .contact-card {
    padding: 26px;
  }

  .contact-button {
    width: 100%;
  }

}