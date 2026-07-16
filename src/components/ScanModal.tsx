import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Search, 
  Building2, 
  MapPin, 
  Mail, 
  ArrowRight, 
  Check, 
  Loader2, 
  AlertCircle, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck,
  FileText
} from 'lucide-react';

interface ScanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

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

export const ScanModal: React.FC<ScanModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  
  // Form fields
  const [businessName, setBusinessName] = useState('');
  const [businessCategory, setBusinessCategory] = useState('');
  const [businessLocation, setBusinessLocation] = useState('');
  const [email, setEmail] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(true);
  
  // Errors
  const [error, setError] = useState('');

  // Simulation state
  const [progress, setProgress] = useState(0);
  const [currentCheck, setCurrentCheck] = useState('');
  const [completedChecks, setCompletedChecks] = useState<string[]>([]);

  // Reset state when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setBusinessName('');
      setBusinessCategory('');
      setBusinessLocation('');
      setEmail('');
      setError('');
      setProgress(0);
      setCompletedChecks([]);
      setCurrentCheck('');
    }
  }, [isOpen]);

  // Simulation logic
  useEffect(() => {
    if (step !== 3) return;

    setProgress(0);
    setCompletedChecks([]);
    
    const checkStages = [
      { maxPrg: 25, text: 'Writing down your business name and town...', key: 'register' },
      { maxPrg: 55, text: 'Sizing up who’s ranking in your neighborhood...', key: 'grid' },
      { maxPrg: 80, text: 'Checking competitor categories and review counts...', key: 'endpoints' },
      { maxPrg: 100, text: 'Saving your request for our morning review session...', key: 'queue' }
    ];

    let currentPrg = 0;
    const interval = setInterval(() => {
      currentPrg += Math.floor(Math.random() * 8) + 4;
      if (currentPrg >= 100) {
        currentPrg = 100;
        setProgress(100);
        clearInterval(interval);
        
        // Save lead to local storage
        try {
          const rawLeads = localStorage.getItem('mtg_local_leads');
          const leads: Lead[] = rawLeads ? JSON.parse(rawLeads) : [];
          const newLead: Lead = {
            id: Math.random().toString(36).substring(2, 9),
            businessName,
            businessCategory,
            businessLocation,
            email,
            status: 'Pending Audit',
            date: new Date().toLocaleDateString(undefined, { 
              month: 'short', 
              day: 'numeric', 
              hour: '2-digit', 
              minute: '2-digit' 
            })
          };
          leads.push(newLead);
          localStorage.setItem('mtg_local_leads', JSON.stringify(leads));
          // Dispatch custom event to notify other components (like leads dashboard)
          window.dispatchEvent(new Event('mtg_leads_updated'));

          // Submit to Netlify Forms (integrates perfectly with their platform)
          const encode = (data: Record<string, string>) => {
            return Object.keys(data)
              .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
              .join("&");
          };

          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ 
              "form-name": "local-scan-leads", 
              businessName, 
              businessCategory, 
              businessLocation, 
              email 
            })
          })
          .then(() => console.log("Netlify Form successfully submitted!"))
          .catch(error => console.error("Netlify Form submission error:", error));

        } catch (e) {
          console.error('Error saving lead:', e);
        }

        // Transition to results step
        setTimeout(() => {
          setStep(4);
        }, 500);
      } else {
        setProgress(currentPrg);
        
        // Update check strings based on progress
        const stage = checkStages.find(s => currentPrg <= s.maxPrg);
        if (stage && stage.text !== currentCheck) {
          setCurrentCheck(stage.text);
          // Add previously completed stages
          const doneKeys: string[] = [];
          checkStages.forEach(s => {
            if (currentPrg > s.maxPrg) {
              doneKeys.push(s.text);
            }
          });
          setCompletedChecks(doneKeys);
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [step]);

  const handleNextStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!businessName.trim()) {
      setError('Please enter your business name.');
      return;
    }
    if (!businessCategory.trim()) {
      setError('Please specify your product or service.');
      return;
    }
    if (!businessLocation.trim()) {
      setError('Please enter your city and state.');
      return;
    }
    setStep(2);
  };

  const handleRunScan = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!termsAccepted) {
      setError('Please consent to receiving your free report.');
      return;
    }
    setStep(3);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-mtg-navy/70 backdrop-blur-md"
            id="modal-backdrop"
          />

          {/* Modal Content Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-mtg-warm-gray/10 overflow-hidden z-10 flex flex-col max-h-[calc(100vh-3rem)]"
            id="scan-modal-card"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 text-mtg-charcoal opacity-40 hover:opacity-100 rounded-full hover:bg-mtg-soft-white transition-all z-20"
              id="close-modal-btn"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header / Accent Bar */}
            <div className="h-2 bg-gradient-to-r from-mtg-blue via-mtg-rust to-mtg-blue w-full" />

            <div className="p-6 sm:p-8 overflow-y-auto flex-1 min-h-0" id="modal-content-container">
              {/* STEP 1: Basic Business Details */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                >
                  <div className="text-center mb-6">
                    <span className="text-[10px] font-black uppercase tracking-[0.25em] text-mtg-rust">
                      MTG: Local Calls Delivered
                    </span>
                    <h3 className="text-2xl font-black text-mtg-near-black mt-1">
                      Start Your Local Scan
                    </h3>
                    <p className="text-sm text-mtg-charcoal opacity-70 mt-1 max-w-sm mx-auto">
                      Let&apos;s map out exactly what customers see when searching for your business or services nearby.
                    </p>
                  </div>

                  {error && (
                    <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 rounded text-xs text-red-700 flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{error}</span>
                    </div>
                  )}

                  <form onSubmit={handleNextStep1} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-mtg-charcoal mb-1.5">
                        Business Name
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-3 w-4 h-4 text-mtg-warm-gray" />
                        <input
                          type="text"
                          placeholder="e.g., Summit Plumbing or Main Street Bakery"
                          value={businessName}
                          onChange={(e) => setBusinessName(e.target.value)}
                          className="w-full pl-10 pr-4 py-2.5 border border-mtg-warm-gray/25 rounded bg-mtg-soft-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-mtg-rust/20 focus:border-mtg-rust text-mtg-near-black"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-mtg-charcoal mb-1.5">
                        FOR WHICH PRODUCT, SERVICE, OR CATEGORY DO YOU WANT MORE CALLS OR VISITS?
                      </label>
                      <div className="relative">
                        <Search className="absolute left-3 top-3 w-4 h-4 text-mtg-warm-gray" />
                        <input
                          type="text"
                          placeholder="e.g., Water Heater Repair, Custom Cakes, Boutique Clothing"
                          value={businessCategory}
                          onChange={(e) => setBusinessCategory(e.target.value)}
                          className="w-full pl-10 pr-4 py-2.5 border border-mtg-warm-gray/25 rounded bg-mtg-soft-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-mtg-rust/20 focus:border-mtg-rust text-mtg-near-black"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-mtg-charcoal mb-1.5">
                        Where is Your Business Located?
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 w-4 h-4 text-mtg-warm-gray" />
                        <input
                          type="text"
                          placeholder="e.g., Denver, CO"
                          value={businessLocation}
                          onChange={(e) => setBusinessLocation(e.target.value)}
                          className="w-full pl-10 pr-4 py-2.5 border border-mtg-warm-gray/25 rounded bg-mtg-soft-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-mtg-rust/20 focus:border-mtg-rust text-mtg-near-black"
                          required
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-mtg-rust text-white py-3 rounded font-black uppercase tracking-widest text-xs hover:brightness-95 transition-all flex items-center justify-center gap-2 mt-6 cursor-pointer"
                    >
                      Continue
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                </motion.div>
              )}

              {/* STEP 2: Delivery Details & Consent */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                >
                  <div className="text-center mb-6">
                    <span className="text-[10px] font-black uppercase tracking-[0.25em] text-mtg-rust">
                      Final Step
                    </span>
                    <h3 className="text-2xl font-black text-mtg-near-black mt-1">
                      Where to Send the Report?
                    </h3>
                    <p className="text-sm text-mtg-charcoal opacity-70 mt-1 max-w-sm mx-auto">
                      We manually analyze your business presence and build you a complete custom visibility checklist.
                    </p>
                  </div>

                  {error && (
                    <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 rounded text-xs text-red-700 flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{error}</span>
                    </div>
                  )}

                  <form onSubmit={handleRunScan} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-mtg-charcoal mb-1.5">
                        Your Best Business Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-4 h-4 text-mtg-warm-gray" />
                        <input
                          type="email"
                          placeholder="e.g., owner@yourcompany.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full pl-10 pr-4 py-2.5 border border-mtg-warm-gray/25 rounded bg-mtg-soft-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-mtg-rust/20 focus:border-mtg-rust text-mtg-near-black"
                          required
                        />
                      </div>
                    </div>

                    <div className="bg-mtg-soft-white p-4 rounded border border-mtg-warm-gray/10 text-xs text-mtg-charcoal leading-relaxed">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={termsAccepted}
                          onChange={(e) => setTermsAccepted(e.target.checked)}
                          className="mt-0.5 accent-mtg-rust rounded cursor-pointer"
                        />
                        <span>
                          I agree to have MTG compile a personalized local audit report for{' '}
                          <strong>{businessName}</strong> and send it to <strong>{email}</strong>. 
                          No contracts, no pushy sales pitches.
                        </span>
                      </label>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="w-1/3 border border-mtg-warm-gray/30 text-mtg-charcoal py-3 rounded font-black uppercase tracking-widest text-xs hover:bg-mtg-soft-white transition-all cursor-pointer"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="w-2/3 bg-mtg-rust text-white py-3 rounded font-black uppercase tracking-widest text-xs hover:brightness-95 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                      >
                        <Sparkles className="w-4 h-4" />
                        Run Free scan
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}

              {/* STEP 3: Queueing Audit */}
              {step === 3 && (
                <div className="text-center py-6">
                  <div className="relative w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                    <Loader2 className="w-16 h-16 text-mtg-rust animate-spin absolute" />
                    <Search className="w-7 h-7 text-mtg-navy" />
                  </div>

                  <h3 className="text-xl font-black text-mtg-near-black">
                    Queueing Your Audit Request...
                  </h3>
                  <p className="text-sm text-mtg-charcoal opacity-70 mt-1">
                    Registering {businessName} for manual review in {businessLocation}
                  </p>

                  {/* Progress Bar */}
                  <div className="mt-8 max-w-xs mx-auto">
                    <div className="flex justify-between text-xs font-black text-mtg-charcoal mb-1.5 uppercase tracking-wider">
                      <span>Queue Progress</span>
                      <span>{progress}%</span>
                    </div>
                    <div className="w-full h-2.5 bg-mtg-soft-white rounded-full overflow-hidden border border-mtg-warm-gray/10">
                      <motion.div
                        className="h-full bg-mtg-rust rounded-full"
                        style={{ width: `${progress}%` }}
                        transition={{ ease: 'easeOut' }}
                      />
                    </div>
                  </div>

                  {/* Checked Stages List */}
                  <div className="mt-8 text-left bg-mtg-soft-white/60 p-4 rounded-xl border border-mtg-warm-gray/10 max-w-sm mx-auto space-y-2.5">
                    {completedChecks.map((text, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-mtg-charcoal opacity-60">
                        <Check className="w-3.5 h-3.5 text-green-600 shrink-0" />
                        <span>{text}</span>
                      </div>
                    ))}
                    <div className="flex items-center gap-2.5 text-xs font-semibold text-mtg-near-black">
                      <Loader2 className="w-3.5 h-3.5 text-mtg-rust animate-spin shrink-0" />
                      <span>{currentCheck}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: Request Confirmed */}
              {step === 4 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center"
                >
                  <div className="inline-flex p-3 bg-green-50 rounded-full text-green-600 border border-green-200 mb-4 animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-black text-mtg-near-black">
                    Manual Audit Request Confirmed!
                  </h3>
                  <p className="text-sm text-mtg-charcoal opacity-70 mt-1">
                    We&apos;re already on it. No automated robot spam here.
                  </p>

                  {/* REQUEST BLUEPRINT CARD */}
                  <div className="my-6 bg-mtg-navy text-white p-5 rounded-2xl max-w-sm mx-auto relative overflow-hidden text-left text-xs space-y-2">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-mtg-rust">
                      Here&apos;s What We&apos;ll Look Up
                    </p>
                    <div className="border-t border-white/10 pt-2 space-y-1.5 opacity-90">
                      <div><span className="text-mtg-warm-gray font-semibold">Business Name:</span> <strong className="text-white">{businessName}</strong></div>
                      <div><span className="text-mtg-warm-gray font-semibold">What You Sell/Do:</span> <strong className="text-white">{businessCategory}</strong></div>
                      <div><span className="text-mtg-warm-gray font-semibold">Where to Scan:</span> <strong className="text-white">{businessLocation}</strong></div>
                      <div><span className="text-mtg-warm-gray font-semibold">Deliver To:</span> <strong className="text-white">{email}</strong></div>
                    </div>
                  </div>

                  {/* FULFILLMENT INSIGHTS */}
                  <div className="text-left bg-mtg-soft-white p-4 rounded-xl border border-mtg-warm-gray/10 max-w-sm mx-auto space-y-3 mb-6">
                    <h4 className="text-xs font-black uppercase tracking-wider text-mtg-near-black border-b border-mtg-warm-gray/10 pb-1.5 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-mtg-rust" />
                      How we&apos;ll size up your listing
                    </h4>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-2.5 text-xs">
                        <span className="text-mtg-rust font-bold shrink-0 mt-0.5">1.</span>
                        <p className="text-mtg-charcoal opacity-85 leading-relaxed">
                          <strong>Hidden Category Tags:</strong> We&apos;ll pull up the top 3 businesses ranking ahead of you and check exactly what category tags they&apos;re using to get Google&apos;s attention.
                        </p>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs">
                        <span className="text-mtg-rust font-bold shrink-0 mt-0.5">2.</span>
                        <p className="text-mtg-charcoal opacity-85 leading-relaxed">
                          <strong>Your Map Reach:</strong> We&apos;ll check how far your map listing reaches before it drops off and your competitors take over.
                        </p>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs">
                        <span className="text-mtg-rust font-bold shrink-0 mt-0.5">3.</span>
                        <p className="text-mtg-charcoal opacity-85 leading-relaxed">
                          <strong>Review Pace & Count:</strong> We&apos;ll compare how many reviews you&apos;re getting compared to the local average so you know exactly what it takes to climb into the top spots.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* HOW WE'LL FULFILL */}
                  <div className="bg-white border-2 border-dashed border-mtg-rust/20 rounded-xl p-4 max-w-sm mx-auto text-left flex items-start gap-3 mb-6">
                    <FileText className="w-6 h-6 text-mtg-rust shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-mtg-near-black uppercase tracking-wider">
                        What happens next
                      </h4>
                      <p className="text-[11px] text-mtg-charcoal opacity-70 leading-relaxed mt-1">
                        We&apos;ll look up your business listing, check how you rank against the top 3 spots in your neighborhood, and assemble a simple, plain-English PDF scorecard for you within 24 hours. No sales pitch, no nonsense.
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={onClose}
                    className="w-full bg-mtg-navy text-white py-3 rounded font-black uppercase tracking-widest text-xs hover:bg-opacity-95 transition-all cursor-pointer shadow-md"
                  >
                    Got It, Thank You
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
