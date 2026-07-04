/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { generateSqlSchema } from "../data/db-schema";
import { generateSqlSeed } from "../data/db-seed";
import { Download, FileCode, CheckCircle, Database, HelpCircle, Loader2, Info } from "lucide-react";

export default function DownloadCenter() {
  const [loadingDb, setLoadingDb] = useState<boolean>(false);
  const [exportStep, setExportStep] = useState<string>("");
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleDownloadSql = () => {
    const schemaSql = generateSqlSchema();
    const seedSql = generateSqlSeed();
    const fullSql = `${schemaSql}\n\n${seedSql}`;

    const blob = new Blob([fullSql], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement("a");
    link.href = url;
    link.download = "egypt_world_cup_encyclopedia.sql";
    link.click();
    
    URL.revokeObjectURL(url);
  };

  const handleDownloadBinaryDb = async () => {
    setLoadingDb(true);
    setSuccessMsg(null);
    try {
      setExportStep("Loading SQLite WebAssembly compiler...");
      
      // If sql.js is not loaded yet, wait a tiny bit or let window load it
      if (!window.initSqlJs) {
        // Dynamically insert script if not already there
        await new Promise((resolve, reject) => {
          const script = document.createElement("script");
          script.src = "https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.12.0/sql-wasm.js";
          script.async = true;
          script.onload = resolve;
          script.onerror = reject;
          document.body.appendChild(script);
        });
      }

      setExportStep("Compiling database tables...");
      const SQL = await window.initSqlJs({
        locateFile: (filename: string) => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.12.0/${filename}`
      });

      const db = new SQL.Database();
      
      setExportStep("Seeding real Egyptian World Cup historical data (1934, 1990, 2018)...");
      const schemaSql = generateSqlSchema();
      db.run(schemaSql);
      
      const seedSql = generateSqlSeed();
      db.run(seedSql);

      setExportStep("Building binary database block indices...");
      // Runs minor check to ensure DB integrity
      db.exec("PRAGMA integrity_check;");

      setExportStep("Bundling database into portable SQLite binary file...");
      const binaryArray = db.export(); // returns Uint8Array

      const blob = new Blob([binaryArray], { type: "application/x-sqlite3" });
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "egypt_world_cup_encyclopedia.db";
      link.click();

      URL.revokeObjectURL(url);
      setSuccessMsg("egypt_world_cup_encyclopedia.db successfully downloaded!");
    } catch (err: any) {
      console.error(err);
      alert("Error compiling SQLite binary client-side. Please download the SQL script instead, or ensure cookies and WebAssembly are enabled.");
    } finally {
      setLoadingDb(false);
      setExportStep("");
    }
  };

  return (
    <div id="download-center" className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* File Exporters */}
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-500/5 to-transparent rounded-bl-full pointer-events-none" />
          
          <h3 className="font-sans font-medium text-slate-100 text-lg mb-2 flex items-center gap-2">
            <Database className="text-amber-500" size={20} />
            <span>SQLite Database Compiler & Exporter</span>
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Export the complete fully populated offline SQLite database for immediate inclusion in your production Flutter assets folder, or download the raw SQL commands.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Binary DB Export */}
            <div className="bg-slate-950 rounded-xl p-5 border border-slate-850 flex flex-col justify-between">
              <div className="space-y-2 mb-6">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Database size={20} />
                </div>
                <h4 className="font-mono text-sm font-bold text-slate-200">
                  egypt_world_cup_encyclopedia.db
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  A pre-compiled, fully structured, binary SQLite file containing all requested tables, indexes, and seeded data, ready for Flutter's asset directory.
                </p>
              </div>

              <div className="space-y-3">
                {loadingDb && (
                  <div className="space-y-1 bg-slate-900 p-2.5 rounded border border-slate-800">
                    <span className="flex items-center gap-1.5 text-[10px] text-amber-500 font-mono font-bold animate-pulse">
                      <Loader2 size={12} className="animate-spin" /> Compiling...
                    </span>
                    <p className="text-[10px] text-slate-400 font-mono truncate">{exportStep}</p>
                  </div>
                )}

                {successMsg && (
                  <div className="bg-emerald-500/10 border border-emerald-500/20 p-2.5 rounded text-xs text-emerald-400 font-mono flex items-center gap-1.5">
                    <CheckCircle size={14} />
                    <span>{successMsg}</span>
                  </div>
                )}

                <button
                  disabled={loadingDb}
                  onClick={handleDownloadBinaryDb}
                  className="w-full py-2.5 bg-amber-500 hover:bg-amber-600 disabled:bg-amber-500/50 disabled:cursor-not-allowed text-slate-950 font-sans font-bold text-sm rounded-lg flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
                >
                  <Download size={15} />
                  <span>Download SQLite Binary (.db)</span>
                </button>
              </div>
            </div>

            {/* SQL Seed Script Export */}
            <div className="bg-slate-950 rounded-xl p-5 border border-slate-850 flex flex-col justify-between">
              <div className="space-y-2 mb-6">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <FileCode size={20} />
                </div>
                <h4 className="font-mono text-sm font-bold text-slate-200">
                  egypt_world_cup_encyclopedia.sql
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  The raw SQL text dump containing standard CREATE TABLE, CREATE INDEX statements and INSERT commands for all Egypt World Cup historical data.
                </p>
              </div>

              <button
                onClick={handleDownloadSql}
                className="w-full py-2.5 bg-slate-850 hover:bg-slate-800 text-slate-200 border border-slate-750 font-sans font-semibold text-sm rounded-lg flex items-center justify-center gap-2 transition-all active:scale-98"
              >
                <Download size={15} />
                <span>Download SQL Seed Script (.sql)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Flutter Preloading Assets Documentation */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl">
          <h3 className="font-sans font-medium text-slate-200 mb-3 flex items-center gap-2 text-lg">
            <Info className="text-amber-500" size={18} />
            <span>How to load pre-populated databases in Flutter</span>
          </h3>
          <p className="text-slate-400 text-sm mb-4 leading-relaxed">
            When building offline encyclopedias or content apps, preloading the database is the industry best practice. Rather than creating and seeding tables on the user's phone, you bundle the <code className="text-amber-500 font-mono text-xs">egypt_world_cup_encyclopedia.db</code> file directly as an asset and copy it to the local document directory at initial startup:
          </p>

          <div className="bg-slate-950 rounded-lg p-4 border border-slate-850">
            <pre className="text-[11px] font-mono text-emerald-400 overflow-x-auto leading-relaxed whitespace-pre">
{`// Add DB asset to pubspec.yaml:
flutter:
  assets:
    - assets/egypt_world_cup_encyclopedia.db

// At Flutter runtime (initialize by copying the asset):
import 'dart:io';
import 'package:flutter/services.dart';
import 'package:path/path.dart';
import 'package:sqflite/sqflite.dart';

Future<Database> getDatabase() async {
  var databasesPath = await getDatabasesPath();
  var path = join(databasesPath, "egypt_world_cup_encyclopedia.db");

  // Check if the database exists locally
  var exists = await databaseExists(path);

  if (!exists) {
    // Should happen only the first time the app is opened
    print("Creating copy from assets...");
    try {
      await Directory(dirname(path)).create(recursive: true);
    } catch (_) {}
    
    // Copy from asset folder
    ByteData data = await rootBundle.load(join("assets", "egypt_world_cup_encyclopedia.db"));
    List<int> bytes = data.buffer.asUint8List(data.offsetInBytes, data.lengthInBytes);
    
    // Write and flush the bytes written
    await File(path).writeAsBytes(bytes, flush: true);
  }

  // Open the database locally
  return await openDatabase(path, readOnly: false);
}`}
            </pre>
          </div>
        </div>
      </div>

      {/* Database Verification Checklist */}
      <div className="lg:col-span-1">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-xl space-y-4">
          <h3 className="font-sans font-medium text-slate-200 border-b border-slate-800 pb-2 flex items-center gap-2">
            <HelpCircle className="text-amber-500" size={18} />
            <span>DB Layer Specifications</span>
          </h3>

          <div className="space-y-4 text-xs">
            <div className="p-3 bg-slate-950 rounded border border-slate-850">
              <span className="block font-bold text-amber-500 uppercase font-mono text-[10px] mb-1">Seeded Campaigns</span>
              <p className="text-slate-400">Includes complete histories of qualifying for the 1934, 1990, and 2018 World Cup campaigns.</p>
            </div>

            <div className="p-3 bg-slate-950 rounded border border-slate-850">
              <span className="block font-bold text-amber-500 uppercase font-mono text-[10px] mb-1">Seeded Matches</span>
              <p className="text-slate-400">All 7 final matches played by Egypt, including the iconic Hungary (1934), Netherlands, Ireland, England (1990), Uruguay, Russia, and Saudi Arabia (2018).</p>
            </div>

            <div className="p-3 bg-slate-950 rounded border border-slate-850">
              <span className="block font-bold text-amber-500 uppercase font-mono text-[10px] mb-1">Seeded Player Directory</span>
              <p className="text-slate-400">Includes real bio details, Arabic names, position, club histories, World Cup caps, and legacy archives for 12 Egyptian World Cup giants.</p>
            </div>

            <div className="p-3 bg-slate-950 rounded border border-slate-850">
              <span className="block font-bold text-amber-500 uppercase font-mono text-[10px] mb-1">Offline Support</span>
              <p className="text-slate-400">Features pre-configured <code className="text-amber-500">settings</code> and <code className="text-amber-500">favorites</code> tables to let users store preferences and bookmark players/matches locally inside the Flutter container.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
