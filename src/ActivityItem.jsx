import React from 'react';

const ActivityItem = (props) => {

  const { id, to } = props;

  return (
    <button className='activity-item'>
      <div>
        {to}
      </div>
      
    </button>
  );
}

export default ActivityItem;