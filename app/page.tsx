import Image from 'next/image';

const navItems = ['Welcome', 'Communities', 'Serve', 'Events', 'Give', 'Kids Check-In Alerts'];

const ministries = [
  { title: 'Neighborhood Small Groups', text: 'Weekly gatherings across LA focused on prayer, fellowship, and practical discipleship.' },
  { title: 'Youth Nights', text: 'Creative worship, mentorship, and Bible teaching for middle and high school students.' },
  { title: 'Worship Team Collective', text: 'Musicians and vocalists building a culture of excellence and heartfelt praise.' },
  { title: 'City Outreach', text: 'Serve projects supporting shelters, food drives, and community partner organizations.' }
];

const events = [
  { date: 'APR 14', title: 'Sunset Prayer Walk', text: 'Join us for guided prayer along Echo Park and nearby neighborhoods.' },
  { date: 'APR 21', title: 'Young Adults Night', text: 'An evening of worship, testimony, and connection for ages 18–30.' },
  { date: 'APR 28', title: 'Family Picnic Sunday', text: 'Food trucks, lawn games, and a community lunch right after service.' }
];

const staff = [
  'Pastor Elijah Brooks — Lead Pastor',
  'Naomi Rivers — Executive Pastor',
  'Micah Santos — Worship Director'
];

const disabledClass =
  'pointer-events-none cursor-not-allowed rounded-full border border-white/50 px-4 py-2 text-sm font-semibold tracking-wide text-white/90 opacity-75 transition';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <header className="sticky top-0 z-30 border-b border-white/20 bg-steel-500 text-white shadow-md">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-2 items-center gap-4 px-4 py-4 lg:grid-cols-[1fr_auto_1fr]">
          <div className="text-left">
            <p className="text-xs uppercase tracking-[0.3em] text-steel-100">The Lion & Lamb</p>
            <p className="text-lg font-bold">Los Angeles, CA</p>
          </div>

          <nav className="hidden items-center justify-center gap-2 lg:flex">
            {navItems.map((item) => (
              <button
                key={item}
                type="button"
                disabled
                className="pointer-events-none cursor-not-allowed rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white/90 opacity-90 transition hover:bg-white/10"
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-3">
            <button
              type="button"
              disabled
              className="hidden pointer-events-none cursor-not-allowed rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.12em] text-steel-700 opacity-80 shadow-sm lg:inline-flex"
            >
              Download our app
            </button>
            <button
              type="button"
              disabled
              className="pointer-events-none cursor-not-allowed rounded-full border border-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white opacity-80 lg:hidden"
            >
              Menu
            </button>
          </div>
        </div>
        <div className="border-t border-white/20 px-4 pb-4 lg:hidden">
          <div className="flex flex-wrap justify-center gap-2 pt-3">
            {navItems.map((item) => (
              <span
                key={item}
                className="pointer-events-none cursor-not-allowed rounded-full border border-white/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-white/90"
              >
                {item}
              </span>
            ))}
            <span className="pointer-events-none cursor-not-allowed rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-steel-700">
              Download our app
            </span>
          </div>
        </div>
      </header>

      <section className="diagonal-divider relative bg-steel-100 px-4 pb-28 pt-20 md:pt-28">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-steel-700">Non-denominational • NKJV Teaching</p>
            <h1 className="text-5xl font-black uppercase tracking-[0.08em] text-slate-900 sm:text-6xl md:text-7xl">THE LION &amp; LAMB</h1>
            <p className="script-style -mt-1 text-4xl italic text-steel-700 sm:text-5xl">Los Angeles</p>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-700">
              Welcome to a bright, modern church community in the heart of Los Angeles. We gather to worship Jesus,
              grow in Scripture, and serve our city with joy.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button type="button" disabled className={disabledClass + ' bg-steel-700 shadow-lg shadow-steel-700/20'}>
                Plan a Visit
              </button>
              <button type="button" disabled className={disabledClass + ' border-steel-700 text-steel-700'}>
                Watch Online
              </button>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-dashed border-steel-300 bg-white/60 p-6 shadow-glow backdrop-blur">
            <div className="relative h-[360px] overflow-hidden rounded-2xl border border-steel-200">
              <Image
                src="/church.jpg"
                alt="Church congregation gathering in worship"
                fill
                priority
                unoptimized
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slategreen px-4 py-20 text-white">
        <div className="mx-auto w-full max-w-5xl rounded-3xl border border-white/20 bg-white/5 px-6 py-12 text-center shadow-2xl backdrop-blur-sm md:px-10">
          <h2 className="text-4xl font-black uppercase tracking-[0.12em]">Join Us</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-white/15 p-6">
              <h3 className="text-2xl font-bold uppercase tracking-[0.08em]">Weekend Services</h3>
              <p className="mt-4 text-3xl font-semibold">Sundays</p>
              <p className="mt-2 text-2xl font-medium">9am, 11am, 6pm</p>
            </div>
            <div className="rounded-2xl border border-white/15 p-6">
              <h3 className="text-2xl font-bold uppercase tracking-[0.08em]">Midweek Bible Study</h3>
              <p className="mt-4 text-3xl font-semibold">Wednesdays</p>
              <p className="mt-2 text-2xl font-medium">7pm</p>
            </div>
          </div>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.15em] text-white/90">Kids ministry available</p>
          <p className="mt-6 text-xl font-bold uppercase tracking-[0.08em]">1247 Sunset Blvd, Los Angeles, CA 90026</p>
          <button type="button" disabled className={disabledClass + ' mt-8 border-white bg-black text-white'}>
            Get Directions
          </button>
        </div>
      </section>

      <section className="diagonal-divider-alt bg-sand px-4 pb-24 pt-20">
        <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-steel-700">About & Beliefs</p>
            <h2 className="mt-3 text-4xl font-black uppercase tracking-[0.08em] text-slate-900">A Welcoming House of Faith</h2>
            <p className="mt-5 leading-relaxed text-slate-700">
              The Lion &amp; Lamb is a non-denominational church committed to biblical teaching from the New King James
              Version (NKJV), authentic worship, and practical discipleship for every generation.
            </p>
            <ul className="mt-6 space-y-2 text-slate-700">
              {staff.map((name) => (
                <li key={name} className="rounded-xl bg-white/60 px-4 py-3 shadow-sm">
                  {name}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-xl shadow-steel-900/10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-steel-700">Kids Check-In Alerts</p>
            <h3 className="mt-3 text-3xl font-extrabold text-slate-900">Safer Family Ministry Communication</h3>
            <ul className="mt-6 space-y-4 text-slate-700">
              <li>• Secure digital check-in and unique pickup verification for every child.</li>
              <li>• Parent receives alerts if a child is crying, needs pickup, or needs a diaper change.</li>
              <li>• Staff dashboard with role-based access so volunteers only see what they need.</li>
              <li>• Privacy-first design: no sensitive child data is displayed publicly or in shared areas.</li>
            </ul>
            <button
              type="button"
              disabled
              className="mt-8 pointer-events-none cursor-not-allowed rounded-full bg-steel-700 px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white opacity-80 shadow-lg"
            >
              Preview Parent Dashboard
            </button>
          </div>
        </div>
      </section>

      <section className="bg-steel-50 px-4 py-20">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="text-center text-4xl font-black uppercase tracking-[0.08em] text-slate-900">Ministries & Communities</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ministries.map((ministry) => (
              <article key={ministry.title} className="rounded-2xl border border-steel-100 bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                <h3 className="text-xl font-bold text-slate-900">{ministry.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{ministry.text}</p>
                <button
                  type="button"
                  disabled
                  className="mt-5 pointer-events-none cursor-not-allowed rounded-full border border-steel-300 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-steel-700 opacity-75"
                >
                  Learn more
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-steel-700 px-4 py-16 text-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-8 rounded-3xl border border-white/20 bg-white/5 p-8 md:flex-row">
          <div>
            <p className="text-sm uppercase tracking-[0.15em] text-steel-100">Latest Sermon</p>
            <h3 className="mt-2 text-3xl font-black">Faith for the City</h3>
            <p className="mt-2 text-white/80">Pastor Elijah Brooks • March 31, 2026</p>
          </div>
          <div className="flex gap-3">
            <button type="button" disabled className={disabledClass + ' border-white text-white'}>
              Play
            </button>
            <button type="button" disabled className={disabledClass + ' border-white text-white'}>
              Browse Sermons
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-[0.08em] text-slate-900">Upcoming Events</h2>
            <div className="mt-8 space-y-4">
              {events.map((event) => (
                <article key={event.title} className="flex items-start justify-between gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <div className="flex gap-4">
                    <div className="rounded-xl bg-steel-700 px-3 py-2 text-center text-white shadow">
                      <p className="text-xs font-bold tracking-[0.1em]">{event.date}</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">{event.title}</h3>
                      <p className="mt-1 text-sm text-slate-600">{event.text}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    disabled
                    className="pointer-events-none cursor-not-allowed rounded-full border border-steel-300 px-3 py-1 text-xs font-bold uppercase tracking-[0.1em] text-steel-700 opacity-75"
                  >
                    RSVP
                  </button>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-sand p-8 shadow-lg">
            <h2 className="text-4xl font-black uppercase tracking-[0.08em] text-slate-900">Giving</h2>
            <p className="mt-4 leading-relaxed text-slate-700">
              Your generosity helps us serve Los Angeles through outreach, discipleship, and compassion ministries.
              Thank you for partnering with what God is doing through this community.
            </p>
            <button
              type="button"
              disabled
              className="mt-6 pointer-events-none cursor-not-allowed rounded-full bg-steel-700 px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white opacity-80"
            >
              Give
            </button>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 px-4 py-20 text-white">
        <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-[0.08em]">Contact</h2>
            <div className="mt-6 space-y-3 text-white/85">
              <p>Phone: (323) 555-0191</p>
              <p>Email: hello@lionandlamb.church</p>
              <p>Office Hours: Mon–Thu, 10:00am–5:00pm</p>
              <p>Address: 1247 Sunset Blvd, Los Angeles, CA 90026</p>
            </div>
          </div>

          <form className="rounded-3xl border border-white/20 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.14em] text-white/80">Send a message</p>
            <div className="mt-4 space-y-4">
              <input
                disabled
                type="text"
                placeholder="Name"
                className="w-full cursor-not-allowed rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/60"
              />
              <input
                disabled
                type="email"
                placeholder="Email"
                className="w-full cursor-not-allowed rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/60"
              />
              <textarea
                disabled
                placeholder="Message"
                rows={4}
                className="w-full cursor-not-allowed rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/60"
              />
              <button
                type="button"
                disabled
                className="pointer-events-none cursor-not-allowed rounded-full bg-white px-5 py-2 text-sm font-bold uppercase tracking-[0.12em] text-slate-900 opacity-75"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="bg-slate-950 px-4 py-10 text-white/80">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-lg font-bold text-white">The Lion &amp; Lamb</p>
            <p className="text-sm">Los Angeles, CA • Demo site for portfolio. Not a real organization.</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {['Welcome', 'Events', 'Give', 'Contact'].map((item) => (
              <span
                key={item}
                className="pointer-events-none cursor-not-allowed rounded-full border border-white/30 px-3 py-1 text-xs uppercase tracking-[0.1em]"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex gap-2">
            {['IG', 'YT', 'FB'].map((social) => (
              <button
                key={social}
                type="button"
                disabled
                className="pointer-events-none cursor-not-allowed rounded-full border border-white/30 px-3 py-2 text-xs font-bold uppercase opacity-70"
              >
                {social}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}