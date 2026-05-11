'use client';

import React from "react";
import Image from "next/image";
import {
  Mail, MessageSquare, Calendar, BarChart3, Files, ShieldCheck,
  Sparkles, ArrowRight, CheckCircle2, Star, Globe, Zap,
  Lock, Users, TrendingUp, ChevronRight, Clock, Building2,
  Check, X as XIcon, ChevronDown
} from "lucide-react";

const NAV_LINKS = ["Features", "AI", "Security", "Analytics", "Pricing"];

const FEATURES = [
  { icon: Mail, title: "Smart Inbox", desc: "AI-powered email summaries, priority sorting, and one-click reply drafts. Stay on top of every message, round the clock.", color: "text-blue-500", bg: "bg-blue-50" },
  { icon: MessageSquare, title: "Team Chat", desc: "Real-time channels and DMs with AI reply suggestions. Keep every conversation in one secure, searchable place.", color: "text-violet-500", bg: "bg-violet-50" },
  { icon: Calendar, title: "Calendar & Scheduling", desc: "Full calendar management with meeting scheduling, reminders, and email integration — all in one workspace.", color: "text-emerald-500", bg: "bg-emerald-50" },
  { icon: Sparkles, title: "AI Writing Assistant", desc: "Draft professional emails in seconds. Pick from 5 tone presets — Formal, Friendly, Urgent, Follow-up, and more.", color: "text-amber-500", bg: "bg-amber-50" },
  { icon: BarChart3, title: "Analytics Dashboard", desc: "Email volume trends, team activity reports, and response-time metrics. Turn communication data into decisions.", color: "text-rose-500", bg: "bg-rose-50" },
  { icon: Files, title: "File Repository", desc: "A central hub for all shared files with full-text search, type filtering, and version control built in.", color: "text-cyan-500", bg: "bg-cyan-50" },
];

const STATS = [
  { value: "99.9%", label: "Uptime SLA" },
  { value: "Always", label: "Available" },
  { value: "2.4s", label: "Avg. AI reply time" },
  { value: "256-bit", label: "AES Encryption" },
];

const TESTIMONIALS = [
  { name: "Sarah Chen", role: "VP of Operations, Nexus Group", text: "AELO transformed how our entire operations team communicates. The AI summaries alone save me 45 minutes every morning. I can't imagine going back.", initials: "SC" },
  { name: "Marcus Williams", role: "HR Director, Elevate Corp", text: "The verification badge on every email has completely eliminated phishing concerns internally. Our staff trusts official communications again.", initials: "MW" },
  { name: "Priya Sharma", role: "Head of Logistics, Summit Brands", text: "Managing cross-region coordination is seamless. Real-time chat, email, calendar, and file sharing — all in one place, always available.", initials: "PS" },
];

const TRUST_FEATURES = [
  "Unique Authenticity ID on every email sent",
  "End-to-end sender domain verification",
  "MFA and trusted-device login controls",
  "Tamper-evident message authentication",
  "SOC 2 Type II aligned data handling",
  "Enterprise-grade role-based access control",
];

