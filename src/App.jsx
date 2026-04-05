import { NavLink, Navigate, Route, Routes, BrowserRouter } from 'react-router-dom';
import { TreePine, Sparkles } from 'lucide-react';
import ArbolSemantico from './ArbolSemantico.jsx';
import ArbolSemantico2 from './arbolSemanticoDos.jsx';

const navLinkClass = ({ isActive }) =>
  [
    'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition-all duration-300',
    isActive
      ? 'bg-slate-900 text-white shadow-[0_10px_24px_-12px_rgba(15,23,42,0.9)]'
      : 'bg-white/65 text-slate-700 hover:-translate-y-0.5 hover:bg-white hover:text-slate-900',
  ].join(' ');

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        {/* <header className="sticky top-0 z-50 px-4 pt-4 md:px-8">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 rounded-3xl border border-white/70 bg-white/70 p-3 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.8)] backdrop-blur-xl">
            <div className="flex items-center gap-3 rounded-2xl bg-white px-3 py-2 shadow-sm">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-rose-400 to-amber-300 text-slate-900">
                <TreePine size={19} />
            </div>
            <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Laboratorio Visual</p>
                <p className="text-sm font-extrabold text-slate-900">Arboles Semanticos</p>
            </div>
            </div>

            <nav className="flex flex-wrap items-center gap-2 rounded-2xl bg-slate-100/80 p-1.5">
            <NavLink to="/" className={navLinkClass}>
                <Sparkles size={16} />
                Vista Casual
            </NavLink>
            <NavLink to="/arbol-clasico" className={navLinkClass}>
                <TreePine size={16} />
                Vista Clasica
            </NavLink>
            </nav>
        </div>
        </header> */}

        <main className="pt-3">
          <Routes>
            <Route path="/" element={<ArbolSemantico2 />} />
            <Route path="/arbol-clasico" element={<ArbolSemantico />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
