import React from 'react';
import { useState, useEffect } from 'react';
import ActivityItem from './ActivityItem.jsx';
import axios from 'axios';

const Activity = () => {

  const [activity, setActivity] = useState([]);

  useEffect(() => {

    axios.get('https://aircall-job.herokuapp.com/activities')
      .then((r) => {
        setActivity(r.data);
      })
  }, [])



  return (
    <div>
      {activity.map(i => {
        return <ActivityItem 
          id={i.id}
          to={i.to}
        />
      })}
      
      
    </div>
  );
}

export default Activity;