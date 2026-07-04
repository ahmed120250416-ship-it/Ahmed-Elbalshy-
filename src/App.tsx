/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import SchemaViewer from "./components/SchemaViewer";
import DataBrowser from "./components/DataBrowser";
import SqlPlayground from "./components/SqlPlayground";
import DartGenerator from "./components/DartGenerator";
import DownloadCenter from "./components/DownloadCenter";
import HistoricalStories from "./components/HistoricalStories";
import Encyclopedia from "./components/Encyclopedia";
import SalahArchive from "./components/SalahArchive";
import { getTranslation } from "./data/bilingual-translations";
import { 
  Database, 
  Terminal, 
  Code2, 
  Download, 
  BookOpen, 
  Layers, 
  Trophy, 
  ShieldAlert,
  Server,
  Sparkles,
  UserCheck,
  Languages
} from "lucide-react";

type TabType = "encyclopedia" | "salah" | "schema" | "browser" | "playground" | "chronicles" | "flutter" | "download";

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>("encyclopedia");
  const [lang, setLang] = useState<"en" | "ar">("en");

  const tabItems = [
    { id: "encyclopedia" as TabType, label: lang === "en" ? "Egypt Encyclopedia" : "موسوعة مصر", icon: Trophy, description: "Detailed profiles, matches & failed chronicles" },
    { id: "salah" as TabType, label: lang === "en" ? "Mohamed Salah" : "أرشيف محمد صلاح", icon: Sparkles, description: "Dedicated King's Archive & fully documented statistics" },
    { id: "schema" as TabType, label: lang === "en" ? "Visual Schema Map" : "مخطط قاعدة البيانات", icon: Layers, description: "Normalized tables, FK maps, indices" },
    { id: "browser" as TabType, label: lang === "en" ? "Data Browser" : "مستعرض البيانات", icon: Database, description: "Explore 27 populated SQLite tables" },
    { id: "playground" as TabType, label: lang === "en" ? "SQL Playground" : "مختبر الاستعلامات", icon: Terminal, description: "Run live SQL queries in WASM" },
    { id: "chronicles" as TabType, label: lang === "en" ? "Historical Chronicles" : "القصص والبطولات", icon: BookOpen, description: "Stories, fun facts, and achievements" },
    { id: "flutter" as TabType, label: lang === "en" ? "Flutter Integration" : "تكامل Flutter", icon: Code2, description: "Sqflite helpers and Dart models" },
    { id: "download" as TabType, label: lang === "en" ? "Download Center" : "مركز التحميل", icon: Download, description: "Export raw .db binary or .sql" }
  ];

  return (
    <div className={`min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-500/30 selection:text-amber-100 font-sans antialiased relative overflow-hidden stadium-grid ${lang === "ar" ? "rtl" : "ltr"}`} dir={lang === "ar" ? "rtl" : "ltr"}>
      {/* Dynamic Glowing Stadium Lights Backdrop */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 opacity-2 pointer-events-none stadium-grass" />

      {/* Decorative Top Gold Foil Line */}
      <div className="h-1.5 bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-600 w-full relative z-10" />

      {/* Hero Banner Header */}
      <header className="bg-slate-900/40 border-b border-slate-850 px-6 py-8 relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 flex-1">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-[10px] tracking-widest font-mono font-bold text-amber-500 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full uppercase">
                {lang === "en" ? "Production-Ready SQLite Database Layer" : "طبقة قاعدة بيانات SQLite جاهزة للإنتاج"}
              </span>
              <span className="flex items-center gap-1 text-[10px] text-slate-400 font-mono bg-slate-800/40 px-2 py-1 rounded border border-slate-700">
                <Server size={10} className="text-amber-500" /> {lang === "en" ? "Offline 100%" : "غير متصل بالإنترنت ١٠٠٪"}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-sans font-black tracking-tight text-slate-100">
              {lang === "en" ? "Egypt World Cup " : "موسوعة مصر في "}<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">{lang === "en" ? "Encyclopedia DB" : "كأس العالم"}</span>
            </h1>
            
            <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
              {lang === "en" 
                ? "Architectural workspace holding the complete SQLite relational database layer for the Egypt World Cup Encyclopedia Flutter application. Fully normalized with indexes, foreign keys, and preloaded with real historical milestones (1934, 1990, 2018)."
                : "بيئة عمل معمارية تحتفظ بنظام قاعدة بيانات SQLite المتكامل لموسوعة الفراعنة في كأس العالم لتطبيق Flutter. تصميم معياري بالكامل يحتوي على المفاتيح الخارجية، الفهارس، ومحمل مسبقاً ببيانات المشاركات التاريخية الحقيقية (١٩٣٤، ١٩٩٠، ٢٠١٨)."}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            {/* Language Switcher */}
            <button 
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="flex items-center gap-2 px-4 py-2.5 bg-amber-500 text-slate-950 hover:bg-amber-400 rounded-xl text-xs font-bold font-sans transition-all duration-150 shadow-md shadow-amber-500/10"
            >
              <Languages size={14} />
              <span>{lang === "en" ? "العربية" : "English"}</span>
            </button>

            {/* Key Database Counters */}
            <div className="grid grid-cols-3 gap-4 w-64 sm:w-72 bg-slate-950/80 p-4 rounded-xl border border-slate-850 shadow-inner">
              <div className="text-center">
                <span className="block text-xl font-mono font-extrabold text-amber-400">27</span>
                <span className="text-[10px] font-mono uppercase text-slate-500 font-bold">{lang === "en" ? "Tables" : "جداول"}</span>
              </div>
              <div className="text-center border-x border-slate-850">
                <span className="block text-xl font-mono font-extrabold text-amber-400">15</span>
                <span className="text-[10px] font-mono uppercase text-slate-500 font-bold">{lang === "en" ? "Legends" : "أساطير"}</span>
              </div>
              <div className="text-center">
                <span className="block text-xl font-mono font-extrabold text-amber-400">100%</span>
                <span className="text-[10px] font-mono uppercase text-slate-500 font-bold">{lang === "en" ? "Real" : "حقيقي"}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Workspace Workspace */}
      <main className="flex-grow max-w-7xl w-full mx-auto p-4 md:p-6 space-y-6 relative z-10">
        {/* Navigation Tabs bar */}
        <div className="overflow-x-auto pb-1 scrollbar-none">
          <div className="flex p-1.5 bg-slate-900/60 border border-slate-850 rounded-xl gap-1 min-w-[1000px]">
            {tabItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-xs font-semibold transition-all duration-150 ${
                    isActive
                      ? "bg-amber-500 text-slate-950 shadow-lg font-bold"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-850/50"
                  }`}
                >
                  <Icon size={14} className={isActive ? "text-slate-950" : "text-amber-500/80"} />
                  <div className="text-left">
                    <span className="block leading-tight">{item.label}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Workspace Workspace */}
        <div className="relative">
          {activeTab === "encyclopedia" && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Encyclopedia lang={lang} />
            </motion.div>
          )}

          {activeTab === "salah" && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <SalahArchive lang={lang} />
            </motion.div>
          )}

          {activeTab === "schema" && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <SchemaViewer />
            </motion.div>
          )}

          {activeTab === "browser" && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <DataBrowser />
            </motion.div>
          )}

          {activeTab === "playground" && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <SqlPlayground />
            </motion.div>
          )}

          {activeTab === "chronicles" && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <HistoricalStories lang={lang} />
            </motion.div>
          )}

          {activeTab === "flutter" && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <DartGenerator />
            </motion.div>
          )}

          {activeTab === "download" && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <DownloadCenter />
            </motion.div>
          )}
        </div>
      </main>

      {/* Production Warning Footer */}
      <footer className="bg-slate-950/85 border-t border-slate-900 px-6 py-6 text-center space-y-2 relative z-10">
        <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 font-mono">
          <ShieldAlert size={12} className="text-amber-500/60" />
          <span>CONFIDENTIAL DATABASE PROFILE - EGYPT WORLD CUP ENCYCLOPEDIA FLUTTER PROJECT</span>
        </div>
        <p className="text-[11px] text-slate-600 font-sans max-w-lg mx-auto">
          All data elements are certified to represent verified historical records. This database is structured specifically for SQLite compliance and the Sqflite framework package on Android, iOS, and macOS runtimes.
        </p>
      </footer>
    </div>
  );
}
