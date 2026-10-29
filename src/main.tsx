import { createRoot } from "react-dom/client"
import "./styles.css"

function App() {
  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl">Rally & Connect</h1>
      <p className="mt-4 text-lg leading-relaxed">
        Join your neighbors for a relaxed morning of pickleball, friendly
        doubles, and new connections. Whether you’re picking up a paddle for the
        first time or already love the game, come rally with us - everyone’s
        welcome!
      </p>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Event Details</h2>

        <p className="mt-3">
          <strong>When:</strong> Sunday, November 15, 2026 · 8:00 – 10:00 AM
        </p>

        <p className="mt-1">
          <strong>Where:</strong> Riverside Community Courts · 24 Park Lane
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Event Agenda</h2>
        <ul className="mt-3 space-y-4">
          <li>
            <strong>8:00–8:15 AM:</strong> Welcome & warm-up — Meet the group,
            stretch, and get ready to play.
          </li>

          <li>
            <strong>8:15–8:30 AM:</strong> Pickleball basics — Practice serving
            and learn the scoring rules.
          </li>

          <li>
            <strong>8:30–9:45 AM:</strong> Friendly doubles — Rotate partners
            and enjoy relaxed games.
          </li>

          <li>
            <strong>9:45-10:00 AM:</strong> Cool-down & connections — Stretch,
            chat, and wrap up the morning.
          </li>
        </ul>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-5">
        <h2 className="text-xl font-semibold">Before you arrive</h2>
          <h3 className="mt-4 font-semibold">When should I arrive?</h3>
            <p className="mt-1">Aim for 7:45 AM so you have time to settle in before the 8:00 AM welcome and warm-up.</p>
          <h3 className="mt-4 font-semibold">What should I bring?</h3>
            <p className="mt-1">Bring water, comfortable court shoes, and a paddle if you own one.</p>
          <h3 className="mt-4 font-semibold">Can I join without a paddle?</h3>
            <p className="mt-1">A limited number of club paddles are available on a first-come, first-served basis. Bring your own if you have one.</p>
      </section>
    </main>
  )
}

const root = document.getElementById("root")

if (!root) {
  throw new Error("Root element not found")
}

createRoot(root).render(<App />)
