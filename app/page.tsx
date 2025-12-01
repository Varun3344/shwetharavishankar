
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Check,
  Clock,
  Facebook,
  Gavel,
  Handshake,
  Landmark,
  Linkedin,
  MapPin,
  Phone,
  Scale,
  ScrollText,
  Twitter,
  Instagram,
  Users,
  Quote,
} from "lucide-react";

type SocialPlatform = "facebook" | "twitter" | "instagram" | "linkedin";

type PracticeArea = {
  title: string;
  description: string;
  icon: LucideIcon;
  highlight?: boolean;
};

type Advocate = {
  name: string;
  credential: string;
  image: string;
  socials: SocialPlatform[];
};

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  image: string;
  highlight?: boolean;
};

type BlogPost = {
  title: string;
  date: string;
  image: string;
};

type StatCard = {
  label: string;
  value: string;
  icon: LucideIcon;
};
const heroImage =
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Practice Areas", href: "#practice" },
  { label: "Team", href: "#team" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const practiceAreas: PracticeArea[] = [
  {
    title: "Civil Litigation",
    description: "Strategic representation for contested civil disputes.",
    icon: Gavel,
  },
  {
    title: "Legal Advisory",
    description: "Proactive counsel for contracts, compliance, and risk.",
    icon: ScrollText,
  },
  {
    title: "Land Laws",
    description: "Due diligence, title verifications, and property disputes.",
    icon: Landmark,
  },
  {
    title: "Business Laws",
    description: "Clear legal solutions for entrepreneurs and enterprises.",
    icon: Briefcase,
  },
  {
    title: "Family Laws",
    description: "Compassionate guidance through delicate family matters.",
    icon: Handshake,
  },
  {
    title: "Legal Opinions",
    description: "Structured, research-backed legal interpretations.",
    icon: Scale,
  },
  {
    title: "Banking Laws",
    description: "Advisory for NBFCs and banks navigating regulations.",
    icon: Landmark,
  },
  {
    title: "More Services",
    description: "Explore the full range of courtroom and advisory work.",
    icon: ArrowUpRight,
    highlight: true,
  },
];

const advocates: Advocate[] = [
  {
    name: "Ravishankar Kandhi",
    credential: "BCom, LLB, FCS",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
    socials: ["facebook", "twitter", "instagram", "linkedin"],
  },
  {
    name: "Guruswamy",
    credential: "BCom, LLB",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
    socials: ["facebook", "twitter", "instagram", "linkedin"],
  },
  {
    name: "Nagamani",
    credential: "BCom, LLB",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
    socials: ["facebook", "twitter", "instagram", "linkedin"],
  },
  {
    name: "Divya Menon",
    credential: "LLB, LLM",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
    socials: ["facebook", "twitter", "instagram", "linkedin"],
  },
  {
    name: "Rahul Prakash",
    credential: "BBA, LLB",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=600&q=80",
    socials: ["facebook", "twitter", "instagram", "linkedin"],
  },
  {
    name: "Aparna Nair",
    credential: "BCom, LLB",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80",
    socials: ["facebook", "twitter", "instagram", "linkedin"],
  },
  {
    name: "Siddarth Rao",
    credential: "BSc, LLB",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=600&q=80",
    socials: ["facebook", "twitter", "instagram", "linkedin"],
  },
];

const advocateHighlights = [
  "Trusted, transparent, and relentless advocacy.",
  "Defending your rights with empathetic dedication.",
  "Navigating complexities with practical strategies.",
];
const serviceHighlights: StatCard[] = [
  { label: "Clients Served", value: "3000+", icon: Users },
  { label: "Litigations Handled", value: "1650+", icon: Gavel },
  { label: "Industries Guided", value: "35+", icon: Briefcase },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "My Lawyer Helpers were prompt, professional, and quick with their delivery. They were careful with my new couch and made sure it was kept perfect. I had my new couch home in less than an hour.",
    name: "Anna Motzart",
    role: "Business Woman",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "Their experience shows in every interaction. The firm handled my case with absolute clarity, kept me updated, and negotiated a settlement that exceeded expectations.",
    name: "John Jackson",
    role: "Basketball Player",
    image:
      "https://images.unsplash.com/photo-1500522144261-ea64433bbe27?auto=format&fit=crop&w=200&q=80",
    highlight: true,
  },
  {
    quote:
      "Empathetic, meticulous, and fearless. I felt heard throughout the process and the team delivered results without compromising on dignity.",
    name: "Lisa Nickson",
    role: "Entrepreneur",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=200&q=80",
  },
];

