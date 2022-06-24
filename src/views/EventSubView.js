import useFetchEvent from 'hooks/useFetchEvent';
import { Link, useLocation } from 'react-router-dom';

const EventSubView = () => {
  const event = useFetchEvent();
  const location = useLocation();
  // console.log(event);
  return (
    <>
      {!event && <h2>Is Loading ...</h2>}
      {event && (
        <>
          <h2>{event.name}</h2>
          <img src={event.images[0].url} alt={event.name} width="300"></img>
          <Link to="details" state={location.state}>
            Details
          </Link>
        </>
      )}
    </>
  );
};
export default EventSubView;
