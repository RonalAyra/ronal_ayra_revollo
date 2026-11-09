import {
  OrbitControls,
  Html,
  RoundedBox,
  ContactShadows,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

export type ScreenMode = "ide" | "erp" | "arch";

const STUDIO_THEMES: Record<
  ScreenMode,
  { primary: string; secondary: string; badge: string }
> = {
  ide: { primary: "#38bdf8", secondary: "#2563eb", badge: "#10b981" },
  erp: { primary: "#10b981", secondary: "#059669", badge: "#38bdf8" },
  arch: { primary: "#818cf8", secondary: "#4f46e5", badge: "#38bdf8" },
};

function checkWebGLSupport(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl2") ||
          canvas.getContext("webgl") ||
          canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

/**
 * Configura iluminación HDRI de estudio procedural (RoomEnvironment)
 * y ACESFilmicToneMapping para reflejos metálicos y cristal realistas (0 KB externos).
 */
const StudioEnvironment = () => {
  const { gl, scene } = useThree();

  useEffect(() => {
    gl.toneMapping = THREE.ACESFilmicToneMapping;
    gl.toneMappingExposure = 1.2;

    const pmremGenerator = new THREE.PMREMGenerator(gl);
    pmremGenerator.compileEquirectangularShader();
    const envTexture = pmremGenerator.fromScene(
      new RoomEnvironment(),
      0.04
    ).texture;

    scene.environment = envTexture;

    return () => {
      scene.environment = null;
      envTexture.dispose();
      pmremGenerator.dispose();
    };
  }, [gl, scene]);

  return null;
};

function configureSharpTexture(
  texture: THREE.CanvasTexture
): THREE.CanvasTexture {
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 16;
  texture.generateMipmaps = true;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.needsUpdate = true;
  return texture;
}

function createDeskSurfaceTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    ctx.fillStyle = "#111827";
    ctx.fillRect(0, 0, 1024, 512);

    for (let i = 0; i < 480; i++) {
      const y = (i * 512) / 480;
      ctx.fillStyle =
        i % 3 === 0
          ? "rgba(30, 41, 59, 0.38)"
          : i % 2 === 0
          ? "rgba(15, 23, 42, 0.45)"
          : "rgba(51, 65, 85, 0.16)";
      ctx.fillRect(0, y, 1024, 1.2);
    }
  }

  return configureSharpTexture(new THREE.CanvasTexture(canvas));
}

function createMobileScreenTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 1024;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    ctx.fillStyle = "#090d16";
    ctx.fillRect(0, 0, 512, 1024);

    ctx.fillStyle = "#1d4ed8";
    ctx.fillRect(0, 0, 512, 140);
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 28px Inter, sans-serif";
    ctx.fillText("Flutter POS · SIAT", 36, 88);

    ctx.fillStyle = "#0f172a";
    ctx.fillRect(32, 176, 448, 210);
    ctx.strokeStyle = "#3b82f6";
    ctx.lineWidth = 3;
    ctx.strokeRect(32, 176, 448, 210);

    ctx.fillStyle = "#94a3b8";
    ctx.font = "bold 20px sans-serif";
    ctx.fillText("VENTAS DEL DÍA", 60, 226);
    ctx.fillStyle = "#34d399";
    ctx.font = "bold 54px monospace";
    ctx.fillText("Bs 48,920", 60, 300);
    ctx.fillStyle = "#38bdf8";
    ctx.font = "20px monospace";
    ctx.fillText("✓ Sincronizado con Impuestos", 60, 350);

    for (let i = 0; i < 4; i++) {
      const y = 420 + i * 130;
      ctx.fillStyle = "#0f172a";
      ctx.fillRect(32, y, 448, 106);
      ctx.strokeStyle = "#1e293b";
      ctx.strokeRect(32, y, 448, 106);

      ctx.fillStyle = "#f8fafc";
      ctx.font = "bold 22px sans-serif";
      ctx.fillText(`Factura #0049${i + 1} · Emitida`, 56, y + 44);
      ctx.fillStyle = "#60a5fa";
      ctx.font = "19px monospace";
      ctx.fillText("CUF: 8F92A...39B1 · 200 OK", 56, y + 80);
    }
  }

  return configureSharpTexture(new THREE.CanvasTexture(canvas));
}

