import { createBrowserRouter } from "react-router-dom";
import Checkout from '../pages/Checkout'

export const routes = [
  {
    path: '/checkout',
    element: <Checkout />
  }
]

export const router = createBrowserRouter(routes);


