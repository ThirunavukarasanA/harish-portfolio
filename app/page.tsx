"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";
import { Camera, Calendar, MapPin, ArrowRight, Mail, LayoutGrid } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1587271636175-90d58cdad458?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    label: "Wedding Stories",
    colSpan: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    label: "Portrait Sessions",
    colSpan: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=900&q=80",
    label: "Street Moments",
    colSpan: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=900&q=80",
    label: "Travel Diaries",
    colSpan: "col-span-1 row-span-2",
  },
  {
    src: "/images/hiphop3.jpg",
    label: "Live Events",
    colSpan: "md:col-span-2 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=900&q=80",
    label: "Editorial Frames",
    colSpan: "col-span-1 row-span-1",
  },
];
// https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80
const eventsCovered = [
  {
    title: "Destination Weddings",
    description: "Intimate ceremonies & grand celebrations, captured with cinematic detail.",
    icon: <Camera className="w-5 h-5 text-brand-400" />,
  },
  {
    title: "Brand & Editorial",
    description: "High-impact visuals for brands and creators needing standout imagery.",
    icon: <LayoutGrid className="w-5 h-5 text-rose-400" />,
  },
  {
    title: "Concerts & Cultural",
    description: "Fast-paced coverage that freezes the energy of live performances.",
    icon: <Calendar className="w-5 h-5 text-orange-400" />,
  },
];

const FADE_UP_ANIMATION_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
};

