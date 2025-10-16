const App = () => {
  return (
    <div className="min-h-screen bg-navy flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-slate">
          Bhavya Kandhari's Portfolio
        </h1>
        <p className="text-xl text-slate-muted">Tailwind CSS Check</p>
        <div className="flex gap-4 justify-center mt-8">
          <div className="w-20 h-20 bg-primary rounded-lg hover-lift glow-effect" />
          <div className="w-20 h-20 bg-secondary rounded-lg hover-lift glow-effect" />
          <div className="w-20 h-20 bg-accent rounded-lg hover-lift glow-effect" />
        </div>
      </div>
    </div>
  );
};

export default App;
