import Widget from './components/partials/widget';

const App = () => {
  return (
    <div className="text-white/60 h-screen w-screen bg-black/80">
      <div className="max-w-[260px] mx-auto pt-20">
        <Widget />
      </div>
    </div>
  );
};

export default App;
