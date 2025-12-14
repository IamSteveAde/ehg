"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

function PolicySection({ title, children }: SectionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl bg-white shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-5 text-left font-semibold text-gray-900 hover:bg-gray-50 transition"
      >
        <span>{title}</span>
        <ChevronDown
          className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="px-5 pb-6 pt-2 text-gray-700 leading-relaxed text-sm md:text-base">
          {children}
        </div>
      )}
    </div>
  );
}

export default function PoliciesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-10">
          Chuks AI – Website Policies
        </h1>

        <div className="space-y-6">

          {/* 1.0 TERMS OF SERVICE */}
          <PolicySection title="1.0 Terms of Service">
            <p>
              Chuks AI is a paid AI-powered service designed to assist users with
              automated tools, insights, and content generation. By accessing the
              platform, you agree to abide by the following terms.
            </p>

            <h3 className="font-semibold mt-4">1.1 Overview</h3>
            <p>
              Chuks AI provides automated digital services for personal and business
              use. All features require payment before access is granted.
            </p>

            <h3 className="font-semibold mt-4">1.2 Eligibility</h3>
            <ul className="list-disc pl-6">
              <li>You must be 18 years old or older.</li>
              <li>The service is available exclusively within Nigeria.</li>
            </ul>

            <h3 className="font-semibold mt-4">1.3 Account Responsibility</h3>
            <p>
              You are responsible for maintaining the confidentiality of your
              account and ensuring your information remains accurate.
            </p>

            <h3 className="font-semibold mt-4">1.4 Acceptable Use</h3>
            <p>Users may not use Chuks AI for:</p>
            <ul className="list-disc pl-6">
              <li>Fraud, impersonation, or illegal activities</li>
              <li>Harassment, hate speech, or abusive behaviour</li>
              <li>Cybersecurity attacks or malware generation</li>
              <li>Training competing AI systems using Chuks AI output</li>
            </ul>

            <h3 className="font-semibold mt-4">1.5 AI Limitations</h3>
            <p>
              AI-generated content may be incomplete, incorrect, or unsuitable for
              professional use. Users must exercise independent judgment.
            </p>

            <h3 className="font-semibold mt-4">1.6 Intellectual Property</h3>
            <p>
              Chuks AI owns all platform technology. Users may use outputs but may
              not resell or replicate the service.
            </p>

            <h3 className="font-semibold mt-4">1.7 Suspension & Termination</h3>
            <p>
              Violations of these terms may result in account suspension without
              refund.
            </p>

            <h3 className="font-semibold mt-4">1.8 Governing Law</h3>
            <p>These terms are governed by Nigerian law.</p>
          </PolicySection>

          {/* 2.0 PRIVACY POLICY */}
          <PolicySection title="2.0 Privacy Policy">
            <p>
              Chuks AI is committed to protecting your personal data and ensuring
              compliance with the Nigeria Data Protection Act (NDPA).
            </p>

            <h3 className="font-semibold mt-4">2.1 Data We Collect</h3>
            <ul className="list-disc pl-6">
              <li>Name, email, phone number</li>
              <li>Payment and billing information</li>
              <li>Usage logs and interaction history</li>
              <li>Device and browser data</li>
            </ul>

            <h3 className="font-semibold mt-4">2.2 How We Use Data</h3>
            <ul className="list-disc pl-6">
              <li>Deliver and improve services</li>
              <li>Process payments and provide support</li>
              <li>Detect fraud and enhance security</li>
            </ul>

            <h3 className="font-semibold mt-4">2.3 Data Storage & Security</h3>
            <p>
              We use industry-grade security systems and restrict access to
              authorized personnel only.
            </p>

            <h3 className="font-semibold mt-4">2.4 Data Sharing</h3>
            <p>We do not sell user data. Limited sharing may occur with:</p>
            <ul className="list-disc pl-6">
              <li>Payment processors</li>
              <li>Cloud providers</li>
              <li>Legal authorities when required</li>
            </ul>

            <h3 className="font-semibold mt-4">2.5 User Rights</h3>
            <p>
              Users may request access, correction, deletion, or account closure via
              email at: <strong>[Insert Support Email]</strong>
            </p>

            <h3 className="font-semibold mt-4">2.6 Regulatory Compliance</h3>
            <p>Chuks AI complies with the NDPA and related Nigerian regulations.</p>
          </PolicySection>

          {/* 3.0 PRICING & BILLING */}
          <PolicySection title="3.0 Pricing, Billing & Subscription Policy">
            <h3 className="font-semibold">3.1 Payments</h3>
            <p>All services are paid in Nigerian Naira (₦) via approved payment gateways.</p>

            <h3 className="font-semibold mt-4">3.2 Subscriptions</h3>
            <p>Plans may be monthly, annual, or usage-based. Renewals occur automatically.</p>

            <h3 className="font-semibold mt-4">3.3 Cancellation</h3>
            <p>
              Users may cancel at any time. Cancellation prevents future charges but
              does not refund the current billing cycle.
            </p>

            <h3 className="font-semibold mt-4">3.4 Price Changes</h3>
            <p>We may adjust pricing with advance notice on the platform.</p>
          </PolicySection>

          {/* 4.0 REFUND POLICY */}
          <PolicySection title="4.0 Refund Policy">
            <p>
              Due to the nature of digital AI services, all payments are
              non-refundable once access is granted.
            </p>

            <p className="mt-3">Refunds may be issued only for:</p>
            <ul className="list-disc pl-6">
              <li>Duplicate payments</li>
              <li>Confirmed billing errors</li>
            </ul>

            <p className="mt-3">
              Refund requests must be submitted within 7 days to:
              <strong> [Insert Support Email]</strong>
            </p>
          </PolicySection>

          {/* 5.0 ACCEPTABLE USE POLICY */}
          <PolicySection title="5.0 Acceptable Use Policy">
            <p>Users must interact with Chuks AI responsibly and ethically.</p>

            <h3 className="font-semibold mt-3">Prohibited Activities:</h3>
            <ul className="list-disc pl-6">
              <li>Harmful, misleading, or abusive content generation</li>
              <li>Political manipulation or misinformation</li>
              <li>Financial, medical, or legal advice presented as professional</li>
              <li>Any activity violating Nigerian law</li>
            </ul>
          </PolicySection>

          {/* 6.0 AI ETHICS */}
          <PolicySection title="6.0 AI Ethics & Responsible Use Policy">
            <p>Chuks AI is committed to safe, transparent, and responsible AI use.</p>

            <p className="mt-3">
              AI outputs are informational and may contain errors. Users must apply
              human judgment and remain responsible for all decisions made using AI
              content.
            </p>
          </PolicySection>

          {/* 7.0 DISCLAIMER */}
          <PolicySection title="7.0 Disclaimer">
            <p>
              Chuks AI is provided “as-is” without guarantees of accuracy,
              completeness, or suitability. We are not liable for damages or losses
              resulting from the use of AI-generated content.
            </p>
          </PolicySection>

          {/* 8.0 CONTACT INFORMATION */}
          <PolicySection title="8.0 Contact Information">
            <p>
              For enquiries or support:  
              <strong> [Insert Support Email] </strong>
            </p>

            <p className="mt-3">
              Business Name: Chuks AI <br />
              Jurisdiction: Nigeria
            </p>
          </PolicySection>

        </div>
      </div>
    </div>
  );
}
