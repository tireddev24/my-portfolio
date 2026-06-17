import { createFileRoute } from '@tanstack/react-router';
import projectTerra from '@/assets/project-terra.jpg';
import projectMono from '@/assets/project-mono.jpg';
import projectLumen from '@/assets/project-lumen.jpg';
import { fetchSingleDocument, newField } from '@/lib/firebase';
import { useQuery } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAddNewField } from '@/hooks/mutationservice';

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
  }),
  component: Index,
});

function Index() {
  const { data, isLoading } = useQuery({
    queryKey: ['data', 'personal'],
    queryFn: () => fetchSingleDocument('data', 'personal'),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-sand-50 font-body text-sand-800">
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-sand-400/20 bg-sand-50/80 px-6 py-4 backdrop-blur-md">
        <a href="#top" className="font-display text-xl font-bold uppercase tracking-tight">
          {data?.firstName + ' ' + data?.lastName}
        </a>
        <div className="hidden gap-8 text-xs font-medium uppercase tracking-widest sm:flex">
          <a href="#about" className="transition-colors hover:text-sand-400">
            About
          </a>
          <a href="#interests" className="transition-colors hover:text-sand-400">
            Interests
          </a>
          <a href="#projects" className="transition-colors hover:text-sand-400">
            Projects
          </a>
          <a href="#experience" className="transition-colors hover:text-sand-400">
            Log
          </a>
        </div>
      </nav>

      <main id="top" className="mx-auto max-w-6xl px-6 pt-24 pb-32">
        {/* Hero */}
        <header className="animate-reveal mb-32 max-w-4xl">
          <h1 className="mb-8 text-balance font-display text-6xl font-bold leading-[0.9] tracking-tighter sm:text-7xl md:text-8xl">
            Building <span className="text-sand-400">lasting</span> software solutions.
          </h1>
          <p className="text-pretty text-xl leading-relaxed text-sand-800/80 md:text-2xl">
            I'm {data?.firstName} {data?.lastName}, {data?.summary}.
          </p>
        </header>

        {/* About */}
        <section
          id="about"
          className="mb-32 grid gap-12 border-t border-sand-400/20 pt-20 md:grid-cols-12"
        >
          <div className="md:col-span-4">
            <h2 className="mb-4 font-display text-4xl font-bold tracking-tight">About</h2>
            <p className="text-sand-800/60">A short note about who I am and how I work.</p>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-sand-800/85 md:col-span-8">
            <p>{data?.about}</p>
          </div>
        </section>

        {/* Interests */}
        <section id="interests" className="mb-32">
          <h2 className="mb-12 inline-block rounded-full border border-sand-400/30 bg-sand-100 px-4 py-1.5 font-display text-sm font-bold uppercase tracking-widest shadow-sm">
            Interests
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {data?.interests?.map((i: { title: string; description: string }) => (
              <div
                key={i.title}
                className="rounded-3xl border border-white/50 bg-sand-100 p-6 shadow-[var(--shadow-tactile)] transition-shadow duration-500 hover:shadow-[var(--shadow-tactile-hover)]"
              >
                <h3 className="mb-2 font-display text-lg font-bold">{i.title}</h3>
                <p className="text-sm text-sand-800/60">{i.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Masonry */}
        <section id="projects" className="mb-40">
          <div className="sticky top-20 z-40 mb-12">
            <h2 className="inline-block rounded-full border border-sand-400/30 bg-sand-100 px-4 py-1.5 font-display text-sm font-bold uppercase tracking-widest shadow-sm">
              Selected Works
            </h2>
          </div>

          <div className="columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3">
            <article className="animate-reveal group break-inside-avoid rounded-3xl border border-white/50 bg-sand-100 p-4 shadow-[var(--shadow-tactile)] transition-all duration-500 hover:shadow-[var(--shadow-tactile-hover)]">
              <img
                src={data?.projects?.[5]?.projectImage}
                alt="Terra Studio — ceramic forms on linen"
                width={800}
                height={1000}
                loading="lazy"
                className="mb-4 aspect-[4/5] w-full rounded-2xl object-cover opacity-90 transition-opacity group-hover:opacity-100"
              />
              <h3 className="px-2 font-display text-xl font-bold">
                {data?.projects?.[5]?.projectName}
              </h3>
              <p className="px-2 pb-2 text-sm text-sand-800/60">
                {data?.projects?.[5]?.projectDescription}
              </p>
            </article>

            <article className="animate-reveal flex aspect-square break-inside-avoid flex-col justify-between rounded-3xl bg-sand-800 p-8 text-sand-50 shadow-xl [animation-delay:100ms]">
              <p className="font-display text-2xl font-medium italic leading-tight">
                "Design is the silent ambassador of your brand."
              </p>
              <div className="flex items-end justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest">Principles</span>
                <div className="grid size-10 place-items-center rounded-full border border-sand-50/20">
                  →
                </div>
              </div>
            </article>

            <article className="animate-reveal group break-inside-avoid rounded-3xl border border-white/50 bg-sand-100 p-4 shadow-[var(--shadow-tactile)] transition-all duration-500 hover:shadow-[var(--shadow-tactile-hover)] [animation-delay:200ms]">
              <img
                src={data?.projects?.[6]?.projectImage}
                alt="Mono Archive — embossed typography on paper"
                width={800}
                height={600}
                loading="lazy"
                className="mb-4 aspect-video w-full rounded-2xl object-cover"
              />
              <h3 className="px-2 font-display text-xl font-bold">
                {data?.projects?.[6]?.projectName}
              </h3>
              <p className="px-2 pb-2 text-sm text-sand-800/60">
                {data?.projects?.[6]?.projectDescription}
              </p>
            </article>

            <article className="animate-reveal break-inside-avoid rounded-3xl border border-sand-400/20 bg-white/40 p-6 backdrop-blur-sm [animation-delay:300ms]">
              <h4 className="mb-6 font-display text-xs font-bold uppercase tracking-widest text-sand-400">
                Languages
              </h4>
              <div className="flex flex-wrap gap-2">
                {data?.languages &&
                  data?.languages.map((s: string) => (
                    <span
                      key={s}
                      className="rounded-lg border border-sand-400/10 bg-sand-100 px-3 py-1 text-xs font-medium"
                    >
                      {s}
                    </span>
                  ))}
              </div>
            </article>

            <article className="animate-reveal group break-inside-avoid rounded-3xl border border-white/50 bg-sand-100 p-4 shadow-[var(--shadow-tactile)] transition-all duration-500 hover:shadow-[var(--shadow-tactile-hover)] [animation-delay:400ms]">
              <img
                src={data?.projects?.[0]?.projectImage}
                alt="Lumen App — sunlit architecture study"
                width={800}
                height={1200}
                loading="lazy"
                className="mb-4 aspect-[2/3] w-full rounded-2xl object-cover"
              />
              <h3 className="px-2 font-display text-xl font-bold">
                {data?.projects?.[0]?.projectName}
              </h3>
              <p className="px-2 pb-2 text-sm text-sand-800/60">
                {data?.projects?.[0]?.projectDescription}
              </p>
            </article>
          </div>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="grid gap-12 border-t border-sand-400/20 pt-20 md:grid-cols-12"
        >
          <div className="md:col-span-4">
            <h2 className="mb-4 font-display text-4xl font-bold tracking-tight">Experience</h2>
            <p className="text-sand-800/60">A timeline of building across disciplines.</p>
          </div>
          <div className="space-y-12 md:col-span-8">
            {data?.experiences &&
              data?.experiences.map(
                (e: { role: string; when: string; body: string; solid: boolean }) => (
                  <div key={e.role} className="group relative border-l border-sand-400/30 pl-8">
                    <div
                      className={
                        e.solid
                          ? 'absolute -left-1.5 top-1.5 size-3 rounded-full bg-sand-400 transition-transform group-hover:scale-125'
                          : 'absolute -left-1.5 top-1.5 size-3 rounded-full border-2 border-sand-400 bg-sand-100 transition-colors group-hover:bg-sand-400'
                      }
                    />
                    <span className="mb-2 block text-[10px] font-bold uppercase tracking-tighter text-sand-400">
                      {e.when}
                    </span>
                    <h3 className="font-display text-2xl font-bold">{e.role}</h3>
                    <p className="mt-2 max-w-xl text-sand-800/70">{e.body}</p>
                  </div>
                ),
              )}
          </div>
        </section>

        {/* Footer / Education */}
        <footer className="mt-40 flex flex-col justify-between gap-12 border-t border-sand-400/20 pt-20 md:flex-row">
          <div>
            <h4 className="mb-4 font-display text-xs font-bold uppercase tracking-widest opacity-40">
              Education
            </h4>
            {data?.education &&
              data?.education.map((e: { degree: string; institution: string; year: string }) => (
                <div key={e.degree}>
                  <p className="font-display text-lg font-bold">{e.degree}</p>
                  <p className="text-sm text-sand-800/60">
                    {e.institution} — {e.year}
                  </p>
                </div>
              ))}
          </div>
          <div className="flex gap-12">
            <div>
              <h4 className="mb-4 font-display text-xs font-bold uppercase tracking-widest opacity-40">
                Contact
              </h4>
              <a
                href={'mailto:' + data?.email}
                className="block font-display font-bold transition-colors hover:text-sand-400"
              >
                {data?.email}
              </a>
            </div>
            <div>
              <h4 className="mb-4 font-display text-xs font-bold uppercase tracking-widest opacity-40">
                Elsewhere
              </h4>
              <a
                href={data?.github}
                className="block font-display font-bold transition-colors hover:text-sand-400"
              >
                Github
              </a>
              <a
                href={data?.instagram}
                className="block font-display font-bold transition-colors hover:text-sand-400"
              >
                Instagram
              </a>
              <a
                href={data?.twitter}
                className="block font-display font-bold transition-colors hover:text-sand-400"
              >
                Twitter
              </a>
              <a
                href={data?.linkedin}
                className="block font-display font-bold transition-colors hover:text-sand-400"
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
