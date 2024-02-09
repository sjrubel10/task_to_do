import React, { useState, useEffect } from 'react';
import '../style/EditPopup.scss';

const EditPopup = ({ onClose, list }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [editDone, setEditDone] = useState(false); // State to track if edit is done

    useEffect(() => {
        // Set initial values for title, description, and selectedOption when list data changes
        if (list) {
            setTitle(list.post_title || '');
            setDescription(list.post_content || '');
            setSelectedOption(list.post_status || '');
        }
    }, [list]); // Run this effect when list data changes

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            id: list.ID,
            title: title,
            description: description,
            status: selectedOption,
        };

        try {
            const response = await fetch(''+myVars.site_url+'wp-json/tasktodo/v1/edittask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-WP-Nonce': myVars.rest_nonce
                },
                body: JSON.stringify(data),
            });

            const responseData = await response.json();
            console.log(responseData);
            setEditDone(true); // Set editDone to true after successful update
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // Close the popup when edit is done
    useEffect(() => {
        if (editDone) {
            onClose();
        }
    }, [editDone, onClose]);

    return (
        <div className="popup-container">
            <div className="popup">
                <button className="close-btn-background close-button" onClick={onClose}>X</button> {/* Close button */}
                <h2 className="edit-post-title-text">Edit Post</h2>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    className="description_box"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <select
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                >
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
                <button className="submit-btn-background" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default EditPopup;
