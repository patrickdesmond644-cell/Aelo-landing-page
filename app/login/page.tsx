'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert('Login successful!');
    }
  }

  return (
    <div className="bg-surface-container-lowest text-on-surface selection:bg-primary/30 relative min-h-screen">
      {/* Background Atmosphere */}
      <div className="fixed inset-0 bg-gradient-indigo z-0"></div>
      <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none z-10"></div>
      <main className="relative z-20 flex flex-col items-center justify-center w-full px-margin-mobile md:px-margin-desktop">
        {/* Branding Anchor */}
        <div className="mb-xl flex flex-col items-center gap-xs">
          <span className="font-headline-md text-headline-md text-primary font-bold tracking-tight">AELO</span>
          <span className="font-label-sm text-label-sm text-outline tracking-widest uppercase">Enterprise Suite</span>
        </div>
        {/* Login Card */}
        <div className="w-full max-w-[440px] glass-panel border border-outline-variant/30 rounded-xl p-xl ambient-glow flex flex-col gap-lg">
          <header className="flex flex-col gap-xs text-center">
            <h1 className="font-headline-md text-headline-md text-on-surface tracking-tight">Welcome back</h1>
            <p className="font-body-md text-body-md text-on-surface-variant">Secure access to your workspace</p>
          </header>
          <form onSubmit={handleLogin} className="flex flex-col gap-md">
            {/* Email Field */}
            <div className="flex flex-col gap-xs">
              <label className="font-label-sm text-label-sm text-on-surface-variant ml-1" htmlFor="email">Work Email</label>
              <div className="relative group input-focus-glow rounded-lg">
                <input
                  className="w-full bg-[#050505] border border-outline-variant/30 rounded-lg px-md py-sm font-body-md text-body-md text-on-surface placeholder:text-outline/50 transition-all focus:border-primary focus:ring-0 outline-none"
                  id="email"
                  placeholder="name@company.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            {/* Password Field */}
            <div className="flex flex-col gap-xs">
              <div className="flex justify-between items-center px-1">
                <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="password">Password</label>
                <a className="font-label-sm text-label-sm text-primary hover:text-primary-fixed transition-colors" href="#">Forgot password?</a>
              </div>
              <div className="relative group input-focus-glow rounded-lg">
                <input
                  className="w-full bg-[#050505] border border-outline-variant/30 rounded-lg px-md py-sm font-body-md text-body-md text-on-surface placeholder:text-outline/50 transition-all focus:border-primary focus:ring-0 outline-none"
                  id="password"
                  placeholder="••••••••"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <button
              className="w-full bg-primary-container text-on-primary font-body-md text-body-lg font-bold py-sm rounded-lg hover:bg-primary-container/90 active:scale-[0.98] transition-all flex items-center justify-center mt-sm"
              type="submit"
            >
              Continue to Workspace
            </button>
          </form>
          {/* Divider */}
          <div className="flex items-center gap-md">
            <div className="h-[1px] flex-1 bg-outline-variant/30"></div>
            <span className="font-label-sm text-label-sm text-outline">or</span>
            <div className="h-[1px] flex-1 bg-outline-variant/30"></div>
          </div>
          {/* Social Action */}
          <button className="w-full bg-transparent border border-outline-variant/30 text-on-surface font-body-md text-body-md py-sm rounded-lg hover:bg-surface-variant/20 active:scale-[0.98] transition-all flex items-center justify-center gap-sm">
            <svg fill="none" height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.64 9.20455C17.64 8.56636 17.5827 7.95273 17.4764 7.36364H9V10.845H13.8436C13.635 11.97 13.0009 12.9232 12.0477 13.5614V15.8195H14.9564C16.6582 14.2527 17.64 11.9455 17.64 9.20455Z" fill="#4285F4"></path>
              <path d="M9 18C11.43 18 13.4673 17.1941 14.9564 15.8195L12.0477 13.5614C11.2418 14.1014 10.2109 14.4205 9 14.4205C6.65591 14.4205 4.67182 12.8373 3.96409 10.71H0.957275V13.0418C2.43818 15.9832 5.48182 18 9 18Z" fill="#34A853"></path>
              <path d="M3.96409 10.71C3.78409 10.17 3.68182 9.59318 3.68182 9C3.68182 8.40682 3.78409 7.83 3.96409 7.29V4.95818H0.957275C0.347727 6.17318 0 7.54773 0 9C0 10.4523 0.347727 11.8268 0.957275 13.0418L3.96409 10.71Z" fill="#FBBC05"></path>
              <path d="M9 3.57955C10.3214 3.57955 11.5077 4.03364 12.4405 4.92545L15.0218 2.34409C13.4632 0.891818 11.4259 0 9 0C5.48182 0 2.43818 2.01682 0.957275 4.95818L3.96409 7.29C4.67182 5.16273 6.65591 3.57955 9 3.57955Z" fill="#EA4335"></path>
            </svg>
            Sign in with Google
          </button>
          {/* Secondary Footer */}
          <footer className="mt-md pt-md border-t border-outline-variant/30 flex flex-col gap-xs items-center">
            <p className="font-label-sm text-label-sm text-on-surface-variant">Don't have an enterprise account?</p>
            <a className="font-label-sm text-label-sm text-primary font-bold hover:underline" href="#">Request Access</a>
          </footer>
        </div>
        {/* System Status Bar */}
        <div className="mt-xl flex items-center gap-xl text-outline/60 font-label-sm text-label-sm">
          <div className="flex items-center gap-xs">
            <span className="material-symbols-outlined text-[14px] text-tertiary-container">lock</span>
            <span>End-to-End Encrypted</span>
          </div>
          <div className="flex items-center gap-xs">
            <span className="material-symbols-outlined text-[14px] text-tertiary-container">verified_user</span>
            <span>SOC2 Type II Certified</span>
          </div>
          <div className="flex items-center gap-xs">
            <div className="w-1.5 h-1.5 rounded-full bg-tertiary-container animate-pulse"></div>
            <span>Systems Operational</span>
          </div>
        </div>
      </main>
      {/* Bottom Decorative Overlay */}
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-container-lowest to-transparent pointer-events-none z-30 opacity-60"></div>
    </div>
  );
}