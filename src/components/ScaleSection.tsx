import React from 'react';
import { PhoneIcon, MessageIcon, EmailIcon } from './Icon';

const field =
  'w-full px-4 py-2.5 border border-white/20 rounded bg-white/95 text-sm text-mtg-near-black focus:outline-none focus:ring-2 focus:ring-mtg-rust/40';
const label = 'block text-[10px] font-black uppercase tracking-widest text-white/70 mb-1.5';

// The closing ask, with the free checkup form. A plain HTML form so it works
// without JavaScript (Netlify Forms reads it from the built page).
const ScaleSection: React.FC = () => {
  return (
    <section id="checkup" className="py-16 sm:py-20 px-4 bg-mtg-navy relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-mtg-rust/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px] opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-[80px]"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-block px-4 py-1.5 bg-white/10 border border-white/10 rounded-full text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6 backdrop-blur-sm">
          Free, No Strings
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          Ready to <span className="text-mtg-rust">Take the Lead?</span>
        </h2>

        <div className="bg-white/[0.03] border border-white/10 p-1 md:p-1.5 rounded-3xl backdrop-blur-md max-w-2xl mx-auto shadow-2xl overflow-hidden ring-1 ring-white/10">
          <div className="bg-mtg-navy/40 p-6 sm:p-10 rounded-[22px] border border-white/5">
            <p className="text-mtg-soft-white opacity-85 mb-8 text-base md:text-lg leading-relaxed font-medium">
              Get your free checkup. It takes about a minute, and Michael will have it to you within two business days.
            </p>

            <form name="checkup" method="POST" data-netlify="true" data-netlify-honeypot="company-url" className="space-y-4 text-left">
              <input type="hidden" name="form-name" value="checkup" />
              <p className="hidden">
                <label>Leave this empty: <input name="company-url" /></label>
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={label} htmlFor="business">Business name</label>
                  <input className={field} id="business" name="business" required />
                </div>
                <div>
                  <label className={label} htmlFor="town">Town</label>
                  <input className={field} id="town" name="town" required />
                </div>
              </div>
              <div>
                <label className={label} htmlFor="website">Website (if you have one)</label>
                <input className={field} id="website" name="website" />
              </div>
              <div>
                <label className={label} htmlFor="contact">Best way to reach you (phone or email)</label>
                <input className={field} id="contact" name="contact" required />
              </div>
              <div>
                <label className={label} htmlFor="bugging">What&apos;s bugging you? (optional)</label>
                <textarea className={field} id="bugging" name="bugging" rows={3}></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-mtg-rust text-white py-4 rounded-lg font-black uppercase tracking-[0.15em] hover:brightness-95 transition-all shadow-xl cursor-pointer"
              >
                Get Your Free Checkup
              </button>
              <p className="text-xs text-white/50 text-center">
                We use this to send your checkup and check in once after. No mailing list.
              </p>
            </form>

            <div className="space-y-6 mt-10">
              <div className="w-16 h-1 bg-white/20 mx-auto"></div>
              <h4 className="text-white/70 font-black text-xs uppercase tracking-[0.4em]">Rather Talk?</h4>
              <div className="flex flex-col sm:flex-row justify-center items-stretch gap-4">
                <a href="tel:4402909067" className="flex items-center justify-center gap-3 px-8 py-4 bg-mtg-rust text-white rounded-lg font-black uppercase tracking-[0.15em] hover:opacity-90 transition-all transform hover:scale-[1.03] shadow-xl group">
                  <PhoneIcon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Call
                </a>
                <a href="sms:4402909067" className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-mtg-navy rounded-lg font-black uppercase tracking-[0.15em] hover:bg-mtg-soft-white transition-all transform hover:scale-[1.03] shadow-xl group">
                  <MessageIcon className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                  Text
                </a>
                <a href="mailto:michael@milestogoohio.com" className="flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-white/20 text-white rounded-lg font-black uppercase tracking-[0.15em] hover:bg-white/10 transition-all transform hover:scale-[1.03] shadow-xl group">
                  <EmailIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScaleSection;
