"use client";

import { useState } from "react";
import { site, whatsappLink } from "@/site.config";

const categories = ["Nutraceuticals", "Skincare or haircare", "Ayurvedic or wellness", "Not sure yet"];
const budgets = ["Under ₹2 lakh", "₹2–5 lakh", "₹5–10 lakh", "Above ₹10 lakh", "Not sure yet"];

// Sends the enquiry as a pre-filled WhatsApp message, so it needs no server or
// email service. To also receive enquiries by email, connect a form service
// (for example Formspree or Resend) here later.
export function ContactForm() {
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    if (!name || !phone) {
      setError("Add your name and phone number so we can reply.");
      return;
    }
    setError("");
    const message = [
      `Hi, I'm ${name}. I'd like to book a free call about launching my brand.`,
      `Phone: ${phone}`,
      `Category: ${data.get("category")}`,
      `Budget: ${data.get("budget")}`,
      data.get("idea") ? `Idea: ${data.get("idea")}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  }

  const field = "mt-2 w-full rounded-xl border border-mist bg-paper px-4 py-3 text-ink";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-bold">
          Your name
          <input name="name" autoComplete="name" required className={field} />
        </label>
        <label className="block text-sm font-bold">
          Phone or WhatsApp number
          <input name="phone" type="tel" autoComplete="tel" required className={field} />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-bold">
          Product category
          <select name="category" className={field} defaultValue={categories[0]}>
            {categories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-bold">
          Budget to launch
          <select name="budget" className={field} defaultValue={budgets[4]}>
            {budgets.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="block text-sm font-bold">
        Your product idea <span className="font-normal text-ink-soft">(optional)</span>
        <textarea name="idea" rows={4} className={field} />
      </label>
      {error && (
        <p role="alert" className="text-sm font-bold text-red-700">
          {error}
        </p>
      )}
      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="rounded-full bg-saffron px-6 py-3 font-bold text-ink hover:bg-saffron-deep hover:text-white">
          Send on WhatsApp
        </button>
        <span className="text-sm text-ink-soft">
          Prefer email? Write to{" "}
          <a className="underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </span>
      </div>
    </form>
  );
}
