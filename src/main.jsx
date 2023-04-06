import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import OrderReview from './components/OrderReview/OrderReview';
import Tshirts from './components/Tshirts/Tshirts';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home></Home>,
		children: [
			{
				path: 'about',
				element: <About></About>,
			},
			{
				path: 'tshirts',
				element: <Tshirts></Tshirts>,
				loader: () => fetch('t-shirts.json'),
			},
			{
				path: 'order',
				element: <OrderReview></OrderReview>,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
