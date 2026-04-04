import React, { useState } from 'react';
import { 
  Network, 
  Database, 
  Palette, 
  MessageSquare, 
  Monitor, 
  Headset, 
  Cloud, 
  HardDrive, 
  GitBranch,
  FileText,
  BrainCircuit,
  Layout,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const ArbolSemantico = () => {
  const [expandedBranch, setExpandedBranch] = useState(null);

  const toggleBranch = (index) => {
    if (expandedBranch === index) {
      setExpandedBranch(null);
    } else {
      setExpandedBranch(index);
    }
  };

  // Data estructurada basada en tu investigación académica
  const treeData = [
    {
      category: "Colaboración y Comunicación",
      theme: "Interacción directa y fluida",
      description: "Facilitan la interacción directa entre los miembros, eliminando barreras de distancia.",
      icon: <Network className="w-6 h-6 text-blue-400" />,
      color: "border-blue-500/30",
      bgHover: "hover:bg-blue-900/20",
      gradient: "from-blue-400 to-cyan-400",
      tools: [
        {
          name: "Slack",
          icon: <MessageSquare className="w-5 h-5 text-blue-300" />,
          synthesis: "Plataforma de mensajería para equipos.",
          detail: "Permite contacto inmediato mediante canales públicos/privados, reduciendo correos y centralizando archivos."
        },
        {
          name: "Microsoft Teams",
          icon: <Monitor className="w-5 h-5 text-blue-300" />,
          synthesis: "Solución unificada de comunicación.",
          detail: "Integra mensajería, videoconferencias y archivos. Al ser de Office 365, permite coedición de Word/Excel sin salir de la app."
        },
        {
          name: "Discord",
          icon: <Headset className="w-5 h-5 text-blue-300" />,
          synthesis: "Espacio de chat, voz y video mediante servidores.",
          detail: "Nació para videojuegos, pero es ideal para empresas por su comunicación de voz/video organizada por salas temáticas con invitación."
        }
      ]
    },
    {
      category: "Organización y Almacenamiento",
      theme: "Gestión centralizada en la nube",
      description: "Permiten centralizar recursos en la nube, facilitando el acceso remoto y evitando pérdida de datos.",
      icon: <Database className="w-6 h-6 text-purple-400" />,
      color: "border-purple-500/30",
      bgHover: "hover:bg-purple-900/20",
      gradient: "from-purple-400 to-fuchsia-400",
      tools: [
        {
          name: "Google Drive",
          icon: <Cloud className="w-5 h-5 text-purple-300" />,
          synthesis: "Almacenamiento centralizado en la nube.",
          detail: "Guarda y comparte archivos vinculados a Gmail. Permite que la información quede en la unidad del equipo aunque un miembro se retire."
        },
        {
          name: "Dropbox",
          icon: <HardDrive className="w-5 h-5 text-purple-300" />,
          synthesis: "Gestión de archivos y copias de seguridad.",
          detail: "Espacio de trabajo inteligente que centraliza G Suite y Office. Mantiene historial de versiones hasta por 180 días."
        },
        {
          name: "GitHub",
          icon: <GitBranch className="w-5 h-5 text-purple-300" />,
          synthesis: "Repositorio para control de versiones.",
          detail: "Alojamiento de código donde los cambios son rastreables para todo el equipo. Ayuda a seguir la productividad centralizada."
        }
      ]
    },
    {
      category: "Creación y Distribución",
      theme: "Generación conjunta de contenido",
      description: "Diseñadas para que varios usuarios editen, aporten ideas y construyan contenido simultáneamente.",
      icon: <Palette className="w-6 h-6 text-orange-400" />,
      color: "border-orange-500/30",
      bgHover: "hover:bg-orange-900/20",
      gradient: "from-orange-400 to-rose-400",
      tools: [
        {
          name: "Google Docs",
          icon: <FileText className="w-5 h-5 text-orange-300" />,
          synthesis: "Editor de documentos en tiempo real.",
          detail: "Procesador de textos en línea con autoguardado en la nube. Admite sugerencias y comentarios simultáneos."
        },
        {
          name: "MindMeister",
          icon: <BrainCircuit className="w-5 h-5 text-orange-300" />,
          synthesis: "Herramienta para mapas mentales visuales.",
          detail: "Ideal para plasmar ideas gráficamente al equipo. Muy útil para procesos de brainstorming y estructurar conceptos complejos."
        },
        {
          name: "Figma",
          icon: <Layout className="w-5 h-5 text-orange-300" />,
          synthesis: "Software de diseño y prototipado colaborativo.",
          detail: "Agiliza el proceso creativo permitiendo colaboración en el mismo workspace para visualizar wireframes e interfaces al instante."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-6 md:p-10 font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Raíz del Árbol */}
        <div className="text-center space-y-4 relative z-10">
          <div className="inline-block p-[2px] rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 shadow-2xl shadow-purple-500/20">
            <div className="bg-slate-950 px-8 py-6 rounded-xl backdrop-blur-md">
              <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400 tracking-tight">
                Herramientas Digitales
              </h1>
              <p className="mt-3 text-slate-400 font-medium tracking-widest uppercase text-sm">
                Árbol Semántico • Gestión del Conocimiento
              </p>
            </div>
          </div>
          {/* Línea conectora base */}
          <div className="hidden lg:block absolute w-0.5 h-16 bg-gradient-to-b from-slate-700 to-transparent left-1/2 transform -translate-x-1/2 -bottom-16"></div>
        </div>

        {/* Ramas (Layout 3 Columnas) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8 lg:pt-12 relative">
          
          {/* Líneas conectoras horizontales (solo en desktop) */}
          <div className="hidden lg:block absolute top-8 left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-blue-900/50 via-purple-500/50 to-orange-900/50 z-0"></div>

          {treeData.map((branch, index) => (
            <div 
              key={index} 
              className={`relative z-10 bg-slate-900/60 border ${branch.color} rounded-2xl p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
            >
              {/* Conector superior (solo desktop) */}
              <div className="hidden lg:block absolute w-0.5 h-8 bg-slate-800 -top-8 left-1/2 transform -translate-x-1/2"></div>

              {/* Cabecera de la Rama */}
              <div 
                className={`flex flex-col gap-4 cursor-pointer p-4 rounded-xl transition-colors ${branch.bgHover}`}
                onClick={() => toggleBranch(index)}
              >
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-xl shadow-inner bg-slate-800/80`}>
                    {branch.icon}
                  </div>
                  <div className="text-slate-500 bg-slate-950/50 p-2 rounded-full">
                    {expandedBranch === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </div>
                <div>
                  <h2 className={`text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${branch.gradient}`}>
                    {branch.category}
                  </h2>
                  <p className="text-sm text-slate-300 mt-1 font-medium">{branch.theme}</p>
                </div>
              </div>

              {/* Contenido Desplegable (Hojas del árbol) */}
              <div className={`mt-2 space-y-5 transition-all duration-500 ease-in-out overflow-hidden ${expandedBranch === index || expandedBranch === null ? 'max-h-[2000px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                
                {/* Descripción de la categoría */}
                <p className="text-sm text-slate-400 italic px-2 border-l-2 border-slate-700">
                  {branch.description}
                </p>

                {/* Lista de Herramientas */}
                <div className="space-y-4 pt-2">
                  {branch.tools.map((tool, toolIdx) => (
                    <div key={toolIdx} className="group relative pl-5 before:absolute before:left-1.5 before:top-0 before:bottom-0 before:w-[1px] before:bg-slate-800">
                      {/* Punto conector */}
                      <div className="absolute left-0 top-6 w-3 h-[1px] bg-slate-800 group-hover:bg-slate-500 transition-colors"></div>
                      <div className="absolute left-[-2px] top-[23px] w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-slate-400 transition-colors"></div>
                      
                      <div className="bg-slate-950/40 border border-slate-800/60 rounded-xl p-4 group-hover:bg-slate-800/40 group-hover:border-slate-700/80 transition-all">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-1.5 bg-slate-900 rounded-lg shadow-sm">
                            {tool.icon}
                          </div>
                          <h3 className="text-md font-semibold text-slate-100">{tool.name}</h3>
                        </div>
                        <div className="space-y-2 mt-3">
                          <p className="text-sm font-medium text-slate-300 leading-snug">
                            {tool.synthesis}
                          </p>
                          <p className="text-xs text-slate-400 leading-relaxed">
                            {tool.detail}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Footer */}
        <div className="text-center pt-10 pb-4">
          <p className="text-xs font-medium text-slate-600 uppercase tracking-widest">
            Desarrollado con arquitectura frontend moderna
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArbolSemantico;