
import React from 'react';
import { 
  BookOpen, 
  Brain, 
  Sparkles, 
  FileText, 
  Palette, 
  Layout, 
  ShieldCheck, 
  Download,
  Terminal,
  Calculator,
  PenTool,
  Users
} from 'lucide-react';
import { Module, PromptExample, ResourceItem } from './types';

export const MODULES: Module[] = [
  { 
    id: 'm1', 
    title: 'Pengenalan AI', 
    description: 'Fahami asas AI, cara ia berfungsi, dan peranannya dalam transformasi pendidikan digital negara.', 
    icon: 'Brain', 
    path: '/modul-1' 
  },
  { 
    id: 'm2', 
    title: 'Asas AI untuk Guru', 
    description: 'Kepentingan AI dalam profesion perguruan, kelebihan, cabaran, dan prinsip etika.', 
    icon: 'ShieldCheck', 
    path: '/modul-2' 
  },
  { 
    id: 'm3', 
    title: 'Penggunaan ChatGPT', 
    description: 'Panduan praktikal PdP, Pentaksiran PBD, bahan bantu mengajar, dan dokumentasi sekolah.', 
    icon: 'Terminal', 
    path: '/modul-3' 
  },
  { 
    id: 'm4', 
    title: 'EduGrafik GPT', 
    description: 'Hasilkan poster, infografik, dan bahan visual pendidikan profesional sepantas kilat.', 
    icon: 'Palette', 
    path: '/modul-4' 
  },
  { 
    id: 'm5', 
    title: 'Kurikulum Sekolah Rendah GPT', 
    description: 'RPH lengkap, analisis TP1-TP6, pelaporan akademik, dan pengurusan kurikulum sistematik.', 
    icon: 'Layout', 
    path: '/modul-5' 
  },
  { 
    id: 'm6', 
    title: 'Etika & Integriti', 
    description: 'Privasi data murid, kesahihan maklumat AI, dan tanggungjawab profesional guru.', 
    icon: 'Users', 
    path: '/modul-6' 
  }
];

