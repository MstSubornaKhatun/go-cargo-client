import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './router/router.jsx'
import { RouterProvider } from "react-router/dom";
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Aos from 'aos';
// ..
Aos.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='font-urbanist max-w-11/12 mx-auto'>
      <RouterProvider router={router} />

    </div>
  </StrictMode>,
)
