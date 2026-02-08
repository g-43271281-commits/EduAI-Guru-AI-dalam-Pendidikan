
import React from 'react';
import { ICON_MAP } from '../constants';
import { Module } from '../types';
import { 
  ArrowLeft, 
  Copy, 
  CheckCircle2, 
  Zap, 
  Sparkles, 
  Monitor,
  Lightbulb,
  FileText,
  Layout as LayoutIcon,
  ShieldCheck,
  BookOpen,
  ClipboardCheck,
  BarChart3,
  Stethoscope,
  Briefcase,
  History,
  UserCheck,
  Palette,
  Image as ImageIcon,
  ShieldAlert,
  UserRoundCheck,
  Save,
  MessageSquare,
  Facebook,
  Megaphone,
  Trophy,
  Baby,
  Globe,
  Star,
  Target,
  Glasses,
  CheckCircle,
  AlertTriangle,
  Layers,
  MousePointer2,
  Lock,
  Heart,
  Settings2,
  TrendingUp,
  XCircle,
  ShieldX,
  UserX,
  EyeOff,
  Cpu,
  Network,
  Info,
  Link,
  Bot,
  Calculator,
  PenTool
} from 'lucide-react';

const CGU_DIN_IMG = "https://lh3.googleusercontent.com/d/1lCegcUF3-GYyTPbSidhJdSfU_AZdyj8p";

interface ModuleDetailProps {
  module: Module;
  onBack: () => void;
}

