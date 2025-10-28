import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <MainLayout>
      <section className="flex flex-col items-center justify-center text-center py-24 space-y-6">
        <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary drop-shadow-glow">
          Welcome to <span className="text-accent">DevPortfolio</span>
        </h1>
        <p className="max-w-2xl text-lg text-offwhite/80 leading-relaxed">
          Build your AI-powered portfolio straight from your GitHub — no code,
          no design, just creativity.
        </p>
        <button className="px-6 py-3 text-lg">Login with GitHub</button>
      </section>
    </MainLayout>
  );
}

export default App;
