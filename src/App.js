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
export default App;