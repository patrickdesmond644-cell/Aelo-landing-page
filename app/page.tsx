export default function Page() {
  return (
    <>
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#0f172a]/80 backdrop-blur-md">
        <div className="flex items-center justify-between h-[64px] px-margin max-w-container-max-width mx-auto">
          <div className="flex items-center gap-8">
            <a className="flex items-center gap-2" href="#">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-[#0f172a] font-bold text-sm">AE</span>
              </div>
              <span className="text-xl font-bold tracking-tight">AELO</span>
            </a>
            <nav className="hidden md:flex gap-8">
              <a className="text-sm font-medium text-white/70 hover:text-white" href="#">Product</a>
              <a className="text-sm font-medium text-white/70 hover:text-white" href="#">Solutions</a>
              <a className="text-sm font-medium text-white/70 hover:text-white" href="#">Pricing</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <a href="/login" className="text-sm font-medium text-white/70 hover:text-white">Login</a>
            <button className="bg-white text-[#0f172a] px-5 py-2 rounded-lg text-sm font-bold">Get Started</button>
          </div>
        </div>
      </header>
      <main className="pt-[64px]">
        {/* Hero Section */}
        <section className="relative px-margin text-center overflow-hidden pt-40 pb-40">
          <div className="max-w-4xl mx-auto z-10 relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full mb-8">
              <span className="material-symbols-outlined text-brand-amber text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-amber">Always Elevated — Work without limits</span>
            </div>
            <h1 className="text-[72px] leading-[1] font-extrabold mb-8 tracking-tight">
              Your office,<br />
              <span className="text-white/60">elevated.</span>
              <span className="inline-block align-middle ml-2">
                <span className="material-symbols-outlined text-brand-amber text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>grade</span>
              </span>
            </h1>
            <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
              AELO is an all-in-one business communication platform — email, team chat, calendar, file management, and AI writing — built for teams that never stop.
            </p>
            <div className="flex justify-center gap-4 mb-20">
              <button className="bg-white text-[#0f172a] font-bold px-8 py-3.5 rounded flex items-center gap-2 hover:bg-white/90 transition-colors">
                See Features
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
              <button className="bg-white/5 border border-white/10 text-white font-bold px-8 py-3.5 rounded hover:bg-white/10 transition-colors">
                View Pricing
              </button>
            </div>
            {/* Dashboard Preview */}
            <div className="relative max-w-5xl mx-auto">
              <div className="relative bg-[#1e293b] rounded-xl overflow-hidden border border-white/20 shadow-lg">
                {/* Browser Header Mockup */}
                <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/30"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/30"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/30"></div>
                  </div>
                  <div className="flex-1 max-w-md mx-auto h-6 bg-white/5 rounded-md flex items-center px-3 gap-2">
                    <span className="material-symbols-outlined text-[12px] text-white/20">lock</span>
                    <span className="text-[10px] text-white/30 font-medium">aelo.app/dashboard</span>
                  </div>
                  <div className="w-12"></div>
                </div>
                {/* Dashboard Screenshot */}
                <div className="relative">
                  <img alt="AELO Executive Dashboard" className="w-full h-auto block" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqtPdk39TXB_5gSwjGKOMCW-1Tl0sNVbgY5jhh9dWBVIP7kiKxfbgjbIq4hSVzbIe9MKWOtQxgNDJfKcOMQtzK_jmIG-QQLnQjttDFZQaFVyd0i1D-W3IIsOaJfLJjDE6qgWG0bj9r8A53sphNjuB33J0sVOQlIFOmBoIjbiqWxuIScB1MN-A7i92U-BXMQUIAGiWXQmKVEHnF0Q9KIIhUnGSdZww1qicoPILtUtASQmk6mnWV1fYOC-9khcP-db7sa7YnVjfYj_hy"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/20 to-transparent pointer-events-none"></div>
                </div>
              </div>
              {/* Mini status lights under hero image as seen in Image 12 */}
              <div className="flex justify-center gap-6 mt-8 opacity-40">
                <div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> All systems operational
                </div>
                <div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> 99.9% uptime guaranteed
                </div>
                <div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> SOC 2 aligned
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Metrics Bar */}
        <section className="bg-white py-12">
          <div className="px-margin max-w-container-max-width mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-extrabold text-[#0f172a] mb-1">99.9%</div>
                <div className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Uptime SLA</div>
              </div>
              <div className="text-center border-l md:border-l border-outline-variant">
                <div className="text-3xl font-extrabold text-[#0f172a] mb-1">Always</div>
                <div className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Available</div>
              </div>
              <div className="text-center border-l md:border-l border-outline-variant">
                <div className="text-3xl font-extrabold text-[#0f172a] mb-1">2.4s</div>
                <div className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Avg. AI reply time</div>
              </div>
              <div className="text-center border-l md:border-l border-outline-variant">
                <div className="text-3xl font-extrabold text-[#0f172a] mb-1">256-bit</div>
                <div className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">AES Encryption</div>
              </div>
            </div>
          </div>
        </section>
        {/* Feature Grid */}
        <section className="bg-[#f8f9fc] px-margin py-40">
          <div className="max-w-container-max-width mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-secondary uppercase tracking-[0.2em] mb-4 block">Everything you need</span>
              <h2 className="text-4xl font-extrabold text-[#0f172a] mb-4">One platform. Every tool. Always on.</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto leading-loose">Stop juggling apps. AELO brings your entire communication stack into a single, fast, always-available workspace.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-8 text-center">
                <span className="material-symbols-outlined text-secondary text-4xl mb-4">mail</span>
                <h3 className="font-bold text-[#0f172a] mb-2">Smart Inbox</h3>
                <p className="text-sm text-on-surface-variant">AI-powered summaries and priority sorting.</p>
              </div>
              <div className="p-8 text-center">
                <span className="material-symbols-outlined text-brand-amber text-4xl mb-4">forum</span>
                <h3 className="font-bold text-[#0f172a] mb-2">Team Chat</h3>
                <p className="text-sm text-on-surface-variant">Real-time channels and searchable DMs.</p>
              </div>
              <div className="p-8 text-center">
                <span className="material-symbols-outlined text-green-500 text-4xl mb-4">calendar_today</span>
                <h3 className="font-bold text-[#0f172a] mb-2">Calendar</h3>
                <p className="text-sm text-on-surface-variant">Full calendar and meeting management.</p>
              </div>
            </div>
          </div>
        </section>
        {/* AI Section */}
        <section className="bg-[#1e293b] px-margin overflow-hidden py-40">
          <div className="max-w-container-max-width mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold text-brand-amber uppercase tracking-widest mb-4 block">Powered by AI</span>
              <h2 className="text-4xl font-extrabold mb-6 leading-tight">Claude AI helps you write faster, send smarter, and stay secure.</h2>
              <p className="text-white/60 mb-10 leading-relaxed">AELO&apos;s AI assistant drafts emails, summarizes threads, suggests replies, and highlights risks so your team can ship work without switching tools.</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-5 rounded-lg border border-white/10">
                  <h4 className="font-bold text-sm mb-2">Smart email drafting</h4>
                  <p className="text-xs text-white/50 leading-loose">Generate polished replies in seconds.</p>
                </div>
                <div className="bg-white/5 p-5 rounded-lg border border-white/10">
                  <h4 className="font-bold text-sm mb-2">Instant summaries</h4>
                  <p className="text-xs text-white/50 leading-loose">Turn long threads into quick next steps.</p>
                </div>
                <div className="bg-white/5 p-5 rounded-lg border border-white/10">
                  <h4 className="font-bold text-sm mb-2">AI-generated follow-ups</h4>
                  <p className="text-xs text-white/50 leading-loose">Never miss a promise or deadline again.</p>
                </div>
                <div className="bg-white/5 p-5 rounded-lg border border-white/10">
                  <h4 className="font-bold text-sm mb-2">Risk detection</h4>
                  <p className="text-xs text-white/50 leading-loose">Spot suspicious emails before you reply.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-[#0f172a] rounded-xl border border-white/10 shadow-2xl overflow-hidden p-2">
                {/* Simulated Dark Code/Terminal UI */}
                <div className="flex items-center gap-1.5 mb-2 px-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                </div>
                <div className="bg-black/40 rounded p-4 font-mono text-xs space-y-3">
                  <div className="text-brand-amber">AI Assistant: Draft generated</div>
                  <div className="text-white/40">Subject: Q4 Strategy Review Response</div>
                  <div className="text-white/70 h-32 overflow-hidden border-l border-white/10 pl-3">
                    Hi Alex, I&apos;ve reviewed the documents you sent over. The discrepancies in the budget projection have been noted. Let&apos;s sync at 9:00 AM to align on the final figures. I&apos;ve also prepared a preliminary briefing note for the board.
                  </div>
                  <div className="flex gap-2 pt-2">
                    <span className="px-2 py-1 bg-white/10 rounded">Regenerate</span>
                    <span className="px-2 py-1 bg-brand-amber text-[#0f172a] font-bold rounded">Insert into draft</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Trust Section */}
        <section className="bg-[#0f172a] px-margin py-40">
          <div className="max-w-container-max-width mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="bg-white/5 rounded-xl border border-white/10 p-1">
                <div className="bg-[#0f172a] rounded-lg p-8 flex flex-col items-center justify-center min-h-[300px]">
                  <span className="material-symbols-outlined text-brand-amber text-6xl mb-6">verified_user</span>
                  <div className="text-center">
                    <div className="text-lg font-bold mb-2">Secure Login &amp; Verification</div>
                    <div className="text-white/40 text-xs uppercase tracking-widest">Enterprise authentication built-in</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4 block">Trust &amp; Verification</span>
              <h2 className="text-4xl font-extrabold mb-6 leading-tight">Every email you send is authenticated and verified</h2>
              <p className="text-white/60 mb-10 leading-relaxed">AELO&apos;s verification badge gives every outbound email a unique Authenticity ID. Recipients can instantly confirm the message is genuinely from your organisation — not a phishing attempt.</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm text-white/80">
                  <span className="material-symbols-outlined text-green-400 text-lg">check_circle</span>
                  Unique Authenticity ID on every email sent
                </li>
                <li className="flex items-center gap-3 text-sm text-white/80">
                  <span className="material-symbols-outlined text-green-400 text-lg">check_circle</span>
                  End-to-end sender domain verification
                </li>
                <li className="flex items-center gap-3 text-sm text-white/80">
                  <span className="material-symbols-outlined text-green-400 text-lg">check_circle</span>
                  MFA and trusted device login controls
                </li>
                <li className="flex items-center gap-3 text-sm text-white/80">
                  <span className="material-symbols-outlined text-green-400 text-lg">check_circle</span>
                  Tamper-evident message authentication
                </li>
                <li className="flex items-center gap-3 text-sm text-white/80">
                  <span className="material-symbols-outlined text-green-400 text-lg">check_circle</span>
                  SOC 2 Type II aligned data handling
                </li>
                <li className="flex items-center gap-3 text-sm text-white/80">
                  <span className="material-symbols-outlined text-green-400 text-lg">check_circle</span>
                  Enterprise-grade role-based access control
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* Pricing Table */}
        <section className="bg-white px-margin py-40">
          <div className="max-w-container-max-width mx-auto text-center">
            <span className="text-xs font-bold text-secondary uppercase tracking-widest mb-4 block">Pricing</span>
            <h2 className="text-4xl font-extrabold text-[#0f172a] mb-4">Simple, transparent pricing</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto mb-16 leading-loose">Start free, scale when you&apos;re ready. No hidden fees, no long-term lock-in.</p>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
              {/* Free */}
              <div className="p-8 rounded-xl border border-outline-variant bg-white flex flex-col">
                <div className="mb-8">
                  <div className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">Free</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-[#0f172a]">$0</span>
                    <span className="text-on-surface-variant text-sm">/mo</span>
                  </div>
                  <p className="text-xs text-on-surface-variant mt-2 leading-loose">For individuals getting started</p>
                </div>
                <ul className="space-y-4 mb-10 flex-1">
                  <li className="flex items-center gap-2 text-sm text-on-surface">
                    <span className="material-symbols-outlined text-green-500 text-lg">check</span> 1 user account
                  </li>
                  <li className="flex items-center gap-2 text-sm text-on-surface">
                    <span className="material-symbols-outlined text-green-500 text-lg">check</span> 5 GB mailbox storage
                  </li>
                  <li className="flex items-center gap-2 text-sm text-on-surface">
                    <span className="material-symbols-outlined text-green-500 text-lg">check</span> Smart Inbox &amp; folders
                  </li>
                  <li className="flex items-center gap-2 text-sm text-white/30 line-through">
                    <span className="material-symbols-outlined text-lg opacity-20">close</span> AI writing assistant
                  </li>
                </ul>
                <button className="w-full py-3 rounded border border-outline-variant font-bold text-sm text-[#0f172a] hover:bg-surface-container-low transition-colors">Get started free</button>
              </div>
              {/* Basic (Most Popular) */}
              <div className="p-8 rounded-xl border-2 border-brand-amber bg-white flex flex-col relative shadow-xl transform scale-105 z-10">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-amber text-[#0f172a] text-[10px] font-extrabold uppercase px-3 py-1 rounded-full tracking-widest">Most Popular</div>
                <div className="mb-8">
                  <div className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">Basic</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-[#0f172a]">$10</span>
                    <span className="text-on-surface-variant text-sm">/mo per user</span>
                  </div>
                  <p className="text-xs text-on-surface-variant mt-2 leading-loose">For growing teams</p>
                </div>
                <ul className="space-y-4 mb-10 flex-1">
                  <li className="flex items-center gap-2 text-sm text-on-surface">
                    <span className="material-symbols-outlined text-brand-amber text-lg">check</span> Up to 25 users
                  </li>
                  <li className="flex items-center gap-2 text-sm text-on-surface">
                    <span className="material-symbols-outlined text-brand-amber text-lg">check</span> 50 GB mailbox storage
                  </li>
                  <li className="flex items-center gap-2 text-sm text-on-surface">
                    <span className="material-symbols-outlined text-brand-amber text-lg">check</span> Smart Inbox &amp; all folders
                  </li>
                  <li className="flex items-center gap-2 text-sm text-on-surface">
                    <span className="material-symbols-outlined text-brand-amber text-lg">check</span> Team Chat (full access)
                  </li>
                  <li className="flex items-center gap-2 text-sm text-on-surface">
                    <span className="material-symbols-outlined text-brand-amber text-lg">check</span> AI writing assistant
                  </li>
                </ul>
                <button className="w-full py-3 rounded bg-primary text-white font-bold text-sm hover:opacity-90 transition-opacity">Get started for free</button>
              </div>
              {/* Premium */}
              <div className="p-8 rounded-xl border border-outline-variant bg-white flex flex-col">
                <div className="mb-8">
                  <div className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">Premium</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-[#0f172a]">$28</span>
                    <span className="text-on-surface-variant text-sm">/mo per user</span>
                  </div>
                  <p className="text-xs text-on-surface-variant mt-2 leading-loose">For enterprises &amp; large orgs</p>
                </div>
                <ul className="space-y-4 mb-10 flex-1">
                  <li className="flex items-center gap-2 text-sm text-on-surface">
                    <span className="material-symbols-outlined text-green-500 text-lg">check</span> Unlimited users
                  </li>
                  <li className="flex items-center gap-2 text-sm text-on-surface">
                    <span className="material-symbols-outlined text-green-500 text-lg">check</span> Unlimited storage
                  </li>
                  <li className="flex items-center gap-2 text-sm text-on-surface">
                    <span className="material-symbols-outlined text-green-500 text-lg">check</span> Everything in Basic
                  </li>
                  <li className="flex items-center gap-2 text-sm text-on-surface">
                    <span className="material-symbols-outlined text-green-500 text-lg">check</span> Verified email badge
                  </li>
                  <li className="flex items-center gap-2 text-sm text-on-surface">
                    <span className="material-symbols-outlined text-green-500 text-lg">check</span> SLA tracking &amp; alerts
                  </li>
                </ul>
                <button className="w-full py-3 rounded border border-outline-variant font-bold text-sm text-[#0f172a] hover:bg-surface-container-low transition-colors">Contact sales</button>
              </div>
            </div>
            <p className="mt-8 text-xs text-on-surface-variant leading-loose">All plans include a 14-day free trial · No credit card required · Cancel anytime</p>
          </div>
        </section>
        {/* Social Proof (Testimonials) */}
        <section className="bg-[#f8f9fc] px-margin py-40">
          <div className="max-w-container-max-width mx-auto text-center">
            <span className="text-xs font-bold text-secondary uppercase tracking-widest mb-4 block">Testimonials</span>
            <h2 className="text-4xl font-extrabold text-[#0f172a] mb-16">Loved by teams who never stop working</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl text-left border border-outline-variant">
                <div className="flex gap-1 text-brand-amber mb-4">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <p className="text-sm text-[#0f172a] italic mb-6 leading-relaxed">&ldquo;AELO transformed how our entire operations team communicates. The AI summaries alone save me 45 minutes every morning. I can&apos;t imagine going back.&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-primary">SC</div>
                  <div>
                    <div className="font-bold text-sm">Sarah Chen</div>
                    <div className="text-[11px] text-on-surface-variant">VP of Operations, Nexus Group</div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl text-left border border-outline-variant">
                <div className="flex gap-1 text-brand-amber mb-4">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <p className="text-sm text-[#0f172a] italic mb-6 leading-relaxed">&ldquo;The verification badge on every email has completely eliminated phishing concerns internally. Our staff trusts official communications again.&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-primary">MW</div>
                  <div>
                    <div className="font-bold text-sm">Marcus Williams</div>
                    <div className="text-[11px] text-on-surface-variant">HR Director, Elevate Corp</div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl text-left border border-outline-variant">
                <div className="flex gap-1 text-brand-amber mb-4">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <p className="text-sm text-[#0f172a] italic mb-6 leading-relaxed">&ldquo;Managing cross-region coordination is seamless. Real-time chat, email, calendar, and file sharing — all in one place, always available.&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-primary">PS</div>
                  <div>
                    <div className="font-bold text-sm">Priya Sharma</div>
                    <div className="text-[11px] text-on-surface-variant">Head of Logistics, Summit Brands</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Company Set Up Form Area */}
        <section className="bg-[#f8f9fc] pb-24 px-margin py-40">
          <div className="max-w-container-max-width mx-auto">
            <div className="bg-[#0f172a] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
              <div className="p-12 md:w-1/2 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-amber/10 rounded-full mb-6 w-fit">
                  <span className="material-symbols-outlined text-brand-amber text-xs">corporate_fare</span>
                  <span className="text-[10px] font-bold text-brand-amber uppercase tracking-widest">For organisations</span>
                </div>
                <h2 className="text-4xl font-extrabold text-white mb-6">Set up your company on AELO in minutes.</h2>
                <p className="text-white/60 mb-10 leading-loose">Provision your entire organisation — custom domain, employee accounts, admin controls, and verified email badges — all from one onboarding flow.</p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-brand-amber">domain</span>
                    <div>
                      <h4 className="font-bold text-white text-sm">Custom domain email</h4>
                      <p className="text-xs text-white/50 leading-loose">Everyone gets @yourcompany.com addresses instantly.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-brand-amber">verified</span>
                    <div>
                      <h4 className="font-bold text-white text-sm">Verified badge for all</h4>
                      <p className="text-xs text-white/50 leading-loose">Every outbound email carries your organisation&apos;s trust seal.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-brand-amber">group_add</span>
                    <div>
                      <h4 className="font-bold text-white text-sm">Centralised user mgmt</h4>
                      <p className="text-xs text-white/50 leading-loose">Add, suspend, and manage team accounts from Admin Center.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Form Part */}
              <div className="p-12 md:w-1/2 bg-white flex items-center justify-center">
                <div className="w-full max-w-md">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-[#0f172a] rounded flex items-center justify-center">
                      <span className="text-white font-bold">AE</span>
                    </div>
                    <div>
                      <div className="font-bold text-[#0f172a]">AELO for Business</div>
                      <div className="text-[11px] text-on-surface-variant">Register your organisation — free for 14 days</div>
                    </div>
                  </div>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase text-on-surface-variant">First name</label>
                        <input className="w-full px-3 py-2 border border-outline-variant rounded bg-surface-container-low text-sm" placeholder="Alex" type="text" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase text-on-surface-variant">Last name</label>
                        <input className="w-full px-3 py-2 border border-outline-variant rounded bg-surface-container-low text-sm" placeholder="Morgan" type="text" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase text-on-surface-variant">Work email</label>
                      <input className="w-full px-3 py-2 border border-outline-variant rounded bg-surface-container-low text-sm" placeholder="you@yourcompany.com" type="email" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase text-on-surface-variant">Company name</label>
                      <input className="w-full px-3 py-2 border border-outline-variant rounded bg-surface-container-low text-sm" placeholder="Acme Corporation" type="text" />
                    </div>
                    <button className="w-full py-3 bg-[#0f172a] text-white font-bold rounded mt-4 hover:opacity-90 transition-opacity">Create your workspace</button>
                    <p className="text-[10px] text-center text-on-surface-variant mt-4 leading-loose">By registering, you agree to our <a className="underline" href="#">Terms of Service</a> and <a className="underline" href="#">Privacy Policy</a>.</p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-white border-t border-outline-variant py-16 px-margin">
        <div className="max-w-container-max-width mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
            <div>
              <a className="flex items-center gap-2 mb-6" href="#">
                <div className="w-8 h-8 bg-primary-container rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AE</span>
                </div>
                <span className="text-xl font-bold tracking-tight text-[#0f172a]">AELO</span>
              </a>
              <p className="text-sm text-on-surface-variant">The all-in-one business communication platform.</p>
            </div>
            <div>
              <h5 className="font-bold text-[#0f172a] text-sm mb-6">Product</h5>
              <ul className="space-y-4">
                <li><a className="text-sm text-on-surface-variant hover:text-primary" href="#">Features</a></li>
                <li><a className="text-sm text-on-surface-variant hover:text-primary" href="#">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-[#0f172a] text-sm mb-6">Company</h5>
              <ul className="space-y-4">
                <li><a className="text-sm text-on-surface-variant hover:text-primary" href="#">About</a></li>
                <li><a className="text-sm text-on-surface-variant hover:text-primary" href="#">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-[#0f172a] text-sm mb-6">Legal</h5>
              <ul className="space-y-4">
                <li><a className="text-sm text-on-surface-variant hover:text-primary" href="#">Privacy</a></li>
                <li><a className="text-sm text-on-surface-variant hover:text-primary" href="#">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
            <div>© 2024 AELO All rights reserved.</div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[10px]">auto_awesome</span>
              Always elevated. Always on.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}