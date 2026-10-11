import React from 'react';

const field =
  'w-full px-4 py-2.5 border border-white/20 rounded bg-white/95 text-sm text-mtg-near-black focus:outline-none focus:ring-2 focus:ring-mtg-rust/40';
const label = 'block text-[10px] font-black uppercase tracking-widest text-white/70 mb-1.5';

// The closing ask, with the free checkup form. A plain HTML form so it works
// without JavaScript (Netlify Forms reads it from the built page).
// Phone and email are both optional, but one of them has to be there.
const needOneContact = (e: React.FormEvent<HTMLFormElement>) => {
  const form = e.currentTarget;
  const phone = form.elements.namedItem('phone') as HTMLInputElement;
  const email = form.elements.namedItem('email') as HTMLInputElement;
  phone.setCustomValidity('');
  if (!phone.value.trim() && !email.value.trim()) {
    e.preventDefault();
    phone.setCustomValidity('Add a phone or an email so we can send your checkup.');
    phone.reportValidity();
    phone.addEventListener('input', () => phone.setCustomValidity(''), { once: true });
  }
};

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
              It takes about a minute to ask, and you&apos;ll have it within two business days.
            </p>

            <form name="checkup" method="POST" onSubmit={needOneContact} data-netlify="true" data-netlify-honeypot="company-url" className="space-y-4 text-left">
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
                <label className={label} htmlFor="website">Website, if you have one</label>
                <input className={field} id="website" name="website" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={label} htmlFor="phone">Phone</label>
                  <input className={field} id="phone" name="phone" type="tel" autoComplete="tel" />
                </div>
                <div>
                  <label className={label} htmlFor="email">Email</label>
                  <input className={field} id="email" name="email" type="email" autoComplete="email" />
                </div>
              </div>
              <div>
                <label className={label} htmlFor="bugging">Tell us what&apos;s not working. Be blunt. (optional)</label>
                <textarea className={field} id="bugging" name="bugging" rows={3}></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-mtg-rust text-white py-4 rounded-lg font-black uppercase tracking-[0.15em] hover:brightness-95 transition-all shadow-xl cursor-pointer"
              >
                Get Your Free Checkup
              </button>
              <p className="text-xs text-white/50 text-center">
                We only use this to send your checkup and check in once afterward. We never sell or share it.
              </p>
            </form>

            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-white text-lg md:text-xl font-bold">
                Don&apos;t want to wait two days?{' '}
                <a href="tel:4402909067" className="text-mtg-rust underline underline-offset-4">Call</a> or{' '}
                <a href="sms:4402909067" className="text-mtg-rust underline underline-offset-4">text</a>{' '}
                <a href="tel:4402909067" className="whitespace-nowrap hover:underline">440.290.9067</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScaleSection;
