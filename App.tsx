
import React, { useState } from 'react';
import Layout from './components/Layout';
import ModuleDetail from './components/ModuleDetail';
import { MODULES, ICON_MAP, RESOURCES, CHATGPT_PROMPTS } from './constants';
import { Module } from './types';
import { 
  ArrowRight, 
  Sparkles, 
  ChevronRight, 
  Zap, 
  CheckCircle,
  Download,
  Info,
  Globe,
  Monitor,
  Lightbulb,
  ShieldCheck,
  Rocket,
  Layers,
  Star,
  Cpu,
  Bot,
  ExternalLink,
  Film,
  Clapperboard,
  LayoutDashboard,
  MessageCircle,
  ArrowLeft,
  Copy,
  Search,
  CheckCircle2,
  Image as ImageIcon,
  Palette,
  Maximize2
} from 'lucide-react';

const AI_TOOLS = [
  { name: 'ChatGPT', url: 'https://chat.openai.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg', color: 'bg-slate-900' },
  { name: 'Gemini', url: 'https://gemini.google.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg', color: 'bg-white' },
  { name: 'Canva', url: 'https://www.canva.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Canva_logo.svg', color: 'bg-gradient-to-tr from-blue-400 to-blue-600' },
  { name: 'Claude', url: 'https://claude.ai', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Anthropic_logo.svg', color: 'bg-orange-50' },
  { name: 'Quizizz', url: 'https://quizizz.com', logo: '', color: 'bg-purple-600', isIcon: true, icon: <Zap size={32} fill="white" /> },
  { name: 'Gamma', url: 'https://gamma.app', logo: '', color: 'bg-slate-100', isIcon: true, icon: <div className="font-black text-xl text-slate-800">G</div> },
  { name: 'Brisk', url: 'https://www.briskteaching.com', logo: '', color: 'bg-blue-50', isIcon: true, icon: <Bot size={32} className="text-blue-800" /> }
];

const CGU_DIN_IMG = "https://lh3.googleusercontent.com/d/1lCegcUF3-GYyTPbSidhJdSfU_AZdyj8p";

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1454165833767-02a698d1316a?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1523050337458-5ebbb12b5816?auto=format&fit=crop&q=80&w=800"
];

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleNavigate = (tab: string) => {
    setActiveTab(tab);
    setSelectedModule(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openModule = (module: Module | undefined) => {
    if (module) {
      setSelectedModule(module);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const renderHome = () => (
    <div className="animate-in fade-in duration-1000">
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full animate-float" style={{animationDelay: '-3s'}}></div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
            <div className="flex-1">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-slate-900 leading-[0.85] mb-10 tracking-tighter max-w-4xl">
                Memperkasa Guru, <br />
                <span className="text-gradient-vibrant italic">Inovasi PdP.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-500 max-w-2xl lg:mx-0 mx-auto mb-12 font-medium leading-relaxed tracking-tight">
                Platform elit untuk guru Malaysia menguasai AI. <br className="hidden md:block"/> Tingkatkan kualiti PdP, mudahkan dokumentasi, dan inspirasikan murid.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                <button 
                  onClick={() => openModule(MODULES.find(m => m.id === 'm1'))}
                  className="btn-vibrant text-white px-10 py-5 rounded-3xl font-black text-lg shadow-2xl flex items-center gap-3 w-full sm:w-auto justify-center"
                >
                  Mula Teroka <Rocket size={24} fill="white" />
                </button>
                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-md px-6 py-4 rounded-3xl border border-white/50 shadow-sm">
                   <div className="w-10 h-10 bg-green-500 rounded-full border-4 border-white flex items-center justify-center text-white font-black text-xs animate-pulse">LIVE</div>
                   <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">Kurikulum 2024 Ready</span>
                </div>
              </div>
            </div>

            <div className="flex-1 relative max-w-md lg:max-w-xl animate-character">
               <div className="absolute inset-0 bg-blue-600/5 blur-[80px] rounded-full scale-110"></div>
               <img 
                 src={CGU_DIN_IMG} 
                 alt="Cgu Din AI Guru" 
                 crossOrigin="anonymous"
                 className="relative z-10 w-full h-auto drop-shadow-[0_35px_35px_rgba(37,99,235,0.25)]"
               />
               <div className="absolute -top-10 -right-4 lg:-right-10 bg-white p-6 rounded-[30px] shadow-2xl border border-slate-50 z-20 max-w-[200px] animate-bounce duration-[3000ms]">
                  <p className="text-[11px] font-black text-slate-900 leading-tight">
                    "Selamat datang Cikgu! Saya <span className="text-blue-600">Cgu Din</span>. Mari kita revolusikan PdP dengan AI!"
                  </p>
                  <div className="absolute bottom-0 left-6 w-4 h-4 bg-white rotate-45 translate-y-2 border-r border-b border-slate-50"></div>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 mt-32 w-full max-w-7xl mx-auto">
              <button 
                onClick={() => openModule(MODULES.find(m => m.id === 'm4'))}
                className="group relative bg-white border-2 border-slate-100 p-8 rounded-[40px] flex items-center justify-between transition-all duration-500 hover:border-blue-500 hover:shadow-[0_20px_50px_rgba(37,99,235,0.15)] hover:-translate-y-3 overflow-hidden text-left"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/50 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none"></div>
                <div className="relative z-10">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 block mb-2">Pakar Visual</span>
                  <h4 className="text-2xl font-black text-slate-900 leading-tight">EduGrafik GPT</h4>
                </div>
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-[360deg] transition-all duration-700 shadow-sm relative z-10">
                  <LayoutDashboard size={24} />
                </div>
              </button>

              <button 
                onClick={() => openModule(MODULES.find(m => m.id === 'm5'))}
                className="group relative bg-white border-2 border-slate-100 p-8 rounded-[40px] flex items-center justify-between transition-all duration-500 hover:border-indigo-500 hover:shadow-[0_20px_50px_rgba(79,70,229,0.15)] hover:-translate-y-3 overflow-hidden text-left"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-50/50 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none"></div>
                <div className="relative z-10">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600 block mb-2">Pakar Akademik</span>
                  <h4 className="text-2xl font-black text-slate-900 leading-tight">Kurikulum SR GPT</h4>
                </div>
                <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-125 transition-all duration-500 shadow-sm relative z-10">
                  <Zap size={24} />
                </div>
              </button>

              <button 
                onClick={() => openModule(MODULES.find(m => m.id === 'm1'))}
                className="group relative bg-white border-2 border-slate-100 p-8 rounded-[40px] flex items-center justify-between transition-all duration-500 hover:border-purple-500 hover:shadow-[0_20px_50px_rgba(139,92,246,0.15)] hover:-translate-y-3 overflow-hidden text-left"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-50/50 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none"></div>
                <div className="relative z-10">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-600 block mb-2">Enjin Kreatif</span>
                  <h4 className="text-2xl font-black text-slate-900 leading-tight">Storytelling GPT</h4>
                </div>
                <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white group-hover:-rotate-12 transition-all duration-500 shadow-sm relative z-10">
                  <Clapperboard size={24} />
                </div>
              </button>
          </div>

          <div className="w-full max-w-5xl mx-auto mb-20 bg-white/40 backdrop-blur-xl border border-white/50 rounded-[40px] p-10 shadow-xl overflow-hidden group">
            <div className="flex flex-col items-center mb-8 text-center">
              <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4">
                <Cpu size={14} /> Ekosistem AI Guru
              </span>
              <h3 className="text-xl font-black text-slate-900 tracking-tight">Pautan Terus Alat Utama</h3>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
               {AI_TOOLS.map((tool, i) => (
                 <a 
                   key={i} 
                   href={tool.url} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex flex-col items-center gap-3 hover:scale-110 transition-all duration-500 group/tool"
                 >
                    <div className={`w-14 h-14 ${tool.color} rounded-2xl flex items-center justify-center shadow-lg p-3 group-hover/tool:shadow-blue-200 transition-all overflow-hidden border border-slate-100`}>
                      {tool.isIcon ? (
                        tool.icon
                      ) : (
                        <img 
                          src={tool.logo} 
                          alt={tool.name} 
                          className={`w-full ${tool.name === 'ChatGPT' ? 'invert' : ''}`} 
                        />
                      )}
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 group-hover/tool:text-blue-600">{tool.name}</span>
                 </a>
               ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-10">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter">Program Akademi.</h2>
              <p className="text-slate-500 text-2xl font-medium leading-relaxed">Kurikulum yang disusun rapi untuk memandu anda menjadi guru pakar AI.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {MODULES.map((module, i) => {
              const Icon = ICON_MAP[module.icon];
              return (
                <div 
                  key={module.id} 
                  onClick={() => openModule(module)}
                  className="bg-white rounded-[48px] p-12 cursor-pointer group flex flex-col h-full border border-slate-100 shadow-sm hover:shadow-2xl card-reveal"
                >
                  <div className="bg-slate-50 text-blue-600 w-20 h-20 rounded-[28px] flex items-center justify-center mb-10 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-inner">
                    <Icon size={40} />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-6 group-hover:text-blue-600 transition-colors leading-[1.1] tracking-tighter">
                    {module.title}
                  </h3>
                  <p className="text-slate-500 text-lg leading-relaxed mb-10 flex-grow font-medium">
                    {module.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-black text-xs gap-4 mt-auto uppercase tracking-[0.2em] group-hover:gap-6 transition-all">
                    Mulakan Modul <ArrowRight size={20} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );

  const renderResources = () => (
    <section className="py-32 px-8 animate-in fade-in duration-1000">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-[70px] p-16 md:p-28 relative overflow-hidden shadow-2xl border border-slate-100">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-10 mb-24">
              <div className="bg-blue-600 p-8 rounded-[36px] text-white shadow-2xl shadow-blue-200">
                <Download size={56} />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-4">Arkib Digital.</h2>
                <p className="text-slate-500 text-2xl font-medium max-w-xl">Lengkapkan persenjataan digital anda dengan bahan eksklusif EduAI Guru.</p>
              </div>
            </div>
            
            <div className="grid gap-8">
              {RESOURCES.map((res, i) => (
                <div key={i} className="bg-slate-50/50 border border-slate-100 p-10 rounded-[44px] flex flex-col md:flex-row md:items-center justify-between gap-10 hover:bg-white hover:shadow-2xl hover:border-blue-200 transition-all group card-reveal">
                  <div className="flex gap-10 items-center">
                    <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-blue-600 group-hover:scale-110 shadow-sm transition-all">
                      <Layers size={36} />
                    </div>
                    <div>
                      <h4 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">{res.name}</h4>
                      <p className="text-slate-500 text-sm font-bold uppercase tracking-[0.2em]">{res.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-10">
                    <div className="px-6 py-3 bg-white rounded-full text-[10px] font-black text-slate-400 uppercase tracking-widest border border-slate-100">
                      {res.type}
                    </div>
                    <button 
                      onClick={() => {
                        if (res.name === 'Contoh 200 Prompt Guru') {
                           setActiveTab('prompt-catalog');
                        } else if (res.name === 'Set Poster EduGrafik') {
                           setActiveTab('edugrafik-gallery');
                        } else {
                           alert("Pautan muat turun sedang disediakan. Terima kasih atas kesabaran anda.");
                        }
                      }}
                      className="btn-vibrant text-white px-10 py-5 rounded-2xl font-black text-lg shadow-xl active:scale-95"
                    >
                      Dapatkan
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const renderPromptCatalog = () => {
    // Group prompts by category
    const groupedPrompts = CHATGPT_PROMPTS.reduce((acc, curr) => {
      if (!acc[curr.category]) acc[curr.category] = [];
      acc[curr.category].push(curr);
      return acc;
    }, {} as Record<string, typeof CHATGPT_PROMPTS>);

    return (
      <section className="py-24 px-8 animate-in slide-in-from-bottom-10 duration-700">
        <div className="max-w-6xl mx-auto">
          <button 
            onClick={() => setActiveTab('resources')}
            className="flex items-center gap-2 text-slate-400 hover:text-blue-600 font-black uppercase tracking-[0.2em] text-[10px] mb-12 transition-all group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Kembali ke Arkib
          </button>

          <div className="bg-white rounded-[60px] p-12 md:p-20 shadow-2xl border border-slate-50 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-12 opacity-[0.03] rotate-12"><MessageCircle size={300} /></div>
             
             <div className="relative z-10 mb-20 text-center md:text-left">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-6 border border-blue-100">Katalog Eksklusif</span>
                <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6 leading-none">Contoh 200 Prompt Guru.</h2>
                <p className="text-slate-500 text-xl font-medium max-w-2xl leading-relaxed">Himpunan prompt terbaik untuk ChatGPT, Gemini & Claude yang direka khusus bagi keperluan sekolah di Malaysia.</p>
             </div>

             <div className="space-y-24">
                {Object.entries(groupedPrompts).map(([category, prompts], catIdx) => (
                  <div key={category} className="space-y-10">
                    <div className="flex items-center gap-6 border-b border-slate-100 pb-6">
                       <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center font-black text-2xl shadow-xl">{catIdx + 1}</div>
                       <h3 className="text-2xl font-black text-slate-900 uppercase tracking-widest">{category}</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       {prompts.map((p, pIdx) => (
                         <div key={pIdx} className="bg-slate-50/50 p-8 rounded-[40px] border border-slate-100 hover:bg-white hover:shadow-2xl hover:border-blue-100 transition-all group relative">
                            <h4 className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-4">{p.title}</h4>
                            <p className="text-xs text-slate-600 font-medium leading-relaxed italic mb-8">"{p.prompt}"</p>
                            <button 
                              onClick={() => copyToClipboard(p.prompt, `catalog-${catIdx}-${pIdx}`)}
                              className={`absolute bottom-8 right-8 p-3 rounded-2xl transition-all ${
                                copiedId === `catalog-${catIdx}-${pIdx}` 
                                  ? 'bg-emerald-500 text-white' 
                                  : 'bg-white text-slate-400 hover:text-blue-600 shadow-sm'
                              }`}
                            >
                              {copiedId === `catalog-${catIdx}-${pIdx}` ? <CheckCircle2 size={18} /> : <Copy size={18} />}
                            </button>
                         </div>
                       ))}
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>
    );
  };

  const renderEduGrafikGallery = () => (
    <section className="py-24 px-8 animate-in fade-in duration-1000">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={() => setActiveTab('resources')}
          className="flex items-center gap-2 text-slate-400 hover:text-blue-600 font-black uppercase tracking-[0.2em] text-[10px] mb-12 transition-all group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Kembali ke Arkib
        </button>

        <div className="mb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 text-purple-600 text-[10px] font-black uppercase tracking-[0.4em] mb-6 border border-purple-100">Galeri Visual EduAI</div>
            <h2 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter mb-8 leading-[0.85]">Contoh <br/><span className="text-gradient-vibrant">Grafik.</span></h2>
            <p className="text-slate-500 text-2xl font-medium leading-relaxed">Paparan visual pendidikan yang dijana sepenuhnya menggunakan teknologi AI untuk kegunaan sekolah Malaysia.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GALLERY_IMAGES.map((img, i) => (
            <div key={i} className="group relative bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 border border-slate-100">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={img} 
                  alt={`Contoh Grafik ${i + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const getContent = () => {
    if (selectedModule) return <ModuleDetail module={selectedModule} onBack={() => setSelectedModule(null)} />;
    
    switch (activeTab) {
      case 'home': return renderHome();
      case 'modules': return renderHome();
      case 'resources': return renderResources();
      case 'prompt-catalog': return renderPromptCatalog();
      case 'edugrafik-gallery': return renderEduGrafikGallery();
      default: return renderHome();
    }
  };

  return (
    <Layout activeTab={activeTab} onNavigate={handleNavigate}>
      {getContent()}
    </Layout>
  );
};

export default App;
