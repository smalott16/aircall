import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import Nav from './Nav.jsx';
import Activity from './Activity.jsx';

const App = () => {
  return (
    <main>
      <div className='container'>
        <Header/>
        <div className="container-view">
          <Activity/>
        </div>
        <Nav/>
      </div>
    </main>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