export const CHATGPT_PROMPTS: PromptExample[] = [
  // BAHAGIAN A: PERANCANGAN PdP (1–25)
  {
    category: 'A: PERANCANGAN PdP (1-25)',
    title: 'PROMPT 1: RPH TS25 & SKPMg2',
    prompt: `Anda bertindak sebagai guru sekolah rendah Malaysia. Bina satu RPH lengkap berdasarkan DSKP KPM terkini, selaras Standard 4 SKPMg2, TS25 dan PPPM 2026–2035. Sediakan objektif boleh ukur, aktiviti pemula–pembangunan–penutup, PAK21, KBAT, EMK, PBD formatif, pemulihan dan pengayaan dalam jadual profesional.`
  },
  {
    category: 'A: PERANCANGAN PdP (1-25)',
    title: 'PROMPT 2: Aktiviti PAK21 Terbeza',
    prompt: `Cadangkan 5 aktiviti PAK21 yang sesuai untuk topik [MASUKKAN TOPIK] bagi murid tahap 1 yang mempunyai pelbagai aras kecerdasan (Pengajaran Terbeza).`
  },
  {
    category: 'A: PERANCANGAN PdP (1-25)',
    title: 'PROMPT 3: STEM Interaktif',
    prompt: `Bina satu aktiviti STEM yang mengintegrasikan subjek Sains dan Matematik. Sertakan bahan kitar semula yang diperlukan dan rubrik penilaian kreativiti murid.`
  },
  {
    category: 'A: PERANCANGAN PdP (1-25)',
    title: 'PROMPT 6-25: PdP Inkuiri & Kontekstual',
    prompt: `Gunakan format profesional untuk PdP inkuiri, STEM, kontekstual, pemulihan, pengayaan, inklusif MBPK, koperatif, permainan, refleksi, merentas kurikulum dan keperluan pencerapan SKPMg2.`
  },

  // BAHAGIAN B: PBD (26–50)
  {
    category: 'B: PENTAKSIRAN PBD (26-50)',
    title: 'PROMPT 26: Instrumen PBD Formatif',
    prompt: `Bina satu pelan pentaksiran formatif yang holistik untuk unit [TOPIK]. Sertakan instrumen senarai semak, penilaian kendiri, dan rakan sebaya yang selaras dengan Standard 4 SKPMg2.`
  },
  {
    category: 'B: PENTAKSIRAN PBD (26-50)',
    title: 'PROMPT 27: Rubrik TP1-TP6 Autentik',
    prompt: `Sediakan rubrik penilaian tahap penguasaan TP1 hingga TP6 bagi projek [NAMA PROJEK]. Pastikan deskripsi setiap tahap adalah jelas and boleh diukur.`
  },
  {
    category: 'B: PENTAKSIRAN PBD (26-50)',
    title: 'PROMPT 30-50: Pentaksiran Diagnostik & Projek',
    prompt: `Gunakan format profesional untuk pentaksiran diagnostik, kendiri, rakan sebaya, autentik, projek, pelaporan ibu bapa and evidens pencerapan.`
  },

  // BAHAGIAN C: DATA & KPI (51–75)
  {
    category: 'C: DATA, HEADCOUNT & KPI (51-75)',
    title: 'PROMPT 51: Analisis Headcount PBD',
    prompt: `Bina analisis headcount murid bagi kelas saya berdasarkan data PBD penggal lepas. Sertakan TOV, sasaran OTI, and unjuran ETR untuk memastikan semua murid mencapai sekurang-kurangnya TP3.`
  },
  {
    category: 'C: DATA, HEADCOUNT & KPI (51-75)',
    title: 'PROMPT 52: Pelan Intervensi Berfokus',
    prompt: `Berdasarkan data pencapaian murid yang lemah, bina satu pelan intervensi 3 bulan yang mempunyai KPI jelas, strategi bimbingan berfokus, and mekanisme pemantauan keberkesanan.`
  },
  {
    category: 'C: DATA, HEADCOUNT & KPI (51-75)',
    title: 'PROMPT 54-75: Dashboard KPI & Audit',
    prompt: `Gunakan format profesional untuk sasaran tahunan, dashboard, pemantauan KPI, intervensi and evidens audit akademik.`
  },

  // BAHAGIAN D: KURIKULUM & TS25 (76–90)
  {
    category: 'D: PENGURUSAN KURIKULUM (76-90)',
    title: 'PROMPT 76: Pelan Taktikal Panitia',
    prompt: `Bina Pelan Taktikal and Pelan Operasi (OPPM) untuk panitia subjek [SUBJEK] bagi tahun 2024 yang memfokuskan kepada peningkatan kualiti PdP guru melalui PLC.`
  },
  {
    category: 'D: PENGURUSAN KURIKULUM (76-90)',
    title: 'PROMPT 77-90: PLC & Inovasi',
    prompt: `Gunakan format profesional untuk pelan taktikal, PLC, pencerapan, inovasi PdP and refleksi kurikulum.`
  },

  // BAHAGIAN E: HEM (91–120)
  {
    category: 'E: HAL EHWAL MURID (91-120)',
    title: 'HEM-1: Pelan Strategik HEM',
    prompt: `Bina Pelan Strategik HEM selaras Visi KPM and PPPM 2026–2035 yang merangkumi pengurusan disiplin, kebajikan, and sahsiah murid.`
  },
  {
    category: 'E: HAL EHWAL MURID (HEM)',
    title: 'HEM-12: Pengurusan Kes Buli',
    prompt: `Rancang pengurusan kes buli sekolah rendah secara menyeluruh merangkumi pencegahan, intervensi and sokongan psikologi.`
  },
  {
    category: 'E: HAL EHWAL MURID (HEM)',
    title: 'HEM-91-120: Disiplin & Kebajikan',
    prompt: `Gunakan format profesional untuk pelan disiplin positif, intervensi kehadiran tegar, pengurusan RMT, and modul kepimpinan pengawas.`
  },

  // BAHAGIAN F: KOKURIKULUM (121–130)
  {
    category: 'F: KOKURIKULUM (121-130)',
    title: 'KO-1: Pelan Strategik Kokurikulum',
    prompt: `Bina Pelan Strategik Kokurikulum sekolah selaras PPPM 2026–2035 yang mengintegrasikan elemen kepimpinan and jati diri murid.`
  },
  {
    category: 'F: KOKURIKULUM',
    title: 'KO-121-130: Modul Sukan & Persatuan',
    prompt: `Gunakan format profesional untuk modul latihan unit beruniform, perancangan aktiviti kelab/persatuan, and pengurusan kejohanan sukan sekolah.`
  },

  // BAHAGIAN G: PENDIDIKAN KHAS – PPKI (131–150)
  {
    category: 'G: PENDIDIKAN KHAS (PPKI)',
    title: 'PROMPT 131: Pelan Strategik PPKI',
    prompt: `Bina Pelan Strategik Program Pendidikan Khas Integrasi (PPKI) selaras dasar pendidikan inklusif KPM and PPPM 2026–2035 yang merangkumi visi, misi, objektif strategik, KPI tahunan, pelan tindakan and mekanisme pemantauan.`
  },
  {
    category: 'G: PENDIDIKAN KHAS (PPKI)',
    title: 'PROMPT 132: Analisis Profil MBPK',
    prompt: `Analisis profil Murid Berkeperluan Pendidikan Khas (MBPK) berdasarkan tahap kefungsian, kognitif, sosial, emosi and fizikal untuk perancangan PdP individu.`
  },
  {
    category: 'G: PENDIDIKAN KHAS (PPKI)',
    title: 'PROMPT 133: Rancangan Pendidikan Individu (RPI)',
    prompt: `Bina Rancangan Pendidikan Individu (RPI) lengkap merangkumi objektif, strategi PdP, pentaksiran, pemantauan and peranan ibu bapa.`
  },
  {
    category: 'G: PENDIDIKAN KHAS (PPKI)',
    title: 'PROMPT 134: PdP Individu MBPK',
    prompt: `Rancang PdP individu MBPK selaras DSKP Pendidikan Khas dengan pendekatan pembelajaran bermakna and berperingkat.`
  },
  {
    category: 'G: PENDIDIKAN KHAS (PPKI)',
    title: 'PROMPT 135: RPH Pendidikan Khas',
    prompt: `Sediakan RPH Pendidikan Khas yang fleksibel and adaptif mengikut tahap MBPK.`
  },
  {
    category: 'G: PENDIDIKAN KHAS (PPKI)',
    title: 'PROMPT 136: Pentaksiran Autentik MBPK',
    prompt: `Rancang pentaksiran autentik MBPK bagi menilai perkembangan kefungsian murid secara holistik.`
  },
  {
    category: 'G: PENDIDIKAN KHAS (PPKI)',
    title: 'PROMPT 137: Instrumen PBD Khusus MBPK',
    prompt: `Bina instrumen Pentaksiran Bilik Darjah (PBD) khusus MBPK menggunakan evidens pemerhatian, hasil kerja and dokumentasi visual.`
  },
  {
    category: 'G: PENDIDIKAN KHAS (PPKI)',
    title: 'PROMPT 138: Analisis Data PBD MBPK',
    prompt: `Analisis data PBD MBPK and tafsir tahap perkembangan murid untuk intervensi.`
  },
  {
    category: 'G: PENDIDIKAN KHAS (PPKI)',
    title: 'PROMPT 139: Intervensi Pemulihan Intensif',
    prompt: `Rancang intervensi pemulihan intensif MBPK berkeperluan sokongan tinggi.`
  },
  {
    category: 'G: PENDIDIKAN KHAS (PPKI)',
    title: 'PROMPT 140: Kemahiran Hidup MBPK',
    prompt: `Rancang PdP kemahiran hidup, kendiri and kebolehfungsian harian MBPK.`
  },
  {
    category: 'G: PENDIDIKAN KHAS (PPKI)',
    title: 'PROMPT 141: PdP Berasaskan Rutin',
    prompt: `Rancang PdP berasaskan rutin harian untuk kestabilan emosi and tingkah laku MBPK.`
  },
  {
    category: 'G: PENDIDIKAN KHAS (PPKI)',
    title: 'PROMPT 142: Pengurusan Tingkah Laku',
    prompt: `Cadangkan strategi pengurusan tingkah laku positif MBPK secara beretika.`
  },
  {
    category: 'G: PENDIDIKAN KHAS (PPKI)',
    title: 'PROMPT 143: Sokongan Emosi & Sosial',
    prompt: `Rancang sokongan emosi and sosial MBPK dalam persekitaran sekolah inklusif.`
  },
  {
    category: 'G: PENDIDIKAN KHAS (PPKI)',
    title: 'PROMPT 144: BBM Multisensori',
    prompt: `Rancang penggunaan bahan bantu mengajar multisensori bagi MBPK.`
  },
  {
    category: 'G: PENDIDIKAN KHAS (PPKI)',
    title: 'PROMPT 145: Teknologi Sokongan',
    prompt: `Rancang penggunaan teknologi sokongan (assistive technology) MBPK secara selamat and beretika.`
  },
  {
    category: 'G: PENDIDIKAN KHAS (PPKI)',
    title: 'PROMPT 146: Kolaborasi Guru PPKI',
    prompt: `Rancang kolaborasi PdP antara guru PPKI and guru arus perdana.`
  },
  {
    category: 'G: PENDIDIKAN KHAS (PPKI)',
    title: 'PROMPT 147: PdP Inklusif Arus Perdana',
    prompt: `Rancang pelaksanaan PdP inklusif MBPK dalam kelas arus perdana.`
  },
  {
    category: 'G: PENDIDIKAN KHAS (PPKI)',
    title: 'PROMPT 148: Pemantauan Data Berkala',
    prompt: `Sediakan pelan pemantauan perkembangan MBPK secara berkala berasaskan data.`
  },
  {
    category: 'G: PENDIDIKAN KHAS (PPKI)',
    title: 'PROMPT 149: Penglibatan Ibu Bapa',
    prompt: `Rancang penglibatan ibu bapa dalam pelaksanaan and pemantauan RPI MBPK.`
  },
  {
    category: 'G: PENDIDIKAN KHAS (PPKI)',
    title: 'PROMPT 150: Laporan Profesional',
    prompt: `Sediakan laporan perkembangan MBPK yang profesional untuk ibu bapa and pentadbir sekolah.`
  },

  // BAHAGIAN H: PENGURUSAN (151–175)
  {
    category: 'H: PENGURUSAN SEKOLAH (151-175)',
    title: 'PROMPT 151: Kepimpinan Instruksional',
    prompt: `Bina draf pelan tindakan kepimpinan instruksional bagi pemimpin pertengahan untuk meningkatkan kualiti pencerapan guru selaras SKPMg2.`
  },
  {
    category: 'H: PENGURUSAN SEKOLAH (151-175)',
    title: 'PROMPT 152: Analisis PInTas & OPPM',
    prompt: `Rancang satu modul bimbingan PInTas (Pelan Intervensi Transformasi Sekolah) yang mengintegrasikan data headcount and sasaran kualiti sekolah.`
  },
  {
    category: 'H: PENGURUSAN SEKOLAH (151-175)',
    title: 'PROMPT 151-175: Pengurusan Risiko & Budaya',
    prompt: `Gunakan format profesional untuk hala tuju sekolah, PInTas, LADAP, KPI sekolah, pengurusan risiko, budaya and kepimpinan instruksional.`
  },

  // BAHAGIAN I: DIGITAL & AI (176–200)
  {
    category: 'I: DIGITAL & AI (176-200)',
    title: 'PROMPT 176: Literasi AI Beretika',
    prompt: `Bina satu garis panduan penggunaan AI secara beretika bagi murid sekolah rendah. Fokus kepada aspek integriti akademik and perlindungan privasi.`
  },
  {
    category: 'I: DIGITAL & AI (176-200)',
    title: 'PROMPT 177: PBD Digital Interaktif',
    prompt: `Rancang satu ekosistem PBD digital menggunakan alat AI untuk mempercepatkan proses maklum balas kepada murid.`
  },
  {
    category: 'I: DIGITAL & AI (176-200)',
    title: 'PROMPT 176-200: Kesiapsiagaan Sekolah',
    prompt: `Gunakan format profesional untuk literasi digital, AI beretika, PBD digital, inklusiviti MBPK, jurang digital and kesiapsiagaan sekolah.`
  }
];

export const RESOURCES: ResourceItem[] = [
  { name: 'Contoh 200 Prompt Guru', type: 'LINK', description: 'Katalog interaktif 200 prompt profesional untuk PdP, HEM, KOKO, PPKI dan Pengurusan.' },
  { name: 'Template RPH Digital AI', type: 'DOCX', description: 'Format RPH yang dioptimumkan untuk input AI.' },
  { name: 'Set Poster EduGrafik', type: 'PDF', description: 'Contoh poster dan infografik pendidikan hasil AI.' }
];

export const ICON_MAP: Record<string, any> = {
  Brain, BookOpen, Sparkles, FileText, Palette, Layout, ShieldCheck, Download, Terminal, Calculator, PenTool, Users
};
