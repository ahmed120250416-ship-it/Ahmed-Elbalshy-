/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from "react";
import { SEED_DATA } from "../data/db-seed";
import { DB_TABLES } from "../data/db-schema";
import { Search, ChevronLeft, ChevronRight, Eye, Calendar, User, Compass, Trophy } from "lucide-react";

export default function DataBrowser() {
  const [selectedTableName, setSelectedTableName] = useState<string>("players");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedRow, setSelectedRow] = useState<any | null>(null);

  const itemsPerPage = 8;

  // Get table metadata
  const currentTableMeta = useMemo(() => {
    return DB_TABLES.find((t) => t.tableName === selectedTableName);
  }, [selectedTableName]);

  // Get table data
  const tableData = useMemo(() => {
    const data = (SEED_DATA as any)[selectedTableName] || [];
    // Reset selected row and page on table change
    setSelectedRow(null);
    setCurrentPage(1);
    return data;
  }, [selectedTableName]);

  // Filter data
  const filteredData = useMemo(() => {
    if (!searchQuery) return tableData;
    const query = searchQuery.toLowerCase();
    return tableData.filter((row: any) => {
      return Object.values(row).some((val) => {
        if (val === null || val === undefined) return false;
        return String(val).toLowerCase().includes(query);
      });
    });
  }, [tableData, searchQuery]);

  // Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage) || 1;
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(start, start + itemsPerPage);
  }, [filteredData, currentPage]);

  const headers = useMemo(() => {
    if (tableData.length === 0) return [];
    // Extract keys from first element of seed data
    return Object.keys(tableData[0]);
  }, [tableData]);

  const handleTableChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTableName(e.target.value);
    setSearchQuery("");
  };

  return (
    <div id="data-browser" className="grid grid-cols-1 xl:grid-cols-3 gap-6">
      {/* List and Table Grid */}
      <div className="xl:col-span-2 bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl space-y-4">
        {/* Table Selector and Search */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between border-b border-slate-800 pb-4">
          <div className="w-full md:w-auto">
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-1.5 font-bold">
              Select SQLite Table
            </label>
            <select
              value={selectedTableName}
              onChange={handleTableChange}
              className="w-full md:w-64 bg-slate-950 border border-slate-800 text-slate-200 px-3 py-2 rounded-lg text-sm font-mono focus:border-amber-500 focus:outline-none"
            >
              {DB_TABLES.map((t) => (
                <option key={t.tableName} value={t.tableName}>
                  {t.tableName} ({((SEED_DATA as any)[t.tableName] || []).length} rows)
                </option>
              ))}
            </select>
          </div>

          <div className="w-full md:w-80">
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-1.5 font-bold">
              Filter Records
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Search values in table..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full bg-slate-950 border border-slate-800 text-slate-200 pl-9 pr-3 py-2 rounded-lg text-sm focus:border-amber-500 focus:outline-none"
              />
              <Search className="absolute left-3 top-2.5 text-slate-500" size={16} />
            </div>
          </div>
        </div>

        {/* Dynamic Table Output */}
        {filteredData.length === 0 ? (
          <div className="text-center py-16 bg-slate-950/40 rounded-lg border border-slate-850">
            <p className="text-slate-500 text-sm font-mono">No historical records match your query.</p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="overflow-x-auto rounded-lg border border-slate-800 bg-slate-950">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900 border-b border-slate-800">
                    <th className="p-3 text-xs font-mono font-bold uppercase tracking-wider text-slate-400 w-16 text-center">Action</th>
                    {headers.slice(0, 5).map((h) => (
                      <th key={h} className="p-3 text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                        {h}
                      </th>
                    ))}
                    {headers.length > 5 && (
                      <th className="p-3 text-xs font-mono font-bold uppercase tracking-wider text-slate-400">More</th>
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-850">
                  {paginatedData.map((row: any, rIdx) => (
                    <tr
                      key={row.id || rIdx}
                      className={`hover:bg-slate-900/40 transition-colors cursor-pointer ${
                        selectedRow?.id === row.id ? "bg-amber-500/5 text-amber-300" : ""
                      }`}
                      onClick={() => setSelectedRow(row)}
                    >
                      <td className="p-3 text-center">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedRow(row);
                          }}
                          className="p-1 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 rounded transition-all"
                          title="View complete record details"
                        >
                          <Eye size={13} />
                        </button>
                      </td>
                      {headers.slice(0, 5).map((h) => {
                        let value = row[h];
                        if (typeof value === "string" && value.length > 40) {
                          value = value.substring(0, 40) + "...";
                        }
                        return (
                          <td key={h} className="p-3 text-sm font-mono text-slate-300">
                            {value === null || value === undefined ? <span className="text-slate-600">NULL</span> : String(value)}
                          </td>
                        );
                      })}
                      {headers.length > 5 && (
                        <td className="p-3 text-xs font-mono text-slate-500 italic">
                          +{headers.length - 5} fields
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-slate-500 font-mono">
                Showing {Math.min(filteredData.length, (currentPage - 1) * itemsPerPage + 1)}–
                {Math.min(filteredData.length, currentPage * itemsPerPage)} of {filteredData.length} records
              </span>
              <div className="flex items-center gap-1">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((c) => Math.max(1, c - 1))}
                  className="p-1.5 rounded bg-slate-950 border border-slate-800 text-slate-400 hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronLeft size={16} />
                </button>
                <span className="text-xs font-mono text-slate-400 px-3 bg-slate-950 py-1.5 rounded border border-slate-800">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((c) => Math.min(totalPages, c + 1))}
                  className="p-1.5 rounded bg-slate-950 border border-slate-800 text-slate-400 hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Row Detail View Inspector */}
      <div className="xl:col-span-1">
        {selectedRow ? (
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-xl space-y-4 relative overflow-hidden h-full flex flex-col">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-amber-500/5 to-transparent rounded-bl-full pointer-events-none" />
            
            <div className="border-b border-slate-800 pb-3">
              <span className="text-[10px] font-mono text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 uppercase tracking-widest font-bold">
                Record Inspector
              </span>
              <h3 className="text-lg font-bold text-slate-200 mt-2 font-mono flex items-center gap-2">
                <Compass size={18} className="text-amber-500" />
                Row #{selectedRow.id || "0"}
              </h3>
            </div>

            <div className="space-y-3.5 overflow-y-auto max-h-[500px] flex-grow pr-1.5 scrollbar-thin scrollbar-thumb-amber-500/40">
              {Object.entries(selectedRow).map(([key, val]) => {
                const columnMeta = currentTableMeta?.columns.find((c) => c.name === key);
                return (
                  <div key={key} className="bg-slate-950 p-3 rounded border border-slate-850 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-amber-400">{key}</span>
                      {columnMeta && (
                        <span className="text-[10px] font-mono text-slate-500 bg-slate-900 px-1.5 py-0.5 rounded">
                          {columnMeta.type}
                        </span>
                      )}
                    </div>
                    {columnMeta?.description && (
                      <p className="text-[10px] text-slate-500 font-sans italic">
                        {columnMeta.description}
                      </p>
                    )}
                    <div className="text-sm text-slate-200 font-sans break-words whitespace-pre-wrap pt-1 bg-slate-950 rounded select-all selection:bg-amber-500/30">
                      {val === null || val === undefined ? (
                        <span className="text-slate-600 font-mono italic">NULL</span>
                      ) : (
                        String(val)
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="bg-slate-900 border border-slate-800 border-dashed rounded-xl p-8 shadow-xl text-center h-full flex flex-col justify-center items-center">
            <Compass size={40} className="text-slate-600 mb-3 animate-pulse" />
            <h4 className="text-slate-400 font-semibold mb-1 text-sm">Select a Record</h4>
            <p className="text-slate-500 text-xs max-w-[200px] leading-relaxed mx-auto">
              Click the eye icon or any row in the table to load its normalized fields into the inspector.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
