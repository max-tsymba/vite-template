import { createBrowserRouter, Navigate } from 'react-router-dom';

import * as Routes from './path';

const router = createBrowserRouter([
  {
    path: '*',
    element: <Navigate to={Routes.NOT_FOUND_ROUTE} replace />,
  },
  {
    path: Routes.NOT_FOUND_ROUTE,
    element: <div>Not Found</div>,
  },
]);

export default router;