const STAGGER_CHILDREN: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#050505] text-zinc-100 scroll-smooth selection:bg-brand-500/30 selection:text-brand-200"
    >
      <Navbar />

      <main className="relative z-10 mx-auto flex max-w-7xl flex-col gap-32 px-6 pb-24 pt-32 lg:pt-40">

        {/* HERO SECTION */}
        <motion.section
          id="home"
          style={{ y: heroY, opacity: heroOpacity }}
          className="grid items-center gap-16 lg:grid-cols-[1.2fr,1fr]"
        >
          <motion.div
            variants={STAGGER_CHILDREN}
            initial="hidden"
            animate="show"
            className="space-y-8"
          >
            <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="inline-flex items-center gap-2 rounded-full border border-zinc-800/80 bg-zinc-900/40 px-4 py-1.5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-300">
                Cinematic Frames. Honest Emotions.
              </span>
            </motion.div>

            <motion.h1
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl lg:leading-[1.1]"
            >
              <span className="text-white">Photography that</span>
              <br />
              <span className="bg-linear-to-r from-brand-500 via-brand-400 to-brand-300 bg-clip-text text-transparent">
                makes light feel alive.
              </span>
            </motion.h1>

            <motion.p
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg"
            >
              I craft bold, vibrant visuals for people, brands, and stories that deserve to be seen. Every frame is designed to feel like a memory you can step back into.
            </motion.p>

            <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group flex items-center gap-2 rounded-full border border-brand-400 bg-brand-400/10 px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-brand-300 backdrop-blur-md transition-all hover:bg-brand-400 hover:text-black"
              >
                Let&apos;s Create Together
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#gallery"
                className="flex items-center gap-2 rounded-full px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-zinc-400 transition-colors hover:text-white"
              >
                View Portfolio
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-4 z-0 bg-linear-to-tr from-brand-500/20 to-rose-500/20 opacity-50 blur-2xl rounded-full" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl">
              <Image
                src="/images/harish1.jpeg"
                alt="Signature portrait"
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 to-transparent p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-400 text-black">
                    <Calendar className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-brand-300">Booking Now</p>
                    <p className="text-sm font-medium text-white">2025–26 Weddings</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* ABOUT BENTO GRID */}
        <motion.section
          id="about"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={STAGGER_CHILDREN}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand-400">The Photographer</h2>
            <p className="mt-4 text-3xl font-semibold sm:text-4xl">Turning passing moments into living stories.</p>
          </div>

          <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2">
            <motion.div
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="group relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/50 p-8 md:col-span-2 backdrop-blur-sm transition-colors hover:bg-zinc-900/80"
            >
              <h3 className="text-xl font-medium text-white">Hey, I&apos;m Harish.</h3>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                A photographer obsessed with light, detail, and genuine emotion. My work blends clean compositions with bold color and contrast, creating images that feel modern yet timeless. Whether it&apos;s a quiet portrait or a loud concert, I focus on the in-between moments: the laughter, the stillness, the glances that say everything. Look closely.
              </p>
            </motion.div>

            <motion.div
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="group relative flex flex-col justify-center overflow-hidden rounded-3xl border border-white/5 bg-linear-to-br from-brand-900/20 to-zinc-900/50 p-8 text-center backdrop-blur-sm"
            >
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-zinc-500">Years Shooting</h4>
              <p className="mt-2 text-5xl font-bold tracking-tighter text-white">6<span className="text-brand-400">+</span></p>
            </motion.div>

            <motion.div
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="group relative flex flex-col justify-center overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/50 p-8 text-center backdrop-blur-sm"
            >
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-zinc-500">Events Covered</h4>
              <p className="mt-2 text-5xl font-bold tracking-tighter text-white">120<span className="text-rose-400">+</span></p>
            </motion.div>

            <motion.div
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="group relative overflow-hidden rounded-3xl border border-brand-500/20 bg-brand-950/20 p-8 md:col-span-2 backdrop-blur-sm"
            >
              <h4 className="text-lg font-medium text-brand-100 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-brand-400" />
                Based in Coimbatore, Available Worldwide.
              </h4>
              <p className="mt-2 text-zinc-400">
                Comfortable working with planners, makeup artists, and brand teams to keep everything on schedule while allowing space for spontaneous moments.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* GALLERY GRID */}
        <motion.section
          id="gallery"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={STAGGER_CHILDREN}
          className="space-y-12"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand-400">Selected Work</p>
              <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">A curated glimpse.</h2>
            </div>
            <p className="max-w-xs text-sm text-zinc-400">
              Exploring weddings, portraits, and editorial projects crafted with mood and narrative.
            </p>
          </div>

          <div className="grid auto-rows-[250px] grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[300px]">
            {galleryImages.map((image, idx) => (
              <motion.figure
                variants={FADE_UP_ANIMATION_VARIANTS}
                key={idx}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 ${image.colSpan}`}
              >
                <Image
                  src={image.src}
                  alt={image.label}
                  fill
                  className="object-cover transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-4 p-6 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-lg font-medium text-white">{image.label}</p>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-widest text-brand-400 flex items-center gap-1">
                    View Story <ArrowRight className="h-3 w-3" />
                  </p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </motion.section>

        {/* EVENTS SECTION */}
        <motion.section
          id="events"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={STAGGER_CHILDREN}
          className="space-y-12"
        >
          <div className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand-400">What I Capture</p>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">From quiet vows to loud stages.</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {eventsCovered.map((event, idx) => (
              <motion.div
                variants={FADE_UP_ANIMATION_VARIANTS}
                key={idx}
                className="group relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/40 p-8 backdrop-blur-sm transition-colors hover:bg-zinc-800/60"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 shadow-inner ring-1 ring-white/10">
                  {event.icon}
                </div>
                <h3 className="text-lg font-medium text-white">{event.title}</h3>
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CONTACT SECTION */}
        <motion.section
          id="contact"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={FADE_UP_ANIMATION_VARIANTS}
        >
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-900 p-8 sm:p-12 lg:p-16">
            <div className="absolute top-0 right-0 -m-32 h-64 w-64 rounded-full bg-brand-500/20 blur-[100px]" />
            <div className="absolute bottom-0 left-0 -m-32 h-64 w-64 rounded-full bg-rose-500/20 blur-[100px]" />

            <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-24">
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-semibold text-white">Let&apos;s start crafting your visual story.</h2>
                  <p className="mt-4 text-zinc-400">Share a few details about your upcoming event or project, and I&apos;ll get back to you with pricing and availability.</p>
                </div>

                <div className="space-y-6">
                  <a href="mailto:hello@harishphoto.com" className="group flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 transition-colors group-hover:bg-brand-500/20 group-hover:text-brand-400">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-zinc-500">Email Me</p>
                      <p className="text-sm font-medium text-white transition-colors group-hover:text-brand-400">hello@harishphoto.com</p>
                    </div>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="group flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 transition-colors group-hover:bg-brand-500/20 group-hover:text-brand-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-zinc-500">Follow Work</p>
                      <p className="text-sm font-medium text-white transition-colors group-hover:text-brand-400">@harish.photography</p>
                    </div>
                  </a>
                </div>
              </div>

              <form className="space-y-4 rounded-3xl border border-white/5 bg-black/40 p-6 backdrop-blur-md sm:p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Name</label>
                    <input type="text" placeholder="John Doe" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-zinc-600 focus:border-brand-400 focus:bg-white/10" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Email</label>
                    <input type="email" placeholder="john@example.com" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-zinc-600 focus:border-brand-400 focus:bg-white/10" />
                  </div>
                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Mobile Number</label>
                    <input type="tel" placeholder="+91 90000 00000" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-zinc-600 focus:border-brand-400 focus:bg-white/10" />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Session Type</label>
                    <select className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all focus:border-brand-400 focus:bg-white/10" defaultValue="">
                      <option value="" disabled className="text-zinc-800">Select session</option>
                      <option className="text-black">Wedding</option>
                      <option className="text-black">Portrait</option>
                      <option className="text-black">Event / Concert</option>
                      <option className="text-black">Other</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Date & Location</label>
                    <input type="text" placeholder="22 Feb, Chennai" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-zinc-600 focus:border-brand-400 focus:bg-white/10" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Message</label>
                  <textarea rows={4} placeholder="Tell me more about your ideas..." className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-zinc-600 focus:border-brand-400 focus:bg-white/10" />
                </div>

                <button type="submit" className="w-full rounded-xl bg-brand-400 px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-black transition-all hover:bg-brand-300 active:scale-[0.98]">
                  Send Inquiry
                </button>
                <p className="text-center text-[10px] text-zinc-600">This is a demo form. Replace with your endpoint.</p>
              </form>
            </div>
          </div>
        </motion.section>

      </main>

      <Footer />
    </div>
  );
}
