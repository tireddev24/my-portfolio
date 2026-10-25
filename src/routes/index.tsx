import { createFileRoute } from '@tanstack/react-router';
import { Fragment, useState, useRef } from 'react';
import { addProject, fetchSingleDocument } from '@/lib/firebase';
import { useQuery } from '@tanstack/react-query';
import ScrambleText from '@/components/scramble';
import CodeLoader from '@/components/codeloader';
import { useCloseOnOutsideClick } from '@/components/closeOnOutsideClick';
import { Menu, X, ExternalLink } from 'lucide-react';
import Github from '../assets/github.svg';
import { link } from 'fs';
import ContactForm from '@/components/contact';

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Michael Amao — Software Engineer' },
      {
        name: 'description',
        content:
          'Portfolio of Michael Amao, a software engineer focused on creating intuitive and performant web applications.',
      },
      { property: 'og:title', content: 'Michael Amao — Software Engineer' },
      {
        property: 'og:description',
        content:
          'Portfolio of Michael Amao, a software engineer focused on creating intuitive and performant web applications.',
      },
    ],
    links: [
      {
        rel: 'icon',
        href: '/favicon.png',
        type: 'image/png',
      },
    ],
  }),
  component: Index,
});

type Project = {
  projectName: string;
  description: string;
  projectImage: string;
  isLive: boolean;
  url: string;
  github: string;
};

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#tools', label: 'Tools' },
  { href: '#interests', label: 'Interests' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

const sectionStyle =
  'mb-10 md:mb-32 grid gap-8 md:gap-12 border-t border-sand-400/20 pt-10  md:pt-20 md:grid-cols-12';

// Numbered section heading — encodes the page's real order (01 → 04)
// instead of a repeated pill badge, so each section reads as a distinct step.
function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div className="mb-4 flex items-baseline gap-3">
      <span className="font-mono text-xs font-medium text-accent">{number}</span>
      <h2 className="font-display text-4xl font-bold tracking-tight">{title}</h2>
    </div>
  );
}

