import React from 'react';
import { useState, useEffect } from 'react';
import ActivityItem from './ActivityItem.jsx';
import axios from 'axios';

const Activity = (props) => {

  const { displayMode, setActivityInspectId } = props;
  const [activity, setActivity] = useState([]);

  useEffect(() => {

    axios.get('https://aircall-job.herokuapp.com/activities')
      .then((r) => {

        let activities = r.data
        //filter the array to only display archived data
        if (displayMode === 'archived') {
          const result = activities.filter((item) => item.is_archvived)
          activities = result;
          console.log(activities) 
        }
        setActivity(activities);

      })
      .catch((e) => console.log(e.message));

  }, [displayMode])

  return (
    <div>
      {activity.map(i => {
        return <ActivityItem 
          key={i.id}
          {...i}
          setActivityInspectId={setActivityInspectId}
        />
      })}
    </div>
  );
}

export default Activity;