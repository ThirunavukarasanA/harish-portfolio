import Image from "next/image";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1521316730702-829a8e30dfd2?auto=format&fit=crop&w=900&q=80",
    label: "Wedding Stories",
  },
  {
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    label: "Portrait Sessions",
  },
  {
    src: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=900&q=80",
    label: "Street Moments",
  },
  {
    src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=900&q=80",
    label: "Travel Diaries",
  },
  {
    src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80",
    label: "Live Events",
  },
  {
    src: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=900&q=80",
    label: "Editorial Frames",
  },
];

const eventsCovered = [
  {
    title: "Destination Weddings",
    description:
      "Intimate ceremonies and grand celebrations, captured with cinematic detail and emotion.",
  },
  {
    title: "Brand & Editorial Shoots",
    description:
      "High-impact visuals for brands, magazines, and creators who need images that stand out.",
  },
  {
    title: "Concerts & Cultural Events",
    description:
      "Fast-paced, atmospheric coverage that freezes the energy of live performances.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-zinc-900 text-zinc-100 scroll-smooth">
      <header className="sticky top-0 z-40 border-b border-zinc-800/80 bg-black/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400/20 ring-1 ring-cyan-400/60">
              <span className="text-xs font-semibold tracking-[0.18em] text-cyan-300">
                HP
              </span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-[0.18em] text-zinc-200">
                HARISH
              </span>
              <span className="text-xs text-zinc-500">
                Photography & Visual Stories
              </span>
            </div>
          </div>

          <div className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.18em] text-zinc-400 md:flex">
            <a href="#hero" className="hover:text-cyan-300 transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-cyan-300 transition-colors">
              About
            </a>
            <a
              href="#gallery"
              className="hover:text-cyan-300 transition-colors"
            >
              Gallery
            </a>
            <a href="#events" className="hover:text-cyan-300 transition-colors">
              Events
            </a>
            <a
              href="#contact"
              className="hover:text-cyan-300 transition-colors"
            >
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full bg-cyan-400 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-black shadow-[0_0_40px_rgba(34,211,238,0.7)] transition hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-[0_0_55px_rgba(34,211,238,0.95)]"
          >
            Book a Shoot
          </a>
        </nav>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-4 pb-24 pt-16 sm:px-6 lg:px-8 lg:pt-20">
        {/* Hero Section */}
        <section
          id="hero"
          className="grid items-center gap-12 lg:grid-cols-[1.3fr,1fr]"
        >
          <div className="space-y-8">
            <p className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/70 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-zinc-400 shadow-[0_0_40px_rgba(24,24,27,0.9)]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 shadow-[0_0_14px_rgba(34,211,238,0.8)] animate-pulse-glow" />
              Cinematic Frames. Honest Emotions.
            </p>

            <div className="space-y-4">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
                <span className="bg-gradient-to-br from-zinc-50 via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
                  Photography that
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
                  makes light feel alive.
                </span>
              </h1>
              <p className="max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
                I craft bold, vibrant visuals for people, brands, and stories
                that deserve to be seen. From intimate portraits to electric
                events, every frame is designed to feel like a memory you can
                step back into.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-black shadow-[0_0_40px_rgba(34,211,238,0.8)] transition hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-[0_0_60px_rgba(34,211,238,1)]"
              >
                Let&apos;s Create Together
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </a>
              <a
                href="#gallery"
                className="rounded-full border border-zinc-700/80 bg-zinc-900/70 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-300 transition hover:-translate-y-0.5 hover:border-cyan-400/70 hover:bg-zinc-900 hover:text-cyan-200"
              >
                View Portfolio
              </a>
            </div>

            <div className="flex flex-wrap gap-6 text-xs text-zinc-500">
              <div className="space-y-1">
                <p className="font-semibold tracking-[0.18em] text-zinc-400">
                  SPECIALTIES
                </p>
                <p>Portraits, Weddings, Editorial, Events</p>
              </div>
              <div className="space-y-1">
                <p className="font-semibold tracking-[0.18em] text-zinc-400">
                  BASED IN
                </p>
                <p>Coimbatore, Available PanIndia</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -inset-16 -z-10 opacity-60 blur-3xl">
              <div className="h-full w-full bg-[conic-gradient(at_top,_#22d3ee,_#4f46e5,_#22d3ee)] opacity-40 animate-pan-gradient" />
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-zinc-800/80 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black shadow-[0_35px_120px_rgba(0,0,0,0.9)] animate-float-soft">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(236,254,255,0.06),transparent_55%),radial-gradient(circle_at_100%_80%,rgba(129,140,248,0.12),transparent_55%)]" />
              <div className="relative aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1516726817505-f5ed825624d8?auto=format&fit=crop&w=900&q=80"
                  alt="Signature portrait by Harish"
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-[450ms] hover:scale-[1.03]"
                />
              </div>
              <div className="relative flex items-center justify-between gap-4 border-t border-zinc-800/70 bg-black/60 px-4 py-3 text-xs text-zinc-300">
                <p className="flex items-center gap-2">
                  <span className="inline-flex h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,1)]" />
                  Currently booking{" "}
                  <span className="font-semibold text-cyan-300">
                    2025–26 weddings
                  </span>
                </p>
                <p className="hidden text-[11px] text-zinc-500 sm:inline">
                  Limited slots · Let&apos;s plan early
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="grid gap-10 rounded-3xl border border-zinc-800/80 bg-zinc-950/80 px-5 py-10 shadow-[0_30px_100px_rgba(0,0,0,0.9)] sm:px-8 sm:py-12 lg:grid-cols-[1.1fr,1fr]"
        >
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              About the Photographer
            </p>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Turning passing moments into
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
                {" "}
                vivid, living stories.
              </span>
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
              I&apos;m Harish — a photographer obsessed with light, detail, and
              genuine emotion. My work blends clean compositions with bold
              color and contrast, creating images that feel modern yet timeless.
            </p>
            <p className="max-w-xl text-sm leading-relaxed text-zinc-500 sm:text-base">
              Whether it&apos;s a quiet portrait or a loud concert, I focus on
              the in-between moments: the laughter, the stillness, the glances
              that say everything. Those are the frames you&apos;ll come back
              to years from now.
            </p>

            <div className="mt-4 flex flex-wrap gap-4 text-xs text-zinc-400">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 px-4 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
                  Years Shooting
                </p>
                <p className="mt-1 text-xl font-semibold text-zinc-50">6+</p>
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 px-4 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
                  Events Covered
                </p>
                <p className="mt-1 text-xl font-semibold text-zinc-50">
                  120+
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 px-4 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
                  Cities & Destinations
                </p>
                <p className="mt-1 text-xl font-semibold text-zinc-50">
                  15+
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6 rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
              Photography Style
            </p>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-5 rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 shadow-[0_0_16px_rgba(34,211,238,0.8)]" />
                <div>
                  <p className="font-medium text-zinc-100">
                    Clean, cinematic, and modern.
                  </p>
                  <p className="text-xs text-zinc-500">
                    Sharp compositions with rich contrast, designed for both
                    print and social.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-5 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />
                <div>
                  <p className="font-medium text-zinc-100">
                    True-to-moment colors.
                  </p>
                  <p className="text-xs text-zinc-500">
                    Dark, moody palettes with vibrant highlights that feel
                    alive, not over-edited.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
                <div>
                  <p className="font-medium text-zinc-100">
                    Emotion-first storytelling.
                  </p>
                  <p className="text-xs text-zinc-500">
                    You&apos;ll see real connections, not forced poses —
                    images that feel like you.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA Strip */}
        <section className="rounded-3xl border border-cyan-500/40 bg-gradient-to-r from-cyan-500/10 via-sky-500/5 to-indigo-500/10 px-5 py-6 text-xs text-zinc-200 shadow-[0_0_70px_rgba(34,211,238,0.4)] sm:px-8 sm:py-7 lg:flex lg:items-center lg:justify-between">
          <div className="space-y-1">
            <p className="font-semibold uppercase tracking-[0.24em] text-cyan-300">
              Limited 2025–26 Slots
            </p>
            <p className="max-w-xl text-[13px] text-zinc-300">
              Secure your dates early for weddings, portraits, or brand
              projects. Let&apos;s design a shoot that feels uniquely yours —
              from moodboards to final edits.
            </p>
          </div>
          <a
            href="#contact"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-cyan-400 px-5 py-2 font-semibold uppercase tracking-[0.22em] text-black shadow-[0_0_40px_rgba(34,211,238,0.9)] transition hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-[0_0_60px_rgba(34,211,238,1)] lg:mt-0"
          >
            Check Availability
          </a>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="space-y-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Image Gallery
              </p>
              <h2 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
                A curated glimpse into recent work.
              </h2>
            </div>
            <p className="max-w-md text-sm text-zinc-400">
              Explore a mix of weddings, portraits, events, and editorial
              projects — each gallery is crafted with a distinct mood and
              narrative.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image) => (
              <figure
                key={image.src}
                className="group relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/80 shadow-[0_25px_80px_rgba(0,0,0,0.9)]"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.label}
                    fill
                    className="object-cover object-center transition duration-500 group-hover:scale-105 group-hover:brightness-[1.12]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between px-4 pb-3 pt-4 text-xs text-zinc-200">
                  <span className="font-medium">{image.label}</span>
                  <span className="flex items-center gap-1 text-[11px] text-zinc-400">
                    View Story
                    <span className="transition-transform group-hover:translate-x-0.5">
                      ↗
                    </span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Events Covered Section */}
        <section
          id="events"
          className="grid gap-10 rounded-3xl border border-zinc-800/80 bg-zinc-950/80 px-5 py-10 sm:px-8 sm:py-12 lg:grid-cols-[1.1fr,1fr]"
        >
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Events Covered
            </p>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              From quiet vows to loud stages — I&apos;ve been there with a
              camera.
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
              Every event has its own tempo. I adapt to the pace — moving
              silently when needed, and diving into the crowd when the energy
              spikes — so you get images that feel immersive, not intrusive.
            </p>

            <ul className="mt-4 space-y-5 text-sm text-zinc-300">
              {eventsCovered.map((event) => (
                <li key={event.title} className="space-y-1">
                  <p className="font-medium text-zinc-50">{event.title}</p>
                  <p className="text-xs text-zinc-500">{event.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-cyan-500/10 via-zinc-950 to-purple-500/10 p-5 text-xs text-zinc-200 shadow-[0_30px_100px_rgba(0,0,0,1)] sm:p-6">
              <p className="font-semibold uppercase tracking-[0.24em] text-cyan-300">
                Featured Experience
              </p>
              <p className="mt-3 text-sm text-zinc-100">
                3-day destination wedding in Goa with over 800 guests — covered
                solo lead with a small creative team, delivering over 900
                curated images and a highlight story in under 4 weeks.
              </p>
              <p className="mt-3 text-[11px] text-zinc-400">
                I&apos;m comfortable working with planners, makeup artists, and
                brand teams to keep everything on schedule while still allowing
                space for spontaneous moments.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/90 p-5 text-xs text-zinc-300 sm:p-6">
              <p className="font-semibold uppercase tracking-[0.22em] text-zinc-400">
                Perfect for
              </p>
              <ul className="mt-3 space-y-2 text-[13px] text-zinc-400">
                <li>Wedding ceremonies & receptions</li>
                <li>Engagements & pre-wedding stories</li>
                <li>Brand launches & campaigns</li>
                <li>Concerts, festivals, and cultural events</li>
              </ul>

              <a
                href="#contact"
                className="mt-4 inline-flex items-center justify-center rounded-full border border-cyan-400/70 px-4 py-2 font-semibold uppercase tracking-[0.22em] text-cyan-200 transition hover:-translate-y-0.5 hover:bg-cyan-500/10"
              >
                Plan Your Event Coverage
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="grid gap-10 rounded-3xl border border-zinc-800/80 bg-gradient-to-br from-zinc-950 via-black to-zinc-950 px-5 py-10 sm:px-8 sm:py-12 lg:grid-cols-[1.1fr,1fr]"
        >
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Contact
            </p>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Tell me about the story you want to capture.
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
              Share a few details about your event, shoot idea, or brand, and
              I&apos;ll respond with availability, pricing, and a custom
              approach within 24–48 hours.
            </p>

            <div className="mt-4 grid gap-4 text-sm text-zinc-300 sm:grid-cols-2">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
                  Email
                </p>
                <a
                  href="mailto:hello@harishphoto.com"
                  className="mt-1 inline-flex items-center gap-1 text-cyan-300 hover:text-cyan-200"
                >
                  hello@harishphoto.com
                  <span>↗</span>
                </a>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
                  Instagram
                </p>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-flex items-center gap-1 text-cyan-300 hover:text-cyan-200"
                >
                  @harish.photography
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>

          <form className="space-y-4 text-sm text-zinc-200">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label
                  htmlFor="name"
                  className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-400"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-950/80 px-3 py-2.5 text-sm text-zinc-100 outline-none ring-cyan-400/0 transition focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-500/40"
                />
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-400"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-950/80 px-3 py-2.5 text-sm text-zinc-100 outline-none ring-cyan-400/0 transition focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-500/40"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label
                  htmlFor="type"
                  className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-400"
                >
                  Session Type
                </label>
                <select
                  id="type"
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-950/80 px-3 py-2.5 text-sm text-zinc-100 outline-none ring-cyan-400/0 transition focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-500/40"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Choose a session
                  </option>
                  <option>Wedding</option>
                  <option>Portrait</option>
                  <option>Brand / Editorial</option>
                  <option>Event / Concert</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="date"
                  className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-400"
                >
                  Date & Location
                </label>
                <input
                  id="date"
                  type="text"
                  placeholder="E.g. 22 Feb 2026 · Chennai"
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-950/80 px-3 py-2.5 text-sm text-zinc-100 outline-none ring-cyan-400/0 transition focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-500/40"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="message"
                className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-400"
              >
                Tell me more
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Share your ideas, vibe, must-have shots, or inspiration."
                className="w-full resize-none rounded-xl border border-zinc-800 bg-zinc-950/80 px-3 py-2.5 text-sm text-zinc-100 outline-none ring-cyan-400/0 transition focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-500/40"
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-cyan-400 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-black shadow-[0_0_40px_rgba(34,211,238,0.9)] transition hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-[0_0_60px_rgba(34,211,238,1)] sm:w-auto"
            >
              Send Inquiry
            </button>
            <p className="text-[11px] text-zinc-500">
              This form is for demo purposes only. Replace with your preferred
              contact or booking system.
            </p>
          </form>
        </section>
      </main>

      <footer className="border-t border-zinc-900/80 bg-black/90 py-6 text-center text-[11px] text-zinc-600">
        <p>
          © {new Date().getFullYear()} Harish Photography. Crafted with light,
          color, and stories.
        </p>
      </footer>
    </div>
  );
}
