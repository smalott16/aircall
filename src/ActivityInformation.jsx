import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const ActivityInformation = (props) => {

  const { activityInspectId } = props;

  useEffect(() => {

    axios.get(`https://aircall-job.herokuapp.com/activities/${activityInspectId}`)
      .then((r) => {
        console.log(r.data);
      })

  }, [activityInspectId])

  return (
    <div className='activity-info'>
      <div className='activity-content'>
        
      </div>
    </div>
  );
}

export default ActivityInformation;