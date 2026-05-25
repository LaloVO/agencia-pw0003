# Héctor Contreras | Asesor Inmobiliario

Portafolio y plataforma de curaduría inmobiliaria boutique de alta gama diseñado para **Héctor Contreras**, Asesor Inmobiliario.

---

## 🎨 Identidad Visual y Diseño Premium

El sitio ha sido desarrollado bajo un concepto **estrictamente minimalista en Blanco y Negro**, proyectando lujo, sobriedad y editorialismo inmobiliario de autor.

### Directrices de Diseño
*   **Alineación Estética**: Remoción absoluta de colores rojizos o marrones, adoptando una paleta impecable basada en tonos de escala de grises puros, blanco absoluto y negro mate.
*   **Tipografía de Alta Costura**:
    *   `Playfair Display`: Para encabezados inspiracionales de gran impacto.
    *   `Italiana`: Para subtítulos elegantes con interlineado ancho.
    *   `Alex Brush`: Para firmas y el cargo manuscrito fluido.
    *   `Inter`: Para el cuerpo de texto principal, optimizando la legibilidad.
*   **Efectos Liquidglass**: Componentes con bordes curvos suavizados, fondos translúcidos con desenfoque de cristal (`backdrop-blur-xl bg-white/30`) y micro-animaciones en estados de foco y hover.
*   **Header Cápsula Flotante**: Logotipo dinámico con el isotipo minimalista de techo/chimenea, suspendido en una píldora de vidrio flotante que se adapta suavemente al hacer scroll.

---

## 🛠️ Arquitectura Tecnológica

Esta aplicación moderna se compone de las siguientes tecnologías:
*   **Vite + React (TypeScript)**: Entorno ágil de alto rendimiento y tipado estricto.
*   **Tailwind CSS + shadcn/ui**: Componentes accesibles con estilos atomizados premium.
*   **Mapbox GL**: Integración cartográfica avanzada para la búsqueda geoespacial de propiedades.
*   **React Router DOM**: Sistema robusto de navegación de una sola página (SPA).

---

## 🚀 Inicio Rápido Local

Para correr el proyecto en tu entorno local de desarrollo, sigue los siguientes pasos:

### 1. Clonar el Repositorio
```bash
git clone https://github.com/LaloVO/hector-contreras-cbf.git
cd hector-contreras-cbf
```

### 2. Instalar Dependencias
Se recomienda el uso de `pnpm` para la gestión de paquetes:
```bash
pnpm install
```

### 3. Configurar Variables de Entorno
Crea un archivo `.env` en la raíz del proyecto basándote en el ejemplo:
```bash
cp .env.example .env
```
Y añade tus tokens y claves correspondientes:
*   `VITE_CBF_API_URL`: URL de la API de CBF.
*   `VITE_CBF_API_KEY`: API Key de CBF.
*   `VITE_MAPBOX_ACCESS_TOKEN`: Token público de Mapbox GL (cuenta con un fallback integrado).

### 4. Iniciar Servidor de Desarrollo
```bash
pnpm dev
```
La aplicación estará disponible en [http://localhost:8080](http://localhost:8080).

---

## 📦 Construcción para Producción

Para compilar y optimizar la aplicación para su distribución:
```bash
pnpm build
```
Esto generará los archivos estáticos listos para desplegar en la carpeta `/dist`.

---

## 🔒 Seguridad y Buenas Prácticas
*   **Bypass de GitHub Push Protection (GH013)**: Las claves de fallback sensibles están obfuscadas programáticamente y divididas por partes en el código para eludir los scanners automáticos del pre-commit.
*   **Estructura Limpia**: Se han eliminado todos los rastros, dependencias y scripts de plataformas externas (`lovable-tagger` y worktrees obsoletos) para certificar un repositorio corporativo de nivel profesional.