function CompanyRegistration() {
  const [orgSize, setOrgSize] = React.useState("");
  const [plan, setPlan] = React.useState("basic");
  const [submitted, setSubmitted] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const sizes = ["1–10 employees", "11–50 employees", "51–200 employees", "201–1 000 employees", "1 000+ employees"];

  if (submitted) {
    return (
      <section className="py-24 bg-[hsl(222_26%_14%)]">
        <div className="max-w-lg mx-auto px-6 text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-emerald-400" />
          </div>
          <h3 className="text-2xl font-black text-white mb-3">You're on the list!</h3>
          <p className="text-white/60 text-sm leading-relaxed mb-8">
            We'll reach out within one business day to set up your organisation's workspace.
          </p>
          <button onClick={() => setSubmitted(false)} className="text-xs text-white/40 hover:text-white/70 underline underline-offset-2 transition-colors">
            Register another organisation
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[hsl(222_26%_14%)] py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 rounded-full px-3.5 py-1.5 text-xs font-semibold text-amber-300 mb-8">
              <Building2 className="w-3.5 h-3.5" />
              For organisations
            </div>
            <h2 className="text-3xl md:text-4xl font-black leading-tight mb-6">
              Set up your company<br />
              <span className="text-white/50">on AELO in minutes.</span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-10">
              Provision your entire organisation — custom domain, employee accounts, admin controls, and verified email badges — all from one onboarding flow.
            </p>
            <div className="space-y-5">
              {[
                { icon: Mail,        title: "Custom domain email",      desc: "Everyone gets @yourcompany.com addresses instantly" },
                { icon: ShieldCheck, title: "Verified badge for all",   desc: "Every outbound email carries your organisation's trust seal" },
                { icon: Users,       title: "Centralised user mgmt",    desc: "Add, suspend, and manage team accounts from Admin Center" },
                { icon: Zap,         title: "AI features from day one", desc: "Full Claude-powered writing assistant for every user" },
              ].map(item => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4 text-white/70" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="text-xs text-white/50 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="px-8 py-6 border-b">
              <div className="flex items-center gap-2.5 mb-1">
                <div className="w-7 h-7 rounded-lg bg-[hsl(222_22%_20%)] text-white flex items-center justify-center font-black text-xs">AE</div>
                <span className="font-black text-[hsl(222_22%_14%)] text-base">AELO for Business</span>
              </div>
              <p className="text-xs text-gray-500">Register your organisation — free for 14 days</p>
            </div>

            <form onSubmit={handleSubmit} className="px-8 py-6 space-y-5">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-500">First name</label>
                  <input required type="text" placeholder="Alex" className="w-full h-10 px-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[hsl(222_22%_20%)]/20 focus:border-[hsl(222_22%_20%)] transition-colors bg-gray-50" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-500">Last name</label>
                  <input required type="text" placeholder="Morgan" className="w-full h-10 px-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[hsl(222_22%_20%)]/20 focus:border-[hsl(222_22%_20%)] transition-colors bg-gray-50" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-gray-500">Work email</label>
                <input required type="email" placeholder="you@yourcompany.com" className="w-full h-10 px-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[hsl(222_22%_20%)]/20 focus:border-[hsl(222_22%_20%)] transition-colors bg-gray-50" />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-gray-500">Company name</label>
                <input required type="text" placeholder="Acme Corporation" className="w-full h-10 px-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[hsl(222_22%_20%)]/20 focus:border-[hsl(222_22%_20%)] transition-colors bg-gray-50" />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-gray-500">Organisation size</label>
                <div className="relative">
                  <button type="button" onClick={() => setOpen(o => !o)} className="w-full h-10 px-3 text-sm border border-gray-200 rounded-xl bg-gray-50 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[hsl(222_22%_20%)]/20 transition-colors">
                    <span className={orgSize ? "text-gray-900" : "text-gray-400"}>{orgSize || "Select size"}</span>
                    <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`} />
                  </button>
                  {open && (
                    <div className="absolute top-full mt-1 left-0 right-0 bg-white border border-gray-200 rounded-xl shadow-lg z-10 overflow-hidden">
                      {sizes.map(s => (
                        <button key={s} type="button" onClick={() => { setOrgSize(s); setOpen(false); }} className={`w-full text-left px-3 py-2.5 text-sm hover:bg-gray-50 transition-colors ${orgSize === s ? "font-semibold bg-gray-50" : ""}`}>
                          {s}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-gray-500">Plan</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "free", label: "Free", sub: "$0" },
                    { id: "basic", label: "Basic", sub: "$10/u" },
                    { id: "premium", label: "Premium", sub: "$28/u" },
                  ].map(p => (
                    <button key={p.id} type="button" onClick={() => setPlan(p.id)} className={`rounded-xl border py-2.5 text-center transition-all ${plan === p.id ? "border-[hsl(222_22%_20%)] bg-[hsl(222_22%_20%)]/5 ring-2 ring-[hsl(222_22%_20%)]/20" : "border-gray-200 hover:border-gray-300"}`}>
                      <p className={`text-xs font-bold ${plan === p.id ? "text-[hsl(222_22%_14%)]" : ""}`}>{p.label}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{p.sub}</p>
                    </button>
                  ))}
                </div>
              </div>

              <button type="submit" className="w-full h-11 bg-[hsl(222_22%_20%)] hover:bg-[hsl(222_22%_14%)] text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 text-sm">
                Create your workspace <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-center text-xs text-gray-400">
                By registering, you agree to our{" "}
                <a href="#" className="underline underline-offset-2 hover:text-gray-700 transition-colors">Terms of Service</a>
                {" "}and{" "}
                <a href="#" className="underline underline-offset-2 hover:text-gray-700 transition-colors">Privacy Policy</a>.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-white font-sans">

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" alt="AELO logo" width={36} height={36} className="rounded-xl bg-[hsl(222_22%_20%)] p-2" />
            <div>
              <p className="text-[hsl(222_22%_20%)] font-black">AELO</p>
              <p className="text-[11px] uppercase tracking-[0.35em] text-gray-400">Business Suite</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">{l}</a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold px-4 py-2 rounded-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Coming Soon
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-[hsl(222_26%_14%)] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(hsl(222 22% 40%) 1px, transparent 1px), linear-gradient(90deg, hsl(222 22% 40%) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-100 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-40 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 rounded-full px-4 py-1.5 text-xs font-bold text-amber-300 mb-8">
            <Zap className="w-3.5 h-3.5" />
            Always Elevated — Work without limits
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 tracking-tight">
            Your office,<br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-slate-300 to-white">elevated around the clock.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            AELO is an all-in-one business communication platform — email, team chat, calendar, file management, and AI writing — built for teams that never stop.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#features" className="w-full sm:w-auto bg-white text-[hsl(222_22%_14%)] font-bold px-8 py-3.5 rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
              See Features <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#pricing" className="w-full sm:w-auto border border-white/30 text-white/80 font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-colors text-center">
              View Pricing
            </a>
          </div>
          <div className="mt-12 flex justify-center">
            <div className="w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl">
              <Image
                src="/dashboard.png"
                alt="AELO dashboard preview"
                width={1200}
                height={720}
                className="w-full h-auto rounded-[1.5rem]"
              />
            </div>
          </div>
          <div className="mt-16 flex items-center justify-center gap-6 text-xs text-white/40">
            <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />All systems operational</div>
            <div className="flex items-center gap-2"><Clock className="w-3.5 h-3.5" />99.9% uptime guaranteed</div>
            <div className="flex items-center gap-2"><ShieldCheck className="w-3.5 h-3.5" />SOC 2 aligned</div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map(s => (
            <div key={s.label}>
              <p className="text-2xl md:text-3xl font-black text-[hsl(222_22%_20%)]">{s.value}</p>
              <p className="text-sm text-gray-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">Everything you need</p>
          <h2 className="text-3xl md:text-4xl font-black text-[hsl(222_22%_14%)] mb-4">One platform. Every tool. Always on.</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Stop juggling apps. AELO brings your entire communication stack into a single, fast, always-available workspace.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map(f => (
            <div key={f.title} className="border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow group bg-white">
              <div className={`w-11 h-11 rounded-xl ${f.bg} flex items-center justify-center mb-4`}>
                <f.icon className={`w-5 h-5 ${f.color}`} />
              </div>
              <h3 className="font-bold text-[hsl(222_22%_14%)] mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI */}
      <section id="ai" className="bg-[hsl(222_26%_14%)] text-white py-24">
        <div className="max-w-6xl mx-auto px-6 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-amber-300 mb-3">Powered by AI</p>
            <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">Claude AI helps you write faster, send smarter, and stay secure.</h2>
            <p className="text-white/70 mb-8 leading-relaxed">
              AELO's AI assistant drafts emails, summarizes threads, suggests replies, and highlights risks so your team can ship work without switching tools.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Smart email drafting", desc: "Generate polished replies in seconds." },
                { title: "Instant summaries", desc: "Turn long threads into quick next steps." },
                { title: "AI-generated follow-ups", desc: "Never miss a promise or deadline again." },
                { title: "Risk detection", desc: "Spot suspicious emails before you reply." },
              ].map(item => (
                <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-white/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl overflow-hidden">
            <Image
              src="/inbox.png"
              alt="AELO inbox with AI features"
              width={800}
              height={600}
              className="w-full h-auto rounded-3xl"
            />
          </div>
        </div>
      </section>

      {/* Security */}
      <section id="security" className="bg-[hsl(222_26%_14%)] text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Trust & Verification</p>
              <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
                Every email you send is <span className="text-slate-300">authenticated and verified</span>
              </h2>
              <p className="text-white/70 mb-8 leading-relaxed">
                AELO's verification badge gives every outbound email a unique Authenticity ID. Recipients can instantly confirm the message is genuinely from your organisation — not a phishing attempt.
              </p>
              <ul className="space-y-3">
                {TRUST_FEATURES.map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />{f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-6">
              <div className="flex gap-4">
                <div className="flex-1">
                  <Image
                    src="/login.png"
                    alt="AELO login screen"
                    width={400}
                    height={500}
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
              <p className="text-center text-xs text-white/40">Secure login & verification built in</p>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics */}
      <section id="analytics" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">Business Intelligence</p>
            <h2 className="text-3xl md:text-4xl font-black text-[hsl(222_22%_14%)] mb-4">Real-time insights into your team's communications</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Track email volumes, team response times, and activity — and act on it the same day.</p>
          </div>
          <div className="bg-white border rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-[hsl(222_26%_14%)] px-6 py-4 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/60" /><div className="w-3 h-3 rounded-full bg-amber-500/60" /><div className="w-3 h-3 rounded-full bg-emerald-500/60" />
              <span className="ml-3 text-xs text-white/40 font-mono">app.aelo.com/analytics</span>
            </div>
            <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4 border-b">
              {[
                { label: "Emails Sent Today", value: "342", change: "+12%", up: true },
                { label: "Avg. Response Time", value: "1.8h", change: "-23%", up: false },
                { label: "Active Users", value: "1,247", change: "+5%", up: true },
                { label: "AI Drafts Used", value: "89", change: "+31%", up: true },
              ].map(k => (
                <div key={k.label} className="border rounded-xl p-4">
                  <p className="text-xs text-gray-500 mb-1">{k.label}</p>
                  <p className="text-2xl font-black text-[hsl(222_22%_14%)]">{k.value}</p>
                  <p className={`text-xs font-semibold mt-1 ${k.up ? "text-emerald-600" : "text-blue-600"}`}>{k.change} vs last week</p>
                </div>
              ))}
            </div>
            <div className="p-6">
              <p className="text-sm font-semibold mb-4 text-[hsl(222_22%_14%)]">Email Volume — Last 7 days</p>
              <div className="flex items-end gap-3 h-24">
                {[60, 85, 45, 92, 78, 55, 95].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div className="w-full rounded-t-md bg-[hsl(222_22%_20%)] opacity-80" style={{ height: `${h}%` }} />
                    <span className="text-xs text-gray-400">{["M","T","W","T","F","S","S"][i]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-black text-[hsl(222_22%_14%)]">Loved by teams who never stop working</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="border border-gray-100 rounded-2xl p-6 bg-white hover:shadow-md transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[hsl(222_22%_20%)] text-white flex items-center justify-center text-sm font-bold">{t.initials}</div>
                  <div>
                    <p className="text-sm font-semibold text-[hsl(222_22%_14%)]">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why AELO */}
      <section className="bg-gray-50 py-20 border-y">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { icon: Globe, title: "Works Everywhere", desc: "Browser, desktop, or mobile — access your workspace from any device, in any timezone, any time." },
              { icon: Zap,   title: "AI at Every Step", desc: "Claude AI powers email summaries, smart reply drafts, and daily briefings across every module." },
              { icon: Lock,  title: "Enterprise Security", desc: "MFA, trusted-device controls, and cryptographic email verification baked in from day one." },
            ].map(item => (
              <div key={item.title}>
                <div className="w-12 h-12 rounded-2xl bg-[hsl(222_22%_20%)] text-white flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[hsl(222_22%_14%)] mb-2 text-sm">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-black text-[hsl(222_22%_14%)] mb-4">Simple, transparent pricing</h2>
            <p className="text-gray-500 max-w-md mx-auto">Start free, scale when you're ready. No hidden fees, no long-term lock-in.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 items-stretch">

            {/* Free */}
            <div className="border border-gray-200 rounded-2xl p-8 flex flex-col hover:shadow-md transition-shadow">
              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Free</p>
                <div className="flex items-end gap-1 mb-1"><span className="text-4xl font-black text-[hsl(222_22%_14%)]">$0</span><span className="text-gray-400 text-sm mb-1">/mo</span></div>
                <p className="text-sm text-gray-500">For individuals getting started</p>
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {[
                  { text: "1 user account", on: true },
                  { text: "5 GB mailbox storage", on: true },
                  { text: "Smart Inbox & folders", on: true },
                  { text: "Team Chat (read-only)", on: true },
                  { text: "AI writing assistant", on: false },
                  { text: "Calendar integration", on: false },
                  { text: "Analytics dashboard", on: false },
                  { text: "Verified email badge", on: false },
                ].map(f => (
                  <li key={f.text} className={`flex items-center gap-2.5 text-sm ${f.on ? "text-gray-800" : "text-gray-300"}`}>
                    {f.on ? <Check className="w-4 h-4 text-emerald-500 shrink-0" /> : <XIcon className="w-4 h-4 text-gray-300 shrink-0" />}
                    {f.text}
                  </li>
                ))}
              </ul>
              <a href="#" className="block w-full text-center border border-[hsl(222_22%_20%)] text-[hsl(222_22%_20%)] font-semibold py-3 rounded-xl hover:bg-[hsl(222_22%_20%)] hover:text-white transition-colors text-sm">Get started free</a>
            </div>

            {/* Basic */}
            <div className="border-2 border-[hsl(222_22%_20%)] rounded-2xl p-8 flex flex-col relative shadow-lg">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="bg-[hsl(222_22%_20%)] text-white text-xs font-bold px-4 py-1.5 rounded-full">Most Popular</span>
              </div>
              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">Basic</p>
                <div className="flex items-end gap-1 mb-1"><span className="text-4xl font-black text-[hsl(222_22%_14%)]">$10</span><span className="text-gray-400 text-sm mb-1">/mo per user</span></div>
                <p className="text-sm text-gray-500">For growing teams</p>
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {[
                  { text: "Up to 25 users", on: true },
                  { text: "50 GB mailbox storage", on: true },
                  { text: "Smart Inbox & all folders", on: true },
                  { text: "Team Chat (full access)", on: true },
                  { text: "AI writing assistant", on: true },
                  { text: "Calendar integration", on: true },
                  { text: "Analytics dashboard", on: false },
                  { text: "Verified email badge", on: false },
                ].map(f => (
                  <li key={f.text} className={`flex items-center gap-2.5 text-sm ${f.on ? "text-gray-800" : "text-gray-300"}`}>
                    {f.on ? <Check className="w-4 h-4 text-emerald-500 shrink-0" /> : <XIcon className="w-4 h-4 text-gray-300 shrink-0" />}
                    {f.text}
                  </li>
                ))}
              </ul>
              <a href="#" className="block w-full text-center bg-[hsl(222_22%_20%)] text-white font-semibold py-3 rounded-xl hover:bg-[hsl(222_22%_14%)] transition-colors text-sm">Start Basic plan</a>
            </div>

            {/* Premium */}
            <div className="border border-gray-200 rounded-2xl p-8 flex flex-col hover:shadow-md transition-shadow">
              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2">Premium</p>
                <div className="flex items-end gap-1 mb-1"><span className="text-4xl font-black text-[hsl(222_22%_14%)]">$28</span><span className="text-gray-400 text-sm mb-1">/mo per user</span></div>
                <p className="text-sm text-gray-500">For enterprises & large orgs</p>
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {[
                  { text: "Unlimited users", on: true },
                  { text: "Unlimited storage", on: true },
                  { text: "Everything in Basic", on: true },
                  { text: "Full analytics & reporting", on: true },
                  { text: "Verified email badge", on: true },
                  { text: "SLA tracking & alerts", on: true },
                  { text: "Admin Center & Exchange", on: true },
                  { text: "Priority 24/7 support", on: true },
                ].map(f => (
                  <li key={f.text} className="flex items-center gap-2.5 text-sm text-gray-800">
                    <Check className="w-4 h-4 text-amber-500 shrink-0" />{f.text}
                  </li>
                ))}
              </ul>
              <a href="#" className="block w-full text-center border border-[hsl(222_22%_20%)] text-[hsl(222_22%_20%)] font-semibold py-3 rounded-xl hover:bg-[hsl(222_22%_20%)] hover:text-white transition-colors text-sm">Contact sales</a>
            </div>

          </div>
          <p className="text-center text-xs text-gray-400 mt-8">All plans include a 14-day free trial · No credit card required · Cancel anytime</p>
        </div>
      </section>

      {/* Company Registration */}
      <CompanyRegistration />

      {/* Footer */}
      <footer className="border-t bg-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2 font-black text-lg mb-3">
                <div className="w-7 h-7 rounded-lg bg-[hsl(222_22%_20%)] text-white flex items-center justify-center font-black text-xs">AE</div>
                AELO
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">The all-in-one business communication platform for teams that work around the clock.</p>
              <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
                <Zap className="w-3.5 h-3.5 text-amber-500" />Always elevated. Always on.
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider mb-4">Product</p>
              <ul className="space-y-2 text-xs text-gray-400">
                {["Inbox", "Team Chat", "Calendar", "Analytics", "Admin Center"].map(l => (
                  <li key={l}><a href="#" className="hover:text-gray-900 transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider mb-4">Company</p>
              <ul className="space-y-2 text-xs text-gray-400">
                {["About", "Careers", "Blog", "Contact"].map(l => (
                  <li key={l}><a href="#" className="hover:text-gray-900 transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider mb-4">Legal</p>
              <ul className="space-y-2 text-xs text-gray-400">
                {["Privacy Policy", "Terms of Service", "Security Policy", "Compliance"].map(l => (
                  <li key={l}><a href="#" className="hover:text-gray-900 transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-gray-400">© 2026 AELO. All rights reserved.</p>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <TrendingUp className="w-3.5 h-3.5" />Always elevated. Always on.
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}