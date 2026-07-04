/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { SEED_DATA } from "../data/db-seed";
import { Trophy, Award, Calendar, BookOpen, Star, Hash, Sparkles } from "lucide-react";
import { getTranslation, getArabicValue } from "../data/bilingual-translations";

interface HistoricalStoriesProps {
  lang?: "en" | "ar";
}

export default function HistoricalStories({ lang = "en" }: HistoricalStoriesProps) {
  return (
    <div id="historical-stories" className="space-y-8">
      {/* "El Alamy" Premium Dedicated Hero Story Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-500" />
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-800/80">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full text-amber-500 text-[10px] font-mono font-bold uppercase tracking-wider">
              <Sparkles size={11} className="animate-pulse" />
              <span>{getTranslation("historicStoryHighlight", lang)}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-black text-slate-100 tracking-tight">
              {getTranslation("elAlamyTitle", lang)}
            </h2>
            <p className="text-[10px] font-mono uppercase font-bold text-slate-500 tracking-wider">
              {lang === "en" ? "A Cultural Legacy of Egyptian Excellence" : "إرث حضاري يعكس تميز الرياضة المصرية"}
            </p>
          </div>
          <span className="text-5xl font-display font-extrabold text-amber-500/20 tracking-tighter shrink-0 select-none">
            العالمي
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6">
          <div className="md:col-span-8 space-y-4 text-slate-300 text-sm leading-relaxed font-sans">
            <p className="font-medium text-slate-200">
              {getTranslation("elAlamyBody1", lang)}
            </p>
            <p>
              {getTranslation("elAlamyBody2", lang)}
            </p>
            <p>
              {getTranslation("elAlamyBody3", lang)}
            </p>
          </div>

          <div className="md:col-span-4 bg-slate-950/80 border border-slate-850 p-5 rounded-xl space-y-3 shadow-inner">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider font-mono flex items-center gap-1.5">
              <Trophy size={13} />
              <span>{getTranslation("elAlamyImpact", lang)}</span>
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed font-sans">
              {getTranslation("elAlamyImpactText", lang)}
            </p>
            <div className="pt-2 border-t border-slate-900 grid grid-cols-2 gap-2 text-center text-[10px] font-mono text-slate-500">
              <div className="bg-slate-900/60 p-2 rounded border border-slate-850">
                <span className="block text-slate-400 font-bold">1934</span>
                <span>Origins</span>
              </div>
              <div className="bg-slate-900/60 p-2 rounded border border-slate-850">
                <span className="block text-slate-400 font-bold">2018</span>
                <span>Modern Peak</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Editorial Stories Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SEED_DATA.stories.map((story) => (
          <div key={story.id} className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl relative overflow-hidden flex flex-col justify-between">
            {/* Visual Gold Foil Accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600" />
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-amber-500/5 rounded-full blur-xl" />
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-amber-500 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {lang === "en" ? "Historical Chronicle" : "سجل تاريخي"}
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400 font-mono">
                  <Calendar size={13} className="text-amber-500/80" />
                  <span>{story.edition_year} {lang === "en" ? "Edition" : "نسخة"}</span>
                </span>
              </div>

              <h3 className="text-xl font-sans font-bold text-slate-100 tracking-tight">
                {lang === "en" ? story.title : getArabicValue("title", story.title)}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-wrap font-sans">
                {lang === "en" ? story.story : getArabicValue("story", story.story)}
              </p>
            </div>

            <div className="border-t border-slate-850 pt-4 mt-6 flex flex-wrap gap-1.5">
              {story.tags.split(",").map((tag) => (
                <span key={tag} className="text-[10px] font-mono text-slate-400 bg-slate-950 px-2 py-1 rounded border border-slate-850">
                  #{tag.trim()}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Facts and Records Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Achievements Column */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-xl space-y-4">
          <h3 className="font-sans font-bold text-slate-100 text-base flex items-center gap-2 border-b border-slate-800 pb-2">
            <Trophy className="text-amber-500" size={18} />
            <span>{lang === "en" ? "Notable Achievements" : "إنجازات بارزة"}</span>
          </h3>

          <div className="space-y-3.5">
            {SEED_DATA.achievements.map((ach) => (
              <div key={ach.id} className="bg-slate-950 p-4 rounded-lg border border-slate-850 space-y-1.5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-1 font-mono text-[9px] text-slate-600 font-bold border-l border-b border-slate-850 bg-slate-900">
                  {ach.year}
                </div>
                <h4 className="font-sans font-bold text-xs text-amber-400">
                  {lang === "en" ? ach.title : getArabicValue("title", ach.title)}
                </h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {lang === "en" ? ach.description : getArabicValue("description", ach.description)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* World Cup Records Column */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-xl space-y-4">
          <h3 className="font-sans font-bold text-slate-100 text-base flex items-center gap-2 border-b border-slate-800 pb-2">
            <Award className="text-amber-500" size={18} />
            <span>{lang === "en" ? "Official Records" : "الأرقام القياسية الرسمية"}</span>
          </h3>

          <div className="space-y-3.5">
            {SEED_DATA.records.map((rec) => (
              <div key={rec.id} className="bg-slate-950 p-4 rounded-lg border border-slate-850 space-y-2 relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <h4 className="font-sans font-bold text-xs text-slate-200 truncate pr-8">
                    {lang === "en" ? rec.title : getArabicValue("title", rec.title)}
                  </h4>
                  <span className="text-[9px] font-mono text-amber-500 bg-amber-500/10 border border-amber-500/20 px-1 rounded">
                    {rec.edition_year}
                  </span>
                </div>
                
                <p className="text-slate-400 text-xs leading-relaxed">
                  {lang === "en" ? rec.description : getArabicValue("description", rec.description)}
                </p>

                <div className="pt-2 border-t border-slate-900 flex justify-between items-center text-[10px] font-mono">
                  <span className="text-slate-500">{lang === "en" ? "Holder: " : "صاحب الرقم: "}<b className="text-slate-300 font-semibold">{lang === "en" ? rec.holder_name : getArabicValue("holder_name", rec.holder_name)}</b></span>
                  <span className="text-amber-400 font-bold bg-amber-500/5 px-2 py-0.5 rounded border border-amber-500/10">
                    {rec.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Facts Column */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-xl space-y-4">
          <h3 className="font-sans font-bold text-slate-100 text-base flex items-center gap-2 border-b border-slate-800 pb-2">
            <Star className="text-amber-500" size={18} />
            <span>{lang === "en" ? "Trivia & Fun Facts" : "حقائق طريفة ومثيرة"}</span>
          </h3>

          <div className="space-y-3.5">
            {SEED_DATA.facts.map((fact) => (
              <div key={fact.id} className="bg-slate-950 p-4 rounded-lg border border-slate-850 space-y-1.5 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-900 pb-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wide text-slate-500 flex items-center gap-1 font-bold">
                    <Hash size={10} className="text-amber-500" /> {lang === "en" ? fact.category : getArabicValue("category", fact.category)}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 font-semibold">
                    {fact.edition_year}
                  </span>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed italic">
                  "{lang === "en" ? fact.fact_text : getArabicValue("fact_text", fact.fact_text)}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
