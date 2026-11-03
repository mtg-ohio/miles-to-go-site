import React from 'react';
import Footer from './components/Footer';

// The privacy page, at /privacy. Plain talk, written from what the site actually does.
const PrivacyPage: React.FC = () => {
  return (
    <div className="bg-mtg-soft-white font-sans text-mtg-text">
      <header className="bg-mtg-blue text-white p-4 md:p-6">
        <div className="container mx-auto">
          <a href="/" className="text-lg font-semibold tracking-wide hover:text-mtg-rust transition-colors">
            MILES TO GO
          </a>
        </div>
      </header>
      <main className="py-12 sm:py-14 px-4">
        <div className="max-w-2xl mx-auto leading-relaxed space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-mtg-near-black">Privacy</h1>
          <p className="text-sm opacity-70">Last updated November 3, 2026</p>

          <p>
            Miles To Go, LLC is a small local business in Ashtabula County, Ohio. This page says what
            we do with the little information this website collects. It's short because there isn't much.
          </p>

          <h2 className="text-xl font-bold text-mtg-near-black pt-4">What you tell us</h2>
          <p>
            The only place this site asks for anything is the free checkup form. It asks for your
            business name, town, and a phone number or email (one of the two is required). A website
            address and a note about what's not working are optional. Whatever you type is what we get.
          </p>
          <h2 className="text-xl font-bold text-mtg-near-black pt-4">What we do with it</h2>
          <p>
            We use it to run your checkup, send it to you, and check in once afterward. Michael runs the
            checkup with Ava, an AI assistant that does the legwork. We don't sell your information, and
            we don't use it for anything else.
          </p>

          <h2 className="text-xl font-bold text-mtg-near-black pt-4">Who else handles it</h2>
          <p>
            The form is handled by Netlify, the service that runs this site's form. Your answers pass
            through them and are stored there until we delete them. We don't put ads on this site or
            share your details with advertisers.
          </p>

          <h2 className="text-xl font-bold text-mtg-near-black pt-4">Tracking</h2>
          <p>
            This site doesn't use cookies of its own, analytics, ad trackers or embedded videos or maps.
            Like any website, the company that hosts it can see basic things such as your IP address
            when a page loads.
          </p>

          <h2 className="text-xl font-bold text-mtg-near-black pt-4">Your say</h2>
          <p>
            Want to see what we have about you, or want it gone? Email{' '}
            <a href="mailto:michael@milestogoohio.com" className="text-mtg-rust underline underline-offset-4">
              michael@milestogoohio.com
            </a>{' '}
            or call{' '}
            <a href="tel:4402909067" className="text-mtg-rust underline underline-offset-4">440.290.9067</a>
            , and we'll take care of it.
          </p>

          <h2 className="text-xl font-bold text-mtg-near-black pt-4">Changes</h2>
          <p>
            If this changes, we'll update the date at the top.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPage;
