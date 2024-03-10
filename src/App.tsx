import Widget from './components/partials/widget';

const App = () => {
  return (
    <div className="text-white/60 h-screen w-screen flex justify-center items-center bg-black/80">
      <div className="max-w-xs mx-auto">
        <Widget />
      </div>
    </div>
  );
};

export default App;