function createMainScreenTexture(mode: ScreenMode): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 2048;
  canvas.height = 1024;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    ctx.scale(2, 2);

    ctx.fillStyle = "#090d16";
    ctx.fillRect(0, 0, 1024, 512);

    // Barra superior de ventana
    ctx.fillStyle = "#0f172a";
    ctx.fillRect(0, 0, 1024, 34);

    const dots = ["#ef4444", "#f59e0b", "#10b981"];
    dots.forEach((color, idx) => {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(20 + idx * 16, 17, 5, 0, Math.PI * 2);
      ctx.fill();
    });

    const tabs = [
      { name: "SiatInvoiceController.cs", active: mode === "ide" },
      { name: "DashboardFacturacionSiat.tsx", active: mode === "erp" },
      { name: "FlutterMobileAndRestApi.ts", active: mode === "arch" },
    ];
    tabs.forEach((tab, idx) => {
      const tx = 86 + idx * 195;
      ctx.fillStyle = tab.active ? "#1e293b" : "#0b1120";
      ctx.fillRect(tx, 4, 190, 30);
      if (tab.active) {
        ctx.fillStyle = STUDIO_THEMES[mode].primary;
        ctx.fillRect(tx, 4, 190, 2.5);
      }
      ctx.fillStyle = tab.active ? "#f8fafc" : "#64748b";
      ctx.font = "bold 11px Inter, monospace";
      ctx.fillText(tab.name, tx + 12, 23);
    });

    // Barra de estado inferior estilo VS Code
    ctx.fillStyle = STUDIO_THEMES[mode].secondary;
    ctx.fillRect(0, 490, 1024, 22);
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 11px monospace";
    ctx.fillText(
      "⎇ main*   ✓ 0 Errors   ⚠ 0 Warnings   UTF-8   React 18 · Laravel · .NET 6 · Flutter   Ronal Ayra",
      16,
      505
    );

    // Sidebar izquierda
    ctx.fillStyle = "#0b1120";
    ctx.fillRect(0, 34, 168, 456);
    ctx.strokeStyle = "#1e293b";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(168, 34);
    ctx.lineTo(168, 490);
    ctx.stroke();

    const files = [
      "▾ src/siat-engine",
      "  InvoiceService.cs",
      "  CufGenerator.cs",
      "  SoapClient.ts",
      "▾ src/erp-modules",
      "  InventorySync.php",
      "  SalesDashboard.tsx",
      "  FlutterPosApp.dart",
      "  schema.prisma",
      "  docker-compose.yml",
    ];
    ctx.font = "12px monospace";
    files.forEach((f, i) => {
      const isSelected =
        (mode === "ide" && i === 1) ||
        (mode === "erp" && i === 6) ||
        (mode === "arch" && i === 7);
      if (isSelected) {
        ctx.fillStyle = "#1e3a8a";
        ctx.fillRect(6, 48 + i * 28, 156, 22);
      }
      ctx.fillStyle = isSelected
        ? "#60a5fa"
        : f.startsWith("▾")
        ? "#cbd5e1"
        : "#64748b";
      ctx.fillText(f, 12, 63 + i * 28);
    });

    if (mode === "ide") {
      const codeLines = [
        { indent: 0, c1: "#38bdf8", t1: "namespace ", c2: "#f8fafc", t2: "Pertec.Siat.BillingEngine;" },
        { indent: 0, c1: "#c084fc", t1: "[ApiController, Route(", c2: "#34d399", t2: "'api/v1/siat/invoices'" },
        { indent: 0, c1: "#38bdf8", t1: "public sealed class ", c2: "#fbbf24", t2: "SiatInvoiceController : ControllerBase {" },
        { indent: 1, c1: "#94a3b8", t1: "private readonly ", c2: "#60a5fa", t2: "ISiatSoapGateway _gateway;" },
        { indent: 1, c1: "#94a3b8", t1: "private readonly ", c2: "#60a5fa", t2: "ICufCryptoService _crypto;" },
        { indent: 1, c1: "#38bdf8", t1: "public async ", c2: "#34d399", t2: "Task<ActionResult<ReceiptDto>> EmitAsync(InvoicePayload dto) {" },
        { indent: 2, c1: "#c084fc", t1: "var ", c2: "#e2e8f0", t2: "cuf = await _crypto.ComputeCufAsync(dto.Nit, dto.BranchId);" },
        { indent: 2, c1: "#c084fc", t1: "var ", c2: "#e2e8f0", t2: "signedXml = _xmlSigner.SignXadesBes(dto, cuf);" },
        { indent: 2, c1: "#c084fc", t1: "var ", c2: "#38bdf8", t2: "result = await _gateway.SendRecepcionFacturaAsync(signedXml);" },
        { indent: 2, c1: "#38bdf8", t1: "return ", c2: "#34d399", t2: "Ok(new ReceiptDto(cuf, result.CodigoRecepcion, result.Estado));" },
        { indent: 1, c1: "#f8fafc", t1: "}", c2: "", t2: "" },
        { indent: 0, c1: "#f8fafc", t1: "}", c2: "", t2: "" },
      ];

      ctx.font = "13px monospace";
      codeLines.forEach((line, idx) => {
        const y = 66 + idx * 24;
        ctx.fillStyle = "#334155";
        ctx.fillText(String(idx + 1).padStart(2, "0"), 182, y);

        const x = 214 + line.indent * 20;
        ctx.fillStyle = line.c1;
        ctx.fillText(line.t1, x, y);
        const w1 = ctx.measureText(line.t1).width;
        ctx.fillStyle = line.c2;
        ctx.fillText(line.t2, x + w1, y);
      });

      ctx.fillStyle = "#0b1120";
      ctx.fillRect(654, 42, 48, 300);
      for (let m = 0; m < 28; m++) {
        ctx.fillStyle =
          m % 4 === 0 ? "#38bdf8" : m % 3 === 0 ? "#6366f1" : "#334155";
        ctx.fillRect(660, 50 + m * 9, 14 + (m % 3) * 8, 4);
      }

      ctx.fillStyle = "#0f172a";
      ctx.fillRect(180, 355, 522, 124);
      ctx.strokeStyle = "#1e293b";
      ctx.strokeRect(180, 355, 522, 124);

      ctx.fillStyle = "#10b981";
      ctx.font = "bold 12px monospace";
      ctx.fillText(
        "✓ SIAT ENGINE READY — Impuestos Nacionales Sync: ONLINE (38ms)",
        196,
        382
      );
      ctx.fillStyle = "#94a3b8";
      ctx.font = "12px monospace";
      ctx.fillText(
        "> [NET6] Listening on https://erp.pertec.bo:5001 (TLS 1.3)",
        196,
        408
      );
      ctx.fillStyle = "#38bdf8";
      ctx.fillText(
        "> [LARAVEL] Queue workers active: 8 · Redis cache hit ratio: 99.4%",
        196,
        432
      );
      ctx.fillStyle = "#cbd5e1";
      ctx.fillText(
        "> [VITE] React 18 + TypeScript bundle optimized",
        196,
        456
      );
    } else if (mode === "erp") {
      const cards = [
        { label: "FACTURAS SIAT HOY", val: "14,820", sub: "+18.4% vs ayer", color: "#10b981" },
        { label: "DISPONIBILIDAD SLA", val: "99.98%", sub: "0 incidencias", color: "#38bdf8" },
        { label: "TIEMPO RESPUESTA", val: "38 ms", sub: "P95 < 65 ms", color: "#3b82f6" },
      ];
      cards.forEach((c, idx) => {
        const x = 186 + idx * 174;
        ctx.fillStyle = "#0f172a";
        ctx.fillRect(x, 50, 162, 100);
        ctx.strokeStyle = "#1e293b";
        ctx.strokeRect(x, 50, 162, 100);
        ctx.fillStyle = "#94a3b8";
        ctx.font = "bold 10px Inter, sans-serif";
        ctx.fillText(c.label, x + 14, 74);
        ctx.fillStyle = c.color;
        ctx.font = "bold 26px Inter, monospace";
        ctx.fillText(c.val, x + 14, 112);
        ctx.fillStyle = "#64748b";
        ctx.font = "11px Inter, sans-serif";
        ctx.fillText(c.sub, x + 14, 136);
      });

      ctx.fillStyle = "#0f172a";
      ctx.fillRect(186, 166, 510, 312);
      ctx.strokeStyle = "#1e293b";
      ctx.strokeRect(186, 166, 510, 312);

      ctx.fillStyle = "#e2e8f0";
      ctx.font = "bold 13px Inter, sans-serif";
      ctx.fillText(
        "Facturación Electrónica SIAT por Sucursal (La Paz · Cochabamba · Santa Cruz)",
        204,
        196
      );

      const bars = [120, 165, 140, 195, 225, 180, 240, 215, 250, 238, 210, 248];
      bars.forEach((h, idx) => {
        const bx = 208 + idx * 39;
        const by = 452 - h;
        ctx.fillStyle = idx % 2 === 0 ? "#10b981" : "#0ea5e9";
        ctx.fillRect(bx, by, 24, h);
      });
    } else {
      // Vista Apps Móviles Flutter & APIs RESTful
      // Emulador móvil a la izquierda del panel central
      ctx.fillStyle = "#0f172a";
      ctx.fillRect(192, 52, 210, 424);
      ctx.strokeStyle = "#6366f1";
      ctx.lineWidth = 2;
      ctx.strokeRect(192, 52, 210, 424);

      ctx.fillStyle = "#4f46e5";
      ctx.fillRect(204, 66, 186, 48);
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 13px Inter, sans-serif";
      ctx.fillText("Flutter App · Pedidos", 220, 95);

      for (let cardIdx = 0; cardIdx < 4; cardIdx++) {
        const cy = 130 + cardIdx * 80;
        ctx.fillStyle = "#1e293b";
        ctx.fillRect(204, cy, 186, 66);
        ctx.fillStyle = "#f8fafc";
        ctx.font = "bold 12px sans-serif";
        ctx.fillText(`Pedido #10${cardIdx + 42} · Activo`, 216, cy + 26);
        ctx.fillStyle = "#34d399";
        ctx.font = "11px monospace";
        ctx.fillText("Sincronizado API REST", 216, cy + 48);
      }

      // Panel de Endpoints API RESTful a la derecha del emulador
      ctx.fillStyle = "#0f172a";
      ctx.fillRect(418, 52, 280, 424);
      ctx.strokeStyle = "#1e293b";
      ctx.strokeRect(418, 52, 280, 424);

      ctx.fillStyle = "#f8fafc";
      ctx.font = "bold 14px Inter, sans-serif";
      ctx.fillText("ENDPOINTS API RESTFUL", 436, 84);

      const endpoints = [
        { method: "POST", path: "/api/v1/siat/emit", code: "201", color: "#10b981" },
        { method: "GET", path: "/api/v1/erp/stock", code: "200", color: "#38bdf8" },
        { method: "PUT", path: "/api/v1/orders/sync", code: "200", color: "#fbbf24" },
        { method: "POST", path: "/api/v1/auth/jwt", code: "200", color: "#818cf8" },
        { method: "GET", path: "/api/v1/reports/pdf", code: "200", color: "#38bdf8" },
      ];
      endpoints.forEach((ep, idx) => {
        const ey = 108 + idx * 68;
        ctx.fillStyle = "#1e293b";
        ctx.fillRect(434, ey, 248, 52);
        ctx.fillStyle = ep.color;
        ctx.font = "bold 12px monospace";
        ctx.fillText(`${ep.method} ${ep.path}`, 446, ey + 24);
        ctx.fillStyle = "#94a3b8";
        ctx.font = "11px monospace";
        ctx.fillText(`Status: ${ep.code} OK · JSON`, 446, ey + 42);
      });
    }

    // Panel derecho de telemetría
    ctx.fillStyle = "#0f172a";
    ctx.fillRect(716, 50, 290, 428);
    ctx.strokeStyle = "#1e293b";
    ctx.lineWidth = 1.5;
    ctx.strokeRect(716, 50, 290, 428);

    ctx.fillStyle = "#f8fafc";
    ctx.font = "bold 14px Inter, sans-serif";
    ctx.fillText("TELEMETRÍA DE PRODUCCIÓN", 736, 82);

    const metrics = [
      { name: "Backend .NET 6 / Laravel", pct: 0.96, color: "#3b82f6" },
      { name: "Frontend React / Vue 3", pct: 0.94, color: "#38bdf8" },
      { name: "SQL Server / PostgreSQL", pct: 0.92, color: "#10b981" },
      { name: "Apps Móviles Flutter", pct: 0.9, color: "#818cf8" },
    ];

    metrics.forEach((m, i) => {
      const y = 126 + i * 72;
      ctx.fillStyle = "#cbd5e1";
      ctx.font = "12px Inter, sans-serif";
      ctx.fillText(m.name, 736, y);

      ctx.fillStyle = "#1e293b";
      ctx.fillRect(736, y + 10, 250, 10);

      ctx.fillStyle = m.color;
      ctx.fillRect(736, y + 10, Math.round(250 * m.pct), 10);
    });

    ctx.fillStyle = "#064e3b";
    ctx.fillRect(736, 422, 250, 36);
    ctx.fillStyle = "#34d399";
    ctx.font = "bold 12px monospace";
    ctx.fillText("● RONAL AYRA · SENIOR DEV", 756, 445);
  }

  return configureSharpTexture(new THREE.CanvasTexture(canvas));
}

function createVerticalScreenTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 2048;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    ctx.scale(2, 2);

    ctx.fillStyle = "#090d16";
    ctx.fillRect(0, 0, 512, 1024);

    ctx.fillStyle = "#0f172a";
    ctx.fillRect(0, 0, 512, 44);
    ctx.fillStyle = "#38bdf8";
    ctx.font = "bold 15px monospace";
    ctx.fillText("TERMINAL · DOCKER & GIT LOGS", 24, 28);

    const logs = [
      "[09:00:01] Starting NestJS Gateway...",
      "[09:00:02] Connected to PostgreSQL 16",
      "[09:00:03] SIAT SoapClient initialized",
      "[09:00:04] Redis Cache layer ready",
      "[09:00:06] Worker #1 processing queue",
      "[09:00:08] GET /api/v1/projects 200 12ms",
      "[09:00:10] POST /api/siat/emit 201 38ms",
      "[09:00:12] Vue3 + Tailwind HMR ready",
      "[09:00:15] Zero memory leaks detected",
      "[09:00:18] Backup completed: 100%",
    ];

    ctx.font = "15px monospace";
    logs.forEach((log, i) => {
      ctx.fillStyle =
        i % 3 === 0 ? "#34d399" : i % 2 === 0 ? "#60a5fa" : "#94a3b8";
      ctx.fillText(log, 24, 88 + i * 42);
    });

    ctx.fillStyle = "#0f172a";
    ctx.fillRect(24, 540, 464, 440);
    ctx.strokeStyle = "#1e293b";
    ctx.lineWidth = 2;
    ctx.strokeRect(24, 540, 464, 440);

    ctx.fillStyle = "#f8fafc";
    ctx.font = "bold 18px sans-serif";
    ctx.fillText("ARQUITECTURA & STACK", 48, 584);

    const badges = [
      "React 18 + TypeScript",
      "Laravel + Livewire",
      ".NET 6 + SQL Server",
      "Vue 3 + Quasar + Pinia",
      "NestJS + Microservicios",
      "Flutter + Dart Mobile",
    ];
    badges.forEach((b, idx) => {
      const y = 616 + idx * 54;
      ctx.fillStyle = "#1e293b";
      ctx.fillRect(48, y, 416, 40);
      ctx.fillStyle = "#38bdf8";
      ctx.font = "bold 15px monospace";
      ctx.fillText(`▸ ${b}`, 64, y + 26);
    });
  }

  return configureSharpTexture(new THREE.CanvasTexture(canvas));
}

