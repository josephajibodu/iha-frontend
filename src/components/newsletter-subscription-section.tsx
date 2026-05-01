"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, Info, Loader2 } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { usePathname } from "next/navigation";
import ihaLogo from "@/assets/logo/iha-black.png";
import Image from "next/image";
import NewspaperMonotoneIcon from "@/components/icons/newspaper-monotone";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SUBSCRIBE_ENDPOINT = process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT ?? "";

export default function NewsletterSubscriptionSection() {
  const pathname = usePathname();
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!EMAIL_RE.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!consent) {
      setError("Please confirm consent to receive updates.");
      return;
    }
    if (!SUBSCRIBE_ENDPOINT) {
      toast.error("Subscription service is not configured. Please try again later.", {
        icon: <Info />,
        className: "border border-primary-green",
      });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(SUBSCRIBE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          source: pathname || "/",
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      setSubmitted(true);
      setEmail("");
      setConsent(false);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-white py-20 px-8">
      <div className="px-8 lg:px-24 py-14 gap-x-12 max-w-screen-lg mx-auto bg-accent-100 rounded-[44px] border border-primary relative overflow-hidden">
        <Image
          src={ihaLogo}
          alt=""
          aria-hidden="true"
          className="h-full w-auto absolute -top-6 left-2 opacity-5 object-contain"
        />
        <NewspaperMonotoneIcon className="text-red-300 absolute right-0 bottom-0" aria-hidden="true" />

        <h3 className="text-xl sm:text-3xl text-center text-primary font-medium sm:mb-3">
          Subscribe to Our Newsletter
        </h3>

        <p className="text-center sm:text-lg text-primary font-light mb-4">
          Keep up with our latest news and events by subscribing to our weekly newsletter
        </p>

        {submitted ? (
          <div className="flex justify-center">
            <div className="flex items-center gap-3 bg-white border border-primary rounded-md px-5 py-4 shadow-sm">
              <CheckCircle2 className="text-[#006666]" />
              <p className="text-primary font-medium">Thank you for subscribing!</p>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col items-center gap-3 max-w-md mx-auto"
          >
            <label className="w-full">
              <span className="sr-only">Email address</span>
              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full h-12 border border-primary"
                aria-invalid={!!error}
              />
            </label>

            <label className="flex items-start gap-2 text-sm text-primary cursor-pointer w-full">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 size-4 accent-[#006666]"
                required
              />
              <span>I agree to receive updates from InnovateHealth Africa.</span>
            </label>

            {error && (
              <p className="text-sm text-red-600 self-start" role="alert">
                {error}
              </p>
            )}

            <Button type="submit" disabled={submitting} className="w-full sm:w-fit min-w-32">
              {submitting ? (
                <span className="inline-flex items-center gap-2">
                  <Loader2 className="animate-spin size-4" /> Subscribing…
                </span>
              ) : (
                "Subscribe"
              )}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
