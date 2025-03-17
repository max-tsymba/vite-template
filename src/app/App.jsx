import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { SettingsButton } from 'shared/layouts';
import router from 'shared/router/router';

function App() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <div style={{ width: '100%', textAlign: 'right' }}>
          <SettingsButton />
        </div>
        <RouterProvider router={router} />
      </StyledEngineProvider>
    </>
  );
}

export default App;