const CanvasLoader = () => {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center bg-slate-900/95 px-4 py-3 rounded-xl border border-slate-700 shadow-lg min-w-[170px]">
        <div className="w-6 h-6 border-2 border-slate-600 border-t-blue-500 rounded-full animate-spin mb-2" />
        <p className="text-slate-200 text-xs font-medium whitespace-nowrap">
          Renderizando estudio 3D...
        </p>
      </div>
    </Html>
  );
};

/* ==========================================================================
   ALTAVOZ DE ESTUDIO (MONITOR DE AUDIO KRK / AUDIOENGINE)
   ========================================================================== */
const StudioSpeaker = ({
  position,
  rotation,
  accentColor,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  accentColor: string;
}) => (
  <group position={position} rotation={rotation}>
    <RoundedBox args={[0.24, 0.04, 0.24]} radius={0.01} position={[0, -0.19, 0]}>
      <meshStandardMaterial color="#090d16" roughness={0.8} />
    </RoundedBox>
    <RoundedBox args={[0.26, 0.36, 0.24]} radius={0.025} smoothness={4}>
      <meshPhysicalMaterial
        color="#0f172a"
        roughness={0.25}
        metalness={0.5}
        clearcoat={0.4}
      />
    </RoundedBox>
    <mesh position={[0, 0.09, 0.122]}>
      <circleGeometry args={[0.042, 24]} />
      <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.2} />
    </mesh>
    <mesh position={[0, 0.09, 0.125]}>
      <circleGeometry args={[0.02, 20]} />
      <meshBasicMaterial color={accentColor} />
    </mesh>
    <mesh position={[0, -0.05, 0.122]}>
      <ringGeometry args={[0.028, 0.078, 28]} />
      <meshStandardMaterial color={accentColor} roughness={0.35} metalness={0.3} />
    </mesh>
    <mesh position={[0, -0.05, 0.124]}>
      <circleGeometry args={[0.028, 20]} />
      <meshStandardMaterial color="#090d16" roughness={0.2} metalness={0.8} />
    </mesh>
  </group>
);

/* ==========================================================================
   PARED ACÚSTICA DE ESTUDIO + ESTANTE SUPERIOR + ILUMINACIÓN AMBIENTAL
   ========================================================================== */
