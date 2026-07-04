/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { DB_TABLES, TableMetaData } from "../data/db-schema";
import { Database, Link2, Key, Info, HelpCircle } from "lucide-react";

export default function SchemaViewer() {
  const [selectedTable, setSelectedTable] = useState<string>("players");

  const currentTable = DB_TABLES.find(t => t.tableName === selectedTable) || DB_TABLES[0];

  return (
    <div id="schema-viewer" className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Sidebar - Tables List */}
      <div className="lg:col-span-1 bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-xl">
        <h3 className="font-sans font-medium text-amber-500 mb-4 flex items-center gap-2 border-b border-slate-800 pb-2">
          <Database size={18} />
          <span>Database Tables ({DB_TABLES.length})</span>
        </h3>
        <div className="space-y-1 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-amber-500">
          {DB_TABLES.map((table) => (
            <button
              key={table.tableName}
              onClick={() => setSelectedTable(table.tableName)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-150 flex items-center justify-between ${
                selectedTable === table.tableName
                  ? "bg-amber-500/10 border border-amber-500/30 text-amber-400 font-medium"
                  : "text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-transparent"
              }`}
            >
              <span className="font-mono">{table.tableName}</span>
              <span className="text-xs text-slate-500 bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800 font-mono">
                {table.columns.length} cols
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Table Detail */}
      <div className="lg:col-span-3 space-y-6">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-500/5 to-transparent rounded-bl-full pointer-events-none" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono font-medium tracking-wider uppercase text-amber-500 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                  SQLite Table
                </span>
                <span className="text-slate-500 font-mono text-xs">• fully normalized</span>
              </div>
              <h2 className="font-mono text-2xl font-bold text-slate-100 flex items-center gap-2">
                {currentTable.tableName}
              </h2>
            </div>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed mb-6 bg-slate-950 p-3.5 rounded-lg border border-slate-850">
            {currentTable.description}
          </p>

          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
            <Info size={14} className="text-amber-500" /> Columns and Data Types
          </h3>

          <div className="overflow-x-auto rounded-lg border border-slate-800 bg-slate-950">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 border-b border-slate-800">
                  <th className="p-3 text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Column</th>
                  <th className="p-3 text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Type</th>
                  <th className="p-3 text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Constraints</th>
                  <th className="p-3 text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-850">
                {currentTable.columns.map((col) => {
                  const isPrimary = col.constraints?.toLowerCase().includes("primary key");
                  return (
                    <tr key={col.name} className="hover:bg-slate-900/50 transition-colors">
                      <td className="p-3 text-sm font-mono font-semibold text-slate-200 flex items-center gap-1.5">
                        {isPrimary && <Key size={12} className="text-amber-500 shrink-0" />}
                        <span className={isPrimary ? "text-amber-400" : ""}>{col.name}</span>
                      </td>
                      <td className="p-3 text-sm font-mono text-slate-400">{col.type}</td>
                      <td className="p-3 text-xs font-mono text-emerald-500">{col.constraints || "—"}</td>
                      <td className="p-3 text-sm text-slate-300">{col.description}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Table Relations */}
          {(currentTable.foreignKeys.length > 0 || currentTable.indexes.length > 0) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {currentTable.foreignKeys.length > 0 && (
                <div className="bg-slate-950 rounded-lg p-4 border border-slate-800/80">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-500/80 mb-2.5 flex items-center gap-1.5">
                    <Link2 size={14} /> Foreign Keys
                  </h4>
                  <ul className="space-y-1.5">
                    {currentTable.foreignKeys.map((fk, idx) => (
                      <li key={idx} className="font-mono text-xs text-slate-400 bg-slate-900 p-2 rounded border border-slate-850">
                        {fk}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {currentTable.indexes.length > 0 && (
                <div className="bg-slate-950 rounded-lg p-4 border border-slate-800/80">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-500/80 mb-2.5 flex items-center gap-1.5">
                    <Database size={14} /> Table Indexes
                  </h4>
                  <ul className="space-y-1.5">
                    {currentTable.indexes.map((idxName) => (
                      <li key={idxName} className="font-mono text-xs text-slate-400 bg-slate-900 p-2 rounded border border-slate-850 flex items-center justify-between">
                        <span>{idxName}</span>
                        <span className="text-[10px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded">
                          Performance
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Database Relationship Map Summary */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl">
          <h3 className="font-sans font-medium text-slate-200 mb-3 flex items-center gap-2 text-lg">
            <Link2 className="text-amber-500" size={18} />
            <span>Encyclopedia Relationship Architecture</span>
          </h3>
          <p className="text-slate-400 text-sm mb-4 leading-relaxed">
            The schema follows strict SQLite relationships ensuring no duplicate data can exist. Players reside in a master table, while their match-specific metrics (e.g., minutes, goals) are decoupled into <code className="text-amber-400 text-xs font-mono">player_match_stats</code>. In-game events like substitutions, card bookings, goals, and penalty takers are individually normalized and mapped with Cascade constraints.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-850">
              <span className="block text-xs font-mono text-slate-500 uppercase">Master Tables</span>
              <span className="font-mono text-sm text-amber-500 font-semibold">players, editions, clubs, stadiums</span>
            </div>
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-850">
              <span className="block text-xs font-mono text-slate-500 uppercase">Core Matches</span>
              <span className="font-mono text-sm text-amber-500 font-semibold">matches, lineups, substitutions</span>
            </div>
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-850">
              <span className="block text-xs font-mono text-slate-500 uppercase">Event Logs</span>
              <span className="font-mono text-sm text-amber-500 font-semibold">goals, assists, cards, penalties</span>
            </div>
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-850">
              <span className="block text-xs font-mono text-slate-500 uppercase">Archives</span>
              <span className="font-mono text-sm text-amber-500 font-semibold">stories, facts, records, achievements</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
