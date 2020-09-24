import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      Hello CI/CD with Google Cloud Build!
        DEVELOP TEST WITH FIRESTORE TOKEN IN ENV!!!!!!!!!!!!!!
        {goats && goats.map(goat => <div>
          <div>
            name: {goat.name}
          </div>
          <div>
            temperament: {goat.temperament}
          </div>
          <div>
            fluffiness: {goat.fluffiness}
          </div>
        </div>)}
      </header>
    </div>
  );
}

export default App;
