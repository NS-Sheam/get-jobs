import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blogs from './components/Blogs/Blogs';
import JobDetails from './components/JobDetails/JobDetails';
import { loadSingleJobData } from './utilities/customLoader';
import ErrorPage from './components/ErrorPage/ErrorPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/jobData.json")
      },
      {
        path: "job-details/:jobId",
        element: <JobDetails/>,
        loader: ({params}) => loadSingleJobData(params.jobId)
      },
      {
        path: "statistics",
        element: <Statistics />
      },
      {
        path: "applied-jobs",
        element: <AppliedJobs />
      },
      {
        path: "blogs",
        element: <Blogs />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