const StudioBackdropWall = ({ accentColor }: { accentColor: string }) => {
  const slatOffsets = useMemo(
    () => Array.from({ length: 19 }, (_, i) => -1.35 + i * 0.15),
    []
  );

  return (
    <group position={[0, 1.15, -1.08]}>
      {/* Panel arquitectónico trasero oscuro */}
      <RoundedBox args={[5.0, 2.55, 0.08]} radius={0.03} smoothness={4}>
        <meshStandardMaterial color="#090d16" roughness={0.75} metalness={0.15} />
      </RoundedBox>

      {/* Listones acústicos de madera oscura (Izquierda) */}
      <group position={[-0.95, 0, 0.045]}>
        {slatOffsets.map((xPos, idx) => (
          <mesh key={idx} position={[xPos * 0.65, 0, 0]}>
            <boxGeometry args={[0.055, 2.35, 0.03]} />
            <meshPhysicalMaterial
              color="#1e293b"
              roughness={0.4}
              metalness={0.25}
              clearcoat={0.2}
            />
          </mesh>
        ))}
      </group>

      {/* Difusores acústicos hexagonales (Derecha) */}
      {[
        [1.1, 0.55],
        [1.52, 0.55],
        [1.31, 0.2],
        [1.73, 0.2],
        [1.1, -0.15],
        [1.52, -0.15],
      ].map(([hx, hy], idx) => (
        <mesh
          key={idx}
          position={[hx, hy, 0.055]}
          rotation={[Math.PI / 2, Math.PI / 6, 0]}
        >
          <cylinderGeometry args={[0.2, 0.2, 0.04, 6]} />
          <meshPhysicalMaterial
            color={idx % 2 === 0 ? "#0f172a" : "#1e293b"}
            roughness={0.35}
            metalness={0.5}
            clearcoat={0.3}
          />
        </mesh>
      ))}

      {/* Tira LED Neón de retroiluminación superior e inferior en la pared */}
      <mesh position={[0, 1.22, 0.048]}>
        <boxGeometry args={[4.75, 0.025, 0.015]} />
        <meshBasicMaterial color={accentColor} />
      </mesh>
      <mesh position={[0, -0.25, 0.048]}>
        <boxGeometry args={[3.4, 0.02, 0.015]} />
        <meshBasicMaterial color={accentColor} />
      </mesh>

      {/* Estante flotante superior (Floating Shelf) */}
      <group position={[-0.25, 0.92, 0.22]}>
        <RoundedBox args={[2.5, 0.05, 0.36]} radius={0.015}>
          <meshPhysicalMaterial
            color="#1e293b"
            metalness={0.6}
            roughness={0.3}
            clearcoat={0.3}
          />
        </RoundedBox>
        <mesh position={[0, -0.028, 0.16]}>
          <boxGeometry args={[2.4, 0.008, 0.01]} />
          <meshBasicMaterial color={accentColor} />
        </mesh>

        {/* Libros de Arquitectura de Software apilados en el estante */}
        <RoundedBox
          args={[0.38, 0.05, 0.26]}
          radius={0.008}
          position={[-0.78, 0.05, 0]}
        >
          <meshStandardMaterial color="#2563eb" roughness={0.4} />
        </RoundedBox>
        <RoundedBox
          args={[0.35, 0.045, 0.24]}
          radius={0.008}
          position={[-0.78, 0.098, 0]}
        >
          <meshStandardMaterial color="#0f172a" roughness={0.4} />
        </RoundedBox>
        <RoundedBox
          args={[0.32, 0.04, 0.22]}
          radius={0.008}
          position={[-0.78, 0.14, 0]}
        >
          <meshStandardMaterial color="#10b981" roughness={0.4} />
        </RoundedBox>

        {/* Maceta minimalista con planta suculenta */}
        <group position={[0.82, 0.09, 0]}>
          <mesh>
            <cylinderGeometry args={[0.09, 0.075, 0.13, 20]} />
            <meshPhysicalMaterial
              color="#f8fafc"
              roughness={0.2}
              clearcoat={0.7}
            />
          </mesh>
          <mesh position={[0, 0.09, 0]}>
            <dodecahedronGeometry args={[0.095, 1]} />
            <meshStandardMaterial color="#10b981" roughness={0.5} />
          </mesh>
        </group>

        {/* Reloj Digital LED en el estante */}
        <group position={[0.05, 0.085, 0]}>
          <RoundedBox args={[0.46, 0.12, 0.06]} radius={0.015}>
            <meshStandardMaterial
              color="#090d16"
              metalness={0.8}
              roughness={0.2}
            />
          </RoundedBox>
          <mesh position={[0, 0, 0.032]}>
            <planeGeometry args={[0.38, 0.06]} />
            <meshBasicMaterial color={accentColor} />
          </mesh>
        </group>
      </group>
    </group>
  );
};

/* ==========================================================================
   TECLADO MECÁNICO CUSTOM 75% CON 60+ TECLAS INDIVIDUALES ESCULPIDAS
   ========================================================================== */
const DetailedMechanicalKeyboard = ({ accentColor }: { accentColor: string }) => {
  const keyRows = useMemo(() => {
    const rows: { x: number; z: number; w: number; color: string }[] = [];
    const zPositions = [-0.13, -0.065, 0, 0.065];

    zPositions.forEach((z, rIdx) => {
      for (let c = 0; c < 13; c++) {
        const x = -0.45 + c * 0.068;
        let color = "#0f172a";
        if (rIdx === 0 && c === 0) color = "#ef4444"; // ESC
        else if (rIdx === 2 && c === 12) color = "#10b981"; // ENTER
        else if (c === 0 || c === 12) color = "#1e293b"; // Modifiers
        rows.push({ x, z, w: 0.056, color });
      }
    });
    return rows;
  }, []);

  return (
    <group position={[-0.22, 0.115, 0.38]}>
      <RoundedBox args={[1.12, 0.05, 0.42]} radius={0.018} smoothness={4}>
        <meshPhysicalMaterial
          color="#1e293b"
          metalness={0.78}
          roughness={0.22}
          clearcoat={0.5}
        />
      </RoundedBox>
      <mesh position={[0, 0.026, 0]}>
        <boxGeometry args={[1.04, 0.004, 0.35]} />
        <meshBasicMaterial color={accentColor} />
      </mesh>

      {keyRows.map((k, idx) => (
        <mesh key={idx} position={[k.x, 0.036, k.z]}>
          <boxGeometry args={[k.w, 0.022, 0.052]} />
          <meshStandardMaterial color={k.color} roughness={0.4} />
        </mesh>
      ))}

      <mesh position={[-0.43, 0.036, 0.13]}>
        <boxGeometry args={[0.09, 0.022, 0.052]} />
        <meshStandardMaterial color="#1e293b" roughness={0.4} />
      </mesh>
      <mesh position={[-0.31, 0.036, 0.13]}>
        <boxGeometry args={[0.09, 0.022, 0.052]} />
        <meshStandardMaterial color="#1e293b" roughness={0.4} />
      </mesh>
      <mesh position={[-0.02, 0.036, 0.13]}>
        <boxGeometry args={[0.42, 0.022, 0.052]} />
        <meshStandardMaterial color={accentColor} roughness={0.35} />
      </mesh>
      <mesh position={[0.26, 0.036, 0.13]}>
        <boxGeometry args={[0.09, 0.022, 0.052]} />
        <meshStandardMaterial color="#1e293b" roughness={0.4} />
      </mesh>
      <mesh position={[0.38, 0.036, 0.13]}>
        <boxGeometry args={[0.09, 0.022, 0.052]} />
        <meshStandardMaterial color="#2563eb" roughness={0.4} />
      </mesh>

      <mesh position={[0.48, 0.042, -0.13]}>
        <cylinderGeometry args={[0.026, 0.026, 0.032, 20]} />
        <meshStandardMaterial color={accentColor} metalness={0.9} roughness={0.15} />
      </mesh>

      <mesh position={[-0.25, -0.005, -0.28]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.018, 0.018, 0.32, 16]} />
        <meshStandardMaterial color={accentColor} roughness={0.4} metalness={0.3} />
      </mesh>
    </group>
  );
};

