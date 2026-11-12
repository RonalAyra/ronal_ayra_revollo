import { Experience } from "../types";

export const experiences: Experience[] = [
  {
    id: 18,
    company: "WR Inventory ERP — Sistema ERP Empresarial Multi-Agencia y Multi-Almacén",
    position: "Full Stack Architect & Developer (Flutter Web & .NET 10 Modular Monolith)",
    period: "Julio 2026 – Presente",
    liveUrl: "http://13.140.134.191",
    description: [
      "Plataforma empresarial integral (Full-Stack) de planificación de recursos empresariales (ERP) multi-sucursal y multi-almacén (~4 meses de desarrollo continuo, +130 commits y 20 Pull Requests integrados).",
      "Frontend (ERP-BACKOFFICE) en Flutter 3.11+ & Dart (Web SPA/WASM y soporte cross-platform) con Clean Architecture Modular, Design System propio (Modo Claro/Oscuro), dashboards BI con Apache ECharts, tablas PlutoGrid y escáner QR/barras.",
      "Backend (ERP-System) bajo Monolito Modular en .NET 10 (ASP.NET Core Web API) aplicando Clean Architecture, DDD y CQRS con MediatR, FluentValidation, PostgreSQL 15+ (EF Core 10), múltiples DbContext, Soft-Delete global y Auditoría completa.",
      "Tiempo real con SignalR WebSockets (sincronización en vivo de matriz de permisos RBAC estilo Spatie sin reloguear), generación nativa de PDF (PDFsharp), Rate Limiting por IP y respuestas estandarizadas RFC 7807.",
      "9 áreas funcionales integradas: BI & Dashboards Ejecutivos, Seguridad Multi-Sucursal, Inventarios & Kardex/Conteos Físicos, Ventas & Facturación POS/CUFD, Compras & CxP, Contabilidad & Arqueos de Caja (BOB/USD), RRHH con Portal de Autoservicio por PIN (/portal-boletas) y Activos Fijos.",
      "Despliegue en servidor VPS Linux (Contabo) con Docker multi-etapa y proxy inverso Nginx Alpine para /api/ y túneles WebSocket /hubs/, compresión Brotli/Gzip/WASM y Hardening HTTP (CSP, X-Frame-Options).",
    ],
    technologies: [
      "Flutter",
      "Dart",
      ".NET 10",
      "C#",
      "PostgreSQL",
      "SignalR",
      "Clean Architecture",
      "CQRS & DDD",
      "Docker",
      "Nginx",
      "ECharts",
      "EF Core 10",
    ],
    caseStudy: {
      summary:
        "Desarrollé WR Inventory ERP, una solución empresarial completa diseñada para centralizar y automatizar la operación comercial, logística, financiera y de talento humano de empresas con múltiples agencias y almacenes. El backend (ERP-System) está diseñado bajo una arquitectura de Monolito Modular con Clean Architecture, DDD y CQRS (MediatR) sobre .NET 10, garantizando desacoplamiento por dominios, validaciones automatizadas en el pipeline y trazabilidad completa (Soft-Delete y Auditoría). El frontend (ERP-BACKOFFICE) está desarrollado en Flutter (Web & Cross-platform) con un Design System propio, tablas de alto rendimiento, dashboards analíticos con Apache ECharts, sincronización de permisos en tiempo real con SignalR y generación nativa de documentos PDF.",
      portalUrl: "http://13.140.134.191/portal-boletas",
      apiEndpoint: "http://13.140.134.191/api",
      signalrHub: "http://13.140.134.191/hubs/erp",
      demoCredentials: {
        user: "admin@erpsystem.com",
        password: "Admin123!@#",
        note: "Credenciales Demo (Seeder por defecto)",
      },
      repoStats: [
        {
          name: "Frontend (ERP-BACKOFFICE)",
          firstCommit: "13 de julio de 2026 (5d87d89)",
          lastCommit: "8 de noviembre de 2026 (814afbc - PR #20)",
          totalCommits: "78 commits",
        },
        {
          name: "Backend (ERP-System)",
          firstCommit: "24 de julio de 2026 (8399a64)",
          lastCommit: "8 de noviembre de 2026 (be87a96 - PR #17)",
          totalCommits: "55 commits",
        },
      ],
      architectureLayers: [
        {
          title: "Frontend (ERP-BACKOFFICE)",
          items: [
            "Framework & Lenguaje: Flutter 3.11+ & Dart (Compilación Web SPA / WASM y soporte móvil/desktop).",
            "Arquitectura: Clean Architecture Modular + Design System propio (AGENTS.md) con soporte nativo Claro/Oscuro y 100% responsivo (responsive_framework).",
            "Estado y Ruteo: provider (ChangeNotifier) y go_router (ShellRoute, breadcrumbs dinámicos y guardias de permisos en tiempo real).",
            "Red y Tiempo Real: dio + dio_smart_retry (interceptores JWT, refresh token y cancelación de requests) + signalr_netcore (WebSockets en vivo).",
            "Visualización y UI: flutter_echarts (BI), pluto_grid y CustomDataTable, flutter_form_builder + form_builder_validators, mobile_scanner (QR/Barras).",
          ],
        },
        {
          title: "Backend (ERP-System)",
          items: [
            "Framework & Runtime: ASP.NET Core Web API (.NET 10) con C#.",
            "Patrones: Modular Monolith (6 módulos de dominio con capas Domain, Application, Infrastructure y API), CQRS con MediatR + ValidationBehavior, DDD, Repositorio Genérico y Unit of Work.",
            "Persistencia: PostgreSQL 15+ con Entity Framework Core 10 (Npgsql), múltiples DbContext aislados por módulo, DbSeeder automático, Soft-Delete global (IsDeleted) y AuditableEntity.",
            "Seguridad y Resiliencia: JWT (Access + Refresh Token), BCrypt, RBAC jerárquico estilo Spatie (Modulo.Recurso.Accion y comodines *) sincronizado en vivo, Rate Limiting por IP y norma RFC 7807 (ProblemDetails).",
            "Librerías Clave: FluentValidation, AutoMapper, SignalR (AppRealtimeHub), PDFsharp, Swashbuckle/Swagger (OpenAPI) y compresión HTTP Brotli + Gzip.",
          ],
        },
        {
          title: "DevOps e Infraestructura",
          items: [
            "Contenedorización: Docker multi-etapa (Dockerfile Backend y Dockerfile Frontend).",
            "Servidor Web y Proxy Inverso: Nginx Alpine (nginx.conf) con proxy reverso para /api/, túneles WebSocket /hubs/, compresión Gzip/WASM y Hardening HTTP (CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy).",
            "Hosting: Servidor VPS Linux en Contabo (13.140.134.191).",
          ],
        },
      ],
      modules: [
        {
          title: "1. Dashboards y Business Intelligence (BI)",
          items: [
            "Resumen Ejecutivo General: KPIs financieros y operativos en tiempo real, tendencias de ingresos y métodos de pago.",
            "Ventas por Agencia y por Vendedor: Comparativas por sucursal, cumplimiento de metas y ranking de vendedores.",
            "Dashboard de Stock e Inventarios: Valorización total de inventario, salud del stock y rotación de productos.",
            "Estadísticas y Rentabilidad (BI): Análisis de márgenes de ganancia, costos vs. ventas y productos estrella.",
            "Dashboard de RRHH: Métricas de asistencia, plantilla activa, ausentismo y horas extra.",
          ],
        },
        {
          title: "2. Sistemas, Seguridad y Multi-Sucursal",
          items: [
            "Seguridad y Accesos: Gestión de Usuarios, Roles y matriz de Permisos granulares con actualización en caliente vía WebSockets.",
            "Agencias y Almacenes: Administración multi-sucursal y múltiples almacenes físicos o lógicos asociados por agencia.",
            "Documentos por Agencia: Control de series de facturación, numeración y permisos de emisión por usuario/sucursal.",
            "Configuración y Auditoría: Parámetros fiscales (NIT, moneda principal, impuestos) y Bitácora de Auditoría (IP, User-Agent, usuario y acción).",
          ],
        },
        {
          title: "3. Inventarios y Logística",
          items: [
            "Productos y Categorías: Catálogo maestro con SKU/códigos, precios, ítems inventariables vs. servicios y Ficha Técnica.",
            "Stock Multi-Almacén y Alertas: Existencias por sucursal y alertas automáticas (Sin Stock, Stock Crítico, Stock Bajo).",
            "Movimientos (Kardex): Historial transaccional de entradas, salidas y ajustes con costo promedio/unitario.",
            "Transferencias entre Almacenes: Flujo completo de traspaso entre sucursales (pendiente, en tránsito, completado/anulado).",
            "Toma de Inventarios (Conteos Físicos): Auditorías de stock físico vs. teórico con escáner de barras y conciliación.",
          ],
        },
        {
          title: "4. Ventas y Facturación",
          items: [
            "Proformas / Cotizaciones: Creación de cotizaciones comerciales, generación de PDF y conversión directa a factura.",
            "Facturación: Emisión de facturas de venta con descuento automático de stock, múltiples métodos de cobro e impresión PDF.",
            "Notas de Crédito / Débito: Gestión de devoluciones sobre ventas y ajustes comerciales.",
            "Puntos de Venta (POS) y CUFD: Administración de cajas emisoras y códigos diarios de facturación.",
            "Cartera de Clientes: Gestión de datos fiscales (NIT/CI, razón social), historial de compras y estado de cuenta.",
          ],
        },
        {
          title: "5. Compras y Cuentas por Pagar (CxP)",
          items: [
            "Proveedores y Órdenes de Compra: Gestión de proveedores y emisión de órdenes con flujo de aprobación.",
            "Recepciones de Mercadería: Ingreso físico parcial o total conectado directamente con el Kardex de Inventarios.",
            "Facturas de Proveedor y Devoluciones: Registro de compras fiscales y devoluciones a proveedor.",
            "Cuentas por Pagar (CxP) y Reportes: Control de deudas, vencimientos, pagos parciales/totales e integración contable.",
          ],
        },
        {
          title: "6. Contabilidad, Tesorería, Caja y Bancos",
          items: [
            "Plan de Cuentas y Gestiones Fiscales: Árbol contable jerárquico multi-nivel, apertura y cierre de gestiones y períodos.",
            "Comprobantes y Reglas de Asiento: Asientos de Ingreso, Egreso, Traspaso y Diario con motor automático de compras y ventas.",
            "Cajas, Bancos y Arqueos Avanzados: Cuadre de saldo teórico vs. recuento físico por cortes de billetes/monedas (BOB y USD), QR, POS, transferencias y cheques.",
            "Tipos de Cambio y Estados Financieros: Tasas diarias (oficial/comercial), Balance General, Estado de Resultados, Libro Mayor y Sumas y Saldos.",
          ],
        },
        {
          title: "7. Recursos Humanos y Portal de Autoservicio",
          items: [
            "Gestión de Capital Humano: Legajo de empleados, Departamentos, Cargos y contratos.",
            "Tiempo y Asistencia: Turnos, horarios, marcaciones, ausencias/permisos/vacaciones, horas extra y calendario de feriados.",
            "Portal de Autoservicio (/portal-boletas): Acceso rápido para empleados mediante PIN de 4 dígitos para consultar marcaciones, descargar boletas PDF y comunicados.",
          ],
        },
        {
          title: "8. Activos Fijos",
          items: [
            "Control de Activos: Catalogación, codificación, ubicación por agencia, asignación de responsables y estado de bienes de uso.",
          ],
        },
      ],
      milestones: [
        {
          period: "Julio 2026",
          title: "Fundación y Arquitectura Base",
          items: [
            "Inicialización del frontend en Flutter (13/07) y backend en .NET 10 (24/07).",
            "Implementación de Login JWT, estructura base de PostgreSQL y primer Dashboard.",
          ],
        },
        {
          period: "Agosto 2026",
          title: "Módulos Core y Primer Despliegue Docker",
          items: [
            "Desarrollo del módulo de Sistemas & Seguridad (Usuarios, Roles, Permisos, Agencias y Almacenes) (09/08).",
            "Lanzamiento del módulo de Inventarios (Productos, Categorías, Stock, Kardex y Transferencias) (13/08).",
            "Creación de Dockerfile y configuración para despliegue en servidor (23/08).",
          ],
        },
        {
          period: "Septiembre 2026",
          title: "Expansión Comercial, RRHH y Finanzas",
          items: [
            "Módulo completo de Ventas (Facturación, Proformas, Notas de Crédito/Débito, POS y PDF) (13/09).",
            "Infraestructura transversal de Auditoría y Soft-Delete con recuperación de registros (14/09).",
            "Módulo de RRHH (Empleados, Asistencias, Ausencias, Horas Extra) y Portal de Autoservicio con PIN (16/09 - 23/09).",
            "Módulos de Compras y Contabilidad (Órdenes, Recepciones, Plan de Cuentas, Comprobantes) y Documentos por Agencia (27/09 - 30/09).",
          ],
        },
        {
          period: "Octubre 2026",
          title: "Tiempo Real, Tesorería y Hardening de Seguridad",
          items: [
            "Despliegue optimizado con soporte de fuentes Linux para reportes PDF y Dashboards BI (14/10).",
            "Infraestructura de notificaciones y permisos en Tiempo Real con SignalR (WebSockets) (27/10).",
            "Módulo de Tesorería, Cajas y Cuentas Bancarias + Rate Limiting y seguridad RFC 7807 (28/10 - 29/10).",
          ],
        },
        {
          period: "Noviembre 2026 (Actualidad)",
          title: "Toma de Inventarios, Arqueos y Optimización",
          items: [
            "Módulo de Toma de Inventarios / Conteos Físicos con soporte de escáner de códigos de barras (01/11).",
            "Optimización de rendimiento (AsNoTracking, compresión HTTP Brotli/Gzip y mejoras de Design System) (02/11).",
            "Módulos de Arqueos de Caja (con corte de billetaje BOB/USD) y Tipos de Cambio (08/11).",
          ],
        },
      ],
    },
  },
  {
    id: 1,
    company: "Pertec",
    position: "Analista Informático",
    period: "Enero 2026 – Actualidad",
    description: [
      "Desarrollo de un sistema de facturación en línea integrado con SIAT.",
      "Implementación y gestión de módulos de facturación, incluyendo emisión de facturas, notas de débito y notas de crédito.",
      "Desarrollo y mantenimiento de funcionalidades clave del sistema tributario.",
      "Integración de servicios backend en .NET 6 y desarrollo frontend con Angular.",
    ],
    technologies: [".NET 6", "Angular", "SQL Server", "SIAT"],
  },
  {
    id: 2,
    company: "Sistema de Facturación ERP (Proyecto Propio)",
    position: "Full Stack Developer (Vue / Laravel)",
    period: "Octubre 2024 – Actualidad",
    description: [
      "Diseño y desarrollo de un sistema ERP de facturación electrónica integrado con SIAT.",
      "Implementación del frontend administrativo en Vue para gestión de clientes, productos, ventas, reportes y control fiscal.",
      "Desarrollo de APIs RESTful en Laravel para emisión, validación y envío de facturas electrónicas bajo normativa SIAT.",
      "Implementación de eventos significativos, sincronización de catálogos y control de estados tributarios.",
      "Diseño de arquitectura y base de datos optimizada para escalabilidad y alto rendimiento.",
    ],
    technologies: ["Vue.js", "Laravel", "Postgres", "SIAT"],
  },
  {
    id: 3,
    company: "Biblioteca Virtual",
    position: "Frontend Developer (React) / Backend Developer (Laravel)",
    period: "Octubre 2024 – Enero 2025",
    description: [
      "Desarrollo del frontend utilizando React para la gestión administrativa del sistema.",
      "Construcción y optimización de APIs RESTful con Laravel.",
    ],
    technologies: ["React", "Laravel", "MySQL", "SIAT"],
  },
  {
    id: 4,
    company: "Faboce",
    position: "Backend / Frontend Developer",
    period: "Junio 2024 – octubre 2025",
    description: [
      "Desarrollo y optimización de APIs RESTful.",
      "Implementación del módulo de comisiones y mejora del módulo de facturación con SIAT.",
      "Aplicación de arquitectura MVC para un mantenimiento eficiente.",
    ],
    technologies: ["Laravel", "Vue.js", "Node.js", "SIAT"],
  },
  {
    id: 5,
    company: "Topógrafos Bolivia",
    position: "Full Stack Developer – Sistema Web y Administración (Freelance)",
    period: "Julio 2025 – Septiembre 2025",
    description: [
      "Desarrollo completo de un sistema web para la gestión de pagos y administración de manera independiente como freelancer.",
      "Creación de APIs RESTful con Laravel y consumo desde React.js para la gestión de pagos, aportes y cobros.",
      "Desarrollo de módulos para la emisión de certificados laborales y de afiliación.",
      "Implementación de un módulo de registro de gastos, integrado con el frontend para un control financiero eficiente.",
      "Diseño e implementación de tableros interactivos con ECharts para análisis visual de cobros vs. gastos.",
      "Pruebas y documentación de APIs utilizando Postman, asegurando estabilidad y escalabilidad del sistema.",
    ],
    technologies: ["React.js", "Laravel", "ECharts", "Postman", "MySQL"],
    liveUrl: "https://cotobolcochabamba.com.bo",
  },
  {
    id: 6,
    company: "Migración Sistema SAS",
    position: "Backend Laravel / Frontend Vue 3 + Vuetify",
    period: "Junio 2024 - octubre 2025",
    description: [
      "Creación de APIs para nuevos módulos del sistema.",
      "Migración del módulo de Contabilidad de Simec a plataforma web.",
      "Implementación de hoja de rutas y ranking de ventas por vendedores.",
    ],
    technologies: ["Laravel", "Vue 3", "Vuetify"],
  },
  {
    id: 7,
    company: "Xanthops",
    position: "Landing Page – Xanthops Landing",
    period: "Febrero 2024 – Mayo 2024",
    description: [
      "Desarrollo de componentes visuales personalizados (background dinámico).",
      "Implementación y ajuste de la landing page corporativa.",
    ],
    technologies: ["Next.js", "React.js", "CSS Modules"],
    liveUrl: "https://xanthops.com",
  },
  {
    id: 8,
    company: "Xanthops",
    position: "Frontend – Pixon",
    period: "Enero 2024 – Abril 2024",
    description: ["Corrección y mejora del diseño responsive de la web."],
    technologies: ["Vue.js", "TailwindCSS"],
    liveUrl: "https://pixonweb.xanthops.com",
  },
  {
    id: 9,
    company: "Xanthops",
    position: "Frontend – Capping Group",
    period: "Noviembre 2023 – Diciembre 2023",
    description: [
      "Desarrollo en Vue.js del módulo de carrito y flujo de compras.",
      "Optimización de vistas y componentes del proceso de pago.",
    ],
    technologies: ["Vue.js", "Pinia", "Axios"],
  },
  {
    id: 10,
    company: "Xanthops",
    position: "Backend – Capping Group",
    period: "Noviembre 2023 – Diciembre 2023",
    description: [
      "Desarrollo del backend con Node.js y Express.",
      "Creación y mantenimiento de APIs RESTful.",
    ],
    technologies: ["Node.js", "Express", "MongoDB"],
  },
  {
    id: 11,
    company: "Xanthops",
    position: "Frontend – Seguros",
    period: "Octubre 2023 – Noviembre 2023",
    description: [
      "Desarrollo de funcionalidades en Vue.js.",
      "Corrección de bugs en custom-editor.js y mejoras en vistas.",
    ],
    technologies: ["Vue.js", "JavaScript"],
    liveUrl: "https://seguros-dev.xanthops.com",
  },
  {
    id: 12,
    company: "Xanthops",
    position: "Backend – Seguros",
    period: "Octubre 2023 – Noviembre 2023",
    description: [
      "Desarrollo del backend con Ruby on Rails.",
      "Modificación y creación de APIs para nuevos módulos.",
    ],
    technologies: ["Ruby on Rails", "PostgreSQL"],
  },
  {
    id: 13,
    company: "Xanthops",
    position: "Componentes Charts",
    period: "Mayo 2023 – Septiembre 2023",
    description: [
      "Implementación y mejora de componentes gráficos (chart line y chart bar).",
      "Optimización y reutilización de componentes existentes.",
    ],
    technologies: ["Vue.js", "Chart.js", "Storybook"],
  },
  {
    id: 14,
    company: "Xanthops",
    position: "Backend – Bombo APIs",
    period: "Octubre 2022 – Abril 2023",
    description: ["Desarrollo de APIs RESTful utilizando NestJS."],
    technologies: ["NestJS", "TypeScript", "PostgreSQL"],
  },
  {
    id: 15,
    company: "Xanthops",
    position: "CMS – Bombo Backoffice",
    period: "Octubre 2022 – Abril 2023",
    description: [
      "Desarrollo del CMS administrativo en React.js.",
      "Integración de componentes dinámicos y gestión de datos.",
    ],
    technologies: ["React.js", "Redux", "TypeScript"],
    liveUrl: "https://bombo.infinixsoft.com",
  },
  {
    id: 16,
    company: "Xanthops",
    position: "Landing Page – Bombo Frontend",
    period: "Octubre 2022 – Abril 2023",
    description: [
      "Desarrollo de la landing page con Next.js.",
      "Implementación de diseño responsive y optimización de rendimiento.",
    ],
    technologies: ["Next.js", "React.js", "Styled Components"],
    liveUrl: "https://bomboweb.infinixsoft.com",
  },
  {
    id: 17,
    company: "AYRA Confecciones — Plataforma Integral de Alta Costura, Sastrería a Medida y Backoffice",
    position: "Full Stack Architect & Developer (React 18, Vue 3, NestJS & MongoDB)",
    period: "Mayo 2024 – Actualidad (Modernización & Deploy en Producción)",
    liveUrl: "http://13.140.134.191:8085",
    description: [
      "Ecosistema web completo (Full-Stack) para sastrería a medida y alta costura, compuesto por una web pública comercial moderna (React 18), un panel administrativo backoffice (Vue 3 + Vite) y una API RESTful modular (NestJS 10) con base de datos MongoDB 7.",
      "Frontend Público (web-ayra) en React 18 con React Router v6, arquitectura de componentes modular y Design System propio de alta costura (paleta Obsidiana, Dorado Champagne y Marfil con tipografías Playfair Display y Plus Jakarta Sans), Sticky Navbar con efecto Glassmorphism, catálogo interactivo con filtros por categoría, búsqueda instantánea, modal de vista rápida y cotización directa vinculada a la API de WhatsApp Business.",
      "Backoffice Administrativo (oauth) en Vue 3, TypeScript y Vite, diseñado con estética luxury dark editorial, navegación SPA reactiva sin recargas de página (<router-link>), dashboard analítico con KPIs ejecutivos en tiempo real (prendas, ofertas, precio promedio y usuarios) y gráficos interactivos con Chart.js.",
      "Backend (apis-oauth) en NestJS 10 estructurado en módulos aislados para clientes (/api/v1) y administración (/api/admin/v1), serialización estricta mediante MongooseClassSerializerInterceptor, autenticación JWT con Passport Guards, encriptación BCrypt, hooks pre-save en esquemas Mongoose y sistema de auto-seeding para aprovisionar al administrador por defecto en el primer arranque.",
      "Autodetección dinámica de endpoints en runtime en ambos frontends (window.location.origin) que redirige el tráfico hacia el proxy inverso de Nginx, eliminando bloqueos de CORS entre entornos de desarrollo local y producción en la nube.",
      "Despliegue y containerización en VPS Linux (Contabo) mediante Docker Compose con 4 microservicios en red privada aislada (ayra_network): contenedores Nginx Alpine ligeros con volumen montado en vivo para actualizaciones con 0 segundos de downtime y contenedor de MongoDB 7 con límite estricto de memoria (512MB RAM y caché WiredTiger de 0.25GB) para convivir en paralelo con el ERP del servidor sin colisión de puertos.",
    ],
    technologies: [
      "React 18",
      "Vue 3",
      "TypeScript",
      "NestJS 10",
      "MongoDB 7",
      "Mongoose",
      "Vite",
      "Docker",
      "Nginx",
      "Chart.js",
      "JWT & Passport",
      "SCSS",
    ],
    caseStudy: {
      summary:
        "Diseñé y modernicé de forma integral la plataforma digital de AYRA Confecciones, un atelier especializado en trajes de etiqueta, novios y prendas a medida. El proyecto unifica una experiencia visual de lujo para el cliente final en React 18 con un centro de control operativo en Vue 3 y una arquitectura backend desacoplada en NestJS 10 sobre MongoDB 7. Ambos frontends fueron optimizados con Nginx Alpine y proxies inversos que garantizan tiempos de carga ultrarrápidos, mientras que el backend incorpora validaciones DTO, seguridad criptográfica y un despliegue multi-contenedor optimizado para servidores con recursos compartidos.",
      portalUrl: "http://13.140.134.191:8086",
      apiEndpoint: "http://13.140.134.191:8085/api/v1",
      demoCredentials: {
        user: "admin@ayra.com",
        password: "Admin123!@#",
        note: "Credenciales de Acceso al Backoffice (Seeder Automático)",
      },
      repoStats: [
        {
          name: "Web Pública (web-ayra)",
          firstCommit: "Mayo 2024",
          lastCommit: "Noviembre 2026 (Rediseño Haute Couture & WhatsApp API)",
          totalCommits: "45 commits",
        },
        {
          name: "Backoffice (oauth)",
          firstCommit: "Mayo 2024",
          lastCommit: "Noviembre 2026 (Migración Luxury Dark & Chart.js BI)",
          totalCommits: "38 commits",
        },
        {
          name: "Backend API (apis-oauth)",
          firstCommit: "Mayo 2024",
          lastCommit: "Noviembre 2026 (Node 25 Polyfill & Seeder Automático)",
          totalCommits: "42 commits",
        },
      ],
      architectureLayers: [
        {
          title: "Frontend Comercial (web-ayra)",
          items: [
            "Framework & Core: React 18 SPA con React Router v6 y empaquetado optimizado en Webpack/React-Scripts.",
            "Design System: Identidad visual Haute Couture & Tailoring (Playfair Display + Plus Jakarta Sans) con variables CSS semánticas, cards con efecto hover y paleta Obsidiana/Dorado.",
            "Experiencia de Usuario: Hero editorial con métricas sartoriales, catálogo filtrable con búsqueda en tiempo real, modal de vista rápida con ficha de producto y formulario de reserva con pre-selección de prenda.",
            "Integraciones: Generador dinámico de enlaces directos a WhatsApp Business (+591 68788807) con mensaje estructurado de cotización.",
          ],
        },
        {
          title: "Backoffice Administrativo (oauth)",
          items: [
            "Framework & Tooling: Vue 3 (Composition API con <script setup lang='ts'>), TypeScript y Vite 5.",
            "Navegación & Estado: Vue Router 4 con guardias de autenticación global (ifAuthenticated), enlaces reactivos <router-link> sin recarga y persistencia de sesión JWT en LocalStorage.",
            "Visualización de Datos: Dashboards ejecutivos con Chart.js y vue-chartjs (distribución por rango de precios en Bs. y ratio de prendas en oferta).",
            "Gestión CRUD: Tablas de datos con badges de estado, modal reactivo para creación/edición, previsualización de imágenes base64 y alertas con SweetAlert2.",
          ],
        },
        {
          title: "Backend API (apis-oauth)",
          items: [
            "Framework & Lenguaje: NestJS 10 bajo arquitectura modular en TypeScript.",
            "Separación de Contextos: Controladores públicos en ApiModule (/api/v1) y módulos administrativos protegidos en AdminModule (/api/admin/v1).",
            "Persistencia: Mongoose 8 sobre MongoDB 7 con esquemas tipados (Product, User, Post), paginación por agregación y pre-hooks de encriptación.",
            "Seguridad & Serialización: Estrategia Passport JWT, Guards de ruta, interceptor MongooseClassSerializerInterceptor y soporte de Node 25+ mediante polyfills de buffer.",
          ],
        },
        {
          title: "DevOps e Infraestructura Cloud",
          items: [
            "Orquestación: Docker Compose con red bridge dedicada (ayra_network) y 4 contenedores (ayra_web, ayra_admin, ayra_backend, ayra_mongo).",
            "Servidor Web: Doble proxy inverso Nginx Alpine con compresión Gzip, caché inmutable de estáticos y reescritura de rutas SPA (try_files $uri /index.html).",
            "Hosting: Coexistencia en VPS Linux (Contabo) sin interferir con otros proyectos mediante asignación estratégica de puertos (8085 para web, 8086 para admin, 3005 para API y 27017 interno para Mongo).",
            "Resiliencia: Límite estricto de memoria para MongoDB (512M) y healthchecks automáticos con mongosh.",
          ],
        },
      ],
      modules: [
        {
          title: "1. Web Comercial y Catálogo Interactivo (web-ayra)",
          items: [
            "Landing Page de Alta Costura: Banner Hero con propuesta de valor, sección de filosofía del atelier y pilares de excelencia.",
            "Catálogo Dinámico: Vista en cuadrícula con tarjetas de producto, etiqueta de precio en Bs., distintivos de oferta y modal de detalle rápido.",
            "Cotizador & Reserva de Citas: Formulario inteligente que captura servicio, modelo de interés y fecha estimada, generando un enlace estructurado hacia WhatsApp y correo.",
            "Página Sobre Nosotros: Muestra del taller, proceso de confección artesanal en 4 pasos y canales de contacto directo.",
          ],
        },
        {
          title: "2. Gestión de Catálogo e Inventario (Backoffice)",
          items: [
            "CRUD Maestro de Prendas: Registro, edición y eliminación de trajes, smokings y vestidos de alta costura.",
            "Control de Promociones: Activación/desactivación de ofertas y cálculo porcentual de descuento.",
            "Gestor Multimedia: Carga de fotos de prendas con vista previa en tiempo real antes de guardar.",
            "Filtros de Inventario: Segmentación instantánea por estado activo/pausado y por artículos en oferta.",
          ],
        },
        {
          title: "3. Seguridad y Gestión de Usuarios (Backoffice)",
          items: [
            "Control de Accesos: Administración de cuentas con roles jerárquicos (Administrador vs. Sastre/Cliente).",
            "Perfil del Administrador: Modal para actualización de datos personales, correo, cambio seguro de contraseña y foto de perfil.",
            "Cierre de Sesión Seguro: Revocación de tokens en cliente y limpieza de estado de aplicación.",
          ],
        },
        {
          title: "4. Dashboard Analítico y Reportes (Backoffice)",
          items: [
            "KPIs en Tiempo Real: Tarjetas de resumen con conteo total de prendas en catálogo, prendas activas, ofertas y usuarios.",
            "Métricas Financieras: Estimación del precio promedio del inventario en moneda local (Bs.).",
            "Gráficos Interactivos: Gráfico de barras para distribución de prendas por rango de costo y gráfico de pastel para el balance de promociones.",
          ],
        },
      ],
      milestones: [
        {
          period: "Mayo 2024",
          title: "Lanzamiento Inicial",
          items: [
            "Desarrollo de la primera versión de la landing en React y backend en NestJS.",
            "Implementación del panel básico en Vue.js con autenticación.",
          ],
        },
        {
          period: "Noviembre 2026",
          title: "Modernización Integral y Despliegue en VPS Contabo",
          items: [
            "Rediseño completo de la interfaz de usuario en React con estética Haute Couture y tipografías editoriales.",
            "Reestructuración del Backoffice en Vue 3 con navegación SPA fluida (<router-link>), KPIs ejecutivos y gráficos Chart.js.",
            "Resolución de compatibilidad con Node.js 25+ en NestJS y creación de seeder automático para el usuario administrador.",
            "Despliegue multi-contenedor en Docker Compose sobre Contabo VPS (:8085 web, :8086 admin, :3005 API y MongoDB 7) conviviendo en paralelo con el ERP.",
          ],
        },
      ],
    },
  },
  {
    id: 18,
    company: "Dynasys Srl",
    position: "Baremo Backend",
    period: "Agosto 2020 – Diciembre 2020",
    description: [
      "Desarrollo del backend utilizando Laravel bajo arquitectura API RESTful.",
      "Implementación de controladores, modelos y rutas para la gestión de datos.",
      "Integración con base de datos y pruebas de endpoints.",
    ],
    technologies: ["Laravel", "MySQL"],
  },
  {
    id: 19,
    company: "K’anchay",
    position: "Práctica Empresarial",
    period: "Febrero 2020 – Junio 2020",
    description: [
      "Diseño y maquetación de interfaces web centradas en la experiencia del usuario.",
      "Desarrollo y personalización del sitio utilizando WordPress y el tema Divi.",
      "Optimización del diseño para distintos dispositivos (responsive design).",
    ],
    technologies: ["WordPress", "Divi"],
    liveUrl: "https://kanchay.org.bo",
  },
  {
    id: 20,
    company: "Programación Móvil",
    position: "Sistema de Reserva de Parqueos",
    period: "Julio 2019 – Diciembre 2019",
    description: [
      "Desarrollo completo del frontend y backend del sistema de reserva de parqueos.",
      "Implementación en Android Studio utilizando Java.",
      "Integración con Firebase Realtime Database para la gestión de datos en tiempo real.",
      "Control de versiones y seguimiento del proyecto en Azure DevOps.",
    ],
    technologies: [
      "Android Studio",
      "Java",
      "Firebase Realtime Database",
      "Azure DevOps",
    ],
    liveUrl: "https://dev.azure.com/PROGRAMOVIL/ProMovParq",
  },
];
