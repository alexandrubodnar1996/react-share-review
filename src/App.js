import './App.css';
import { createBrowserRouter, RouterProvider, useLocation, useParams } from 'react-router-dom';
import Root from './pages/Root';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Team from './pages/Team';
import Pages from './pages/Pages';
import Blog from './pages/Blog';
import Contact from './pages/Contact';


const router = createBrowserRouter(
  [
    {
      path: '/', element: <Root />, id: 'root', errorElement: <ErrorPage />,
      children:
        [
          {
            path: '/', element: <Home />,
            children:
              [
                {
                  path: '/About', element: <AboutUs />
                },
                {
                  path: '/Pages', element: <Pages />
                },
                {
                  path: '/Pages/Team', element: <Team />
                },

                {
                  path: '/Blog', element: <Blog />
                },
                {
                  path: '/Contact', element: <Contact />
                }
              ]
          }
        ]
    }
  ]
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
