import { useEffect } from 'react';
import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { fetchEvents } from 'services/eventsAPI';
// import * as eventsApi from 'services/eventsAPI'

const EventsView = () => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, seteror] = useState(null);
  const [events, setEvents] = useState([]);
  const location = useLocation();

  useEffect(() => {
    // const fetch = async () => {
    //   const result = await fetchEvents();
    //   console.log(result);
    // };
    // fetch();
    fetchEvents().then(setEvents);
  }, []);

  return (
    <>
      <h1>Events</h1>
      {/* {isLoading && <div>Loading...</div>} */}
      {events.length > 0 && (
        <ul>
          {events.map(({ name, id }) => (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location.pathname }}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <Outlet />
    </>
  );
};
export default EventsView;
