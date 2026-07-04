/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { FLUTTER_DATABASE_HELPER_CODE, FLUTTER_PLAYER_MODEL_CODE, FLUTTER_MATCH_MODEL_CODE } from "../data/dart-models";
import { Code2, Copy, Check, Terminal, BookOpen, Settings } from "lucide-react";

export default function DartGenerator() {
  const [activeTab, setActiveTab] = useState<"db-helper" | "player-model" | "match-model">("db-helper");
  const [copied, setCopied] = useState<boolean>(false);

  const activeCode = 
    activeTab === "db-helper" 
      ? FLUTTER_DATABASE_HELPER_CODE 
      : activeTab === "player-model" 
      ? FLUTTER_PLAYER_MODEL_CODE 
      : FLUTTER_MATCH_MODEL_CODE;

  const handleCopy = () => {
    navigator.clipboard.writeText(activeCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="dart-generator" className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* File Navigation Menu */}
      <div className="lg:col-span-1 bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-xl">
        <h3 className="font-sans font-medium text-amber-500 mb-4 flex items-center gap-2 border-b border-slate-800 pb-2">
          <Code2 size={18} />
          <span>Flutter SQLite Architecture</span>
        </h3>
        
        <div className="space-y-1.5">
          <button
            onClick={() => setActiveTab("db-helper")}
            className={`w-full text-left px-3.5 py-2.5 rounded-lg text-xs font-mono transition-all duration-150 flex items-center justify-between border ${
              activeTab === "db-helper"
                ? "bg-amber-500/10 border-amber-500/30 text-amber-400 font-bold"
                : "text-slate-400 border-transparent hover:bg-slate-800 hover:text-slate-200"
            }`}
          >
            <div className="flex items-center gap-2">
              <Settings size={14} />
              <span>database_helper.dart</span>
            </div>
            <span className="text-[10px] text-amber-500 font-bold">sqflite</span>
          </button>

          <button
            onClick={() => setActiveTab("player-model")}
            className={`w-full text-left px-3.5 py-2.5 rounded-lg text-xs font-mono transition-all duration-150 flex items-center justify-between border ${
              activeTab === "player-model"
                ? "bg-amber-500/10 border-amber-500/30 text-amber-400 font-bold"
                : "text-slate-400 border-transparent hover:bg-slate-800 hover:text-slate-200"
            }`}
          >
            <div className="flex items-center gap-2">
              <BookOpen size={14} />
              <span>player_model.dart</span>
            </div>
            <span className="text-[10px] text-slate-500">model</span>
          </button>

          <button
            onClick={() => setActiveTab("match-model")}
            className={`w-full text-left px-3.5 py-2.5 rounded-lg text-xs font-mono transition-all duration-150 flex items-center justify-between border ${
              activeTab === "match-model"
                ? "bg-amber-500/10 border-amber-500/30 text-amber-400 font-bold"
                : "text-slate-400 border-transparent hover:bg-slate-800 hover:text-slate-200"
            }`}
          >
            <div className="flex items-center gap-2">
              <Terminal size={14} />
              <span>match_model.dart</span>
            </div>
            <span className="text-[10px] text-slate-500">model</span>
          </button>
        </div>

        {/* Integration Instructions */}
        <div className="mt-6 bg-slate-950 p-4 rounded-lg border border-slate-850 space-y-3">
          <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider font-sans border-b border-slate-800 pb-1">
            Integration Steps
          </h4>
          <ol className="list-decimal list-inside text-[11px] text-slate-400 space-y-2 leading-relaxed">
            <li>
              Add dependencies to your Flutter <code className="text-amber-500 text-[10px] font-mono">pubspec.yaml</code>:
              <pre className="mt-1 bg-slate-900 p-1.5 rounded text-[10px] font-mono text-emerald-400 border border-slate-850">
                {`dependencies:\n  sqflite: ^2.3.0\n  path: ^1.8.3`}
              </pre>
            </li>
            <li>Copy these files into your <code className="text-slate-300 text-[10px] font-mono">lib/data/</code> directory.</li>
            <li>Use the singleton helper <code className="text-slate-300 text-[10px] font-mono">DatabaseHelper.instance</code> to query.</li>
          </ol>
        </div>
      </div>

      {/* Code Viewer Panel */}
      <div className="lg:col-span-3 space-y-4">
        <div className="bg-slate-900 border border-slate-800 rounded-xl shadow-xl relative overflow-hidden flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between bg-slate-950 px-5 py-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs font-mono text-slate-400 ml-2">
                {activeTab === "db-helper" 
                  ? "lib/data/database_helper.dart" 
                  : activeTab === "player-model" 
                  ? "lib/models/player_model.dart" 
                  : "lib/models/match_model.dart"}
              </span>
            </div>

            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1 bg-slate-850 hover:bg-slate-800 text-slate-300 rounded text-xs font-sans transition-all duration-150 border border-slate-750"
            >
              {copied ? (
                <>
                  <Check size={12} className="text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={12} />
                  <span>Copy Code</span>
                </>
              )}
            </button>
          </div>

          {/* Core Code Viewer */}
          <div className="bg-slate-950 p-5 font-mono text-xs text-slate-300 overflow-auto max-h-[550px] leading-relaxed select-all">
            <pre className="whitespace-pre">{activeCode}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