/* ==========================================================================
   ESTUDIO DE DESARROLLO 3D HIPER-DETALLADO CON PANTALLAS DINÁMICAS 2K
   ========================================================================== */
const DeskWorkstationScene = ({
  isMobile,
  screenMode,
}: {
  isMobile: boolean;
  screenMode: ScreenMode;
}) => {
  const floatingNodeRef = useRef<THREE.Group>(null);
  const fan1Ref = useRef<THREE.Mesh>(null);
  const fan2Ref = useRef<THREE.Mesh>(null);
  const fan3Ref = useRef<THREE.Mesh>(null);

  const theme = STUDIO_THEMES[screenMode];

  const deskTexture = useMemo(() => createDeskSurfaceTexture(), []);
  const mainTexture = useMemo(
    () => createMainScreenTexture(screenMode),
    [screenMode]
  );
  const verticalTexture = useMemo(() => createVerticalScreenTexture(), []);
  const mobileTexture = useMemo(() => createMobileScreenTexture(), []);

  useEffect(() => {
    return () => {
      mainTexture.dispose();
    };
  }, [mainTexture]);

  useEffect(() => {
    return () => {
      deskTexture.dispose();
      verticalTexture.dispose();
      mobileTexture.dispose();
    };
  }, [deskTexture, verticalTexture, mobileTexture]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (floatingNodeRef.current) {
      floatingNodeRef.current.position.y = 1.62 + Math.sin(t * 1.8) * 0.05;
      floatingNodeRef.current.rotation.y = t * 0.7;
    }
    if (fan1Ref.current) fan1Ref.current.rotation.z = -t * 3.2;
    if (fan2Ref.current) fan2Ref.current.rotation.z = -t * 3.2;
    if (fan3Ref.current) fan3Ref.current.rotation.z = -t * 3.2;
  });

  return (
    <group
      scale={isMobile ? 0.74 : 0.88}
      position={[0, -0.56, 0]}
      rotation={[0, -0.2, 0]}
    >
      {/* Pared acústica de estudio con estante y luces de ambiente */}
      <StudioBackdropWall accentColor={theme.primary} />

      {/* Tablero principal del escritorio */}
      <RoundedBox
        args={[4.8, 0.14, 2.3]}
        radius={0.04}
        smoothness={6}
        position={[0, 0, 0]}
      >
        <meshPhysicalMaterial
          map={deskTexture}
          roughness={0.3}
          metalness={0.18}
          clearcoat={0.3}
          clearcoatRoughness={0.25}
        />
      </RoundedBox>

      {/* Bisel frontal de aluminio anodizado + tira LED ambiental */}
      <mesh position={[0, 0, 1.152]}>
        <boxGeometry args={[4.7, 0.022, 0.01]} />
        <meshBasicMaterial color={theme.primary} />
      </mesh>
      <mesh position={[0, 0.04, -1.0]}>
        <boxGeometry args={[4.6, 0.02, 0.02]} />
        <meshBasicMaterial color={theme.primary} />
      </mesh>

      {/* Controlador digital de altura de escritorio motorizado */}
      <group position={[1.95, 0.04, 1.16]}>
        <RoundedBox args={[0.28, 0.05, 0.08]} radius={0.01}>
          <meshStandardMaterial color="#090d16" metalness={0.7} roughness={0.2} />
        </RoundedBox>
        <mesh position={[-0.05, 0, 0.042]}>
          <planeGeometry args={[0.1, 0.028]} />
          <meshBasicMaterial color={theme.primary} />
        </mesh>
      </group>

      {/* Columnas motorizadas y pies del escritorio */}
      {[-2.1, 2.1].map((xPos, idx) => (
        <group key={idx} position={[xPos, -0.82, 0]}>
          <RoundedBox args={[0.16, 1.5, 0.22]} radius={0.02}>
            <meshStandardMaterial color="#0f172a" roughness={0.25} metalness={0.8} />
          </RoundedBox>
          <RoundedBox
            args={[0.2, 0.08, 1.9]}
            radius={0.02}
            position={[0, -0.72, 0]}
          >
            <meshStandardMaterial color="#1e293b" roughness={0.3} metalness={0.75} />
          </RoundedBox>
        </group>
      ))}

      {/* Alfombrilla extendida con costura perimetral */}
      <RoundedBox
        args={[2.85, 0.022, 1.18]}
        radius={0.01}
        position={[-0.15, 0.075, 0.34]}
      >
        <meshStandardMaterial color={theme.secondary} roughness={0.7} />
      </RoundedBox>
      <RoundedBox
        args={[2.81, 0.025, 1.14]}
        radius={0.01}
        position={[-0.15, 0.076, 0.34]}
      >
        <meshStandardMaterial color="#090d16" roughness={0.88} />
      </RoundedBox>

      {/* ================= MONITOR PRINCIPAL 34" ULTRAWIDE PRO ================= */}
      <group position={[0, 1.02, -0.46]}>
        <RoundedBox args={[2.46, 1.22, 0.07]} radius={0.028} smoothness={6}>
          <meshPhysicalMaterial
            color="#1e293b"
            roughness={0.2}
            metalness={0.85}
            clearcoat={0.6}
          />
        </RoundedBox>

        <mesh position={[0, 0.01, 0.036]}>
          <planeGeometry args={[2.38, 1.12]} />
          <meshBasicMaterial color="#020617" />
        </mesh>

        <mesh position={[0, 0.01, 0.038]}>
          <planeGeometry args={[2.34, 1.08]} />
          <meshBasicMaterial map={mainTexture} toneMapped={false} />
        </mesh>

        <mesh position={[1.1, -0.58, 0.038]}>
          <circleGeometry args={[0.01, 16]} />
          <meshBasicMaterial color="#10b981" />
        </mesh>

        {/* Lámpara ScreenBar cilíndrica de aluminio */}
        <group position={[0, 0.65, 0.08]}>
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.022, 0.022, 1.35, 24]} />
            <meshStandardMaterial color="#0f172a" metalness={0.85} roughness={0.2} />
          </mesh>
          <mesh position={[0, -0.02, 0.01]}>
            <boxGeometry args={[1.28, 0.008, 0.02]} />
            <meshBasicMaterial color="#e0f2fe" />
          </mesh>
          <RoundedBox
            args={[0.12, 0.07, 0.14]}
            radius={0.015}
            position={[0, -0.02, -0.06]}
          >
            <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.25} />
          </RoundedBox>
        </group>
      </group>

      {/* Brazo hidráulico VESA y base de aluminio del monitor */}
      <RoundedBox
        args={[0.14, 0.82, 0.1]}
        radius={0.02}
        position={[0, 0.44, -0.56]}
      >
        <meshStandardMaterial color="#0f172a" metalness={0.85} roughness={0.2} />
      </RoundedBox>
      <RoundedBox
        args={[0.82, 0.035, 0.48]}
        radius={0.015}
        position={[0, 0.08, -0.5]}
      >
        <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.25} />
      </RoundedBox>

      {/* ================= MONITOR VERTICAL SECUNDARIO 27" (IZQUIERDA) ================= */}
      <group position={[-1.68, 0.98, -0.22]} rotation={[0, 0.4, 0]}>
        <RoundedBox args={[0.82, 1.44, 0.065]} radius={0.025} smoothness={6}>
          <meshPhysicalMaterial
            color="#1e293b"
            roughness={0.2}
            metalness={0.85}
            clearcoat={0.6}
          />
        </RoundedBox>
        <mesh position={[0, 0, 0.035]}>
          <planeGeometry args={[0.75, 1.36]} />
          <meshBasicMaterial map={verticalTexture} toneMapped={false} />
        </mesh>
        <RoundedBox
          args={[0.1, 0.68, 0.08]}
          radius={0.015}
          position={[0, -0.6, -0.06]}
        >
          <meshStandardMaterial color="#0f172a" metalness={0.8} roughness={0.25} />
        </RoundedBox>
      </group>

      {/* ================= PAR DE MONITORES DE AUDIO DE ESTUDIO ================= */}
      <StudioSpeaker
        position={[-1.08, 0.28, -0.48]}
        rotation={[0, 0.2, 0]}
        accentColor={theme.primary}
      />
      <StudioSpeaker
        position={[1.08, 0.28, -0.48]}
        rotation={[0, -0.2, 0]}
        accentColor={theme.primary}
      />

      {/* ================= TECLADO MECÁNICO CUSTOM 75% CON TECLAS INDIVIDUALES ================= */}
      <DetailedMechanicalKeyboard accentColor={theme.primary} />

      {/* ================= MOUSE INALÁMBRICO ERGONÓMICO ================= */}
      <group position={[0.64, 0.115, 0.4]}>
        <RoundedBox args={[0.19, 0.052, 0.3]} radius={0.024} smoothness={4}>
          <meshPhysicalMaterial
            color="#1e293b"
            metalness={0.5}
            roughness={0.28}
            clearcoat={0.5}
          />
        </RoundedBox>
        <mesh position={[0, 0.028, -0.07]}>
          <boxGeometry args={[0.022, 0.014, 0.065]} />
          <meshStandardMaterial color="#e2e8f0" metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[0, 0.027, 0.04]}>
          <circleGeometry args={[0.012, 16]} />
          <meshBasicMaterial color={theme.primary} />
        </mesh>
      </group>

      {/* ================= SMARTPHONE EN DOCK MAGSAFE (APP FLUTTER HD) ================= */}
      <group position={[0.72, 0.24, -0.22]} rotation={[-0.28, -0.35, 0]}>
        <RoundedBox args={[0.25, 0.49, 0.025]} radius={0.02} smoothness={4}>
          <meshPhysicalMaterial
            color="#0f172a"
            metalness={0.85}
            roughness={0.15}
            clearcoat={0.8}
          />
        </RoundedBox>
        <mesh position={[0, 0, 0.014]}>
          <planeGeometry args={[0.225, 0.46]} />
          <meshBasicMaterial map={mobileTexture} toneMapped={false} />
        </mesh>
      </group>

      {/* ================= TORRE WORKSTATION CON CRISTAL TEMPLADO & GPU ================= */}
      <group position={[1.76, 0.68, -0.16]} rotation={[0, -0.22, 0]}>
        <RoundedBox args={[0.66, 1.2, 1.1]} radius={0.03} smoothness={6}>
          <meshPhysicalMaterial
            color="#0f172a"
            metalness={0.8}
            roughness={0.22}
            clearcoat={0.4}
          />
        </RoundedBox>

        <mesh position={[-0.31, 0.04, 0]} rotation={[0, -Math.PI / 2, 0]}>
          <planeGeometry args={[0.96, 0.98]} />
          <meshStandardMaterial color="#020617" roughness={0.8} />
        </mesh>

        <mesh position={[-0.26, 0.14, -0.08]} rotation={[0, -Math.PI / 2, 0]}>
          <planeGeometry args={[0.58, 0.62]} />
          <meshStandardMaterial color="#0f172a" metalness={0.7} roughness={0.3} />
        </mesh>
        <mesh position={[-0.27, 0.22, -0.1]} rotation={[0, -Math.PI / 2, 0]}>
          <ringGeometry args={[0.06, 0.09, 28]} />
          <meshBasicMaterial color={theme.primary} />
        </mesh>
        {[-0.02, 0.01, 0.04, 0.07].map((zRam, rIdx) => (
          <mesh key={rIdx} position={[-0.27, 0.23, zRam]}>
            <boxGeometry args={[0.01, 0.16, 0.014]} />
            <meshBasicMaterial
              color={rIdx % 2 === 0 ? theme.primary : theme.secondary}
            />
          </mesh>
        ))}

        <RoundedBox
          args={[0.12, 0.12, 0.64]}
          radius={0.015}
          position={[-0.26, -0.06, -0.04]}
        >
          <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.2} />
        </RoundedBox>
        <mesh position={[-0.322, -0.06, -0.04]}>
          <boxGeometry args={[0.01, 0.028, 0.56]} />
          <meshBasicMaterial color={theme.badge} />
        </mesh>

        <mesh position={[-0.32, 0.46, 0]}>
          <boxGeometry args={[0.012, 0.025, 0.9]} />
          <meshBasicMaterial color={theme.primary} />
        </mesh>
        <mesh position={[-0.32, -0.44, 0]}>
          <boxGeometry args={[0.012, 0.025, 0.9]} />
          <meshBasicMaterial color={theme.secondary} />
        </mesh>

        <mesh position={[-0.335, 0.02, 0]} rotation={[0, -Math.PI / 2, 0]}>
          <planeGeometry args={[0.98, 1.04]} />
          <meshPhysicalMaterial
            color={theme.primary}
            transparent
            opacity={0.18}
            roughness={0.05}
            metalness={0.9}
            clearcoat={1}
          />
        </mesh>

        <mesh ref={fan1Ref} position={[0, 0.34, 0.555]}>
          <torusGeometry args={[0.15, 0.018, 16, 32]} />
          <meshBasicMaterial color={theme.primary} />
        </mesh>
        <mesh ref={fan2Ref} position={[0, 0, 0.555]}>
          <torusGeometry args={[0.15, 0.018, 16, 32]} />
          <meshBasicMaterial color={theme.secondary} />
        </mesh>
        <mesh ref={fan3Ref} position={[0, -0.34, 0.555]}>
          <torusGeometry args={[0.15, 0.018, 16, 32]} />
          <meshBasicMaterial color={theme.badge} />
        </mesh>
      </group>

      {/* ================= TAZA DE CERÁMICA CON ASA Y POSAVASOS ================= */}
      <group position={[-1.18, 0.18, 0.52]}>
        <mesh position={[0, -0.1, 0]}>
          <cylinderGeometry args={[0.13, 0.13, 0.015, 24]} />
          <meshStandardMaterial color="#1e293b" roughness={0.6} />
        </mesh>
        <mesh>
          <cylinderGeometry args={[0.105, 0.09, 0.22, 28]} />
          <meshPhysicalMaterial color="#f8fafc" roughness={0.12} clearcoat={0.8} />
        </mesh>
        <mesh position={[-0.1, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.055, 0.015, 12, 24, Math.PI]} />
          <meshPhysicalMaterial color="#f8fafc" roughness={0.12} clearcoat={0.8} />
        </mesh>
        <mesh position={[0, 0.095, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.092, 24]} />
          <meshBasicMaterial color="#3b2314" />
        </mesh>
      </group>

      {/* ================= NODO HOLOGRÁFICO FLOTANTE ================= */}
      <group ref={floatingNodeRef} position={[1.76, 1.62, -0.16]}>
        <mesh>
          <octahedronGeometry args={[0.18, 0]} />
          <meshStandardMaterial
            color={theme.primary}
            emissive={theme.secondary}
            emissiveIntensity={0.8}
            wireframe
          />
        </mesh>
      </group>
    </group>
  );
};

