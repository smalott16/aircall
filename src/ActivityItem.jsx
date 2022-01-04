import React from 'react';

const ActivityItem = (props) => {

  const { id, to, created_at, direction, call_type } = props;

  return (
    <section className='activity-item'>
      <header className='activity-header' onClick={() => console.log('clicked', id)}>
        <div className='activity-contact'>{to ? to : "Unknown #"}</div>
        <div className='activity-date'>{created_at}</div>
      </header>
      <footer>
        {direction}
      </footer>
    </section>
  );
}

export default ActivityItem;