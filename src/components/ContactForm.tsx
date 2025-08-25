"use client";
import { useState } from "react";
export function ContactForm() {
  const [state, setState] = useState({ name: "", email: "", message: "" });
  const href = `mailto:hello@naturaledgemedia.net?subject=Project%20Inquiry%20(Natural%20Edge%20Media)&body=${encodeURIComponent(
    `Name: ${state.name}\nEmail: ${state.email}\n\n${state.message}`
  )}`;
  return (
    <form className="card space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label className="block text-sm text-white/70">Name</label>
        <input className="mt-1 w-full rounded-xl bg-white/5 px-4 py-3 outline-none ring-1 ring-white/10"
               value={state.name} onChange={(e)=>setState({...state, name: e.target.value})} placeholder="Your name" />
      </div>
      <div>
        <label className="block text-sm text-white/70">Email</label>
        <input className="mt-1 w-full rounded-xl bg-white/5 px-4 py-3 outline-none ring-1 ring-white/10"
               value={state.email} onChange={(e)=>setState({...state, email: e.target.value})} placeholder="you@brand.com" />
      </div>
      <div>
        <label className="block text-sm text-white/70">Project details</label>
        <textarea rows={5} className="mt-1 w-full rounded-xl bg-white/5 px-4 py-3 outline-none ring-1 ring-white/10"
                  value={state.message} onChange={(e)=>setState({...state, message: e.target.value})}
                  placeholder="Goals, timeline, budget range (optional)" />
      </div>
      <a className="btn" href={href}>Email proposal request</a>
      <p className="text-xs text-white/50">No pricing tables—every proposal is tailored.</p>
    </form>
  );
}
