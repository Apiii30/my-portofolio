import { useState } from 'react';
import { Cpu, CheckCircle2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function AboutTerminal() {
  const [activeTab, setActiveTab] = useState<'bio' | 'specs' | 'focus'>('bio');
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);
  const [customInput, setCustomInput] = useState('');

  const runCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let result = '';

    if (trimmed === 'clear') {
      setTerminalOutput([]);
      return;
    } else if (trimmed === 'engineer.credo()' || trimmed === 'credo') {
      result = '=> "Form follows function, amplified by raw brutalism."';
    } else if (trimmed.startsWith('ping')) {
      result = '=> 64 bytes from 104.21.48.1: icmp_seq=1 ttl=58 time=11.8 ms';
    } else if (trimmed === 'help') {
      result = '=> Available: credo, ping, stack, uptime, clear, contact';
    } else if (trimmed === 'stack') {
      result = '=> TypeScript, React 19, Node.js, PostgreSQL, Docker, Tailwind CSS, WebGL';
    } else if (trimmed === 'uptime') {
      result = '=> 21840 hrs (99.98% SLA - zero fatal drops)';
    } else if (trimmed === 'contact') {
      result = '=> hafidz.asmar@dev.io | Available for Q2 2026';
    } else {
      result = `=> bash: ${cmd}: command not found (try 'help')`;
    }

    setTerminalOutput((prev) => [...prev, `> ${cmd}`, result]);
    setCustomInput('');
  };

  return (
    <section id="about" className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <span className="px-2.5 py-0.5 bg-[#c3f400] text-[#283500] border-2 border-[var(--border-color)] font-mono-code text-xs uppercase font-bold">
          01 // IDENTITY
        </span>
        <div className="h-0.5 flex-1 bg-[var(--border-subtle)]" />
        <span className="font-mono-code text-xs uppercase text-[var(--text-muted)]">KERNEL_SYS_V2.6</span>
      </div>

      {/* Retro Cyber OS Window Container */}
      <ScrollReveal direction="3d-left" delay={0.05}>
        <div className="w-full bg-[var(--bg-card)] backdrop-blur-2xl border-[4px] border-[var(--border-color)] brutal-shadow-md overflow-hidden">
        {/* OS Title Bar */}
        <div className="h-11 bg-[var(--bg-terminal-header)] border-b-[3px] border-[var(--border-color)] px-3 sm:px-4 flex items-center justify-between select-none">
          {/* Window Controls */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-[#ffb4ab] border border-[var(--border-color)] inline-block" />
            <span className="w-3 h-3 bg-[#c3f400] border border-[var(--border-color)] inline-block" />
            <span className="w-3 h-3 bg-[#00eefc] border border-[var(--border-color)] inline-block" />
            <span className="ml-2 font-mono-code text-xs text-white uppercase font-bold tracking-wider truncate max-w-[200px] sm:max-w-none">
              hafidz_terminal_v2.6.exe — [ABOUT_ME]
            </span>
          </div>

          {/* Window Right Status */}
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="px-2 py-0.5 bg-[#282a2d] border border-[var(--border-color)] font-mono-code text-[10px] sm:text-[11px] text-[#c3f400] uppercase">
              ONLINE
            </span>
            <span className="font-mono-code text-[11px] text-[#c4c9ac] hidden xs:inline">TTY_08</span>
          </div>
        </div>

        {/* OS Window Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left Terminal Code Inspector (5 Cols) */}
          <div className="lg:col-span-5 bg-[#0c0e11] p-4 sm:p-5 border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-[var(--border-color)] font-mono-code text-xs sm:text-sm text-white leading-relaxed overflow-x-auto">
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#333538] text-xs text-[#c4c9ac]">
              <span>bash - 80x24</span>
              <span>UTF-8</span>
            </div>

            <pre className="text-[#c4c9ac] font-mono-code text-[10px] sm:text-xs overflow-x-auto">
              <span className="text-[#c3f400]">const</span> engineer = {'{\n'}
              {'  '}<span className="text-[#00eefc]">name</span>: <span className="text-white">"Hafidz Asmar Meisanda"</span>,{'\n'}
              {'  '}<span className="text-[#00eefc]">role</span>: <span className="text-white">"Staff Fullstack Web Architect"</span>,{'\n'}
              {'  '}<span className="text-[#00eefc]">location</span>: <span className="text-white">"Tokyo / Remote"</span>,{'\n'}
              {'  '}<span className="text-[#00eefc]">stack</span>: [{'\n'}
              {'    '}<span className="text-[#c3f400]">"TypeScript"</span>, <span className="text-[#c3f400]">"React.js"</span>,{'\n'}
              {'    '}<span className="text-[#c3f400]">"Node.js"</span>, <span className="text-[#c3f400]">"PostgreSQL"</span>,{'\n'}
              {'    '}<span className="text-[#c3f400]">"Docker"</span>, <span className="text-[#c3f400]">"Tailwind CSS"</span>{'\n'}
              {'  '}],{'\n'}
              {'  '}<span className="text-[#00eefc]">credo</span>: () =&gt; {'{\n'}
              {'    '}<span className="text-[#c3f400]">return</span> <span className="text-white">"Form follows function, amplified by raw brutalism."</span>;{'\n'}
              {'  }'},{'\n'}
              {'  '}<span className="text-[#00eefc]">systemLoad</span>: <span className="text-[#7df4ff]">0.14</span>,{'\n'}
              {'  '}<span className="text-[#00eefc]">activeTasks</span>: <span className="text-[#7df4ff]">12</span>,{'\n'}
              {'  '}<span className="text-[#00eefc]">openForContract</span>: <span className="text-[#c3f400]">true</span>{'\n'}
              {'}'};{'\n\n'}
              <span className="text-[#8e9379]">&gt; engineer.credo()</span>{'\n'}
              <span className="text-white font-bold">"Form follows function, amplified by raw brutalism."</span>{'\n'}
              <span className="text-[#8e9379]">&gt; ping -c 1 production.hafidz.dev</span>{'\n'}
              <span className="text-[#c3f400]">64 bytes: icmp_seq=1 ttl=58 time=14.2 ms</span>
            </pre>

            {/* Interactive Terminal Execution Logs */}
            {terminalOutput.length > 0 && (
              <div className="mt-3 pt-3 border-t border-[#333538] space-y-1 font-mono-code text-[11px]">
                {terminalOutput.map((line, idx) => (
                  <p key={idx} className={line.startsWith('>') ? 'text-[#8e9379]' : 'text-[#c3f400]'}>
                    {line}
                  </p>
                ))}
              </div>
            )}

            {/* Interactive Command Input Line */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (customInput.trim()) runCommand(customInput);
              }}
              className="mt-3 pt-2 border-t border-[#333538] flex items-center gap-2"
            >
              <span className="text-[#c3f400] font-bold">&gt;</span>
              <input
                type="text"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                placeholder="type 'credo', 'ping', 'help'..."
                className="bg-transparent border-none text-white text-xs font-mono-code focus:outline-none flex-1 placeholder:text-[#8e9379]"
              />
              <span className="w-2 h-4 bg-[#c3f400] animate-pulse inline-block" />
            </form>
          </div>

          {/* Right Bio & Interactive Tabs (7 Cols) */}
          <div className="lg:col-span-7 p-4 sm:p-6 lg:p-8 flex flex-col justify-between gap-6 bg-[var(--bg-card)]">
            <div>
              {/* Tabs Switcher */}
              <div className="flex flex-wrap gap-2 pb-4 border-b-2 border-[var(--border-subtle)]">
                <button
                  type="button"
                  onClick={() => setActiveTab('bio')}
                  className={`px-3 py-1.5 border-2 border-[var(--border-color)] font-mono-code text-xs uppercase font-bold transition-all cursor-pointer ${
                    activeTab === 'bio'
                      ? 'bg-[#c3f400] text-[#283500] brutal-shadow-sm'
                      : 'bg-[var(--bg-inset)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  01. PHILOSOPHY
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('specs')}
                  className={`px-3 py-1.5 border-2 border-[var(--border-color)] font-mono-code text-xs uppercase font-bold transition-all cursor-pointer ${
                    activeTab === 'specs'
                      ? 'bg-[#c3f400] text-[#283500] brutal-shadow-sm'
                      : 'bg-[var(--bg-inset)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  02. SYSTEM SPEC
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('focus')}
                  className={`px-3 py-1.5 border-2 border-[var(--border-color)] font-mono-code text-xs uppercase font-bold transition-all cursor-pointer ${
                    activeTab === 'focus'
                      ? 'bg-[#c3f400] text-[#283500] brutal-shadow-sm'
                      : 'bg-[var(--bg-inset)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  03. CURRENT FOCUS
                </button>
              </div>

              {/* Tab Content 1: Philosophy */}
              {activeTab === 'bio' && (
                <div className="pt-5 space-y-4">
                  <h3 className="font-display text-xl sm:text-2xl text-[var(--text-primary)] uppercase font-bold tracking-tight">
                    High-Throughput Engineering Meets Radical Aesthetics.
                  </h3>
                  <p className="font-body text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                    I specialize in crafting complete digital ecosystems from scratch. Over 6+ years in high-growth startups and creative agencies, I have architected mission-critical microservices, low-latency WebSocket backends, and multi-tenant web applications with ultra-responsive UX.
                  </p>
                  <p className="font-body text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                    I reject sluggish templates and cookie-cutter designs. Instead, I construct bespoke, tactile user interfaces fueled by Neobrutal structural boldness and delicate glassmorphism—providing products with unmistakable character and benchmark-beating speed.
                  </p>
                </div>
              )}

              {/* Tab Content 2: System Spec */}
              {activeTab === 'specs' && (
                <div className="pt-5 space-y-4">
                  <h3 className="font-display text-xl sm:text-2xl text-[var(--text-primary)] uppercase font-bold tracking-tight">
                    HARDWARE & RUNTIME BENCHMARKS
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3 bg-[var(--bg-inset)] border-2 border-[var(--border-color)]">
                      <p className="font-mono-code text-[10px] text-[#aee000] dark:text-[#c3f400] uppercase font-bold">CORE RUNTIME</p>
                      <p className="font-mono-code text-xs sm:text-sm text-[var(--text-primary)] font-bold">Node.js 22 LTS / Bun / Deno</p>
                    </div>
                    <div className="p-3 bg-[var(--bg-inset)] border-2 border-[var(--border-color)]">
                      <p className="font-mono-code text-[10px] text-[#00bed6] dark:text-[#00eefc] uppercase font-bold">PERSISTENCE TIER</p>
                      <p className="font-mono-code text-xs sm:text-sm text-[var(--text-primary)] font-bold">PostgreSQL / Redis Cache Cluster</p>
                    </div>
                    <div className="p-3 bg-[var(--bg-inset)] border-2 border-[var(--border-color)]">
                      <p className="font-mono-code text-[10px] text-[#aee000] dark:text-[#c3f400] uppercase font-bold">FRONTEND PIPELINE</p>
                      <p className="font-mono-code text-xs sm:text-sm text-[var(--text-primary)] font-bold">Vite • Next.js SSR • Tailwind 4</p>
                    </div>
                    <div className="p-3 bg-[var(--bg-inset)] border-2 border-[var(--border-color)]">
                      <p className="font-mono-code text-[10px] text-[#00bed6] dark:text-[#00eefc] uppercase font-bold">CONTAINERIZATION</p>
                      <p className="font-mono-code text-xs sm:text-sm text-[var(--text-primary)] font-bold">Docker Compose • K8s • CI/CD</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab Content 3: Focus */}
              {activeTab === 'focus' && (
                <div className="pt-5 space-y-3">
                  <h3 className="font-display text-xl sm:text-2xl text-[var(--text-primary)] uppercase font-bold tracking-tight">
                    ACTIVE RESEARCH & PRODUCT DRILLS (Q1-Q2 2026)
                  </h3>
                  <ul className="space-y-3 font-body text-sm sm:text-base text-[var(--text-muted)]">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-[#aee000] dark:text-[#c3f400] shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-[var(--text-primary)]">Autonomous Agent Systems:</strong> Orchestrating LLM micro-agents on Node pipelines with persistent memory states.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-[#aee000] dark:text-[#c3f400] shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-[var(--text-primary)]">WebGL & Shader Engineering:</strong> Crafting GPU-accelerated canvas environments using Three.js and custom GLSL fragment shaders.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-[#aee000] dark:text-[#c3f400] shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-[var(--text-primary)]">Edge Compute & Zero-Config DB:</strong> Sub-5ms edge handlers utilizing Cloudflare Workers and Neon Serverless Postgres.
                      </span>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Terminal Footnote Bar */}
            <div className="p-3 bg-[var(--bg-inset)] border-2 border-[var(--border-color)] flex flex-wrap items-center justify-between gap-2 mt-4">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#aee000] dark:text-[#c3f400]" />
                <span className="font-mono-code text-[10px] sm:text-xs uppercase text-[var(--text-primary)] font-bold">
                  SYS_LOAD: NORMAL (0.12)
                </span>
              </div>
              <div className="font-mono-code text-[10px] sm:text-xs uppercase text-[var(--text-muted)] font-medium">
                UPTIME: 21840 HRS WITHOUT FATAL EXCEPTION
              </div>
            </div>
          </div>
        </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