const blogPosts: BlogPost[] = [
  {
    title: "How to Protect Assets in Divorce",
    date: "June 10, 2024",
    image:
      "https://images.unsplash.com/photo-1520405701042-49c10b67ab2b?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "How Our Advocates Prepare for Trial",
    date: "April 7, 2025",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Designing Legal Strategies Like a Pro",
    date: "June 10, 2024",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=500&q=80",
  },
];

const contactCards = [
  {
    title: "Call Us",
    detail: "+91 98440 55379",
    icon: Phone,
  },
  {
    title: "Working Hours",
    detail: "9 AM to 7 PM (Monday to Saturday)",
    icon: Clock,
  },
  {
    title: "Our News",
    detail: "Insights, updates, thought leadership",
    icon: ScrollText,
  },
  {
    title: "Our Location",
    detail: "Nagarbhavi 1st Stage, Bengaluru",
    icon: MapPin,
  },
];

const socialIconMap: Record<SocialPlatform, LucideIcon> = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  linkedin: Linkedin,
};

const heroStats = [
  { value: "1650+", label: "Successful Cases" },
  { value: "18", label: "Years of Experience" },
];

const advocateCarousel = [...advocates, ...advocates];

const gallerySections = [
  {
    title: "Office Photos",
    description: "A glimpse into our collaborative workspaces and warm welcome areas.",
    images: [
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    title: "Programmes Photos",
    description: "Workshops, community programs, and client sessions in action.",
    images: [
      "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    title: "Other Photos",
    description: "Memories from celebrations, client milestones, and firm life.",
    images: [
      "https://images.unsplash.com/photo-1515165562835-c4c18a7dfe0b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
    ],
  },
];
export default function Home() {
  return (
    <div id="home" className="min-h-screen bg-[#f8f1e7] text-[#2f2a24]">
      <div className="border-b border-[#eadbcc] bg-[#f3eadf] text-xs sm:text-sm">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-4 text-[#7d6a58]">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#c99d6b]" /> Nagarbhavi 1st Stage,
              Bengaluru
            </span>
            <span className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#c99d6b]" /> +91 98440 55379
            </span>
          </div>
          <div className="flex items-center gap-4 text-[#7d6a58]">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
              <Link
                key={Icon.name}
                href="#contact"
                aria-label={`Visit our ${
                  ["Facebook", "Twitter", "Instagram", "LinkedIn"][idx]
                } page`}
                className="rounded-full border border-[#e5d5c4] p-1.5 transition hover:border-[#c99d6b] hover:text-[#c99d6b]"
              >
                <Icon className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-[#eadbcc] bg-[#fff8f0]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Shwetha Ravishankar logo"
              width={64}
              height={64}
              className="h-14 w-14"
              priority
            />
            <div>
              <p className="font-display text-lg font-semibold leading-tight text-[#2f2a24]">
                Shwetha Ravishankar
              </p>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#c99d6b]">
                And Associates
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-[#7d6a58] lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-[#c99d6b]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="rounded-full border border-[#c99d6b]/70 px-5 py-2 text-sm font-semibold text-[#c99d6b] transition hover:bg-[#c99d6b] hover:text-[#2f2a24]"
            >
              Contact Us
            </Link>
          </nav>
          <div className="lg:hidden">
            <Link
              href="#contact"
              className="rounded-full border border-[#c99d6b]/70 px-4 py-2 text-xs font-semibold text-[#c99d6b]"
            >
              Book Now
            </Link>
          </div>
        </div>
      </header>

      <main className="space-y-24 pb-24 pt-0 sm:pt-0">
        <section className="border-y border-[#eadbcc] bg-gradient-to-br from-[#f7ecdc] via-[#fbf4ea] to-[#f2ddc8]">
          <div className="hero-animate mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#eadbcc] px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-[#7d6a58]">
                Boutique Law Firm
              </span>
              <div className="space-y-4">
                <p className="font-display text-4xl leading-tight text-[#2f2a24] sm:text-5xl lg:text-6xl">
                  Clients First. <br />
                  <span className="text-[#c99d6b]">Quality Always.</span>
                </p>
                <p className="text-base leading-relaxed text-[#7d6a58] lg:text-lg">
                  Count on us to secure a just outcome for you in the most
                  efficient way possible, balancing affordability with
                  empathetic guidance at every step.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#c99d6b] px-8 py-3 text-sm font-semibold text-[#2f2a24] shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition hover:bg-[#c69948]"
                >
                  Contact Us
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#dccabc] px-8 py-3 text-sm font-semibold text-[#4f4338] transition hover:border-[#c99d6b] hover:text-[#c99d6b]"
                >
                  Book Appointment <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="flex flex-wrap gap-8 pt-4 text-sm text-[#7d6a58] sm:gap-14">
                {heroStats.map((stat) => {
                  const highlight = stat.label === "Years of Experience";
                  return (
                    <div
                      key={stat.label}
                      className={
                        highlight
                          ? "rounded-3xl border border-[#eadbcc] bg-[#fff6ec] px-6 py-4 shadow-lg"
                          : undefined
                      }
                    >
                      <p
                        className={`text-3xl font-semibold ${
                          highlight ? "text-[#c99d6b]" : "text-[#c99d6b]"
                        }`}
                      >
                        {stat.value}
                      </p>
                      <p
                        className={`uppercase tracking-[0.3em] ${
                          highlight ? "text-[#2f2a24]" : ""
                        }`}
                      >
                        {stat.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="rounded-[32px] border border-[#eadbcc] bg-[#fff6ec] p-3">
              <div className="relative overflow-hidden rounded-[28px] bg-[#fff9f2]">
                <Image
                  src={heroImage}
                  alt="Lead Advocate"
                  width={640}
                  height={820}
                  className="profile-slide h-[480px] w-full object-cover lg:h-[520px]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 rounded-2xl bg-[#2f2a24]/80 px-5 py-4 text-sm backdrop-blur">
                  <p className="text-[#7d6a58]">Lead Counsel</p>
                  <p className="text-lg font-semibold">Shwetha Ravishankar</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="practice"
          className="scroll-mt-36 mx-auto max-w-6xl px-6"
        >
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-[#98836f]">
              Our Areas of
            </p>
            <h2 className="font-display text-3xl text-[#2f2a24] sm:text-4xl">
              Practice
            </h2>
            <p className="mt-3 text-[#7d6a58]">
              Taking on a full range of divorce and civil issues.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {practiceAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div
                  key={area.title}
                  className={`practice-card flex flex-col rounded-3xl border border-[#eadbcc] p-6 transition ${
                    area.highlight
                      ? "bg-[#c99d6b] text-[#2f2a24]"
                      : "bg-white text-[#4f4338] hover:-translate-y-1"
                  }`}
                >
                  <div
                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${
                      area.highlight
                        ? "bg-[#d8c5b3] text-[#2f2a24]"
                        : "bg-[#fff6ec] text-[#c99d6b]"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3
                    className={`font-display text-xl ${
                      area.highlight ? "text-[#2f2a24]" : "text-[#2f2a24]"
                    }`}
                  >
                    {area.title}
                  </h3>
                  <p
                    className={`mt-2 text-sm ${
                      area.highlight ? "text-[#2f2a24]/80" : "text-[#7d6a58]"
                    }`}
                  >
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section
          id="about"
          className="scroll-mt-36 mx-auto max-w-6xl space-y-16 px-6 py-16"
        >
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.4em] text-[#c99d6b]">
                About Us
              </p>
              <div className="space-y-3">
                <h2 className="font-display text-4xl leading-tight text-[#2f2a24]">
                  Shwetha Ravishankar
                </h2>
                <p className="font-display text-3xl text-[#c99d6b]">
                  Advocate & Consultant
                </p>
                <p className="text-[#7d6a58]">
                  Main goal is to produce the most suitable legal outcome.
                </p>
              </div>
              <p className="text-[#7d6a58]">
                Advocate Shwetha Ravishankar is known for her client-focused
                approach and for handling diverse areas, including civil and
                criminal law litigation and corporate advisory. Her transparent
                communication and thorough case preparation command respect among
                peers. By balancing legal acumen with empathy, she expertly guides
                clients through complex cases. Beyond her practice, she actively
                participates in community initiatives to foster legal awareness
                and access to justice.
              </p>
              <div className="flex flex-wrap gap-4 text-[#c99d6b]">
                {[Briefcase, Handshake, Scale, Landmark, ScrollText, Gavel].map(
                  (Icon) => (
                    <span
                      key={Icon.name}
                      className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#eadbcc] bg-[#fff6ec]"
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                  ),
                )}
              </div>
            </div>
            <div className="rounded-[32px] border border-[#eadbcc] bg-white p-4">
              <div className="overflow-hidden rounded-[24px]">
                <Image
                  src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80"
                  alt="Advocate portrait"
                  width={640}
                  height={760}
                  className="h-[420px] w-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[32px] border border-[#eadbcc] bg-white p-4">
              <div className="overflow-hidden rounded-[24px]">
                <Image
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80"
                  alt="Client interaction"
                  width={640}
                  height={760}
                  className="h-[420px] w-full object-cover"
                />
              </div>
            </div>
            <div className="rounded-[32px] border border-[#eadbcc] bg-white p-8">
              <p className="text-sm uppercase tracking-[0.4em] text-[#c99d6b]">
                Our Mission
              </p>
              <h3 className="font-display text-3xl text-[#2f2a24]">
                Legal delivers with care and highest quality.
              </h3>
              <p className="mt-4 text-[#7d6a58]">
                At Shwetha Ravishankar and Associates, our mission is to deliver
                trusted, high-quality legal services with a client-focused
                approach. We protect and represent clients’ rights across consumer
                law, criminal defense, mediation, insurance claims, family
                matters, and corporate issues. Through compassion, strategic
                counsel, and thorough advocacy, we guide clients through legal
                complexities with clarity and commitment.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                {[
                  "Civil Laws",
                  "Criminal Law",
                  "Property Laws",
                  "Family Laws",
                  "Corporate Laws",
                  "Banking Laws",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#eadbcc] bg-[#fff6ec] px-4 py-1 text-[#7d6a58]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="about-details"
          className="scroll-mt-36 mx-auto max-w-6xl px-6 lg:grid lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-12"
        >
          <div className="relative mb-12 rounded-[32px] border border-[#eadbcc] bg-[#f8e9d7] p-4 lg:mb-0">
            <div className="overflow-hidden rounded-[24px]">
              <Image
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1000&q=80"
                alt="Advocate signing papers"
                width={640}
                height={760}
                className="h-[420px] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 right-8 rounded-3xl border border-[#e5d5c4] bg-[#fff8ef] px-8 py-6 shadow-2xl">
              <p className="text-5xl font-semibold text-[#c99d6b]">6</p>
              <p className="text-xs uppercase tracking-[0.4em] text-[#7d6a58]">
                Advocates Team
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-[#98836f]">
              Our Advocates Group
            </p>
            <h2 className="font-display text-3xl leading-tight sm:text-4xl">
              Your trusted ally in Indian law.
            </h2>
            <p className="text-[#7d6a58]">
              We tailor our approach specifically to meet your goals. Extensive
              experience, thorough preparation, and unwavering advocacy for your
              interests are critical to safeguarding your rights in civil,
              criminal, or family matters.
            </p>
            <ul className="space-y-3 text-sm text-[#6f5a49]">
              {advocateHighlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#c99d6b]/20 text-[#c99d6b]">
                    <Check className="h-4 w-4" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 rounded-2xl bg-white p-4">
              <Image
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=60"
                alt="Shwetha Ravishankar"
                width={56}
                height={56}
                className="rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-[#2f2a24]">Shwetha Ravishankar</p>
                <p className="text-xs uppercase tracking-[0.4em] text-[#98836f]">
                  The Advocate
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="team" className="scroll-mt-36 mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-[#98836f]">
              Meet Our
            </p>
            <h2 className="font-display text-3xl text-[#2f2a24] sm:text-4xl">
              Advocates
            </h2>
            <p className="mt-3 text-[#7d6a58]">
              Our professionals can help defend your rights.
            </p>
          </div>
          <div className="relative mt-10 overflow-hidden">
            <div className="marquee-track w-max gap-6">
              {advocateCarousel.map((advocate, index) => (
                <div
                  key={`${advocate.name}-${index}`}
                  className="min-w-[260px] rounded-3xl border border-[#eadbcc] bg-white p-4 sm:min-w-[320px]"
                  aria-hidden={index >= advocates.length}
                >
                  <div className="relative h-64 w-full overflow-hidden rounded-3xl bg-[#fff8ef]">
                    <Image
                      src={advocate.image}
                      alt={advocate.name}
                      fill
                      sizes="(max-width: 768px) 80vw, 320px"
                      className="object-cover"
                    />
                  </div>
                  <div className="mx-auto -mt-10 w-11/12 rounded-2xl bg-[#fff1df] p-5 text-center shadow-2xl">
                    <div className="mb-4 flex items-center justify-center gap-2">
                      {advocate.socials.map((social) => {
                        const Icon = socialIconMap[social];
                        return (
                          <span
                            key={social}
                            className="rounded-full bg-[#fff6ec] p-2 text-[#7d6a58]"
                          >
                            <Icon className="h-3.5 w-3.5" />
                          </span>
                        );
                      })}
                    </div>
                    <p className="font-display text-lg text-[#2f2a24]">
                      {advocate.name}
                    </p>
                    <p className="text-sm text-[#98836f]">
                      {advocate.credential}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[#c99d6b] px-8 py-3 text-sm font-semibold text-[#2f2a24]"
            >
              Are you an advocate interested in joining our law firm?
            </Link>
          </div>
        </section>

        <section
          id="services"
          className="scroll-mt-36 mx-auto max-w-6xl grid gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="rounded-[32px] border border-[#eadbcc] bg-[#f7eadb] p-8">
            <p className="text-xs uppercase tracking-[0.4em] text-[#98836f]">
              How Our Services Deliver
            </p>
            <h2 className="font-display text-3xl text-[#2f2a24]">
              We tailor our approach to meet your goals.
            </h2>
            <p className="mt-4 text-[#7d6a58]">
              Extensive experience, thorough preparation, and unwavering
              advocacy for your interests are critical to safeguarding your
              rights in civil, criminal, or family matters. Our advocates
              combine deep knowledge of relevant laws, offering sound legal
              advice for even the most complex cases.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-[#7d6a58]">
              {[
                "Civil Litigation",
                "Family Disputes",
                "Corporate Advisory",
                "Banking & Finance",
                "Real Estate",
                "Employment Law",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#e5d5c4] px-4 py-1 text-xs uppercase tracking-[0.2em]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {serviceHighlights.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.label}
                  className="rounded-[24px] border border-[#eadbcc] bg-[#fff5e8] p-6"
                >
                  <Icon className="h-8 w-8 text-[#c99d6b]" />
                  <p className="mt-6 text-4xl font-semibold text-[#2f2a24]">
                    {card.value}
                  </p>
                  <p className="text-sm uppercase tracking-[0.3em] text-[#7d6a58]">
                    {card.label}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="border-y border-[#eadbcc] bg-[#f2d3b2]/90 py-16">
          <div className="mx-auto max-w-6xl px-6 text-center text-[#2f2a24]">
            <p className="text-xs uppercase tracking-[0.4em] text-[#2f2a24]/60">
              Testimonials of Our Clients
            </p>
            <h2 className="font-display text-3xl">See what our clients say</h2>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className={`rounded-[32px] border border-[#d9cabc] bg-[#fff6ec] p-6 text-left shadow-lg ${
                    testimonial.highlight ? "lg:scale-105" : ""
                  }`}
                >
                  <Quote className="h-8 w-8 text-[#2f2a24]/30" />
                  <p className="mt-4 text-base text-[#2f2a24]/80">
                    {testimonial.quote}
                  </p>
                  <div className="mt-6 flex items-center gap-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-[#2f2a24]">
                        {testimonial.name}
                      </p>
                      <p className="text-xs uppercase tracking-[0.3em] text-[#2f2a24]/70">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="gallery"
          className="scroll-mt-36 mx-auto max-w-6xl px-6"
        >
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-[#98836f]">
              Gallery
            </p>
            <h2 className="font-display text-3xl text-[#2f2a24] sm:text-4xl">
              Moments From Our Practice
            </h2>
            <p className="mt-3 text-[#7d6a58]">
              Explore memories from our office, programmes, and firm life.
            </p>
          </div>
          <div className="mt-10 space-y-12">
            {gallerySections.map((section) => (
              <div
                key={section.title}
                className="rounded-[32px] border border-[#eadbcc] bg-white p-8"
              >
                <div className="flex flex-col gap-2 text-center">
                  <h3 className="font-display text-2xl text-[#2f2a24]">
                    {section.title}
                  </h3>
                  <p className="text-sm text-[#7d6a58]">
                    {section.description}
                  </p>
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  {section.images.map((image) => (
                    <div
                      key={image}
                      className="relative h-52 w-full overflow-hidden rounded-3xl bg-[#fff6ec]"
                    >
                      <Image
                        src={image}
                        alt={`${section.title} preview`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="blog" className="scroll-mt-36 mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-4 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-[#98836f]">
              Latest News & Updates
            </p>
            <h2 className="font-display text-3xl text-[#2f2a24]">
              Stay up to date with helpful information
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {blogPosts.map((post) => (
              <div
                key={post.title}
                className="flex flex-col rounded-[28px] border border-[#eadbcc] bg-[#fffdf8]"
              >
                <div className="relative h-56 w-full overflow-hidden rounded-[28px] rounded-b-none">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 px-6 py-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-[#98836f]">
                    {post.date}
                  </p>
                  <h3 className="font-display text-xl text-[#2f2a24]">
                    {post.title}
                  </h3>
                  <Link
                    href="#"
                    className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#c99d6b]"
                  >
                    Read More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-[32px] border border-[#e5d5c4] bg-[#f2d3b2]/20 p-8 text-center lg:p-12">
            <h3 className="font-display text-2xl text-[#2f2a24]">
              To get latest news & updates, fill the form below
            </h3>
            <form className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <input
                type="email"
                placeholder="Enter your email..."
                className="w-full flex-1 rounded-full border border-[#dccabc] bg-white px-6 py-3 text-sm text-[#2f2a24] placeholder:text-[#98836f] focus:border-[#c99d6b] focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-[#c99d6b] px-8 py-3 text-sm font-semibold text-[#2f2a24]"
              >
                Join Us Now
              </button>
            </form>
          </div>
        </section>

        <section
          id="contact"
          className="scroll-mt-36 mx-auto max-w-6xl space-y-10 px-6 pb-6 pt-4 lg:space-y-0 lg:pb-0"
        >
          <div className="grid gap-6 lg:grid-cols-3">
            {contactCards.map((card) => {
              const Icon = card.icon;
              const isLocation = card.title === "Our Location";
              return (
                <div
                  key={card.title}
                  className="rounded-[28px] border border-[#eadbcc] bg-white p-6"
                >
                  <Icon className="h-7 w-7 text-[#c99d6b]" />
                  <p className="mt-4 font-display text-xl text-[#2f2a24]">
                    {card.title}
                  </p>
                  <p className="text-sm text-[#7d6a58]">{card.detail}</p>
                  {isLocation ? (
                    <>
                      <div className="mt-4 overflow-hidden rounded-2xl border border-[#eadbcc]">
                        <iframe
                          title="Office location map"
                          src="https://www.google.com/maps?q=https://maps.app.goo.gl/2ZoM9v7xoxhAYKgc8&output=embed"
                          width="100%"
                          height="180"
                          loading="lazy"
                          className="w-full"
                        />
                      </div>
                      <div className="mt-3 flex flex-col gap-2 text-sm text-[#7d6a58]">
                        <span>Get directions to reach our office.</span>
                        <a
                          href="https://maps.app.goo.gl/2ZoM9v7xoxhAYKgc8"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center font-semibold text-[#c99d6b]"
                        >
                          Open Directions
                          <ArrowUpRight className="ml-1 h-4 w-4" />
                        </a>
                      </div>
                    </>
                  ) : null}
                </div>
              );
            })}
            <div className="rounded-[28px] border border-[#eadbcc] bg-white p-6 lg:col-span-2">
              <p className="text-xs uppercase tracking-[0.4em] text-[#98836f]">
                Request Appointment
              </p>
              <h3 className="font-display text-2xl text-[#2f2a24]">
                Send us a message
              </h3>
              <form className="mt-6 grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your name"
                  className="rounded-2xl border border-[#e5d5c4] bg-[#fff8ef] px-4 py-3 text-sm text-[#2f2a24] placeholder:text-[#b9a895] focus:border-[#c99d6b] focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Your phone number"
                  className="rounded-2xl border border-[#e5d5c4] bg-[#fff8ef] px-4 py-3 text-sm text-[#2f2a24] placeholder:text-[#b9a895] focus:border-[#c99d6b] focus:outline-none"
                />
                <textarea
                  placeholder="Describe your case here..."
                  className="md:col-span-2 rounded-2xl border border-[#e5d5c4] bg-[#fff8ef] px-4 py-3 text-sm text-[#2f2a24] placeholder:text-[#b9a895] focus:border-[#c99d6b] focus:outline-none"
                  rows={4}
                />
                <button
                  type="submit"
                  className="md:col-span-2 inline-flex items-center justify-center rounded-full bg-[#c99d6b] px-8 py-3 text-sm font-semibold text-[#2f2a24]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#eadbcc] bg-[#f3e5d5] py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-sm text-[#98836f] md:flex-row md:items-center md:justify-between">
          <p>
            Copyright {new Date().getFullYear()} Shwetha Ravishankar and Associates.
            All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="#practice" className="transition hover:text-[#c99d6b]">
              Practice Area
            </Link>
            <Link href="#about" className="transition hover:text-[#c99d6b]">
              About
            </Link>
            <Link href="#contact" className="transition hover:text-[#c99d6b]">
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
