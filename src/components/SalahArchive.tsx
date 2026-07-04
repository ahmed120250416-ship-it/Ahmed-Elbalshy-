/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Sparkles, Trophy, Shield, Heart, Landmark, Users, TrendingUp, AlertTriangle, BookOpen, Star } from "lucide-react";

interface SalahArchiveProps {
  lang?: "en" | "ar";
}

export default function SalahArchive({ lang = "en" }: SalahArchiveProps) {
  const [activeSection, setActiveSection] = useState<"biography" | "clubs" | "stats" | "impact">("biography");

  return (
    <div id="salah-archive-root" className="space-y-6">
      {/* Visual Header Panel */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-bl-full pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row items-center gap-6 relative">
          {/* Mock Player Card Avatar */}
          <div className="w-24 h-32 rounded-xl bg-slate-950 border border-amber-500/30 flex flex-col justify-between p-3 text-center shadow-lg relative shrink-0">
            <span className="text-amber-500 font-mono text-[10px] font-bold uppercase tracking-wider block">{lang === "en" ? "Egypt" : "مصر"}</span>
            <div className="my-auto">
              <span className="text-3xl font-display font-extrabold text-slate-100 block tracking-tighter">10</span>
              <span className="text-[10px] font-sans font-bold text-slate-400 block uppercase">{lang === "en" ? "Salah" : "صلاح"}</span>
            </div>
            <div className="flex justify-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-100" />
              <span className="w-1.5 h-1.5 rounded-full bg-black" />
            </div>
          </div>

          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full text-amber-500 text-[10px] font-mono font-bold uppercase tracking-wider">
              <Sparkles size={11} />
              <span>{lang === "en" ? "Dedicated King's Archive" : "أرشيف فخر العرب المخصص"}</span>
            </div>
            <h2 className="font-display font-black text-slate-100 text-2xl md:text-3xl tracking-tight">
              {lang === "en" ? "Mohamed Salah Ghaly" : "محمد صلاح غالي"}
            </h2>
            <p className="text-slate-400 text-xs leading-relaxed max-w-xl">
              {lang === "en" 
                ? "An exhaustive documented directory of the legendary captain who ended Egypt's 28-year World Cup drought and redefined Arab sporting boundaries."
                : "دليل موثق وشامل لعلامة فارقة في تاريخ الرياضة المصرية والعربية، القائد التاريخي الذي أنهى غياب الفراعنة لمدة ٢٨ عاماً عن نهائيات كأس العالم."}
            </p>
          </div>
        </div>

        {/* Sections Selection Bar */}
        <div className="flex flex-wrap gap-1.5 mt-6 border-t border-slate-850 pt-4">
          {[
            { id: "biography", label: lang === "en" ? "Early Life & Beginnings" : "النشأة والبدايات الرياضية", icon: BookOpen },
            { id: "clubs", label: lang === "en" ? "Club-by-Club Career" : "مسيرته مع الأندية الأوروبية", icon: Shield },
            { id: "stats", label: lang === "en" ? "Statistics & Records" : "الإحصائيات والأرقام القياسية", icon: TrendingUp },
            { id: "impact", label: lang === "en" ? "Public Image & Charity" : "الدور الاجتماعي والخيري", icon: Heart }
          ].map((sec) => (
            <button
              key={sec.id}
              onClick={() => setActiveSection(sec.id as any)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-sans transition ${
                activeSection === sec.id
                  ? "bg-amber-500 text-slate-950 font-bold shadow"
                  : "bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-850"
              }`}
            >
              <sec.icon size={13} />
              <span>{sec.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Structured Content Panel */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl">
        {activeSection === "biography" && (
          <div className="space-y-6">
            <h3 className="font-display font-bold text-slate-100 text-base border-b border-slate-800 pb-2">
              Early Life, Childhood, and Education
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="block font-bold text-slate-400 font-mono text-[10px] uppercase">Birth & Early Childhood</span>
                  <p className="text-slate-300 leading-relaxed">
                    Mohamed Salah was born on June 15, 1992, in the small rural village of Nagrig, near the town of Basyoun in the Gharbia Governorate of Egypt. Growing up in a lower-middle-class family, he fell in love with football at an early age, playing with rolled-up socks and paper balls on the narrow streets of his village.
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="block font-bold text-slate-400 font-mono text-[10px] uppercase">Education & Academic Background</span>
                  <p className="text-slate-300 leading-relaxed">
                    Salah attended local government schools in Basyoun. His academic focus was secondary as his passion for football grew, eventually enrolling in a technical institute in El Mokawloon (Arab Contractors) system to allow him to align his travel schedule with intensive training.
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="block font-bold text-slate-400 font-mono text-[10px] uppercase">Family Background (Public Only)</span>
                  <p className="text-slate-300 leading-relaxed">
                    Salah is married to Magi Sadeq, a childhood schoolmate from his home village. They married in 2013 and have two daughters, Makka (born 2014) and Kayan (born 2020). Salah's family remains deeply connected to their rural roots, maintaining a low-profile and quiet lifestyle.
                  </p>
                </div>
              </div>

              <div className="space-y-4 bg-slate-950 p-4 rounded-xl border border-slate-850">
                <h4 className="font-display font-bold text-amber-500 text-xs flex items-center gap-1.5 uppercase">
                  <Trophy size={13} />
                  <span>Football Beginnings</span>
                </h4>
                
                <div className="space-y-3 leading-relaxed">
                  <div className="space-y-0.5">
                    <span className="font-bold text-slate-200 block">El Mokawloon (Arab Contractors) • 2006–2012</span>
                    <p className="text-slate-400">
                      Discovered by scouts while playing for a local youth club, Salah signed for El Mokawloon in Cairo at age 14. He famously commuted 4-5 hours each way from Nagrig to Cairo, changing up to 5 buses daily, 5 days a week for years. This legendary commute forged his legendary work ethic. He made his Egyptian Premier League debut in May 2010.
                    </p>
                  </div>

                  <div className="space-y-0.5">
                    <span className="font-bold text-slate-200 block">The Disaster Catalyst • 2012</span>
                    <p className="text-slate-400">
                      Following the tragic Port Said Stadium disaster in 2012, the Egyptian Premier League was indefinitely suspended. This forced the national youth teams to play friendly matches in Europe, leading to FC Basel spotting Salah in a match and signing him directly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === "clubs" && (
          <div className="space-y-6">
            <h3 className="font-display font-bold text-slate-100 text-base border-b border-slate-800 pb-2">
              Documented Club-by-Club Career Timeline
            </h3>

            <div className="relative border-l border-slate-800 pl-4.5 space-y-6 text-xs">
              {/* Basel */}
              <div className="relative">
                <div className="absolute -left-7 top-1.5 w-2 h-2 rounded-full bg-amber-500 ring-4 ring-slate-900" />
                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-amber-500 font-bold uppercase">FC Basel (Switzerland) • 2012–2014</span>
                  <h4 className="font-display font-bold text-slate-200 text-sm">European Launchpad</h4>
                  <p className="text-slate-400 leading-relaxed">
                    Salah won the Swiss Super League in his debut season and received the SAFP Golden Player award. He caught global attention during the UEFA Champions League, scoring in both home and away matches against Chelsea.
                  </p>
                </div>
              </div>

              {/* Chelsea */}
              <div className="relative">
                <div className="absolute -left-7 top-1.5 w-2 h-2 rounded-full bg-slate-500 ring-4 ring-slate-900" />
                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-slate-500 font-bold uppercase">Chelsea FC (England) • 2014–2015</span>
                  <h4 className="font-display font-bold text-slate-200 text-sm">Struggles in London</h4>
                  <p className="text-slate-400 leading-relaxed">
                    Signed by José Mourinho for £11 million, Salah struggled for regular game-time in a defensively structured squad, making only 13 league appearances before being loaned out.
                  </p>
                </div>
              </div>

              {/* Fiorentina & Roma */}
              <div className="relative">
                <div className="absolute -left-7 top-1.5 w-2 h-2 rounded-full bg-amber-500 ring-4 ring-slate-900" />
                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-amber-500 font-bold uppercase">Fiorentina & AS Roma (Italy) • 2015–2017</span>
                  <h4 className="font-display font-bold text-slate-200 text-sm">Italian Renaissance</h4>
                  <p className="text-slate-400 leading-relaxed">
                    A brief, spectacular loan to Fiorentina restored his confidence. AS Roma subsequently purchased him, where under manager Luciano Spalletti, Salah developed into a world-class inside-forward, finishing as Roma's top scorer with 15 league goals.
                  </p>
                </div>
              </div>

              {/* Liverpool */}
              <div className="relative">
                <div className="absolute -left-7 top-1.5 w-2 h-2 rounded-full bg-red-500 ring-4 ring-slate-900" />
                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-red-500 font-bold uppercase">Liverpool FC (England) • 2017–Present</span>
                  <h4 className="font-display font-bold text-slate-200 text-sm">Global Superstar & Premier League Legend</h4>
                  <p className="text-slate-400 leading-relaxed">
                    Signed for a club-record fee by Jürgen Klopp, Salah set the Premier League record with 32 goals in a 38-game season in his debut year. He became a vital pillar of the legendary Liverpool squad that won the UEFA Champions League (2019), FIFA Club World Cup (2019), and Liverpool's first Premier League title in 30 years (2020).
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === "stats" && (
          <div className="space-y-6">
            <h3 className="font-display font-bold text-slate-100 text-base border-b border-slate-800 pb-2">
              Career Statistics, Records, and Ballon d'Or
            </h3>

            {/* Quick stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
              <div className="bg-slate-950 p-4.5 rounded-xl border border-slate-850">
                <span className="block text-[10px] text-slate-500 uppercase">National Caps</span>
                <span className="text-xl font-bold text-slate-200">100</span>
              </div>
              <div className="bg-slate-950 p-4.5 rounded-xl border border-slate-850">
                <span className="block text-[10px] text-slate-500 uppercase">National Goals</span>
                <span className="text-xl font-bold text-emerald-400">56</span>
              </div>
              <div className="bg-slate-950 p-4.5 rounded-xl border border-slate-850">
                <span className="block text-[10px] text-slate-500 uppercase">Champions League Goals</span>
                <span className="text-xl font-bold text-slate-200">48</span>
              </div>
              <div className="bg-slate-950 p-4.5 rounded-xl border border-slate-850">
                <span className="block text-[10px] text-slate-500 uppercase">Premier League Goals</span>
                <span className="text-xl font-bold text-amber-500">150+</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs leading-relaxed">
              <div className="space-y-4">
                <h4 className="font-display font-bold text-slate-200 uppercase tracking-wider font-mono text-xs">Ballon d'Or Rankings</h4>
                <div className="bg-slate-950 border border-slate-850 p-4 rounded-xl space-y-2">
                  <div className="flex justify-between border-b border-slate-900 pb-1.5">
                    <span>2018 Ballot</span>
                    <span className="font-bold text-amber-500">6th Place</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-900 pb-1.5">
                    <span>2019 Ballot</span>
                    <span className="font-bold text-amber-500">5th Place</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-900 pb-1.5">
                    <span>2021 Ballot</span>
                    <span className="font-bold text-amber-500">7th Place</span>
                  </div>
                  <div className="flex justify-between">
                    <span>2022 Ballot</span>
                    <span className="font-bold text-amber-500">5th Place</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="block font-bold text-slate-400 font-mono text-[10px] uppercase">Agent Details</span>
                  <p className="text-slate-300">
                    Salah is represented by Colombian lawyer and agent **Ramy Abbas Issa**, who handles his contract negotiations with Liverpool FC, endorsement deals, and public relations.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-display font-bold text-slate-200 uppercase tracking-wider font-mono text-xs">Playing Style & Teammates</h4>
                <div className="space-y-2 text-slate-300">
                  <p>
                    **Playing Style**: An elite inside-forward specializing in cutting inside onto his preferred left foot from the right flank. Renowned for world-class acceleration, clinical one-touch finishing, tactical work rate, and playmaking vision in tight spaces.
                  </p>
                  <p>
                    **Key Managers**: Bob Bradley (gave him national trust), Luciano Spalletti (tactical refinement), Jürgen Klopp (transformed him into a global superstar).
                  </p>
                  <p>
                    **Famous Teammates**: Roberto Firmino, Sadio Mané, Virgil van Dijk, Alisson Becker, Steven Gerrard, Francesco Totti, Eden Hazard, Mohamed Elneny, Essam El-Hadary.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === "impact" && (
          <div className="space-y-6">
            <h3 className="font-display font-bold text-slate-100 text-base border-b border-slate-800 pb-2">
              Public Image, Charity Work, and National Impact
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs leading-relaxed">
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="block font-bold text-slate-400 font-mono text-[10px] uppercase">Charity Work in Nagrig & Egypt</span>
                  <p className="text-slate-300">
                    Salah has funded major developmental projects in his home village of Nagrig. He built a modern school, a sewage treatment plant, a specialized medical center, and an ambulance station. He also funds regular financial pensions for hundreds of local families through the Mohamed Salah Charity Foundation.
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="block font-bold text-slate-400 font-mono text-[10px] uppercase">Relationship with Egyptian Fans</span>
                  <p className="text-slate-300">
                    In Egypt, Salah is referred to as 'The Happiness Maker' (صانع السعادة). He is regarded as a national symbol of hope, demonstrating that dedication and talent can lead to global greatness from the humblest beginnings.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="block font-bold text-slate-400 font-mono text-[10px] uppercase">Public Image & Sponsorships</span>
                  <p className="text-slate-300">
                    Salah maintains a clean, humble, and professional public image. He has starred in prominent global advertising campaigns for brands such as Adidas, Pepsi, Vodafone Egypt, and DHL Express.
                  </p>
                </div>

                <div className="p-4 bg-slate-950 border border-slate-850 rounded-xl space-y-2">
                  <span className="text-[10px] font-mono text-amber-500 uppercase font-bold flex items-center gap-1">
                    <AlertTriangle size={12} /> Undocumented Information
                  </span>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    Personal political views, exact private wealth, specific bank accounts, or non-public family affairs are **Not publicly documented**.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
