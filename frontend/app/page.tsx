'use client';

import Link from 'next/link';
import { useState } from 'react';
import Wrapper from '@/components/magicui/Wrapper';
import { ArrowRight, Sparkles, ShieldCheck, Zap, Users, Package, TrendingUp, ChevronDown, Instagram, Twitter, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-gray-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-20" />

      <div className="relative z-10 flex items-center justify-center min-h-[90vh] px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">Your Campus Marketplace</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 leading-tight tracking-tight animate-fade-in-up">
            Buy, Sell, Trade.
            <br />
            <span className="text-gray-400">Just for Campus.</span>
          </h1>

          <p className="text-lg text-gray-500 mb-10 max-w-xl mx-auto leading-relaxed animate-fade-in-up-delay">
            Dormigo is a student-only marketplace where you buy and sell second-hand items with people on your campus.
          </p>

          {/* CTA buttons — primary / secondary hierarchy */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up-delay-2">
            <Link
              href="/browse"
              className="group relative px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 text-lg shadow-lg shadow-gray-900/20 hover:shadow-xl hover:shadow-gray-900/30 hover:-translate-y-0.5 flex items-center gap-2"
            >
              Browse Listings
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/sell"
              className="px-8 py-4 bg-white text-gray-600 border border-gray-200 rounded-xl font-medium hover:border-gray-400 hover:text-gray-900 transition-all duration-300 text-lg hover:-translate-y-0.5"
            >
              Post an Item
            </Link>
          </div>
        </div>
      </div>

      {/* Sticky mobile CTA bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-white border-t border-gray-200 px-4 py-3 flex gap-3">
        <Link
          href="/browse"
          className="flex-1 text-center py-3 bg-gray-900 text-white rounded-xl font-semibold text-sm"
        >
          Browse Listings
        </Link>
        <Link
          href="/sell"
          className="flex-1 text-center py-3 border border-gray-200 text-gray-700 rounded-xl font-medium text-sm"
        >
          Post an Item
        </Link>
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: 'Campus Verified',
      description: 'Only verified students from your campus can join. Safe and trusted transactions.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'List items in seconds. Browse and connect with sellers instantly.',
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Built for students, by students. Support your campus community.',
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Dormigo?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need for seamless campus commerce.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-gray-900/5 transition-all duration-300 border border-transparent hover:border-gray-200"
            >
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Package,
      title: 'List Your Item',
      description: 'Take a photo, add details, and publish in under a minute.',
    },
    {
      icon: Users,
      title: 'Connect With Buyers',
      description: 'Interested students reach out directly through the platform.',
    },
    {
      icon: TrendingUp,
      title: 'Complete The Deal',
      description: 'Meet up safely on campus and complete your transaction.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Getting started is simple. List your first item in under a minute.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div
            className="hidden md:block absolute h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent"
            style={{ top: '48px', left: 0, right: 0 }}
          />
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-white border-4 border-gray-100 rounded-2xl mb-6 relative z-10 shadow-lg">
                <step.icon className="w-10 h-10 text-gray-900" />
              </div>
              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold z-20">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      q: 'Who can join Dormigo?',
      a: 'Dormigo is exclusively for students. You sign up with your details and are part of your campus community — no outsiders.',
    },
    {
      q: 'How do I pay?',
      a: 'Payments are handled through the platform. Once a deal is agreed, you pay securely and meet on campus to exchange the item.',
    },
    {
      q: 'Is it safe to meet strangers on campus?',
      a: 'Everyone on Dormigo is a verified student from your campus. We recommend meeting in public campus areas like libraries or student centres.',
    },
    {
      q: 'What can I sell?',
      a: 'Textbooks, electronics, furniture, clothes, bikes — anything a student might need. Items must be legal and in reasonable condition.',
    },
    {
      q: 'What if I have an issue with a transaction?',
      a: 'Contact us at support@dormigo.com and we\'ll help resolve it. Buyer and seller protection is built into every order.',
    },
  ];

  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Everything you need to know before getting started.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ml-4 ${open === index ? 'rotate-180' : ''}`}
                />
              </button>
              {open === index && (
                <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Start in 2 minutes.
        </h2>
        <p className="text-xl text-gray-600 mb-3 max-w-2xl mx-auto">
          Sign up, list your first item, and reach buyers on your campus today.
        </p>
        <p className="text-sm text-gray-400 mb-10">No credit card required.</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/signup"
            className="px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 text-lg shadow-lg hover:-translate-y-0.5"
          >
            Create Account
          </Link>
          <Link
            href="/browse"
            className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-xl font-medium hover:border-gray-400 hover:text-gray-900 transition-all duration-300 text-lg hover:-translate-y-0.5"
          >
            Explore Listings
          </Link>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="text-lg font-bold text-gray-900">Dormigo</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <Link href="/terms" className="hover:text-gray-900 transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
            <a href="mailto:support@dormigo.com" className="hover:text-gray-900 transition-colors">Contact</a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-gray-900 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-gray-900 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="mailto:support@dormigo.com" aria-label="Email" className="text-gray-400 hover:text-gray-900 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Dormigo. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default function DormigoHomepage() {
  return (
    <div className="min-h-screen bg-white">
      <Wrapper>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <FAQSection />
        <CTASection />
        <Footer />
      </Wrapper>
    </div>
  );
}
