import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import App from './App';
import Error from './components/Error';
import Portfolio from './components/Portfolio';
import Author from './components/Author';
import Contact from './components/Contact';
import Resume from './components/Resume';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Author />
      },
      {
        path: 'author',
        element: <Author />
      },
      {
        path: 'Portfolio',
        element: <Portfolio />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'resume',
        element: <Resume />
      }
],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);