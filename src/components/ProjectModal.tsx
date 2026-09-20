import { useState } from 'react';
import { ProjectItem } from '../types';
import { X, ExternalLink, RefreshCw, Radio, Check, Plus, Minus } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[var(--bg-card)] border-[4px] border-[var(--border-color)] brutal-shadow-lg flex flex-col">
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-20 h-12 bg-[var(--bg-terminal-header)] border-b-[3px] border-[var(--border-color)] px-4 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-[#c3f400] border border-[var(--border-color)]" />
            <span className="font-mono-code text-xs uppercase text-white font-bold">
              SYS_SANDBOX // {project.sysCode}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center bg-[#282a2d] border border-[var(--border-color)] text-white hover:bg-[#c3f400] hover:text-[#283500] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 space-y-6">
          {/* Header Info */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2 py-0.5 bg-[#c3f400] text-[#283500] font-mono-code text-xs font-bold uppercase">
                {project.statusBadge}
              </span>
              <span className="px-2 py-0.5 bg-[var(--bg-inset)] text-[#00bed6] dark:text-[#00eefc] font-mono-code text-xs uppercase border border-[var(--border-color)]">
                {project.versionBadge}
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl uppercase font-bold text-[var(--text-primary)] tracking-tight">
              {project.title}
            </h2>
            <p className="font-body text-sm sm:text-base text-[var(--text-muted)] mt-1">
              {project.description}
            </p>
          </div>

          {/* Dynamic Interactive Sandboxes based on Project Type */}
          {project.demoType === 'ocean' && <OceanSimulation />}
          {project.demoType === 'cafe' && <CafeSimulation />}
          {project.demoType === 'vehicle' && <VehicleSimulation />}

          {/* Architectural Specs */}
          <div className="p-4 bg-[var(--bg-inset)] border-2 border-[var(--border-color)] space-y-2">
            <h4 className="font-mono-code text-xs uppercase font-bold text-[#aee000] dark:text-[#c3f400]">
              DEPLOYED SPECIFICATION MATRIX
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-mono-code text-xs">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-2.5 bg-[var(--bg-card)] border border-[var(--border-subtle)]">
                  <p className="text-[var(--text-muted)] text-[10px] uppercase font-bold">{m.label}</p>
                  <p className="text-base font-bold text-[var(--text-primary)] mt-0.5">{m.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-[var(--bg-terminal-header)] border-t-[3px] border-[var(--border-color)] px-4 py-3 flex items-center justify-between">
          <span className="font-mono-code text-[11px] text-white/80">
            ENVIRONMENT: ACTIVE CLIENT SANDBOX
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 bg-[#c3f400] text-[#283500] border-2 border-[var(--border-color)] font-mono-code text-xs uppercase font-bold brutal-shadow-sm hover:translate-x-0.5 hover:translate-y-0.5 cursor-pointer"
          >
            DISMISS
          </button>
        </div>
      </div>
    </div>
  );
}


/* 1. Ocean GIS Interactive Simulation */
function OceanSimulation() {
  const [activeLayer, setActiveLayer] = useState<'satellite' | 'sonar' | 'coral'>('satellite');
  const [alertActive, setAlertActive] = useState(true);

  return (
    <div className="border-[3px] border-[var(--border-color)] bg-[#0c0e11] p-4 sm:p-5 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#444933] pb-2">
        <div className="flex items-center gap-2">
          <Radio className="w-4 h-4 text-[#00eefc] animate-pulse" />
          <span className="font-mono-code text-xs uppercase text-white font-bold">
            PACIFIC MARITIME RADAR FEED (SIMULATION)
          </span>
        </div>
        <div className="flex gap-1.5 font-mono-code text-[11px]">
          {(['satellite', 'sonar', 'coral'] as const).map((layer) => (
            <button
              key={layer}
              type="button"
              onClick={() => setActiveLayer(layer)}
              className={`px-2.5 py-1 uppercase border border-[var(--border-color)] cursor-pointer ${
                activeLayer === layer ? 'bg-[#00eefc] text-[#00363a] font-bold' : 'text-[#c4c9ac] bg-[#1e2023]'
              }`}
            >
              {layer}
            </button>
          ))}
        </div>
      </div>

      {/* Radar Visual Canvas Grid */}
      <div className="relative h-64 bg-[#111923] border border-[#00eefc]/40 overflow-hidden flex items-center justify-center font-mono-code text-xs">
        {/* Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00eefc10_1px,transparent_1px),linear-gradient(to_bottom,#00eefc10_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Concentric radar rings */}
        <div className="absolute w-44 h-44 rounded-full border border-[#00eefc]/30 pointer-events-none" />
        <div className="absolute w-24 h-24 rounded-full border border-[#00eefc]/40 pointer-events-none" />
        <div className="absolute w-full h-[1px] bg-[#00eefc]/30" />
        <div className="absolute h-full w-[1px] bg-[#00eefc]/30" />

        {/* Pinging vessel pins */}
        <div className="absolute top-16 left-1/3 flex items-center gap-1.5 p-1 bg-[#0c0e11] border border-[#00eefc] text-[10px] text-[#00eefc]">
          <span className="w-2 h-2 rounded-full bg-[#00eefc] animate-ping" />
          <span>VESSEL #104 [PATROL]</span>
        </div>

        <div className="absolute bottom-12 right-1/4 flex items-center gap-1.5 p-1 bg-[#0c0e11] border border-[#c3f400] text-[10px] text-[#c3f400]">
          <span className="w-2 h-2 rounded-full bg-[#c3f400] animate-pulse" />
          <span>REEF BUOY S-88 [HEALTH: 96%]</span>
        </div>

        {alertActive && (
          <div className="absolute top-8 right-12 flex items-center gap-1.5 p-1 bg-[#93000a] border border-[#ffb4ab] text-[10px] text-white animate-bounce">
            <span>⚠️ UNREGISTERED TRAWLER (LAT: 12.44, LON: 138.12)</span>
          </div>
        )}

        <div className="absolute bottom-3 left-3 bg-[#0c0e11]/90 p-2 border border-[#444933] text-[11px] text-[#c4c9ac] space-y-0.5">
          <p>ACTIVE LAYER: <span className="text-[#00eefc] uppercase font-bold">{activeLayer}</span></p>
          <p>MONITORED CLUSTER: <span className="text-[#c3f400]">14,280 VESSELS</span></p>
        </div>

        <button
          type="button"
          onClick={() => setAlertActive(!alertActive)}
          className="absolute top-3 right-3 px-2 py-1 bg-[#1e2023] border border-[var(--border-color)] text-[10px] text-white hover:bg-[#c3f400] hover:text-[#283500]"
        >
          {alertActive ? 'SILENCE ALERT' : 'TRIGGER SIM ALERT'}
        </button>
      </div>
    </div>
  );
}

/* 2. Cafe OS Interactive POS Order Simulation */
function CafeSimulation() {
  const [cart, setCart] = useState<{ id: string; name: string; price: number; qty: number }[]>([
    { id: '1', name: 'Cyber Cold Brew (Single Origin)', price: 5.5, qty: 1 },
  ]);
  const [orderSent, setOrderSent] = useState(false);

  const menu = [
    { id: '1', name: 'Cyber Cold Brew (Single Origin)', price: 5.5 },
    { id: '2', name: 'Brutalist Espresso Doppio', price: 4.0 },
    { id: '3', name: 'Matcha Tonic & Yuzu Foam', price: 6.5 },
  ];

  const addItem = (item: (typeof menu)[0]) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) => (p.id === item.id ? { ...p, qty: p.qty + 1 } : p));
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeItem = (id: string) => {
    setCart((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, qty: p.qty - 1 } : p))
        .filter((p) => p.qty > 0)
    );
  };

  const total = cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0);

  const handleCheckout = () => {
    setOrderSent(true);
    setTimeout(() => {
      setOrderSent(false);
      setCart([]);
    }, 3500);
  };

  return (
    <div className="border-[3px] border-[var(--border-color)] bg-[#0c0e11] p-4 sm:p-5 space-y-4">
      <div className="flex items-center justify-between border-b border-[#444933] pb-2 font-mono-code text-xs">
        <span className="text-[#00eefc] font-bold uppercase">CAFE TOUCHSCREEN POS TERMINAL</span>
        <span className="text-[#c4c9ac]">TABLE #04 • WS STREAM CONNECTED</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Menu list */}
        <div className="md:col-span-7 space-y-2">
          <p className="font-mono-code text-[11px] text-[#c4c9ac] uppercase">SELECT BEVERAGES</p>
          <div className="space-y-2">
            {menu.map((item) => (
              <div
                key={item.id}
                className="p-3 bg-[#1e2023] border border-[#444933] flex items-center justify-between font-mono-code text-xs"
              >
                <div>
                  <p className="text-white font-bold">{item.name}</p>
                  <p className="text-[#00eefc]">${item.price.toFixed(2)}</p>
                </div>
                <button
                  type="button"
                  onClick={() => addItem(item)}
                  className="px-2.5 py-1 bg-[#c3f400] text-[#283500] border border-[var(--border-color)] font-bold hover:translate-x-0.5"
                >
                  + ADD
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Order Cart & Instant Ticket Dispatch */}
        <div className="md:col-span-5 p-3 bg-[#1a1c1f] border border-[#444933] flex flex-col justify-between font-mono-code text-xs">
          <div>
            <p className="text-white font-bold pb-2 border-b border-[#333538] uppercase">
              LIVE TICKET CART
            </p>
            {cart.length === 0 ? (
              <p className="text-[#c4c9ac] py-6 text-center text-xs">Cart empty</p>
            ) : (
              <div className="divide-y divide-[#333538] py-2 space-y-1">
                {cart.map((item) => (
                  <div key={item.id} className="pt-1 flex items-center justify-between text-[11px]">
                    <span className="text-white truncate max-w-[130px]">{item.name}</span>
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="w-4 h-4 bg-[#282a2d] text-white flex items-center justify-center border border-[#444933]"
                      >
                        -
                      </button>
                      <span className="text-[#c3f400]">{item.qty}</span>
                      <button
                        type="button"
                        onClick={() => addItem(item)}
                        className="w-4 h-4 bg-[#282a2d] text-white flex items-center justify-center border border-[#444933]"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="pt-3 border-t border-[#333538] space-y-2">
            <div className="flex justify-between font-bold text-white text-sm">
              <span>TOTAL:</span>
              <span className="text-[#00eefc]">${total.toFixed(2)}</span>
            </div>

            <button
              type="button"
              disabled={cart.length === 0 || orderSent}
              onClick={handleCheckout}
              className="w-full py-2 bg-[#00eefc] text-[#00363a] font-bold uppercase border border-[var(--border-color)] hover:translate-x-0.5 disabled:opacity-50 cursor-pointer"
            >
              {orderSent ? '✓ DISPATCHED TO KITCHEN!' : 'DISPATCH ORDER'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 3. Vehicle 3D Turntable Simulator */
function VehicleSimulation() {
  const [paintColor, setPaintColor] = useState('#111317');
  const [rotation, setRotation] = useState(45);
  const [months, setMonths] = useState(48);

  const basePrice = 88500;
  const interestRate = 0.045;
  const monthlyPayment = ((basePrice * (1 + interestRate * (months / 12))) / months).toFixed(0);

  return (
    <div className="border-[3px] border-[var(--border-color)] bg-[#0c0e11] p-4 sm:p-5 space-y-4">
      <div className="flex items-center justify-between border-b border-[#444933] pb-2 font-mono-code text-xs">
        <span className="text-[#c3f400] font-bold uppercase">AEGIS // N-E 001 ELECTRIC COUPE TURNTABLE</span>
        <span className="text-[#c4c9ac]">360° WEBGL ORBIT</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Turntable Canvas Preview */}
        <div className="md:col-span-7 bg-[#1a1c1f] border border-[#444933] p-4 flex flex-col items-center justify-center relative min-h-[220px]">
          {/* Simulated 3D car silhouette with angle */}
          <div
            className="w-52 h-28 rounded-lg border-4 border-white flex items-center justify-center transition-all duration-300 font-mono-code text-xs text-center shadow-2xl"
            style={{
              backgroundColor: paintColor,
              transform: `perspective(600px) rotateY(${rotation - 180}deg)`,
            }}
          >
            <span className="text-white font-bold drop-shadow">
              AEGIS N-E // 001<br />
              <span className="text-[10px] text-[#c3f400]">820 HP • DUAL MOTOR</span>
            </span>
          </div>

          {/* Turntable rotation slider */}
          <div className="w-full mt-6 space-y-1 font-mono-code text-xs text-[#c4c9ac]">
            <div className="flex justify-between">
              <span>ORBIT ANGLE:</span>
              <span className="text-[#00eefc] font-bold">{rotation}°</span>
            </div>
            <input
              type="range"
              min="0"
              max="360"
              value={rotation}
              onChange={(e) => setRotation(Number(e.target.value))}
              className="w-full accent-[#c3f400]"
            />
          </div>

          {/* Paint Swatches */}
          <div className="flex items-center gap-2 mt-3 font-mono-code text-[11px] text-[#c4c9ac]">
            <span>TRIM:</span>
            {[
              { label: 'Obsidian', color: '#111317' },
              { label: 'Cyber Lime', color: '#556d00' },
              { label: 'Neon Cyan', color: '#00686f' },
              { label: 'Frost White', color: '#ffffff' },
            ].map((swatch) => (
              <button
                key={swatch.label}
                type="button"
                onClick={() => setPaintColor(swatch.color)}
                style={{ backgroundColor: swatch.color }}
                className={`w-6 h-6 border-2 border-[var(--border-color)] cursor-pointer ${
                  paintColor === swatch.color ? 'ring-2 ring-[#c3f400]' : ''
                }`}
                title={swatch.label}
              />
            ))}
          </div>
        </div>

        {/* Financing Simulator Matrix */}
        <div className="md:col-span-5 p-3 bg-[#1e2023] border border-[#444933] space-y-3 font-mono-code text-xs">
          <p className="text-white font-bold uppercase pb-1 border-b border-[#333538]">
            FINANCING AMORTIZATION
          </p>

          <div className="space-y-1">
            <span className="text-[#c4c9ac] text-[10px]">VEHICLE BASE PRICE:</span>
            <p className="text-white font-bold text-base">${basePrice.toLocaleString()}</p>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-[11px] text-[#c4c9ac]">
              <span>LOAN DURATION:</span>
              <span className="text-[#c3f400] font-bold">{months} MONTHS</span>
            </div>
            <input
              type="range"
              min="24"
              max="72"
              step="12"
              value={months}
              onChange={(e) => setMonths(Number(e.target.value))}
              className="w-full accent-[#00eefc]"
            />
          </div>

          <div className="p-2.5 bg-[#0c0e11] border border-[#444933]">
            <p className="text-[10px] text-[#c4c9ac]">ESTIMATED MONTHLY REPAYMENT:</p>
            <p className="font-display text-2xl font-bold text-[#c3f400]">${monthlyPayment} / MO</p>
            <p className="text-[10px] text-[#8e9379] mt-0.5">Fixed 4.5% APR Tier-1 Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
}
