import React from 'react';

const Nav = (props) => {

  const { setDisplayMode } = props;

  return (
    <div id='bottom-nav'>
      <button className='nav-button' onClick={() => setDisplayMode('activity')}>Activity</button>
      <button className='nav-button' onClick={() => setDisplayMode('archived')}>Archived</button>
      <button className='nav-button' >Dial</button>
      <button className='nav-button'>Contacts</button>
      <button className='nav-button'>Laser Cats</button>
    </div>
  );
}

export default Nav;