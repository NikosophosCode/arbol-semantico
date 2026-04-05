import React, { useState } from 'react';
import { 
  MessageSquare, 
  Columns, 
  GitBranch, 
  Share2, 
  Headphones, 
  Video, 
  CalendarDays, 
  ShieldCheck,
  PenTool,
  CornerDownRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const ArbolSemanticoHandmade = () => {
  const [expandedBranch, setExpandedBranch] = useState(null);

  const toggleBranch = (index) => {
    if (expandedBranch === index) {
      setExpandedBranch(null);
    } else {
      setExpandedBranch(index);
    }
  };

  // Data basada en tu texto, agrupada lógicamente para el diseño
  const treeData = [
    {
      title: "Trabajo en Equipo",
      subtitle: "Mejora y organización",
      bgColor: "bg-orange-100",
      borderColor: "border-orange-400",
      textColor: "text-orange-900",
      iconColor: "text-orange-600",
      tools: [
        {
          name: "Slack",
          icon: <MessageSquare strokeWidth={1.5} />,
          description: "Lo aprovecharía para centralizar la comunicación interna, permitiendo crear canales específicos por proyectos que reducen drásticamente la necesidad de correos electrónicos y reuniones presenciales innecesarias."
        },
        {
          name: "Trello",
          icon: <Columns strokeWidth={1.5} />,
          description: "Su uso ideal es la organización visual mediante tarjetas, lo que permite a los equipos categorizar imágenes, textos y maquetas, facilitando que todos vean el estado de las tareas de un vistazo."
        }
      ]
    },
    {
      title: "Colaboración en Línea",
      subtitle: "Gestión técnica y mental",
      bgColor: "bg-blue-100",
      borderColor: "border-blue-400",
      textColor: "text-blue-900",
      iconColor: "text-blue-600",
      tools: [
        {
          name: "GitHub",
          icon: <GitBranch strokeWidth={1.5} />,
          description: "Sería la base de mi flujo de trabajo, ya que es fundamental para equipos técnicos, pues permite el control de versiones de código y el seguimiento transparente de la productividad, donde los gerentes pueden monitorear el progreso mediante 'issues' y tableros de proyectos."
        },
        {
          name: "Coggle",
          icon: <Share2 strokeWidth={1.5} />,
          description: "Se utiliza para el mapeo mental colaborativo, siendo muy efectivo para tomar notas conjuntas durante reuniones o estructurar ideas de contenido de forma gráfica y flexible."
        }
      ]
    },
    {
      title: "Teletrabajo",
      subtitle: "Interacción a distancia",
      bgColor: "bg-green-100",
      borderColor: "border-green-400",
      textColor: "text-green-900",
      iconColor: "text-green-600",
      tools: [
        {
          name: "Discord",
          icon: <Headphones strokeWidth={1.5} />,
          description: "Aunque lo suelo usar para videojuegos, en las empresas lo aprovechan para crear salas de chat con audio y video permanente, facilitando una interacción informal y rápida similar a la que ocurre en una oficina física."
        },
        {
          name: "Webex",
          icon: <Video strokeWidth={1.5} />,
          description: "Se emplea específicamente para videoconferencias a gran escala, soportando hasta 1000 asistentes en alta calidad, con la ventaja de poder grabar las sesiones y obtener transcripciones automáticas para consulta posterior."
        }
      ]
    },
    {
      title: "Comunicación en Equipos",
      subtitle: "Tiempos y seguridad",
      bgColor: "bg-purple-100",
      borderColor: "border-purple-400",
      textColor: "text-purple-900",
      iconColor: "text-purple-600",
      tools: [
        {
          name: "Google Calendar",
          icon: <CalendarDays strokeWidth={1.5} />,
          description: "Lo aprovecho para la gestión de tiempos, permitiendo crear calendarios compartidos donde todos los miembros conocen los plazos de entrega, fechas de reuniones clave y periodos de vacaciones de sus compañeros."
        },
        {
          name: "Noysi",
          icon: <ShieldCheck strokeWidth={1.5} />,
          description: "Es una opción estratégica para empresas que priorizan la seguridad y encriptación, ya que ofrece canales de chat y videoconferencia protegidos por cuatro sistemas de cifrado distintos, garantizando la confidencialidad de la información."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#fcfaf8] text-slate-800 p-6 md:p-12 font-sans overflow-x-hidden selection:bg-yellow-200">
      
      {/* Estilos para simular fuente escrita a mano (usamos sans genérico pero con tracking y estilos específicos para el "feel") */}
      <style dangerouslySetInnerHTML={{__html: `
        .hand-drawn-border {
          border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
          border-width: 2px;
          border-style: solid;
        }
        .hand-drawn-box {
          border-radius: 2% 95% 4% 96% / 95% 4% 92% 5%;
          border-width: 2px;
          border-style: solid;
        }
        .notebook-bg {
          background-image: linear-gradient(#e5e7eb 1px, transparent 1px);
          background-size: 100% 2rem;
        }
      `}} />

      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Título Principal estilo Post-it Gigante */}
        <div className="flex justify-center relative z-10">
          <div className="hand-drawn-box border-slate-700 bg-yellow-100 p-8 shadow-[8px_8px_0px_rgba(0,0,0,0.1)] transform -rotate-1 max-w-2xl text-center">
            <div className="flex justify-center mb-4 text-slate-600">
              <PenTool size={32} />
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-slate-800 tracking-tight leading-tight">
              Árbol Semántico de <br/>
              <span className="text-yellow-700 underline decoration-wavy decoration-yellow-400 underline-offset-8">
                Recursos Colaborativos
              </span>
            </h1>
            <p className="mt-6 text-slate-600 font-medium italic text-lg">
              "Mis apuntes sobre herramientas para optimizar el trabajo y la comunicación."
            </p>
          </div>
        </div>

        {/* Contenedor de las Ramas (Grid 2x2 para equilibrio visual) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative pt-8">
          
          {/* Línea conectora central difuminada (simula lápiz) */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-slate-300 border-dashed border-l-2 border-slate-400 transform -translate-x-1/2 z-0 opacity-50"></div>

          {treeData.map((branch, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center">
              
              {/* Tarjeta de la Categoría */}
              <div className={`hand-drawn-border ${branch.bgColor} ${branch.borderColor} w-full p-6 shadow-[4px_4px_0px_rgba(0,0,0,0.05)] transition-transform hover:scale-[1.02]`}>
                
                <div 
                  className="flex justify-between items-start cursor-pointer"
                  onClick={() => toggleBranch(index)}
                >
                  <div>
                    <h2 className={`text-2xl font-bold ${branch.textColor} mb-1 tracking-wide`}>
                      {branch.title}
                    </h2>
                    <p className={`text-sm font-semibold opacity-70 uppercase tracking-widest ${branch.textColor}`}>
                      {branch.subtitle}
                    </p>
                  </div>
                  <div className={`p-2 rounded-full bg-white/50 border ${branch.borderColor}`}>
                     {expandedBranch === index ? <ChevronUp size={20} className={branch.iconColor} /> : <ChevronDown size={20} className={branch.iconColor} />}
                  </div>
                </div>

                {/* Contenido Desplegable (Las Herramientas) */}
                <div className={`mt-4 space-y-6 transition-all duration-300 overflow-hidden ${expandedBranch === index || expandedBranch === null ? 'max-h-[1000px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                  
                  {branch.tools.map((tool, toolIdx) => (
                    <div key={toolIdx} className="relative pl-8">
                      {/* Flecha dibujada a mano */}
                      <div className={`absolute left-0 top-1 ${branch.iconColor}`}>
                        <CornerDownRight size={24} strokeWidth={1.5} />
                      </div>
                      
                      <div className="bg-white/60 p-4 hand-drawn-box border-slate-300 shadow-sm backdrop-blur-sm">
                        <div className="flex items-center gap-3 mb-3 border-b-2 border-dashed border-slate-200 pb-2">
                          <div className={`p-2 rounded-lg bg-white shadow-sm border border-slate-100 ${branch.iconColor}`}>
                            {tool.icon}
                          </div>
                          <h3 className={`text-lg font-bold ${branch.textColor}`}>
                            {tool.name}
                          </h3>
                        </div>
                        
                        {/* El texto con un estilo de libreta de apuntes */}
                        <div className="notebook-bg pt-1 pb-2">
                          <p className="text-slate-700 leading-relaxed font-medium">
                            {tool.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}

                </div>
              </div>

              {/* Decoración extra para dar aspecto orgánico */}
              <div className="absolute -z-10 -bottom-3 -right-3 w-full h-full bg-slate-200/50 hand-drawn-border"></div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default ArbolSemanticoHandmade;