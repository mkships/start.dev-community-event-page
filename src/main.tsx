import { createRoot } from "react-dom/client"
import { AgendaItem } from "./AgendaItem"
import { FAQItem } from "./FAQItem";
import "./styles.css"

function App() {
  return (
    <main className="max-w-2xl mx-auto px-5 py-12 sm:px-6 sm:py-16">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-green-700">A community pickleball morning</p>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Rally & Connect</h1>
      <p className="mt-4 text-lg leading-relaxed">
        Join your neighbors for a relaxed morning of pickleball, friendly
        doubles, and new connections. Whether you’re picking up a paddle for the
        first time or already love the game, come rally with us — everyone’s
        welcome!
      </p>

      <section className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <h2 className="col-span-full border-l-4 border-green-700 pl-3 text-2xl font-semibold tracking-tight">The when and where</h2>

        <div className="mt-2 rounded-xl border border-green-900/15 bg-white p-5 hover:bg-green-600/10 transition duration-200 ease-out hover:-translate-y-0.5
        motion-reduce:transition-none motion-reduce:hover:translate-y-0">
          <div className="flex items-center gap-2">
            <span aria-hidden="true" className="text-2xl">📅</span>
            <h3 className="text-sm font-semibold text-green-800">When</h3>
          </div>

          <p className="mt-2 text-lg font-semibold text-gray-900">Sunday, November 15, 2026</p>
          <p className="mt-1 text-gray-600">8:00–10:00 AM</p>
        </div>

        <div className="mt-2 rounded-xl border border-green-900/15 bg-white p-5 hover:bg-green-600/10 transition duration-200 ease-out hover:-translate-y-0.5
        motion-reduce:transition-none motion-reduce:hover:translate-y-0">
          <div className="flex items-center gap-2">
            <span aria-hidden="true" className="text-2xl">📍</span>
            <h3 className="text-sm font-semibold text-green-800">Where</h3>
          </div>

          <p className="mt-2 text-lg font-semibold text-gray-900">Riverside Community Courts</p>
          <p className="mt-1 text-gray-600">24 Park Lane, California</p>
        </div>
        
      </section>

      <section className="mt-8">
        <h2 className="col-span-full border-l-4 border-green-700 pl-3 text-2xl font-semibold tracking-tight">Your morning on court</h2>
        <ol className="mt-6 ml-2 border-l-2 border-green-900/15">
          <AgendaItem
            time="8:00–8:15 AM"
            title="Welcome & warm-up"
            description="Meet the group, stretch, and get ready to play."
          />
          <AgendaItem
            time="8:15–8:30 AM"
            title="Pickleball basics"
            description="Practice serving and learn the scoring rules."
          />
          <AgendaItem
            time="8:30–9:45 AM"
            title="Friendly doubles"
            description="Rotate partners and enjoy relaxed social games."
          />
          <AgendaItem
            time="9:45–10:00 AM"
            title="Cool-down & connections"
            description="Stretch, chat, and wrap up the morning."
          />
        </ol>
      </section>

      <section className="mt-12 rounded-2xl border border-green-900/10 bg-white p-6 sm:p-8">
        <h2 className="col-span-full border-l-4 border-green-700 pl-3 mb-6 text-2xl font-semibold tracking-tight">Before you arrive</h2>
          <div className="mt-5 space-y-3">
            <FAQItem
              question="When should I arrive?"
              answer="Aim for 7:45 AM so you have time to settle in before the 8:00 AM welcome and warm-up."
            />
          </div>
          <div className="mt-5 space-y-3">
            <FAQItem
              question="What should I bring?"
              answer="Bring water, comfortable court shoes, and a paddle if you own one."
            />
          </div>
          <div className="mt-5 space-y-3">
            <FAQItem
              question="Can I join without a paddle?"
              answer="A limited number of club paddles are available on a first-come, first-served basis. Bring your own if you have one."
            />
          </div>
      </section>

      <section className="mt-12 flex flex-col gap-6 rounded-2xl bg-green-950 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white">
            See you on the court?
          </h2>

          <p className="mt-2 leading-relaxed text-green-100">
            A little pickleball. A few new friends. Full of dinks.
            A Sunday well spent.
          </p>
        </div>

        <a
          href="mailto:rsvp@rallyandconnect.com"
          className="inline-flex items-center justify-center gap-3 rounded-lg bg-lime-200 px-5 py-3 font-semibold text-green-950 transition-colors hover:bg-lime-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:shrink-0"
        >
          RSVP by email
          <span aria-hidden="true">→</span>
        </a>
      </section>

    </main>
  )
}

const root = document.getElementById("root")

if (!root) {
  throw new Error("Root element not found")
}

createRoot(root).render(<App />)
