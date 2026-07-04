/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from "react";
import { SEED_DATA } from "../data/db-seed";
import { 
  Trophy, User, Calendar, FileText, Search, Star, Sparkles, BookOpen, 
  ChevronRight, ArrowRight, Eye, RefreshCw, Landmark, X, ShieldAlert, AlertCircle 
} from "lucide-react";
import { getTranslation, getArabicValue } from "../data/bilingual-translations";

interface EncyclopediaProps {
  onSelectPlayer?: (playerId: number) => void;
  onSelectMatch?: (matchId: number) => void;
  lang?: "en" | "ar";
}

export default function Encyclopedia({ onSelectPlayer, onSelectMatch, lang = "en" }: EncyclopediaProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeSubTab, setActiveSubTab] = useState<"players" | "matches" | "referees" | "campaigns" | "memes" | "bookmarks">("players");
  
  // Bookmarks state (persisted to localStorage)
  const [bookmarks, setBookmarks] = useState<{type: string, id: number, label: string}[]>(() => {
    const saved = localStorage.getItem("egypt_world_cup_bookmarks");
    return saved ? JSON.parse(saved) : [];
  });

  const [selectedPlayerId, setSelectedPlayerId] = useState<number | null>(null);
  const [selectedMatchId, setSelectedMatchId] = useState<number | null>(null);
  const [selectedRefereeId, setSelectedRefereeId] = useState<number | null>(null);

  const toggleBookmark = (type: "player" | "match" | "referee" | "edition" | "story" | "campaign", id: number, label: string) => {
    setBookmarks(prev => {
      const exists = prev.some(b => b.type === type && b.id === id);
      let updated;
      if (exists) {
        updated = prev.filter(b => !(b.type === type && b.id === id));
      } else {
        updated = [...prev, { type, id, label }];
      }
      localStorage.setItem("egypt_world_cup_bookmarks", JSON.stringify(updated));
      return updated;
    });
  };

  const isBookmarked = (type: string, id: number) => {
    return bookmarks.some(b => b.type === type && b.id === id);
  };

  // 1. Players Search & Filtering
  const filteredPlayers = useMemo(() => {
    if (!searchQuery) return SEED_DATA.players;
    const q = searchQuery.toLowerCase();
    return SEED_DATA.players.filter(p => 
      p.full_name.toLowerCase().includes(q) || 
      p.arabic_name.includes(q) || 
      p.position.toLowerCase().includes(q) || 
      (p.club_career_summary && p.club_career_summary.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  // 2. Matches Search & Filtering
  const filteredMatches = useMemo(() => {
    if (!searchQuery) return SEED_DATA.matches;
    const q = searchQuery.toLowerCase();
    return SEED_DATA.matches.filter(m => 
      m.opponent.toLowerCase().includes(q) || 
      m.stage.toLowerCase().includes(q) || 
      m.egypt_formation.toLowerCase().includes(q) ||
      m.match_status.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // 3. Referees Search & Filtering
  const filteredReferees = useMemo(() => {
    const egyptians = SEED_DATA.referees.filter(r => r.nationality === "Egypt");
    if (!searchQuery) return egyptians;
    const q = searchQuery.toLowerCase();
    return egyptians.filter(r => 
      r.name.toLowerCase().includes(q) || 
      (r.arabic_name && r.arabic_name.toLowerCase().includes(q)) ||
      (r.world_cups && r.world_cups.toLowerCase().includes(q)) ||
      (r.matches_officiated && r.matches_officiated.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  // Selected player detail
  const selectedPlayer = useMemo(() => {
    if (selectedPlayerId === null) return null;
    return SEED_DATA.players.find(p => p.id === selectedPlayerId) || null;
  }, [selectedPlayerId]);

  // Selected match detail
  const selectedMatch = useMemo(() => {
    if (selectedMatchId === null) return null;
    return SEED_DATA.matches.find(m => m.id === selectedMatchId) || null;
  }, [selectedMatchId]);

  // Selected referee detail
  const selectedReferee = useMemo(() => {
    if (selectedRefereeId === null) return null;
    return SEED_DATA.referees.find(r => r.id === selectedRefereeId) || null;
  }, [selectedRefereeId]);

  return (
    <div id="encyclopedia-root" className="space-y-6">
      {/* Dynamic LED Electronic Advertising Board */}
      <div className="relative w-full h-11 bg-emerald-950 border-t-2 border-b-2 border-emerald-400 overflow-hidden shadow-inner flex items-center select-none stadium-grass">
        {/* Pitch physical line accents */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-white opacity-20" />
        <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-white opacity-20" />
        
        {/* Glowing Marquee LED scrolling ticker */}
        <div className="w-full relative flex items-center overflow-hidden">
          <div className="animate-led text-[10px] font-mono tracking-widest uppercase font-bold text-amber-400 drop-shadow-[0_0_4px_rgba(245,158,11,0.5)] flex items-center gap-24 py-1">
            <span>⚽ EL PITCH W EL BENCH W EL BALSH ⚽ THE DEFINITIVE OFFLINE EGYPT WORLD CUP ARCHIVE</span>
            <span>⚽ 1934 NAPLES • 1990 PALERMO • 2018 RUSSIA ⚽ COMPLETE ROSTERS AND HISTORICAL RECORDS</span>
            <span>⚽ EL PITCH W EL BENCH W EL BALSH ⚽ DESIGNED AND DEPLOYED FOR FLUTTER PRODUCTION INTEGRATION</span>
            <span>⚽ 27 POPULATED TABLES WITH 0% PLACEHOLDER DATA ⚽ STAR BOOKMARKS TO PERSIST OFFLINE</span>
          </div>
        </div>
      </div>

      {/* Encyclopedia Main Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-bl-full pointer-events-none" />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="font-display font-bold text-slate-100 text-2xl flex items-center gap-2.5">
              <Trophy className="text-amber-500" size={24} />
              <span>Egypt & The World Cup Historical Encyclopedia</span>
            </h2>
            <p className="text-slate-400 text-xs mt-1 font-sans">
              A comprehensive documented archive of players, matches, failed campaigns, tactics, and legendary moments. Fully offline-ready.
            </p>
          </div>

          {/* Search bar everything in the database */}
          <div className="relative max-w-sm w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-500">
              <Search size={16} />
            </span>
            <input
              type="text"
              placeholder={getTranslation("searchPlaceholder", lang)}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-950 text-slate-200 text-xs border border-slate-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 placeholder:text-slate-600 transition"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-200"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Sub-navigation tabs */}
        <div className="flex flex-wrap gap-1.5 mt-6 border-t border-slate-850 pt-4">
          {[
            { id: "players", label: lang === "en" ? "Egyptian Players" : "اللاعبون المصريون", icon: User },
            { id: "matches", label: lang === "en" ? "Final Matches" : "مباريات النهائيات", icon: Calendar },
            { id: "referees", label: lang === "en" ? "Egyptian Referees" : "الحكام المصريون", icon: FileText },
            { id: "campaigns", label: lang === "en" ? "Failed Campaigns" : "التصفيات غير الموفقة", icon: Landmark },
            { id: "memes", label: lang === "en" ? "Documentary Chapters" : "فصول توثيقية", icon: BookOpen },
            { id: "bookmarks", label: lang === "en" ? `My Bookmarks (${bookmarks.length})` : `إشاراتي المرجعية (${bookmarks.length})`, icon: Star, color: "text-amber-400" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveSubTab(tab.id as any);
                setSelectedPlayerId(null);
                setSelectedMatchId(null);
                setSelectedRefereeId(null);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-sans transition ${
                activeSubTab === tab.id
                  ? "bg-amber-500 text-slate-950 font-bold shadow"
                  : "bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-850"
              }`}
            >
              <tab.icon size={13} className={tab.color} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Pane */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left column: List of Items */}
        <div className={`col-span-12 ${selectedPlayerId || selectedMatchId ? "lg:col-span-5" : "lg:col-span-12"} space-y-4`}>
          
          {/* Active sub-tab content */}
          {activeSubTab === "players" && (
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-xl">
              <h3 className="font-display font-medium text-slate-200 text-sm mb-4 flex items-center justify-between">
                <span>Egypt World Cup Squad Directory ({filteredPlayers.length})</span>
                <span className="text-[10px] text-slate-500 font-mono">Normalized sqlite profiles</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3">
                {filteredPlayers.map(p => (
                  <div 
                    key={p.id}
                    className={`p-4 rounded-xl border transition flex items-center justify-between ${
                      selectedPlayerId === p.id 
                        ? "bg-amber-500/10 border-amber-500/30" 
                        : "bg-slate-950 border-slate-850 hover:bg-slate-900"
                    }`}
                  >
                    <div className="space-y-1.5 cursor-pointer flex-1" onClick={() => setSelectedPlayerId(p.id)}>
                      <div className="flex items-center gap-2">
                        <span className="font-display font-bold text-slate-200 text-sm">{p.full_name}</span>
                        <span className="font-sans text-xs text-amber-500 font-bold">{p.arabic_name}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 text-[10px] text-slate-400 font-mono">
                        <span className="px-1.5 py-0.5 bg-slate-900 rounded border border-slate-800">{p.position}</span>
                        <span>Caps: {p.world_cup_appearances}</span>
                        <span>Goals: {p.goals}</span>
                        <span>Club: {p.club_career_summary?.split(",")[0] || "Not documented"}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => toggleBookmark("player", p.id, p.full_name)}
                        className="p-1.5 hover:bg-slate-800 rounded text-slate-500 hover:text-amber-400 transition"
                      >
                        <Star size={14} className={isBookmarked("player", p.id) ? "fill-amber-400 text-amber-400" : ""} />
                      </button>
                      <button 
                        onClick={() => setSelectedPlayerId(p.id)}
                        className="p-1.5 bg-slate-900 border border-slate-800 hover:bg-slate-800 rounded text-slate-300 transition"
                      >
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                ))}

                {filteredPlayers.length === 0 && (
                  <p className="text-slate-500 text-xs text-center py-8 font-mono">No players match your search queries.</p>
                )}
              </div>
            </div>
          )}

          {activeSubTab === "matches" && (
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-xl">
              <h3 className="font-display font-medium text-slate-200 text-sm mb-4">
                Egypt World Cup Finals Match History
              </h3>

              <div className="space-y-3">
                {filteredMatches.map(m => {
                  const edition = SEED_DATA.editions.find(e => e.id === m.edition_id);
                  const resultColor = 
                    m.match_status === "Win" ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" :
                    m.match_status === "Draw" ? "text-amber-400 bg-amber-500/10 border-amber-500/20" :
                    "text-rose-400 bg-rose-500/10 border-rose-500/20";

                  return (
                    <div 
                      key={m.id}
                      className={`p-4 rounded-xl border transition flex items-center justify-between ${
                        selectedMatchId === m.id 
                          ? "bg-amber-500/10 border-amber-500/30" 
                          : "bg-slate-950 border-slate-850 hover:bg-slate-900"
                      }`}
                    >
                      <div className="space-y-1.5 cursor-pointer flex-1" onClick={() => setSelectedMatchId(m.id)}>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] text-amber-500 font-bold uppercase">{edition?.year} {edition?.host}</span>
                          <span className="text-[10px] text-slate-500 font-sans">• {m.stage}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1.5">
                            <span className="font-display font-bold text-slate-200 text-sm">Egypt</span>
                            <span className="text-slate-400 font-bold text-sm font-mono">{m.egypt_score} - {m.opponent_score}</span>
                            <span className="font-display font-bold text-slate-200 text-sm">{m.opponent}</span>
                          </div>
                        </div>
                        <p className="text-[10px] text-slate-500 font-mono">
                          Formation: {m.egypt_formation} • Attendance: {m.attendance?.toLocaleString()}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className={`text-[9px] font-mono px-2 py-0.5 rounded border uppercase font-bold ${resultColor}`}>
                          {m.match_status}
                        </span>
                        <button 
                          onClick={() => toggleBookmark("match", m.id, `Egypt vs ${m.opponent} (${edition?.year})`)}
                          className="p-1.5 hover:bg-slate-800 rounded text-slate-500 hover:text-amber-400 transition"
                        >
                          <Star size={14} className={isBookmarked("match", m.id) ? "fill-amber-400 text-amber-400" : ""} />
                        </button>
                        <button 
                          onClick={() => setSelectedMatchId(m.id)}
                          className="p-1.5 bg-slate-900 border border-slate-800 hover:bg-slate-800 rounded text-slate-300 transition"
                        >
                          <ChevronRight size={14} />
                        </button>
                      </div>
                    </div>
                  );
                })}

                {filteredMatches.length === 0 && (
                  <p className="text-slate-500 text-xs text-center py-8 font-mono">No finals matches found.</p>
                )}
              </div>
            </div>
          )}

          {activeSubTab === "referees" && (
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-xl">
              <h3 className="font-display font-medium text-slate-200 text-sm mb-4 flex items-center justify-between">
                <span>Egyptian Referees in World Cup ({filteredReferees.length})</span>
                <span className="text-[10px] text-slate-500 font-mono">FIFA Badge Heritage</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3">
                {filteredReferees.map(r => (
                  <div 
                    key={r.id}
                    className={`p-4 rounded-xl border transition flex items-center justify-between ${
                      selectedRefereeId === r.id 
                        ? "bg-amber-500/10 border-amber-500/30" 
                        : "bg-slate-950 border-slate-850 hover:bg-slate-900"
                    }`}
                  >
                    <div className="space-y-1.5 cursor-pointer flex-1" onClick={() => { setSelectedRefereeId(r.id); setSelectedPlayerId(null); setSelectedMatchId(null); }}>
                      <div className="flex items-center gap-2">
                        <span className="font-display font-bold text-slate-200 text-sm">{r.name}</span>
                        <span className="font-sans text-xs text-amber-500 font-bold">{r.arabic_name}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 text-[10px] text-slate-400 font-mono">
                        <span className="px-1.5 py-0.5 bg-slate-900 rounded border border-slate-800">{r.role}</span>
                        <span>World Cups: {r.world_cups}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => toggleBookmark("referee" as any, r.id, r.name)}
                        className="p-1.5 hover:bg-slate-800 rounded text-slate-500 hover:text-amber-400 transition"
                      >
                        <Star size={14} className={isBookmarked("referee", r.id) ? "fill-amber-400 text-amber-400" : ""} />
                      </button>
                      <button 
                        onClick={() => { setSelectedRefereeId(r.id); setSelectedPlayerId(null); setSelectedMatchId(null); }}
                        className="p-1.5 bg-slate-900 border border-slate-800 hover:bg-slate-800 rounded text-slate-300 transition"
                      >
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                ))}

                {filteredReferees.length === 0 && (
                  <p className="text-slate-500 text-xs text-center py-8 font-mono">No referees match your search queries.</p>
                )}
              </div>
            </div>
          )}

          {activeSubTab === "campaigns" && (
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-xl space-y-6">
              <div>
                <h3 className="font-display font-bold text-slate-100 text-sm mb-1 flex items-center gap-2">
                  <Landmark className="text-amber-500" size={16} />
                  <span>Failed World Cup Qualification Chronicles</span>
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Egypt holds a dominant African record in local continental cups, yet their qualifying campaigns for World Cups were historically filled with dramatic, heartbreaking narrow exits.
                </p>
              </div>

              {/* Documentary breakdown */}
              <div className="space-y-4">
                {/* 2010 Campaign */}
                <div className="bg-slate-950 border border-slate-850 p-4.5 rounded-xl space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold font-mono text-rose-500 uppercase">Heartbreak: 2010 Campaign</span>
                    <span className="text-[10px] bg-rose-500/10 text-rose-400 px-2 py-0.5 rounded border border-rose-500/20 font-mono">Omdurman Tragedy</span>
                  </div>
                  <h4 className="font-display font-bold text-slate-200 text-sm">Egypt vs Algeria Playoff (2009)</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Egypt and Algeria were tied exactly on points, goal difference, and goals scored in the final round of qualifiers. In a fiery home leg in Cairo on November 14, 2009, Emad Moteab scored a legendary header in the 95th minute to win 2-0, forcing a neutral play-off in Omdurman, Sudan four days later. Egypt succumbed 1-0 in Sudan, sparking deep public despair, diplomatic tensions, and heavy media debates on national team pressure.
                  </p>
                  <div className="bg-slate-900/50 p-2.5 rounded border border-slate-800 text-[10px] text-slate-400 font-mono">
                    <span className="text-amber-500 font-bold block mb-0.5">Why Egypt Failed:</span>
                    Extreme mental fatigue, injuries to key playmakers, and tactical rigidity against Algeria's intense physical marking in Sudan.
                  </div>
                </div>

                {/* 1994 Campaign */}
                <div className="bg-slate-950 border border-slate-850 p-4.5 rounded-xl space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold font-mono text-rose-500 uppercase">Heartbreak: 1994 Campaign</span>
                    <span className="text-[10px] bg-rose-500/10 text-rose-400 px-2 py-0.5 rounded border border-rose-500/20 font-mono">The Stone Match</span>
                  </div>
                  <h4 className="font-display font-bold text-slate-200 text-sm">The Zimbabwe Replay in Lyon (1993)</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Egypt beat Zimbabwe 2-1 in Cairo before a raucous crowd. However, a stone thrown from the stands struck the Zimbabwe coach. FIFA ordered a replay on neutral turf in Lyon, France. The replay ended 0-0, sending Zimbabwe through and eliminating Egypt's legendary 1990 team.
                  </p>
                </div>

                {/* 2014 & 2022 Campaigns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-950 border border-slate-850 p-4 rounded-xl space-y-2">
                    <span className="text-[10px] font-bold font-mono text-slate-500 uppercase">2014 Playoff</span>
                    <h5 className="font-display font-bold text-slate-200 text-xs">The Kumasi Disaster (6-1)</h5>
                    <p className="text-slate-400 text-[11px] leading-relaxed">
                      Under Bob Bradley, Egypt won 6 out of 6 group games. In the final playoff, a shocking 6-1 first-leg loss to Ghana in Kumasi ended dreams instantly, despite a 2-1 home victory in Cairo.
                    </p>
                  </div>
                  <div className="bg-slate-950 border border-slate-850 p-4 rounded-xl space-y-2">
                    <span className="text-[10px] font-bold font-mono text-slate-500 uppercase">2022 Playoff</span>
                    <h5 className="font-display font-bold text-slate-200 text-xs">Senegal Laser Shootout</h5>
                    <p className="text-slate-400 text-[11px] leading-relaxed">
                      After winning 1-0 in Cairo, Egypt fell 1-0 in Dakar. In a penalty shootout clouded by distracting green laser pointers in players' eyes, Egypt missed three penalties to miss out on Qatar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSubTab === "memes" && (
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-xl space-y-6">
              
              {/* The Road to Russia Chapter */}
              <div className="space-y-3">
                <h3 className="font-display font-bold text-amber-500 text-sm flex items-center gap-2">
                  <Sparkles size={16} />
                  <span>Documentary: "The Road to Russia"</span>
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  On October 8, 2017, the Borg El Arab Stadium in Alexandria became the theater of Egyptian history. After a grueling 28-year absence from the global stage, Egypt faced Congo in their penultimate qualifier.
                </p>

                <div className="p-4 bg-slate-950 border border-slate-850 rounded-xl space-y-3">
                  <span className="text-[9px] font-mono text-emerald-400 uppercase font-bold tracking-wider">The Legendary 95th Minute</span>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    Mohamed Salah had scored in the 63rd minute, bringing Egypt within touching distance of Russia. But in the 88th minute, Congo stunned the stadium by equalizing. In that agonizing moment, Salah collapsed to the turf in grief, but instantly stood back up, screaming at the players and fans to keep going. In the 94th minute, Egypt won a penalty.
                  </p>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    With 85,000 screaming fans inside and 100 million watching at home, Salah stepped up. He calmly hammered the ball past the keeper, igniting unprecedented nationwide celebrations. Commentators wept on air, cars blocked streets till dawn, and the 28-year curse was finally broken.
                  </p>
                </div>
              </div>

              {/* The 1990 Penalty Meme Chapter */}
              <div className="space-y-3 border-t border-slate-850 pt-5">
                <h3 className="font-display font-bold text-amber-500 text-sm flex items-center gap-2">
                  <BookOpen size={16} />
                  <span>Meme History: Magdy Abdelghani's Penalty</span>
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  How a single penalty kick against the Netherlands evolved into Egypt's most famous and hilarious footballing meme.
                </p>

                <div className="p-4 bg-slate-950 border border-slate-850 rounded-xl space-y-3 font-sans text-xs">
                  <div className="flex justify-between text-[10px] font-mono text-amber-400">
                    <span>"Lived on Magdy's Goal"</span>
                    <span>1990 - 2017</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    For 28 years, Egypt failed to reach the World Cup. During this long drought, midfielder Magdy Abdelghani, who had scored the 83rd-minute equalizer penalty against the Dutch in 1990, became a humorous TV presence.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    In almost every TV appearance, Abdelghani would jokingly scold younger players, saying they hadn't accomplished anything because they never played in a World Cup or scored like he did. This became a giant football meme: whenever Egypt got close to qualifying and failed, people joked that "Magdy's curse" was keeping Egypt alive just so he could brag about his goal.
                  </p>
                  <p className="text-slate-300 leading-relaxed font-semibold text-amber-400/90">
                    Mohamed Salah finally ended this humorous era in 2017 when his penalty secured the 2018 World Cup ticket. Fans joked that Magdy was the saddest person in Cairo because he could no longer brag about his 1990 penalty!
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeSubTab === "bookmarks" && (
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-xl">
              <h3 className="font-display font-medium text-slate-200 text-sm mb-4">
                My Bookmarked Items ({bookmarks.length})
              </h3>

              {bookmarks.length > 0 ? (
                <div className="space-y-2">
                  {bookmarks.map((b, i) => (
                    <div key={i} className="bg-slate-950 border border-slate-850 p-3 rounded-lg flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-amber-500 uppercase bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">{b.type}</span>
                        <span className="text-slate-200 text-xs font-medium">{b.label}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <button 
                          onClick={() => {
                            if (b.type === "player") { setSelectedPlayerId(b.id); setSelectedMatchId(null); setSelectedRefereeId(null); }
                            if (b.type === "match") { setSelectedMatchId(b.id); setSelectedPlayerId(null); setSelectedRefereeId(null); }
                            if (b.type === "referee") { setSelectedRefereeId(b.id); setSelectedPlayerId(null); setSelectedMatchId(null); }
                          }}
                          className="p-1 text-slate-400 hover:text-slate-100 bg-slate-900 border border-slate-800 rounded"
                        >
                          <Eye size={12} />
                        </button>
                        <button 
                          onClick={() => toggleBookmark(b.type as any, b.id, b.label)}
                          className="p-1 text-rose-500 hover:text-rose-400 bg-slate-900 border border-slate-800 rounded"
                        >
                          <X size={12} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10 border border-dashed border-slate-800 rounded-xl space-y-2">
                  <Star size={24} className="mx-auto text-slate-600" />
                  <p className="text-slate-400 text-xs">No bookmarked items yet.</p>
                  <p className="text-[11px] text-slate-500 max-w-xs mx-auto">
                    Click the star icon next to players, matches, or referees to curate your own offline Hall of Fame.
                  </p>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Right column: Details Viewer */}
        {(selectedPlayerId || selectedMatchId || selectedRefereeId) && (
          <div className="col-span-12 lg:col-span-7 space-y-4">
            
            {/* Player Detailed Profile Sheet */}
            {selectedPlayer && (
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-xl space-y-6">
                <div className="flex items-start justify-between border-b border-slate-850 pb-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase font-bold text-amber-500">Player Profile Archive</span>
                    <h3 className="font-display font-bold text-slate-100 text-xl flex items-center gap-2">
                      <span>{selectedPlayer.full_name}</span>
                      <span className="text-amber-500 font-bold">{selectedPlayer.arabic_name}</span>
                    </h3>
                    <p className="text-xs text-slate-400">Position: {selectedPlayer.position} • Foot: {selectedPlayer.preferred_foot}</p>
                  </div>
                  <button 
                    onClick={() => setSelectedPlayerId(null)}
                    className="p-1 bg-slate-950 border border-slate-850 text-slate-400 hover:text-slate-100 rounded"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Grid stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-850 text-center">
                    <span className="block text-[10px] text-slate-500 uppercase font-mono">Appearances</span>
                    <span className="text-lg font-bold text-slate-100 font-mono">{selectedPlayer.world_cup_appearances}</span>
                  </div>
                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-850 text-center">
                    <span className="block text-[10px] text-slate-500 uppercase font-mono">World Cup Goals</span>
                    <span className="text-lg font-bold text-emerald-400 font-mono">{selectedPlayer.goals}</span>
                  </div>
                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-850 text-center">
                    <span className="block text-[10px] text-slate-500 uppercase font-mono">World Cup Assists</span>
                    <span className="text-lg font-bold text-amber-500 font-mono">{selectedPlayer.assists}</span>
                  </div>
                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-850 text-center">
                    <span className="block text-[10px] text-slate-500 uppercase font-mono">Minutes Played</span>
                    <span className="text-lg font-bold text-slate-100 font-mono">{selectedPlayer.minutes}</span>
                  </div>
                </div>

                {/* Collapsible details sections */}
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">Biography</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">{selectedPlayer.biography}</p>
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">Career Timeline & Clubs</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">{selectedPlayer.club_career_summary}</p>
                  </div>

                  {selectedPlayer.interesting_facts && (
                    <div className="p-3 bg-slate-950 border border-slate-850 rounded-lg space-y-1">
                      <span className="text-[10px] font-mono text-amber-500 uppercase font-bold">Interesting Facts & Trivia</span>
                      <p className="text-slate-400 text-xs leading-relaxed font-sans">{selectedPlayer.interesting_facts}</p>
                    </div>
                  )}

                  {selectedPlayer.legacy && (
                    <div className="space-y-1.5">
                      <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">Enduring Legacy</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">{selectedPlayer.legacy}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Referee Detailed Profile Sheet */}
            {selectedReferee && (
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-xl space-y-6">
                <div className="flex items-start justify-between border-b border-slate-850 pb-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase font-bold text-amber-500 tracking-wider">Egyptian Referee Heritage</span>
                    <h3 className="font-display font-bold text-slate-100 text-xl flex items-center gap-2">
                      <span>{selectedReferee.name}</span>
                      <span className="text-amber-500 font-bold">{selectedReferee.arabic_name}</span>
                    </h3>
                    <p className="text-xs text-slate-400">DOB: {selectedReferee.date_birth || "Not publicly documented"} • Nationality: {selectedReferee.nationality}</p>
                  </div>
                  <button 
                    onClick={() => setSelectedRefereeId(null)}
                    className="p-1 bg-slate-950 border border-slate-850 text-slate-400 hover:text-slate-100 rounded"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Grid stats */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-850 text-center">
                    <span className="block text-[10px] text-slate-500 uppercase font-mono">Role</span>
                    <span className="text-xs font-bold text-slate-100 font-mono">{selectedReferee.role}</span>
                  </div>
                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-850 text-center">
                    <span className="block text-[10px] text-slate-500 uppercase font-mono">FIFA Badge Years</span>
                    <span className="text-xs font-bold text-amber-500 font-mono">{selectedReferee.fifa_badge_years}</span>
                  </div>
                </div>

                {/* Detailed Sections */}
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">World Cups Participated In</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">{selectedReferee.world_cups}</p>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">Matches Officiated</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">{selectedReferee.matches_officiated}</p>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">Career Summary</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">{selectedReferee.career_summary}</p>
                  </div>

                  {selectedReferee.stadium && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-3 bg-slate-950 border border-slate-850 rounded-lg space-y-0.5">
                        <span className="text-[10px] font-mono text-slate-500 uppercase font-bold">Teams Officiated</span>
                        <span className="text-slate-300 font-sans block text-xs">{selectedReferee.teams}</span>
                      </div>
                      <div className="p-3 bg-slate-950 border border-slate-850 rounded-lg space-y-0.5">
                        <span className="text-[10px] font-mono text-slate-500 uppercase font-bold">Stadium & Stage</span>
                        <span className="text-slate-300 font-sans block text-xs">{selectedReferee.stadium} • {selectedReferee.stage}</span>
                      </div>
                    </div>
                  )}

                  {selectedReferee.awards && (
                    <div className="space-y-1">
                      <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">Awards & Distinctions</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">{selectedReferee.awards}</p>
                    </div>
                  )}

                  {selectedReferee.interesting_facts && (
                    <div className="p-3 bg-slate-950 border border-slate-850 rounded-lg space-y-1">
                      <span className="text-[10px] font-mono text-amber-500 uppercase font-bold">Interesting Facts & Trivia</span>
                      <p className="text-slate-400 text-xs leading-relaxed font-sans">{selectedReferee.interesting_facts}</p>
                    </div>
                  )}

                  {selectedReferee.legacy && (
                    <div className="space-y-1">
                      <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">Legacy & Historical Significance</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">{selectedReferee.legacy}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Match Detailed Profile Sheet */}
            {selectedMatch && (
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-xl space-y-6">
                <div className="flex items-start justify-between border-b border-slate-850 pb-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase font-bold text-amber-500">World Cup Match Center</span>
                    <h3 className="font-display font-bold text-slate-100 text-xl">
                      Egypt {selectedMatch.egypt_score} - {selectedMatch.opponent_score} {selectedMatch.opponent}
                    </h3>
                    <p className="text-xs text-slate-400">{selectedMatch.match_date} • {selectedMatch.stage}</p>
                  </div>
                  <button 
                    onClick={() => setSelectedMatchId(null)}
                    className="p-1 bg-slate-950 border border-slate-850 text-slate-400 hover:text-slate-100 rounded"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Scoreboard and Stadium detail */}
                <div className="bg-slate-950 p-4.5 rounded-xl border border-slate-850 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="space-y-1">
                    <span className="block text-[10px] text-slate-500 uppercase font-mono">Stadium Venue</span>
                    <span className="text-xs font-bold text-slate-200">
                      {SEED_DATA.stadiums.find(s => s.id === selectedMatch.stadium_id)?.name || "Not documented"}
                    </span>
                  </div>
                  <div className="space-y-1 border-y md:border-y-0 md:border-x border-slate-850 py-2 md:py-0">
                    <span className="block text-[10px] text-slate-500 uppercase font-mono">Official Attendance</span>
                    <span className="text-xs font-bold text-slate-200">{selectedMatch.attendance?.toLocaleString() || "Not documented"}</span>
                  </div>
                  <div className="space-y-1">
                    <span className="block text-[10px] text-slate-500 uppercase font-mono">Match Referee</span>
                    <span className="text-xs font-bold text-slate-200">
                      {SEED_DATA.referees.find(r => r.id === selectedMatch.referee_id)?.name || "Not documented"}
                    </span>
                  </div>
                </div>

                {/* Formations & Tactics */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-slate-950 border border-slate-850 rounded-lg space-y-1">
                    <span className="text-[10px] font-mono text-amber-500 uppercase font-bold block">Egypt Formation</span>
                    <span className="text-sm font-bold text-slate-200 block">{selectedMatch.egypt_formation}</span>
                  </div>
                  <div className="p-3 bg-slate-950 border border-slate-850 rounded-lg space-y-1">
                    <span className="text-[10px] font-mono text-slate-500 uppercase font-bold block">Opponent Formation</span>
                    <span className="text-sm font-bold text-slate-200 block">{selectedMatch.opponent_formation}</span>
                  </div>
                </div>

                {/* Goal Timeline / Chronology */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">Match Events timeline</h4>
                  <div className="space-y-2">
                    {SEED_DATA.match_events.filter(e => e.match_id === selectedMatch.id).map(event => (
                      <div key={event.id} className="p-3 bg-slate-950 rounded-lg border border-slate-850 flex gap-3 text-xs leading-relaxed">
                        <span className="font-mono text-amber-500 font-bold min-w-8">{event.minute}'</span>
                        <div className="space-y-0.5">
                          <span className="font-bold text-slate-200 uppercase text-[10px] tracking-wide">{event.type}</span>
                          <p className="text-slate-400">{event.detail}</p>
                        </div>
                      </div>
                    ))}
                    {SEED_DATA.match_events.filter(e => e.match_id === selectedMatch.id).length === 0 && (
                      <p className="text-slate-500 text-xs font-mono">No chronological match events compiled for this game.</p>
                    )}
                  </div>
                </div>

                {/* Match context */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">Historical Context & Legacy</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {selectedMatch.id === 2 ? (
                      "This historic match marked Egypt's return to the World Cup arena after 56 years of waiting. Placed against the superstar Dutch team, El-Gohary deployed a legendary low block structure that frustrated Gullit and Van Basten. The performance remains one of the most celebrated tactical achievements in the history of Egyptian sports."
                    ) : selectedMatch.id === 5 ? (
                      "A heartbreaking opening fixture in Russia 2018. Under extreme hot weather, Egypt played without injured Mohamed Salah but put on an exceptional defensive display. Defender José Giménez scored a late 89th-minute header to break Egyptian hearts, after El-Shenawy made 4 miraculous saves."
                    ) : (
                      "The match demonstrated the physical struggles and high competitive levels faced by the squad. It remains a valuable teaching model for modern coaches structuring offline tactics for national teams."
                    )}
                  </p>
                </div>
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
}