function Index() {
  const { data, isLoading } = useQuery({
    queryKey: ['data', 'personal'],
    queryFn: () => fetchSingleDocument('data', 'personal'),
  });
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useCloseOnOutsideClick(menuRef, () => setMenuOpen(false), menuOpen);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col justify-center place-items-center  bg-sand-50 font-body text-ink">
        <CodeLoader />
        Building portfolio...
      </div>
    );
  }

  return (
    <div className="min-h-screen  bg-sand-50 font-body text-ink overflow-x-hidden relative">
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-sand-400/20 bg-sand-50/80 px-6 py-4 backdrop-blur-md">
        <a href="#top" className="font-display text-xl tracking-wider font-bold uppercase ">
          {data?.firstName + ' ' + data?.lastName}
        </a>
        <div className="hidden gap-8 text-xs font-medium uppercase tracking-widest md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-accent">
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="grid size-9 place-items-center rounded-full transition-colors hover:bg-sand-100 md:hidden"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className={`overflow-hidden border-t absolute  w-full flex left-0 justify-center place-items-center top-16 bg-sand-50 border-sand-400/20 transition-[max-height] duration-300 ease-in-out md:hidden ${
            menuOpen ? 'max-h-64' : 'max-h-0 border-t-0'
          }`}
        >
          <div className="flex flex-col items-center gap-1 px-6 py-4 text-sm font-medium uppercase tracking-widest">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-2 py-3 transition-colors hover:bg-sand-100 hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
      <span
        aria-hidden="true"
        className="ghost  -right-20 top-20 text-[34rem] sm:-top-16 sm:text-[58rem]    "
      >
        {data?.firstName?.[0] ?? ''}
        {data?.lastName?.[0] ?? ''}
      </span>

      <main id="top" className=" mx-10 md:mx-auto max-w-7xl px-6 pt-10 sm:pt-16 pb-32">
        {/* Hero */}
        <header className="animate-reveal relative mb-32 max-w-4xl overflow-hidden">
          {/* Signature: an oversized ghosted wordmark of the initials, sitting
              behind the headline. Decorative only. */}
          <span
            aria-hidden="true"
            className="ghost-mark hidden -right-10 -top-16 text-[22rem] sm:-top-24 sm:text-[22rem]"
          >
            {(data?.firstName?.[0] ?? '') + (data?.lastName?.[0] ?? '')}
          </span>
          <div className="status-line">
            <span className="status-dot"></span>
            <ScrambleText text="currently building </>" duration={2000} pauseDuration={5500} />
          </div>
          <h1 className="relative mb-8 text-balance font-display text-6xl font-bold leading-[0.9] tracking-tighter sm:text-7xl md:text-8xl">
            Building <span className="text-accent">lasting</span> software solutions.
          </h1>
          <p className="relative text-pretty text-xl leading-relaxed text-ink/80 md:text-2xl">
            I'm {data?.firstName} {data?.lastName}, {data?.summary}.
          </p>
        </header>

        {/* About */}
        <section id="about" className={sectionStyle}>
          <div className="md:col-span-4">
            <SectionHeading number="01" title="About" />
            <p className="text-ink/60">A short note about who I am and how I work.</p>
          </div>
          <div className="space-y-6 text-lg leading-relaxed mx-2 text-ink md:col-span-8">
            <p className="text-justify">{data?.about}</p>
          </div>
        </section>

        {/* Tools & Technologies */}
        <section id="tools" className={sectionStyle}>
          <div className="md:col-span-4">
            <SectionHeading number="02" title="Tools and Technologies" />
            <p className="text-sand-800/60">What the work actually gets made with.</p>
          </div>
          <div className="space-y-10 mx-2 md:col-span-8">
            {data?.tools.map((group: { label: string; items: string[] }, i: number) => (
              <div
                key={group.label}
                className="animate-reveal grid gap-4 sm:grid-cols-12"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <h3 className="font-display text-xs font-bold uppercase tracking-widest text-sand-900/70 sm:col-span-3 sm:pt-2">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2 sm:col-span-9">
                  {group.items.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-xl border border-white/50 bg-sand-100 px-3 py-1.5 text-sm font-medium shadow-[var(--shadow-tactile)] transition-shadow duration-500 hover:shadow-[var(--shadow-tactile-hover)]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Masonry */}
        <section
          id="projects"
          className={'mb-10 md:mb-32 border-t border-sand-400/20 pt-10 md:pt-20'}
        >
          <div className="sticky top-20 z-40 mb-12 bg-sand-50/80 py-2 backdrop-blur-md">
            <SectionHeading number="03" title="Selected Works" />
          </div>

          <div className="grid px-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 justify-center ">
            {data?.projects?.map((p: Project, idx: number) => {
              const isLive = Boolean(p.isLive && p.url.includes('https'));
              const href = isLive ? p.url : p.github;
              const linkText = isLive ? 'Live' : 'Github';
              const linkWidth = 8 + (linkText.length - 1) + 'ch';

              return (
                <Fragment key={p.projectName ?? idx}>
                  <article
                    className="animate-reveal group relative break-inside-avoid rounded-3xl border border-white/50 bg-sand-100 p-4 shadow-[v(--shadow-tactile)] transition-all duration-500 hover:border-accent/30 hover:shadow-[(--shadow-tactile-hover)]"
                    style={{ animationDelay: `${Math.min(idx, 5) * 100}ms` }}
                  >
                    <img
                      src={p.projectImage}
                      alt={p.projectName}
                      width={800}
                      height={1000}
                      loading="lazy"
                      className={`mb-4 w-full rounded-2xl object-cover aspect-square`}
                    />
                    <div className="flex  items-start justify-between gap-2 px-2 pb-2">
                      <div className="w-[70%]">
                        <h3 className="font-display text-xl font-bold">{p.projectName}</h3>
                        <p className="text-sm text-sand-800/60 text-justify">{p.description}</p>
                      </div>

                      {href && (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${p.projectName} — open ${isLive ? 'live site' : 'GitHub repo'}`}
                          className={` hover :w-[${linkWidth}] group/link relative flex  justify-end pr-2 w-11 h-11  size-9 shrink-0 place-items-center rounded-full  text-sand-50 ease-out transition-all   duration-300 hover :bg-accent sm:opacity-100 sm:group-hover:opacity-100`}
                        >
                          <span className=" absolute left-4 whitespace-nowrap text-sm font-medium opacity-0 delay-100 transition-opacity  group-hover/link:opacity-0  ">
                            View {linkText}
                          </span>

                          {/* Icon */}

                          {isLive ? (
                            <ExternalLink
                              // size={15}
                              className="      relative    text-ink  flex shrink-0 justify-center"
                            />
                          ) : (
                            <>
                              <div className=" w-11 h-11  rounded-full relative flex  shrink-0 items-center justify-end-safe ">
                                <img
                                  className="rounded-full   w-7 h-7 flex  justify-end   "
                                  src={Github}
                                />
                              </div>
                            </>
                          )}
                        </a>
                      )}
                    </div>
                  </article>

                  {/* Engineering log — a real, specific voice dropped into the
                    grid in place of a generic design aphorism. Fixed after
                    the second project regardless of how many projects exist. */}
                  {idx === 1 && (
                    <article className="animate-reveal hidden aspect-square break-inside-avoid flex-col justify-between rounded-3xl bg-ink p-8 text-sand-50 shadow-xl [animation-delay:200ms]">
                      <div>
                        <span className="mb-4 block font-mono text-[10px] uppercase tracking-widest text-sand-400">
                          // engineering log
                        </span>
                        <p className="font-mono text-sm leading-relaxed text-sand-100">
                          shipped the retry queue today.
                          <br />
                          fewer silent failures &gt;
                          <br />
                          clever abstractions.
                        </p>
                      </div>
                      <div className="flex items-end justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-accent">
                          Log
                        </span>
                        <div className="grid size-10 place-items-center rounded-full border border-sand-50/20">
                          →
                        </div>
                      </div>
                    </article>
                  )}
                </Fragment>
              );
            })}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className={sectionStyle}>
          <div className="md:col-span-4">
            <SectionHeading number="04" title="Experience" />
            <p className="text-ink-800/60">A timeline of building across disciplines.</p>
          </div>
          <div className="space-y-12 md:col-span-8">
            {data?.experiences &&
              data?.experiences.map(
                (e: {
                  role: string;
                  when: string;
                  body: string;
                  company: string;
                  solid: boolean;
                }) => (
                  <div key={e.role} className="group relative border-l border-sand-400/30 pl-8">
                    <div
                      className={
                        e.solid
                          ? 'absolute -left-1.5 top-1.5 size-3 rounded-full bg-accent transition-transform group-hover:scale-125'
                          : 'absolute -left-1.5 top-1.5 size-3 rounded-full border-2 border-sand-400 bg-sand-100 transition-colors group-hover:border-accent group-hover:bg-accent'
                      }
                    />
                    <span className="mb-2 block text-[10px] font-bold uppercase tracking-tighter text-accent">
                      {e.when}
                    </span>
                    <h3 className="font-display inline text-2xl font-bold">{e.role}</h3>
                    <b className="font-display inline text-2xl text-ink/50 font-bold"> @ </b>
                    <h3 className="font-display inline text-2xl font-bold">{e.company}</h3>

                    <p className="mt-2  text-ink-800/70 text-justify">{e.body}</p>
                  </div>
                ),
              )}
          </div>
        </section>

        {/* Interests */}
        <section
          id="interests"
          className="mb-10 md:mb-32 border-t border-sand-400/20 pt-10 md:pt-20"
        >
          <SectionHeading number="05" title="Interests" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {data?.interests?.map((i: { title: string; description: string }) => (
              <div
                key={i.title}
                className="rounded-3xl border border-white/50 bg-sand-100 p-6 shadow-[shadow-tactile] transition-all duration-500 hover:border-accent/30 hover:shadow-[(--shadow-tactile-hover)]"
              >
                <h3 className="mb-2 font-display text-lg font-bold">{i.title}</h3>
                <p className="text-sm text-ink/60">{i.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="mb-10 md:mb-32 grid gap-20 border-t border-sand-400/20 pt-10 md:pt-20 md:grid-cols-12"
        >
          <div className="md:col-span-4">
            <SectionHeading number="06" title="Get In Touch" />
            <p className="text-sand-800/60">
              Tell me what you're making. I'll get back to you as soon as possible.
            </p>
            <a
              href={`mailto:${data?.email}`}
              className="mt-6 inline-block font-display font-bold transition-colors hover:text-sand-400"
            >
              {data?.email}
            </a>
          </div>
          <div className="md:col-span-8">
            <ContactForm email={data?.email} />
          </div>
        </section>

        {/* Footer / Education */}
        <footer className="mt-10 md:mt-40 flex flex-col justify-between gap-12 border-t border-sand-400/20 pt-10 md:pt-20 md:flex-row">
          <div>
            <h4 className="mb-4 font-display text-xs font-bold uppercase tracking-widest opacity-40">
              Education
            </h4>
            {data?.education &&
              data?.education.map(
                (e: {
                  degree: string;
                  institution: string;
                  beginYear: string;
                  endYear: string;
                  location: string;
                }) => (
                  <div key={e.degree}>
                    <p className="font-display text-lg font-bold">{e.degree}</p>
                    <p className="text-md text-ink/90">
                      {e.institution} {e.location}
                    </p>
                    <p className="text-sm text-ink/60">
                      {e.beginYear} — {e.endYear}
                    </p>
                  </div>
                ),
              )}
          </div>
          <div className="flex gap-12">
            <div>
              <h4 className="mb-4 font-display text-xs font-bold uppercase tracking-widest opacity-40">
                Connect With Me
              </h4>
              <a
                href={data?.github}
                target="_blank"
                className="block font-display font-bold transition-colors hover:text-accent"
              >
                Github
              </a>
              <a
                href={data?.instagram}
                target="_blank"
                className="block font-display font-bold transition-colors hover:text-accent"
              >
                Instagram
              </a>
              <a
                href={data?.twitter}
                target="_blank"
                className="block font-display font-bold transition-colors hover:text-accent"
              >
                Twitter
              </a>
              <a
                href={data?.linkedin}
                target="_blank"
                className="block font-display font-bold transition-colors hover:text-accent"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
