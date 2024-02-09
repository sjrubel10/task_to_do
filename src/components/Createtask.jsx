import React, { useState } from 'react';
import '../style/Createtas.scss';

const Createtask = () => {
    // State variables to hold form data and popup visibility
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState('');
    const [status, setStatus] = useState('pending');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false); // State to manage popup visibility

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            title: title,
            description: description,
            duration: duration,
            status: status,
        };

        try {
            const response = await fetch(''+myVars.site_url+'wp-json/tasktodo/v1/createtask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-WP-Nonce': myVars.rest_nonce
                },
                body: JSON.stringify(data),
            });

            const responseData = await response.json();
            console.log(responseData);

            // Show popup message if task is successfully created
            setShowSuccessMessage(true);

            // Clear form fields
            setTitle('');
            setDescription('');
            setDuration('');
            setStatus('pending');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // Function to handle input focus
    const handleInputFocus = () => {
        setShowSuccessMessage( false );
    };

    return (
        <div className="taskToDoform-container">
            <h1>Create Task</h1>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    onFocus={handleInputFocus} // Call handleInputFocus function when input is focused
                    required
                />

                <label>Description:</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    onFocus={handleInputFocus} // Call handleInputFocus function when input is focused
                    required
                />

                <label>Duration:</label>
                <input
                    type="datetime-local"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    onFocus={handleInputFocus} // Call handleInputFocus function when input is focused
                    required
                />

                <label>Status:</label>
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    onFocus={handleInputFocus} // Call handleInputFocus function when input is focused
                >
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>

                <button type="submit">Submit</button>
            </form>

            {/* Popup message */}
            {showSuccessMessage && (
                <div className="popup-message">
                    <p>Task successfully created!</p>
                </div>
            )}
        </div>
    );
};

export default Createtask;
