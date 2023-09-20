import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Chat from './Chat/Chat'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import DataProvider from './Context/DataProvider'
const firebaseConfig = {
  apiKey: "AIzaSyCMtDb_ezhcOlEK5voh4XZ1nNneiU8o9jE",
  authDomain: "syed-zain-e3efb.firebaseapp.com",
  databaseURL: "https://syed-zain-e3efb-default-rtdb.firebaseio.com",
  projectId: "syed-zain-e3efb",
  storageBucket: "syed-zain-e3efb.appspot.com",
  messagingSenderId: "662094847299",
  appId: "1:662094847299:web:6158ee7c41243d7adda3f6",
  measurementId: "G-4TJ36L5XZC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

let router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // children:[]
  },
  {
    path: '/chat',
    element: <Chat />
  }
])
// let router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<App />} >
//       <Route path='chat' element={<Chat />} />
//     </Route>
//   )
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  // {/* </React.StrictMode>, */}
)
