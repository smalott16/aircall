import React from 'react';

const Nav = (props) => {

  const { setDisplayMode } = props;

  return (
    <div id='bottom-nav'>
      <div className='nav-button' onClick={() => setDisplayMode('activity')}>
        <i class="fas fa-list"></i>
        <br/>
        <div className='nav-text'>Activity Log</div>
      </div>
      <div className='nav-button' ><i class="fas fa-phone"></i></div>
      <div className='nav-button' onClick={() => setDisplayMode('archived')}>
        <i class="fas fa-archive"></i>
        <br/>
        <div className='nav-text'>Archives</div>
      </div>
    </div>
  );
}

export default Nav;