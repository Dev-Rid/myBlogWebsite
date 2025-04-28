import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    loader: async () => {
      // Fetch data for the Home component
    },
  },
  {
    path: '/about',
    element: <About />,
    loader: async () => {
      // Fetch data for the About component
    },
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
