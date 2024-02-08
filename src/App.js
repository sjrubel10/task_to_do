/*
import React from 'react';
import Dashboard from './components/Dashboard';
import Createtask from './components/Createtask';

const App = () => {
    return (
        <div>
            <h2 className='app-title'>Task To Do App</h2>
            <hr />
            <Dashboard />
            <Createtask />
        </div>
    );
}
export default App;*/
import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HashRouter as Router, Routes, Route, createHashRouter, RouterProvider } from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import MultipleList from './components/MultipleList';
import SingleList from './components/SingleList';
import Dashboard from './components/Dashboard';
import Createtask from './components/Createtask';
import Edittask from './components/Edittask';
import Main from './Layouts/Main';
const routes = createHashRouter([
    {
        path:"/",
        element: <Main/>,
        children:[
            {
                path:"/",
                element:<Dashboard/>
            },
            {
                path:"/tasks",
                element:<MultipleList/>
            },
            {
                path:"/task/:id",
                element:<SingleList/>
            },
            {
                path:"create",
                element: <Createtask/>,
            },
            {
                path:"edit/:id",
                element: <Edittask/>,
            }
        ]
    },

])
function App() {
    return (
        <RouterProvider router={routes}/>
    );
}

export default App;
