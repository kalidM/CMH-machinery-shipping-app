import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Booking = lazy(() => import('../pages/Booking'));
const Tracking = lazy(() => import('../pages/Tracking'));

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/booking', element: <Booking /> },
  { path: '/tracking/:id', element: <Tracking /> }
];