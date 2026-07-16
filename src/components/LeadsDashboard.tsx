import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  Trash2, 
  Download, 
  RefreshCw, 
  X, 
  Calendar, 
  Mail, 
  Building2, 
  MapPin, 
  Database,
  ExternalLink,
  Info,
  ShieldCheck
} from 'lucide-react';

interface Lead {
  id: string;
  businessName: string;
  businessCategory: string;
  businessLocation: string;
  email: string;
  score?: number;
  status?: string;
  date: string;
}

export const LeadsDashboard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [showConsole, setShowConsole] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (
      params.get('admin') === 'true' || 
      params.get('console') === 'true' || 
      params.get('owner') === 'true'
    ) {
      setShowConsole(true);
    }
  }, []);

  const loadLeads = () => {
    try {
      const rawLeads = localStorage.getItem('mtg_local_leads');
      if (rawLeads) {
        setLeads(JSON.parse(rawLeads));
      } else {
        setLeads([]);
      }
    } catch (e) {
      console.error('Error loading leads:', e);
    }
  };

  useEffect(() => {
    loadLeads();
    
    // Listen to custom update event
    window.addEventListener('mtg_leads_updated', loadLeads);
    return () => {
      window.removeEventListener('mtg_leads_updated', loadLeads);
    };
  }, []);

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear all captured leads?')) {
      localStorage.removeItem('mtg_local_leads');
      loadLeads();
    }
  };

  const handleDeleteLead = (id: string) => {
    const updated = leads.filter(l => l.id !== id);
    localStorage.setItem('mtg_local_leads', JSON.stringify(updated));
    setLeads(updated);
  };

  const handleSeedMockData = () => {
    const mockLeads: Lead[] = [
      {
        id: 'mock-1',
        businessName: 'Apex Roofing & Restoration',
        businessCategory: 'Roof Replacement',
        businessLocation: 'Cleveland, OH',
        email: 'contact@apexroofing.com',
        score: 41,
        date: 'Jul 6, 08:30 AM'
      },
      {
        id: 'mock-2',
        businessName: 'Greenwood Lawn Care',
        businessCategory: 'Commercial Landscaping',
        businessLocation: 'Mentor, OH',
        email: 'info@greenwoodohio.com',
        score: 52,
        date: 'Jul 5, 04:15 PM'
      },
      {
        id: 'mock-3',
        businessName: 'Precision Electrical Solutions',
        businessCategory: 'EV Charger Installation',
        businessLocation: 'Westlake, OH',
        email: 'leads@precisionelectric.com',
        score: 38,
        date: 'Jul 4, 11:20 AM'
      }
    ];
    localStorage.setItem('mtg_local_leads', JSON.stringify(mockLeads));
    setLeads(mockLeads);
  };

  const handleExportCSV = () => {
    if (leads.length === 0) return;
    
    const headers = ['Business Name', 'Category', 'Location', 'Email', 'Visibility Score / Status', 'Submission Date'];
    const rows = leads.map(l => [
      l.businessName,
      l.businessCategory,
      l.businessLocation,
      l.email,
      l.score !== undefined ? `${l.score}%` : (l.status || 'Pending'),
      l.date
    ]);

    const csvContent = "data:text/csv;charset=utf-8," 
      + [headers.join(','), ...rows.map(e => e.map(val => `"${val}"`).join(","))].join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `mtg_local_calls_leads_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!showConsole) return null;

  return (
    <div className="relative" id="owner-leads-dashboard-container">
      {/* Small trigger in Footer or Bottom Margins */}
      <div className="flex justify-center py-4 bg-mtg-soft-white border-t border-mtg-warm-gray/10 text-xs">
        <button
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center gap-1.5 text-mtg-charcoal opacity-40 hover:opacity-100 hover:text-mtg-rust font-bold transition-all uppercase tracking-widest cursor-pointer"
          id="toggle-dashboard-trigger"
        >
          <Database className="w-3.5 h-3.5" />
          Owner Console: View Leads ({leads.length})
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-mtg-navy/75 backdrop-blur-md"
              id="dashboard-backdrop"
            />

            {/* Dashboard Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative bg-white w-full max-w-3xl h-[85vh] flex flex-col rounded-2xl shadow-2xl border border-mtg-warm-gray/15 overflow-hidden z-10"
              id="dashboard-card"
            >
              {/* Header */}
              <div className="p-5 border-b border-mtg-warm-gray/15 bg-mtg-navy text-white flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 bg-mtg-rust rounded-lg">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg tracking-tight">MTG Owner Leads Console</h3>
                    <p className="text-[10px] text-mtg-warm-gray uppercase tracking-wider font-semibold">
                      Real-time Prospect Capture & Manual Audit List
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-white opacity-60 hover:opacity-100 hover:bg-white/10 rounded-full transition-all"
                  aria-label="Close dashboard"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Guide/Explainer Banner */}
              <div className="bg-mtg-rust/10 p-4 border-b border-mtg-rust/20 flex gap-3 text-xs text-mtg-charcoal">
                <Info className="w-5 h-5 text-mtg-rust shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-mtg-near-black mb-0.5">How To Fulfill These Leads:</p>
                  <p className="opacity-85 leading-relaxed">
                    Copy the details of any lead below, look up their business on Google, check how they compare to local competitors, write up a quick PDF report, and email it directly as a personalized value-first check-in. It takes less than 5 minutes and converts incredibly well.
                  </p>
                </div>
              </div>

              {/* Toolbar */}
              <div className="p-4 border-b border-mtg-warm-gray/10 bg-mtg-soft-white/40 flex items-center justify-between gap-4">
                <div className="text-xs text-mtg-charcoal font-semibold">
                  Captured Leads: <span className="bg-mtg-navy text-white px-2 py-0.5 rounded-full ml-1 text-[10px]">{leads.length}</span>
                </div>
                <div className="flex items-center gap-2">
                  {leads.length === 0 && (
                    <button
                      onClick={handleSeedMockData}
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-mtg-navy/10 hover:bg-mtg-navy/20 text-mtg-navy rounded text-xs font-bold uppercase tracking-wider cursor-pointer transition-all"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      Seed Mock Leads
                    </button>
                  )}
                  {leads.length > 0 && (
                    <>
                      <button
                        onClick={handleExportCSV}
                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-green-700 hover:bg-green-800 text-white rounded text-xs font-bold uppercase tracking-wider cursor-pointer transition-all shadow-sm"
                      >
                        <Download className="w-3.5 h-3.5" />
                        Export CSV
                      </button>
                      <button
                        onClick={handleClearAll}
                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 rounded text-xs font-bold uppercase tracking-wider cursor-pointer transition-all"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        Clear All
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Leads List / Table */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-mtg-soft-white/20">
                {leads.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-6 border-2 border-dashed border-mtg-warm-gray/15 rounded-2xl bg-white">
                    <Database className="w-12 h-12 text-mtg-warm-gray opacity-30 mb-3" />
                    <h4 className="font-bold text-mtg-near-black">No Leads Captured Yet</h4>
                    <p className="text-xs text-mtg-charcoal opacity-60 mt-1 max-w-sm leading-relaxed">
                      Your prospective customers haven&apos;t run scans yet. Open the CTA modal on the homepage, fill out some mock data, and watch it populate here in real-time.
                    </p>
                    <button
                      onClick={handleSeedMockData}
                      className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 bg-mtg-rust text-white rounded text-xs font-bold uppercase tracking-widest cursor-pointer transition-all hover:brightness-95 shadow"
                    >
                      Seed Demo Leads Data
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {leads.map((lead) => (
                      <div
                        key={lead.id}
                        className="bg-white rounded-xl border border-mtg-warm-gray/15 p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                      >
                        <div className="space-y-2">
                          {/* Business Title & Date */}
                          <div className="flex flex-wrap items-center gap-2">
                            <h4 className="font-black text-base text-mtg-near-black">{lead.businessName}</h4>
                            {lead.score !== undefined ? (
                              <span className="bg-mtg-rust/10 text-mtg-rust px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider">
                                Score: {lead.score}%
                              </span>
                            ) : (
                              <span className="bg-amber-100 text-amber-800 border border-amber-200 px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider flex items-center gap-1">
                                <span className="w-1 h-1 bg-amber-500 rounded-full animate-pulse" />
                                {lead.status || 'Pending Audit'}
                              </span>
                            )}
                          </div>

                          {/* Secondary info details */}
                          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-1 text-xs text-mtg-charcoal opacity-80">
                            <div className="flex items-center gap-1.5">
                              <Building2 className="w-3.5 h-3.5 text-mtg-warm-gray" />
                              <span>Service: <strong>{lead.businessCategory}</strong></span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <MapPin className="w-3.5 h-3.5 text-mtg-warm-gray" />
                              <span>Location: {lead.businessLocation}</span>
                            </div>
                            <div className="flex items-center gap-1.5 sm:col-span-2 mt-1">
                              <Mail className="w-3.5 h-3.5 text-mtg-warm-gray" />
                              <a
                                href={`mailto:${lead.email}`}
                                className="text-mtg-blue font-semibold hover:underline flex items-center gap-1"
                              >
                                {lead.email}
                                <ExternalLink className="w-3 h-3 opacity-60" />
                              </a>
                            </div>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center sm:flex-col justify-between sm:justify-center gap-3 sm:border-l border-mtg-warm-gray/10 sm:pl-5 shrink-0 pt-3 sm:pt-0 border-t sm:border-t-0">
                          <div className="flex items-center gap-1 text-[10px] text-mtg-warm-gray font-semibold uppercase tracking-wider">
                            <Calendar className="w-3.5 h-3.5" />
                            {lead.date}
                          </div>
                          
                          <button
                            onClick={() => handleDeleteLead(lead.id)}
                            className="p-1.5 text-red-500 hover:text-red-700 hover:bg-red-50 rounded transition-all cursor-pointer"
                            title="Delete Lead"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer info bar */}
              <div className="p-4 border-t border-mtg-warm-gray/10 bg-mtg-soft-white text-center text-[10px] font-semibold text-mtg-warm-gray uppercase tracking-widest flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-green-600" />
                Leads are safely persisted in Client-side LocalStorage
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
