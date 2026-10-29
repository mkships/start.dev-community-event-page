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
            <h2 className="text-xl font-semibold">Event details</h2>

            <p className="mt-3">
              <strong>When:</strong> Sunday, November 15, 2026 · 8:00 – 10:00 AM
            </p>

            <p className="mt-1">
              <strong>Where:</strong> Riverside Community Courts · 24 Park Lane
            </p>
        </section>
    </main>
  );
}

const root = document.getElementById("root")

if (!root) {
  throw new Error("Root element not found")
}

createRoot(root).render(<App />)
