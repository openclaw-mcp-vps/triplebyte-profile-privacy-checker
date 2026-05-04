export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Privacy Audit Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Audit What Recruiting Platforms{" "}
          <span className="text-[#58a6ff]">Expose About You</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Paste your Triplebyte, AngelList, or LinkedIn profile URL. We crawl it, analyze every exposed data point, and deliver a privacy report with actionable steps to lock things down.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Your Privacy Report — $9/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No data stored after report delivery.</p>

        {/* Data points preview */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
          {[
            ["Email", "Often exposed via contact fields"],
            ["Location", "City/region visible to all"],
            ["Salary", "Expected comp leaked in some platforms"],
            ["Skills", "Full stack fingerprint publicly indexed"],
          ].map(([label, desc]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-[#58a6ff] font-semibold text-sm mb-1">{label}</div>
              <div className="text-[#6e7681] text-xs">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$9<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#6e7681] text-sm mb-6">Full audit across all major recruiting platforms</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Scan Triplebyte, AngelList, LinkedIn & more",
              "Detailed exposure report per platform",
              "Actionable privacy recommendations",
              "Monthly re-scan to catch new leaks",
              "Email alerts when profile data changes",
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <span className="text-[#3fb950] mt-0.5">&#10003;</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Start Audit — $9/mo
          </a>
          <p className="mt-3 text-xs text-[#6e7681]">Secured by Lemon Squeezy. Cancel anytime.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            [
              "How does the scan work?",
              "You provide your public profile URLs. Our system fetches each page as an anonymous visitor and extracts every piece of data visible without logging in — the same view a recruiter, competitor, or bad actor would see.",
            ],
            [
              "Do you store my profile data?",
              "No. Scraped data is processed in-memory to generate your report and then discarded. We never persist your profile content to a database.",
            ],
            [
              "Which platforms are supported?",
              "Currently Triplebyte, AngelList (Wellfound), LinkedIn public profiles, and GitHub. We add new platforms based on subscriber requests.",
            ],
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} Profile Privacy Checker. Not affiliated with Triplebyte or any recruiting platform.
      </footer>
    </main>
  );
}
