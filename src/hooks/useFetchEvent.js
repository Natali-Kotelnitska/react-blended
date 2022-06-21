import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEventById } from 'services/eventsAPI';

const useFetchEvent = () => {
  const [event, setEvent] = useState(null);
  const params = useParams();
  const eventId = params.eventId;
  // console.log(eventId);
  useEffect(() => {
    fetchEventById(eventId).then(setEvent);
  }, [eventId]);
  // console.log(event);
  return event;
};
export default useFetchEvent;
