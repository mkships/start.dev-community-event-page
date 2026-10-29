import { createRoot } from "react-dom/client"
import "./styles.css"

function App() {
  return (
    <main className="max-w-2xl mx-auto p-6">
        <h1 className="text-3xl">Rally & Connect</h1>
        <p className="mt-4 text-lg leading-relaxed">
          Join your neighbors for a relaxed morning of pickleball, 
          friendly doubles, and new connections. Whether you’re picking up 
          a paddle for the first time or already love the game, come rally with us - everyone’s welcome!
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
                <strong>8:00–8:15 AM:</strong> Welcome & warm-up — Meet the group, stretch, and get ready to play.
              </li>

              <li>
                <strong>8:15–8:30 AM:</strong> Pickleball basics — Practice serving and learn the scoring rules.
              </li>

              <li>
                <strong>8:30–9:45 AM:</strong> Friendly doubles — Rotate partners and enjoy relaxed games.
              </li>

              <li>
                <strong>9:45-10:00 AM:</strong> Cool-down & connections — Stretch, chat, and wrap up the morning.
              </li>
            </ul>
        </section>

    </main>
  );
}

const root = document.getElementById("root")

if (!root) {
  throw new Error("Root element not found")
}

createRoot(root).render(<App />)
