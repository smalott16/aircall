import React from 'react';

const ActivityItem = (props) => {

  const { id, to, created_at, direction, call_type, setActivityInspectId } = props;

  return (
    <section className='activity-item' onClick={() => setActivityInspectId(id)}>
      <header className='activity-header'>
        <div className='activity-contact'>{to ? to : "Unknown #"}</div>
        <div className='activity-date'>{created_at}</div>
      </header>
      <footer className='activity-footer'>
        {direction}
      </footer>
    </section>
  );
}

export default ActivityItem;