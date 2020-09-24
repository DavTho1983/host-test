import React, { useState, useEffect } from 'react';
import firebase from './firebase';
import './App.css';

function App() {

  const [ goats, setGoats ] = useState([]);

  useEffect(() => {
    if (goats) {
      console.log("GOATS! ", goats);
    }
    const unsubscribe = firebase
				.firestore()
                .collection('goats')
				.onSnapshot((snapshot) => {
					const newGoats = snapshot.docs.map((doc) => ({
						id: doc.id,
						...doc.data()
                    }));
              if (goats.length !== newGoats.length) {
                setGoats(newGoats);
              }
				});
			return () => unsubscribe();
    
  }, [goats])

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
