import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import Nav from './Nav.jsx';
import Activity from './Activity.jsx';

const App = () => {

  const [displayMode, setDisplayMode] = useState('activity')
  
  return (
    <main>
      <div className='container'>
        <Header/>
        <div className="container-view">
          <Activity displayMode={displayMode}/>
        </div>
        <Nav 
          setDisplayMode={setDisplayMode}
        />
      </div>
    </main>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
