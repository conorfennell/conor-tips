import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [user, setData] = useState(null);

  useEffect(() => {
    fetch('https://backend.fennell-conor1617.workers.dev/v1/users/1')
      .then(response => response.json())
      .then(user => setData(user));
  }, []);

  return (
    <>
      {user && <h1>{user.firstName}'s tips</h1>}
      <ul>
        <li><a href="https://www.amazon.com/Shokz-OpenRun-Pro-Conduction-Built/dp/B09BVXT8TJ">Bone conducting headphones</a></li>
      </ul>
    </>
  );
}

export default App;