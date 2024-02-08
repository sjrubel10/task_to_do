import React, { useState } from 'react';
import '../style/Createtas.scss';

const Createtask = () => {
    // State variables to hold form data
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState('');
    const [status, setStatus] = useState('pending');

    // Function to handle form submission
    const handleSubmit = async (e) => { // Add 'async' keyword here
        e.preventDefault();
        // Log form data to console
        // console.log('Form Data:', { title, description, duration, status });
        const data = {
            title: title,
            description: description,
            duration: duration,
            status: status,
            // Add more data as needed
        };

        try {
            const response = await fetch('http://localhost/wpplugins/wp-json/tasktodo/v1/createtask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-WP-Nonce': myVars.rest_nonce
                },
                body: JSON.stringify(data),
            });

            const responseData = await response.json();
            console.log(responseData);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="form-container">
            <h1>Create Task</h1>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

                <label>Description:</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />

                <label>Duration:</label>
                <input type="datetime-local" value={duration} onChange={(e) => setDuration(e.target.value)} required />

                <label>Status:</label>
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Createtask;