interface ComputersCanvasProps {
  autoRotate?: boolean;
  screenMode?: ScreenMode;
  onFallback?: () => void;
}

const ComputersCanvas = ({
  autoRotate = true,
  screenMode = "ide",
  onFallback,
}: ComputersCanvasProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isInViewport, setIsInViewport] = useState(true);
  const [webGLSupported] = useState<boolean>(() => checkWebGLSupport());

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    const node = containerRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  if (!webGLSupported) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-slate-950">
        <p className="text-xs text-slate-300 font-medium mb-2">
          Aceleración WebGL no disponible en este navegador.
        </p>
        {onFallback && (
          <button
            type="button"
            onClick={onFallback}
            className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors"
          >
            Ver Ficha Técnica
          </button>
        )}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative select-none cursor-grab active:cursor-grabbing"
      aria-label="Estudio 3D interactivo de alta definición"
    >
      <Canvas
        frameloop={isInViewport ? "always" : "never"}
        dpr={[1.5, 2]}
        camera={{
          position: isMobile ? [0, 1.55, 5.1] : [0.35, 1.4, 4.4],
          fov: isMobile ? 40 : 36,
        }}
        gl={{
          powerPreference: "high-performance",
          antialias: true,
          alpha: true,
          preserveDrawingBuffer: false,
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <StudioEnvironment />
          <ambientLight intensity={0.75} />
          <directionalLight position={[5, 8, 6]} intensity={1.45} />
          <pointLight
            position={[0, 2.2, 2]}
            intensity={0.95}
            color={STUDIO_THEMES[screenMode].primary}
          />
          <pointLight
            position={[-3, 2, 1]}
            intensity={0.65}
            color={STUDIO_THEMES[screenMode].secondary}
          />

          <OrbitControls
            enableZoom={true}
            minDistance={2.2}
            maxDistance={5.8}
            enablePan={false}
            maxPolarAngle={Math.PI / 2.02}
            minPolarAngle={Math.PI / 3.6}
            maxAzimuthAngle={Math.PI / 2.6}
            minAzimuthAngle={-Math.PI / 2.6}
            autoRotate={autoRotate && isInViewport}
            autoRotateSpeed={0.5}
          />

          <DeskWorkstationScene isMobile={isMobile} screenMode={screenMode} />

          <ContactShadows
            position={[0, -1.38, 0]}
            opacity={0.55}
            scale={8.5}
            blur={2}
            far={4}
            resolution={512}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
