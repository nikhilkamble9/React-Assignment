import './App.css';
import AppComponentGrp from './components/AppComponentGrp';
import Yellow from './components/Yellow';
import Red from './components/Red';
import Blue from './components/Blue';

function App() {
  return (
    <div className="App">
      <>
        <AppComponentGrp>
          <Yellow />
          <Yellow />
        </AppComponentGrp>
        <AppComponentGrp>
          <Red />
        </AppComponentGrp>
        <AppComponentGrp>
          <Blue />
          <Blue />
          <Blue />
        </AppComponentGrp>
      </>

    </div>
  );
}

export default App;
