import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import Nav from './Nav.jsx';
import Activity from './Activity.jsx';
import ActivityInformation from './ActivityInformation.jsx';

const App = () => {

  const [displayMode, setDisplayMode] = useState('activity');
  const [activityInspectId, setActivityInspectId] = useState(null);
  
  return (
    <main>
      <div className='container'>
        <Header/>
        {activityInspectId && <ActivityInformation activityInspectId={activityInspectId} setActivityInspectId={setActivityInspectId} />}
        <div className="container-view">
          {(displayMode === 'activity' || displayMode === 'archived') &&
            <Activity 
              displayMode={displayMode}
              setActivityInspectId={setActivityInspectId} 
            />
          }
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
