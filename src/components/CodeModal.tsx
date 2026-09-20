import { X, ExternalLink, GitBranch, Star, Terminal } from 'lucide-react';
import { ProjectItem } from '../types';

interface CodeModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function CodeModal({ project, onClose }: CodeModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[var(--bg-card)] border-[4px] border-[var(--border-color)] brutal-shadow-lg flex flex-col font-mono-code text-xs">
        {/* Top Control Bar */}
        <div className="sticky top-0 z-20 h-12 bg-[var(--bg-terminal-header)] border-b-[3px] border-[var(--border-color)] px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-[#c3f400] border border-[var(--border-color)]" />
            <span className="text-white font-bold uppercase truncate max-w-xs sm:max-w-md">
              GITHUB // github.com/hafidzasmar/{project.id}-monorepo
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center bg-[#282a2d] border border-[var(--border-color)] text-white hover:bg-[#ffb4ab] hover:text-black cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 bg-[var(--bg-card)] text-[var(--text-primary)]">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[var(--border-subtle)]">
            <div>
              <h2 className="text-lg font-bold text-[var(--text-primary)] uppercase">{project.title} Monorepo</h2>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">{project.description}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 px-2.5 py-1 bg-[var(--bg-inset)] border border-[var(--border-subtle)] text-[#aee000] dark:text-[#c3f400] font-bold">
                <Star className="w-3.5 h-3.5" /> 482
              </span>
              <span className="flex items-center gap-1 px-2.5 py-1 bg-[var(--bg-inset)] border border-[var(--border-subtle)] text-[#00bed6] dark:text-[#00eefc] font-bold">
                <GitBranch className="w-3.5 h-3.5" /> main
              </span>
            </div>
          </div>

          {/* Repository Tree Structure */}
          <div className="p-4 bg-[var(--bg-inset)] border-2 border-[var(--border-color)] space-y-2">
            <p className="text-[#aee000] dark:text-[#c3f400] font-bold">DIRECTORY ARCHITECTURE TREE</p>
            <pre className="text-xs text-[var(--text-muted)] leading-relaxed overflow-x-auto">
              ├── apps/{'\n'}
              │   ├── web/ (React 19 + Vite client viewport){'\n'}
              │   └── api/ (Node microservice &amp; WebSocket handler){'\n'}
              ├── packages/{'\n'}
              │   ├── db/ (PostgreSQL migrations &amp; schemas){'\n'}
              │   └── ui/ (Brutal-Glass design system tokens){'\n'}
              ├── docker-compose.yml{'\n'}
              └── README.md
            </pre>
          </div>

          {/* Quickstart instructions */}
          <div className="space-y-2">
            <p className="text-[#00bed6] dark:text-[#00eefc] font-bold">DEPLOYMENT QUICKSTART</p>
            <div className="p-3 bg-[var(--bg-inset)] border border-[var(--border-subtle)] text-xs text-[var(--text-muted)] font-mono-code overflow-x-auto">
              <code>git clone https://github.com/hafidzasmar/{project.id}.git<br />
              pnpm install &amp;&amp; docker compose up -d<br />
              pnpm run dev # binds to port 3000</code>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-[var(--bg-terminal-header)] border-t-[3px] border-[var(--border-color)] px-4 py-3 flex items-center justify-between">
          <span className="text-[11px] text-white/80">LICENSE: MIT // OPEN ARTIFACT</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 bg-[#c3f400] text-[#283500] font-bold uppercase border-2 border-[var(--border-color)] cursor-pointer"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}

