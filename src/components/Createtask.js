import React, { useState } from 'react';
import '../style/Createtas.scss';

const Createtask = () => {
    // State variables to hold form data
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState('');
    const [status, setStatus] = useState('pending');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Log form data to console
        console.log('Form Data:', { title, description, duration, status });
    };

    return (
        <div className="form-container">
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