const ModuleDetail: React.FC<ModuleDetailProps> = ({ module, onBack }) => {
  const Icon = ICON_MAP[module.icon];
  const [copiedIndex, setCopiedIndex] = React.useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(id);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const renderModule1 = () => (
    <div className="space-y-12 animate-in fade-in duration-700">
      <section className="bg-white p-8 md:p-12 rounded-[50px] border border-slate-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-5 -rotate-12"><Cpu size={120} /></div>
        <div className="relative z-10">
          <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
            <Lightbulb className="text-blue-600" size={28} /> Apa Itu AI? (Bahasa Mudah)
          </h3>
          <p className="text-slate-600 text-lg leading-relaxed font-medium mb-8">
            Kecerdasan Buatan atau **Artificial Intelligence (AI)** adalah teknologi yang membolehkan komputer atau mesin "berfikir" dan "belajar" seolah-olah mempunyai kebijaksanaan manusia. Ia bukan sekadar program biasa, tetapi sistem yang boleh memahami corak, membuat keputusan, dan menyelesaikan masalah secara autonomi.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-[32px] border border-blue-100">
              <h4 className="text-xs font-black text-blue-900 uppercase mb-2 tracking-widest">Analogi Otak Digital</h4>
              <p className="text-[11px] text-blue-800 font-bold leading-relaxed">
                Bayangkan AI seperti seorang asisten yang telah membaca berjuta-juta buku, melihat berbilion imej, dan mendengar pelbagai bahasa. Dia sedia membantu anda memberikan jawapan atau cadangan dalam sekelip mata.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-[32px] border border-slate-100">
              <h4 className="text-xs font-black text-slate-900 uppercase mb-2 tracking-widest">Cara AI Berfungsi</h4>
              <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                AI berfungsi melalui **Data**. Ia mengkaji data yang besar, mencari corak (patterns), and menggunakan algoritma untuk membuat ramalan atau menjana kandungan baru (teks, imej, audio).
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-3xl font-black text-slate-900 mb-2 tracking-tighter">AI dalam Dunia Pendidikan</h3>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em]">Transformasi Pedagogi & Pengurusan Sekolah</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Membantu PdP (Pengajaran)",
              desc: "AI membantu guru menyediakan bahan pengajaran yang lebih kreatif, interaktif, dan terbeza mengikut aras murid tanpa mengambil masa yang lama.",
              icon: <Sparkles className="text-amber-500" />,
              color: "bg-amber-50"
            },
            {
              title: "Pentaksiran PBD",
              desc: "Membantu guru membina soalan kuiz, rubrik pemarkahan, and memberikan maklum balas segera kepada hasil kerja murid secara automatik.",
              icon: <ClipboardCheck className="text-emerald-500" />,
              color: "bg-emerald-50"
            },
            {
              title: "Analisis Data Murid",
              desc: "Menganalisis tahap penguasaan murid untuk mengenalpasti siapa yang memerlukan intervensi awal atau siapa yang boleh diberi pengayaan.",
              icon: <BarChart3 className="text-indigo-500" />,
              color: "bg-indigo-50"
            },
            {
              title: "Automasi Tugas Guru",
              desc: "Mengurangkan beban tugas perkeranian seperti mendraf laporan, minit mesyuarat, dan surat rasmi supaya guru boleh fokus kepada mengajar.",
              icon: <Settings2 className="text-blue-500" />,
              color: "bg-blue-50"
            }
          ].map((item, i) => (
            <div key={i} className={`${item.color} p-8 rounded-[40px] border border-white shadow-sm flex gap-6 items-start hover:scale-[1.02] transition-transform`}>
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm">{item.icon}</div>
              <div>
                <h4 className="text-lg font-black text-slate-900 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 p-10 md:p-16 rounded-[60px] text-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 p-10 opacity-10"><Globe size={200} /></div>
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">Aspirasi Negara</div>
          <h3 className="text-3xl md:text-4xl font-black mb-6 tracking-tighter leading-none">Menuju Transformasi Pendidikan Digital Malaysia</h3>
          <p className="text-slate-400 text-lg font-medium leading-relaxed mb-8">
            Penggunaan AI di sekolah adalah selaras dengan **Dasar Pendidikan Digital (DPD)** Kementerian Pendidikan Malaysia (KPM). Tujuannya adalah untuk melahirkan generasi yang fasih digital dan membolehkan guru-guru Malaysia bersaing di peringkat global.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-2xl flex items-center gap-3">
              <CheckCircle className="text-blue-400" size={20} />
              <span className="text-xs font-black uppercase">Guru Digital Kompeten</span>
            </div>
            <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-2xl flex items-center gap-3">
              <CheckCircle className="text-blue-400" size={20} />
              <span className="text-xs font-black uppercase">Murid Fasih AI</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderModule2 = () => (
    <div className="space-y-12 animate-in fade-in duration-500">
      <section className="bg-white p-8 md:p-12 rounded-[50px] border border-slate-100 shadow-xl relative overflow-hidden">
         <div className="absolute top-0 right-0 p-8 opacity-5"><TrendingUp size={120} /></div>
         <div className="relative z-10 max-w-3xl">
            <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
              <Target className="text-blue-600" /> AI & Aspirasi Pendidikan 2026-2035
            </h3>
            <p className="text-slate-600 text-sm font-medium leading-relaxed mb-8">
              Penerapan AI dalam profesion perguruan bukan sekadar trend, tetapi satu keperluan strategik dalam **Pelan Pembangunan Pendidikan Malaysia (PPPM) 2026-2035**. Fokus utama adalah untuk mewujudkan ekosistem digital yang inklusif, relevan dan berdaya saing global.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="flex items-center gap-4 bg-slate-50 p-5 rounded-3xl border border-slate-100">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center shrink-0 shadow-lg"><Zap size={20} fill="white"/></div>
                  <span className="text-[11px] font-black text-slate-700 uppercase leading-tight">Meningkatkan Kecekapan Instruksional Guru</span>
               </div>
               <div className="flex items-center gap-4 bg-slate-50 p-5 rounded-3xl border border-slate-100">
                  <div className="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center shrink-0 shadow-lg"><Star size={20} fill="white"/></div>
                  <span className="text-[11px] font-black text-slate-700 uppercase leading-tight">Personalisasi Pembelajaran Murid (Differentiated Learning)</span>
               </div>
            </div>
         </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         <div className="bg-emerald-50 p-8 rounded-[40px] border border-emerald-100">
            <h4 className="text-xl font-black text-emerald-900 mb-6 flex items-center gap-3"><CheckCircle className="text-emerald-600" /> Kelebihan AI (Peluang)</h4>
            <ul className="space-y-4">
              {["Automasi tugas rutin (Pemarkahan, Jadual).", "Penjanaan BBM kreatif & interaktif.", "Analisis data murid untuk intervensi PBD.", "Sokongan pembelajaran 24/7 bagi murid."].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[11px] font-bold text-emerald-800"><Zap size={14} className="text-emerald-500 mt-0.5 shrink-0" /> {item}</li>
              ))}
            </ul>
         </div>
         <div className="bg-amber-50 p-8 rounded-[40px] border border-amber-100">
            <h4 className="text-xl font-black text-amber-900 mb-6 flex items-center gap-3"><AlertTriangle className="text-amber-600" /> Cabaran AI (Risiko)</h4>
            <ul className="space-y-4">
              {["Isu kesahihan maklumat (Halusinasi AI).", "Kebimbangan privasi data murid.", "Risiko bias dalam algoritma AI.", "Kebergantungan melampau murid & guru."].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[11px] font-bold text-amber-800"><ShieldAlert size={14} className="text-amber-500 mt-0.5 shrink-0" /> {item}</li>
              ))}
            </ul>
         </div>
      </div>

      <section className="space-y-8">
         <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-black text-slate-900 mb-2 tracking-tighter">Prinsip Etika AI Guru</h3>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em]">Panduan Menggunakan Teknologi Secara Bertanggungjawab</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <UserRoundCheck />, title: "Human Centered", desc: "AI adalah pembantu, bukan pengganti guru.", color: "bg-blue-600" },
              { icon: <Lock />, title: "Privasi Data", desc: "Melindungi identiti murid pada setiap masa.", color: "bg-indigo-600" },
              { icon: <Settings2 />, title: "Akauntabiliti", desc: "Guru bertanggungjawab atas output AI.", color: "bg-purple-600" },
              { icon: <ShieldCheck />, title: "Integriti", desc: "Wajib semak kesahihan fakta (Fact-check).", color: "bg-rose-600" }
            ].map((principle, i) => (
              <div key={i} className="bg-white p-6 rounded-[36px] border border-slate-100 shadow-sm hover:shadow-xl transition-all text-center group">
                 <div className={`w-14 h-14 ${principle.color} text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    {React.cloneElement(principle.icon as React.ReactElement<any>, { size: 24 })}
                 </div>
                 <h5 className="text-sm font-black text-slate-900 uppercase mb-2">{principle.title}</h5>
                 <p className="text-[10px] text-slate-500 font-medium leading-relaxed">{principle.desc}</p>
              </div>
            ))}
         </div>
      </section>
    </div>
  );

  const renderModule3 = () => {
    const chatGptAreas = [
      {
        title: "Perancangan PdP",
        icon: <BookOpen className="text-blue-600" />,
        desc: "Jana RPH, objektif SMART, set induksi kreatif, dan pelan aktiviti PAK21.",
        prompt: "Bina satu RPH TS25 lengkap untuk subjek [SUBJEK] Tahun [TAHUN] bertema [TOPIK]. Sertakan objektif boleh ukur, aktiviti pemula-pembangunan-penutup yang menarik, dan kriteria kejayaan. Gunakan nada guru Malaysia."
      },
      {
        title: "Pentaksiran & PBD",
        icon: <ClipboardCheck className="text-emerald-600" />,
        desc: "Bina soalan kuiz, rubrik TP1-TP6, instrumen penilaian kendiri, dan cadangan intervensi murid.",
        prompt: "Sediakan 5 soalan objektif aras KBAT and 3 soalan subjektif untuk topik [TOPIK]. Sertakan skema jawapan dan rubrik pemarkahan untuk memudahkan pentaksiran PBD saya."
      },
      {
        title: "Bahan PdP Kreatif",
        icon: <Sparkles className="text-amber-600" />,
        desc: "Hasilkan nota ringkas, skrip video, lirik lagu pendidikan, dan latihan pengukuhan.",
        prompt: "Tulis satu lirik lagu pendek bertema [TOPIK] mengikut melodi lagu kanak-kanak popular untuk membantu murid saya menghafal fakta penting dengan lebih mudah."
      },
      {
        title: "Dokumentasi Sekolah",
        icon: <FileText className="text-indigo-600" />,
        desc: "Draf laporan program, minit mesyuarat, kertas kerja, dan surat rasmi sekolah dengan pantas.",
        prompt: "Draf satu laporan ringkas Program [NAMA PROGRAM] yang telah dijalankan pada [TARIKH]. Fokus kepada kekuatan, kelemahan, dan cadangan penambahbaikan untuk rekod fail panitia."
      }
    ];

    return (
      <div className="space-y-12 animate-in fade-in duration-500">
        <section className="bg-white p-10 rounded-[50px] border border-slate-100 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 -rotate-12"><MessageSquare size={120} /></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
              <Sparkles className="text-blue-600" /> Mengenali Enjin AI: ChatGPT & Gemini
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div className="bg-slate-900 text-white p-8 rounded-[40px] border border-slate-800 shadow-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center"><Bot size={20} className="text-white" /></div>
                    <h4 className="text-xl font-black tracking-tight">Apa Sebenarnya ChatGPT?</h4>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium">
                    ChatGPT (oleh OpenAI) adalah model bahasa besar (**LLM**) yang direka untuk memahami dan menjana teks seperti manusia. Ia berfungsi sebagai asisten intelektual yang mampu melakukan penaakulan (reasoning) kompleks, mendraf dokumen, dan menyelesaikan masalah logik secara interaktif.
                  </p>
                </div>
                <div className="bg-blue-600 text-white p-8 rounded-[40px] border border-blue-500 shadow-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center"><Globe size={20} className="text-white" /></div>
                    <h4 className="text-xl font-black tracking-tight">Gemini: Kuasa Multimodal Google</h4>
                  </div>
                  <p className="text-blue-100 text-sm leading-relaxed font-medium">
                    Gemini adalah AI generasi terbaru daripada Google. Kelebihannya terletak pada keupayaan **Multimodal**—iaitu memahami teks, imej, audio, dan video secara serentak. Ia sangat berkuasa kerana diintegrasikan terus ke dalam ekosistem Google Workspace (Docs, Sheets, Slides).
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-[40px] border border-slate-200">
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6 flex items-center gap-2">
                  <Link size={18} className="text-indigo-600" /> Kaitan dengan Pendidikan KPM
                </h4>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0"><Monitor size={16} className="text-indigo-600" /></div>
                    <div>
                      <h5 className="text-[11px] font-black text-slate-900 uppercase">Ekosistem DELIMa</h5>
                      <p className="text-[10px] text-slate-500 font-bold leading-relaxed">Gemini berkait rapat dengan platform DELIMa kerana ia menggunakan infrastruktur Google, membolehkan guru mengautomasi pengurusan kelas dengan lebih efisien.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center shrink-0"><ShieldCheck size={16} className="text-emerald-600" /></div>
                    <div>
                      <h5 className="text-[11px] font-black text-slate-900 uppercase">Dasar Pendidikan Digital (DPD)</h5>
                      <p className="text-[10px] text-slate-500 font-bold leading-relaxed">Penggunaan AI menyokong teras DPD untuk melahirkan guru digital kompeten yang mampu menyesuaikan pedagogi dengan arus teknologi global.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center shrink-0"><Zap size={16} className="text-amber-600" /></div>
                    <div>
                      <h5 className="text-[11px] font-black text-slate-900 uppercase">Efisiensi & Kualiti PdP</h5>
                      <p className="text-[10px] text-slate-500 font-bold leading-relaxed">AI bukan pengganti guru, tetapi rakan kolaborasi untuk meningkatkan kualiti penyampaian dan mengurangkan beban tugas perkeranian guru Malaysia.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-[40px] border border-blue-100 shadow-sm">
          <h3 className="text-xl font-black text-slate-900 mb-4 flex items-center gap-3"><MessageSquare className="text-blue-600" /> Kuasai ChatGPT dalam 3 Langkah</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-100"><span className="text-3xl font-black text-blue-100 block mb-2">01</span><h4 className="text-sm font-black text-slate-900 uppercase mb-2">Peranan</h4><p className="text-[11px] text-slate-500 font-medium">Beritahu AI siapa dia (cth: "Anda adalah Guru Pakar").</p></div>
            <div className="bg-white p-6 rounded-3xl border border-slate-100"><span className="text-3xl font-black text-blue-100 block mb-2">02</span><h4 className="text-sm font-black text-slate-900 uppercase mb-2">Tugasan</h4><p className="text-[11px] text-slate-500 font-medium">Berikan arahan spesifik (cth: "Bina soalan KBAT").</p></div>
            <div className="bg-white p-6 rounded-3xl border border-slate-100"><span className="text-3xl font-black text-blue-100 block mb-2">03</span><h4 className="text-sm font-black text-slate-900 uppercase mb-2">Format</h4><p className="text-[11px] text-slate-500 font-medium">Nyatakan format output (cth: "Jadual").</p></div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {chatGptAreas.map((area, i) => (
            <div key={i} className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="flex items-center gap-4 mb-6"><div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">{area.icon}</div><h4 className="text-lg font-black text-slate-900">{area.title}</h4></div>
              <p className="text-sm text-slate-500 font-medium mb-6 leading-relaxed">{area.desc}</p>
              <div className="bg-slate-50 p-6 rounded-3xl relative">
                <p className="text-[11px] text-slate-600 italic font-medium pr-10">"{area.prompt}"</p>
                <button onClick={() => copyToClipboard(area.prompt, `chatgpt-${i}`)} className={`absolute top-6 right-6 p-2 rounded-xl transition-all ${copiedIndex === `chatgpt-${i}` ? 'bg-emerald-500 text-white' : 'text-slate-400 hover:text-blue-600'}`}><CheckCircle2 size={16} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderModule4 = () => {
    const promptCategories = [
      {
        category: "PENTADBIRAN SEKOLAH",
        icon: <Briefcase size={14} className="text-blue-600" />,
        prompts: [
          { title: "Mesyuarat Guru", prompt: "Reka poster formal Mesyuarat Guru Bil. [BIL]/[TAHUN]. Tarikh: [TARIKH], Masa: [MASA], Tempat: [TEMPAT]. Warna korporat biru navy. GO" },
          { title: "LADAP / LDP", prompt: "Poster Kursus Peningkatan Profesionalisme (LADAP) bertajuk [TAJUK]. Penceramah: [NAMA]. Tarikh: [TARIKH]. Gaya akademik. GO" },
          { title: "Majlis Persaraan", prompt: "Reka visual kenang-kenangan Majlis Sanjungan Budi buat [NAMA GURU]. Tema warna emas and bunga-bundaan formal. Sertakan foto asal. GO" },
          { title: "Watikah Pelantikan", prompt: "Poster Majlis Watikah Pelantikan Pemimpin Muda (Pengawas, PSS, PRS). Gaya penuh istiadat, warna diraja dan emas. GO" },
          { title: "Hebahan Cuti", prompt: "Reka pengumuman digital Cuti Sempena [NAMA CUTI]. Tarikh mula: [TARIKH], Tarikh sekolah dibuka: [TARIKH]. Jelas dan ringkas. GO" }
        ]
      },
      {
        category: "ALAT BANTU MENGAJAR & BAHAN BELAJAR",
        icon: <PenTool size={14} className="text-purple-600" />,
        prompts: [
          { title: "Kad Imbasan Visual", prompt: "Reka satu set kad imbasan (flashcards) visual untuk kosa kata [TOPIK]. Sertakan gambar yang jelas, menarik, and bermaksud bagi memudahkan murid menghafal. GO" },
          { title: "Peta Minda Topik", prompt: "Hasilkan satu peta minda (Mind Map) visual yang merangkumi semua sub-topik penting bagi [TOPIK]. Gunakan warna yang berbeza bagi setiap cabang untuk memudahkan pemahaman. GO" },
          { title: "Langkah Eksperimen", prompt: "Reka satu infografik langkah-demi-langkah bagi menjalankan eksperimen [NAMA EKSPERIMEN]. Gunakan ikon and teks ringkas yang mudah difahami murid. GO" },
          { title: "Rumus & Formula", prompt: "Reka poster visual rumusan formula bagi topik [TOPIK MATEMATIK/SAINS]. Gunakan tipografi yang besar and kontras warna yang tinggi untuk diletakkan di Sudut PdP. GO" },
          { title: "Lembaran Kerja Visual", prompt: "Bina reka bentuk lembaran kerja (worksheets) yang mengandungi banyak elemen visual, ruang melukis, and soalan grafik bagi topik [TOPIK]. Sesuai untuk Murid Berkeperluan Pendidikan Khas (MBPK). GO" }
        ]
      },
      {
        category: "KURIKULUM",
        icon: <BookOpen size={14} className="text-indigo-600" />,
        prompts: [
          { title: "Minggu Panitia", prompt: "Reka poster Minggu Panitia [SUBJEK]. Aktiviti: [AKTIVITI 1, 2, 3]. Visual ikon subjek and warna ceria. GO" },
          { title: "Teknik Menjawab", prompt: "Poster Bengkel Teknik Menjawab [SUBJEK] untuk calon [SPM/UASA]. Penceramah: [NAMA]. Gaya inspirasi kejayaan. GO" },
          { title: "Minggu STEM", prompt: "Reka poster Karnival STEM Sekolah. Visual futuristik, robotik and sains. Tarikh: [TARIKH]. GO" },
          { title: "Sudut Nilam", prompt: "Poster kempen 'Mari Membaca' / NILAM. Mesej: [MESEJ]. Visual buku-buku yang estetik. GO" }
        ]
      },
      {
        category: "HAL EHWAL MURID (HEM)",
        icon: <UserCheck size={14} className="text-emerald-600" />,
        prompts: [
          { title: "Jom Ke Sekolah", prompt: "Reka poster Kempen Kehadiran Penuh 100%. Mesej: 'Sekolahku Syurgaku'. Visual murid ceria di pintu pagar. GO" },
          { title: "Anti-Buli", prompt: "Poster Kesedaran Hentikan Buli. Mesej: 'Katakan TIDAK kepada Buli'. Warna merah, hitam and putih yang tegas. GO" },
          { title: "Minda Sihat", prompt: "Reka poster Unit Bimbingan & Kaunseling: 'Minda Sihat, Emosi Terjaga'. Warna hijau lembut. GO" }
        ]
      },
      {
        category: "KOKURIKULUM",
        icon: <Trophy size={14} className="text-amber-600" />,
        prompts: [
          { title: "Kejohanan Sukan", prompt: "Reka poster Kejohanan Olahraga Tahunan Sekolah. Warna mengikut rumah sukan. Gaya energetik. GO" },
          { title: "Perkhemahan", prompt: "Poster Perkhemahan Bersepadu Unit Beruniform. Tarikh: [TARIKH], Tempat: [TEMPAT]. Visual unggun api. GO" }
        ]
      },
      {
        category: "PRA SEKOLAH & PPKI",
        icon: <Baby size={14} className="text-pink-600" />,
        prompts: [
          { title: "Konvokesyen Cilik", prompt: "Reka poster Majlis Konvokesyen Prasekolah. Visual jubah konvo, kanak-kanak comel. GO" },
          { title: "Kesedaran Autisme", prompt: "Poster Minggu Kesedaran Autisme / PPKI. Tema: 'Sama Tapi Berbeza'. Warna biru and puzzle. GO" }
        ]
      }
    ];

    return (
      <div className="space-y-12 animate-in fade-in duration-500">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <section className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm relative overflow-hidden group">
            <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-3"><Palette className="text-blue-600" /> Peranan Sistem</h3>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">EduGrafik ialah GPT khas untuk pendidikan sekolah Malaysia yang berfungsi sebagai <span className="text-blue-600 font-bold">Enjin Reka Bentuk Visual Pendidikan</span>.</p>
          </section>
          <section className="bg-slate-900 p-8 rounded-[40px] text-white">
            <h3 className="text-xl font-black mb-6 flex items-center gap-3"><Target className="text-indigo-400" /> Objektif Utama</h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                 <h4 className="text-[10px] font-black uppercase text-indigo-400 mb-1">Automasi 95%</h4>
                 <p className="text-slate-400 text-xs font-medium">Bahan siap secara automatik and pantas.</p>
              </div>
            </div>
          </section>
        </div>

        <section className="bg-rose-50 border border-rose-100 p-8 rounded-[50px] relative overflow-hidden">
           <h3 className="text-2xl font-black text-rose-900 mb-8 flex items-center gap-3 relative z-10"><ShieldAlert className="text-rose-600" /> Peraturan Penting Sistem</h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              <div className="bg-white p-6 rounded-[30px] shadow-sm border border-rose-100"><h4 className="text-sm font-black text-rose-900 uppercase mb-3">Arahan "GO"</h4><p className="text-[11px] text-rose-700 font-bold">GPT WAJIB terus menjana reka bentuk tanpa soalan tambahan.</p></div>
              <div className="bg-white p-6 rounded-[30px] shadow-sm border border-rose-100"><h4 className="text-sm font-black text-rose-900 uppercase mb-3">Keaslian Wajah</h4><p className="text-[11px] text-rose-700 font-bold">DILARANG membaiki atau mengubah identiti individu.</p></div>
              <div className="bg-white p-6 rounded-[30px] shadow-sm border border-rose-100"><h4 className="text-sm font-black text-rose-900 uppercase mb-3">Kewajipan Design</h4><p className="text-[11px] text-rose-700 font-bold">Wajib mengandungi elemen pendidikan.</p></div>
           </div>
        </section>

        <section className="space-y-16">
          {promptCategories.map((cat, catIdx) => (
            <div key={catIdx} className="space-y-6">
              <div className="flex items-center gap-4 border-b-2 border-slate-100 pb-4"><div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-xl border border-slate-50">{cat.icon}</div><h4 className="text-lg font-black text-slate-900 uppercase tracking-widest">{cat.category}</h4></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cat.prompts.map((item, i) => (
                  <div key={i} className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-slate-100 group hover:border-blue-400 hover:shadow-2xl transition-all">
                    <div className="px-6 py-4 border-b border-slate-50 bg-slate-50/20 flex justify-between items-center">
                       <h4 className="text-slate-900 text-[10px] font-black uppercase tracking-wider">{item.title}</h4>
                    </div>
                    <div className="p-6 relative">
                      <p className="text-slate-500 italic text-xs font-medium pr-12">"{item.prompt}"</p>
                      <button onClick={() => copyToClipboard(item.prompt, `m4-${catIdx}-${i}`)} className="absolute bottom-6 right-6 p-3 rounded-2xl bg-slate-900 text-white hover:bg-blue-600 transition-all"><Copy size={18} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    );
  };

  const renderModule5 = () => {
    const srCategories = [
      {
        category: "PERANCANGAN PdP (RPH & DSKP)",
        icon: <BookOpen className="text-blue-600" />,
        prompts: [
          { title: "RPH TS25 Lengkap", prompt: "Sediakan satu RPH TS25 lengkap untuk subjek [SUBJEK], Tahun [TAHUN], Unit [UNIT]. Sertakan Objektif Pembelajaran (SMART), Kriteria Kejayaan, Aktiviti PAK21 (Permulaan, Pembangunan, Penutup), EMK, Nilai Murni dan Pentaksiran PBD. GO" },
          { title: "RPH Pengajaran Terbeza", prompt: "Bina RPH Terbeza (Differentiated Instruction) bagi kelas yang mempunyai 3 aras murid (Perdana, Sederhana, Pemulihan) untuk topik [TOPIK]. GO" },
          { title: "RPH STEM Bersepadu", prompt: "Rancang RPH STEM yang mengintegrasikan [SUBJEK 1] and [SUBJEK 2]. Fokus kepada penyelesaian masalah dunia sebenar. GO" }
        ]
      },
      {
        category: "PENTAKSIRAN PBD & ANALISIS",
        icon: <ClipboardCheck className="text-emerald-600" />,
        prompts: [
          { title: "Instrumen PBD Formatif", prompt: "Bina satu set instrumen PBD formatif (Senarai Semak / Borang Penilaian Kendiri) untuk menilai kemahiran [KEMAHIRAN] murid Tahun [TAHUN]. GO" },
          { title: "Rubrik TP1-TP6", prompt: "Sediakan rubrik deskriptif yang jelas bagi Tahap Penguasaan TP1 hingga TP6 untuk projek [NAMA PROJEK]. GO" },
          { title: "Tafsiran Data PBD", prompt: "Saya mempunyai data kelas 10 murid TP3 and 5 murid TP2. Berikan tafsiran profesional dan cadangan langkah seterusnya. GO" },
          { title: "Pelaporan UASA", prompt: "Draf ulasan profesional guru kelas untuk slip keputusan UASA bagi murid yang menunjukkan peningkatan sahsiah tetapi lemah akademik. GO" }
        ]
      },
      {
        category: "INTERVENSI & PEMULIHAN",
        icon: <Stethoscope size={14} className="text-rose-600" />,
        prompts: [
          { title: "Pelan Intervensi Berfokus", prompt: "Bina satu Pelan Intervensi 4 Minggu bagi murid yang belum menguasai [KEMAHIRAN ASAS]. Sertakan aktiviti harian ringkas. GO" },
          { title: "Modul Pengayaan TP5-6", prompt: "Sediakan 3 aktiviti pengayaan kreatif bagi murid yang telah mencapai TP6 untuk topik [TOPIK]. GO" },
          { title: "Strategi Bimbingan Khas", prompt: "Cadangkan strategi pedagogi untuk menarik minat murid tegar ponteng dalam subjek [SUBJEK]. GO" }
        ]
      },
      {
        category: "PENGURUSAN PANITIA",
        icon: <Briefcase size={14} className="text-indigo-600" />,
        prompts: [
          { title: "Pelan Taktikal Panitia", prompt: "Bina Pelan Taktikal Panitia [SUBJEK] untuk tahun [TAHUN] menggunakan format OPPM. GO" },
          { title: "Minit Mesyuarat Panitia", prompt: "Draf minit mesyuarat panitia Bil 1/[TAHUN]. Agenda: Perancangan Tahunan, PBD, dan Intervensi. GO" },
          { title: "Laporan PLC", prompt: "Sediakan laporan PLC jenis 'Peer Coaching' yang telah dijalankan antara [GURU A] and [GURU B]. GO" },
          { title: "Analisis SWOT Panitia", prompt: "Bina analisis SWOT bagi Panitia [SUBJEK] untuk persediaan pencerapan SKPMg2. GO" }
        ]
      },
      {
        category: "BAHAN BANTU MENGAJAR (BBM)",
        icon: <Sparkles size={14} className="text-amber-600" />,
        prompts: [
          { title: "Lembaran Kerja Kreatif", prompt: "Hasilkan soalan lembaran kerja (Kuiz/Isi Tempat Kosong) yang menarik bertema [TEMA] untuk topik [TOPIK]. GO" },
          { title: "Script Video PdP", prompt: "Tulis skrip video PdP berdurasi 3 minit untuk menerangkan konsep [KONSEP] dengan gaya penceritaan. GO" },
          { title: "Draf Slaid Canva", prompt: "Sediakan struktur 10 slaid pembentangan menarik untuk topik [TOPIK]. Berikan poin penting setiap slaid. GO" }
        ]
      }
    ];

    return (
      <div className="space-y-12">
        <section className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-[40px] rounded-full"></div>
          <h3 className="text-xl font-black text-slate-900 mb-4 flex items-center gap-3"><LayoutIcon className="text-indigo-600" /> Peranan Kurikulum SR GPT</h3>
          <p className="text-slate-600 text-sm font-medium leading-relaxed max-w-4xl">Sistem ini membantu menguruskan 4 elemen teras: **Perancangan (RPH), Pelaksanaan (PdP), Pentaksiran (PBD), and Pelaporan (Data).**</p>
        </section>

        <div className="space-y-16">
          {srCategories.map((cat, catIdx) => (
            <div key={catIdx} className="space-y-6">
              <div className="flex items-center gap-4 border-b-2 border-slate-100 pb-4"><div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm">{cat.icon}</div><h4 className="text-lg font-black text-slate-900 uppercase tracking-widest">{cat.category}</h4></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cat.prompts.map((item, i) => (
                  <div key={i} className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                    <div className="flex justify-between items-start mb-4">
                       <h5 className="text-[11px] font-black uppercase text-indigo-600 tracking-tight">{item.title}</h5>
                       <button onClick={() => copyToClipboard(item.prompt, `m5-${catIdx}-${i}`)} className="p-3 bg-slate-50 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-all"><Copy size={16} /></button>
                    </div>
                    <p className="text-xs text-slate-500 italic font-medium leading-relaxed">"{item.prompt}"</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderModule6 = () => (
    <div className="space-y-12 animate-in fade-in duration-500">
      <section className="bg-rose-50 border-4 border-rose-600 p-8 md:p-12 rounded-[50px] relative overflow-hidden shadow-2xl">
         <div className="absolute top-0 right-0 p-8 opacity-10 -rotate-12"><ShieldX size={150} className="text-rose-900" /></div>
         <div className="relative z-10">
            <h3 className="text-3xl font-black text-rose-900 mb-6 flex items-center gap-3"><XCircle className="text-rose-600" size={32} /> AWAS: Maklumat Larangan!</h3>
            <p className="text-rose-800 text-lg font-black mb-8 leading-relaxed uppercase tracking-tight">Dilarang sama sekali memasukkan maklumat berikut ke dalam AI:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="bg-white p-6 rounded-[32px] border border-rose-200 shadow-sm flex gap-5 items-start">
                  <div className="w-12 h-12 bg-rose-100 rounded-2xl flex items-center justify-center text-rose-600 shrink-0"><UserX size={24}/></div>
                  <div><h4 className="font-black text-rose-900 uppercase text-xs mb-2">Identiti Murid</h4><p className="text-[11px] text-rose-700 font-bold">Nama penuh, MyKID, alamat, no telefon penjaga.</p></div>
               </div>
               <div className="bg-white p-6 rounded-[32px] border border-rose-200 shadow-sm flex gap-5 items-start">
                  <div className="w-12 h-12 bg-rose-100 rounded-2xl flex items-center justify-center text-rose-600 shrink-0"><Lock size={24}/></div>
                  <div><h4 className="font-black text-rose-900 uppercase text-xs mb-2">Maklumat Rasmi</h4><p className="text-[11px] text-rose-700 font-bold">Kertas soalan belum rasmmi, minit sulit, password KPM.</p></div>
               </div>
               <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm flex gap-5 items-start">
                  <div className="w-12 h-12 bg-rose-100 rounded-2xl flex items-center justify-center text-rose-600 shrink-0"><EyeOff size={24}/></div>
                  <div><h4 className="font-black text-rose-900 uppercase text-xs mb-2">Isu Sensitif</h4><p className="text-[11px] text-rose-700 font-bold">Rekod kesihatan and butiran kes disiplin siasatan.</p></div>
               </div>
               <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm flex gap-5 items-start">
                  <div className="w-12 h-12 bg-rose-100 rounded-2xl flex items-center justify-center text-rose-600 shrink-0"><ShieldX size={24}/></div>
                  <div><h4 className="font-black text-rose-900 uppercase text-xs mb-2">Gambar Wajah</h4><p className="text-[11px] text-rose-700 font-bold">Memasukkan gambar wajah murid tanpa izin bertulis.</p></div>
               </div>
            </div>
         </div>
      </section>
      <section className="bg-white p-10 rounded-[50px] border border-slate-100 shadow-sm">
         <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3"><UserRoundCheck className="text-blue-600" /> Tanggungjawab Profesional</h3>
         <div className="space-y-6">
            <div className="flex gap-6 p-6 bg-slate-50 rounded-[32px] border border-slate-100">
               <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center shrink-0"><ShieldCheck size={20}/></div>
               <div><h4 className="text-sm font-black text-slate-900 uppercase mb-1">AI Sebagai Alat Bantu</h4><p className="text-[11px] text-slate-500 font-medium">Keputusan akhir PdP and penilaian adalah di tangan guru. Bukan AI.</p></div>
            </div>
         </div>
      </section>
    </div>
  );

  const getModuleContent = () => {
    switch (module.id) {
      case 'm1': return renderModule1();
      case 'm2': return renderModule2();
      case 'm3': return renderModule3();
      case 'm4': return renderModule4();
      case 'm5': return renderModule5();
      case 'm6': return renderModule6();
      default: return null;
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-4 px-4 relative">
      <button onClick={onBack} className="group flex items-center gap-2 text-slate-400 hover:text-blue-600 font-black uppercase tracking-[0.2em] text-[8px] mb-6 transition-all">
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Kembali ke Portal Akademi
      </button>

      <div className="bg-white rounded-[48px] overflow-hidden shadow-2xl border border-slate-100 relative">
        <div className="bg-white p-8 md:p-12 border-b border-slate-50 flex flex-col lg:flex-row items-center gap-10 relative z-10">
          <div className="bg-gradient-to-tr from-blue-600 to-indigo-700 p-8 rounded-[32px] text-white shadow-2xl"><Icon size={48} /></div>
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[8px] font-black uppercase tracking-[0.3em] mb-4 border border-blue-100">Modul Masterclass</div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-none tracking-tighter mb-4">{module.title}</h1>
            <p className="text-slate-500 text-lg font-medium max-w-2xl leading-relaxed">{module.description}</p>
          </div>
        </div>
        <div className="p-8 md:p-12 bg-slate-50/10">{getModuleContent()}</div>
      </div>

      <div className="fixed bottom-10 right-10 z-[60] flex flex-col items-end gap-4 group">
         <div className="bg-white p-5 rounded-[24px] shadow-2xl border border-slate-100 max-w-[200px] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
            <p className="text-[11px] font-black text-slate-800 leading-tight">"Cikgu, data sensitif murid jangan beri pada AI ya! Bahaya."</p>
         </div>
         <div className="w-20 h-20 bg-white rounded-full shadow-2xl border-4 border-blue-100 overflow-hidden cursor-help hover:scale-110 transition-transform animate-character relative">
            <img src={CGU_DIN_IMG} alt="Cgu Din Mascot" crossOrigin="anonymous" className="w-full h-full object-cover" />
         </div>
      </div>
    </div>
  );
};

export default ModuleDetail;
