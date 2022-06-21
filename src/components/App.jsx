import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomeView from 'views/HomeView';
import EventsView from 'views/EventsView';
import EventSubView from 'views/EventSubView';
// import EventDetailsSubView from 'views/EventDetailsSubView';
import NotFoundView from 'views/NotFoundView';
import { EventDetailsView } from 'views/EventDetailsSubView';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="events" element={<EventsView />}>
          <Route path=":eventId" element={<EventSubView />} />
        </Route>
        <Route path="events/:eventId/details" element={<EventDetailsView />} />
        <Route path="*" element={<NotFoundView />} />
      </Route>
    </Routes>
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    // >
    //   React homework template
    // </div>
  );
};
