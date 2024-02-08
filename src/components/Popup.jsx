import React, { useState, useEffect } from 'react';
// import './Popup.css'; // Import CSS file for styling
import '../style/Popup.scss';

const Popup = ({ onClose, list }) => { // Receive list data as a prop
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    // Set initial values for title, description, and selectedOption when list data changes
    if (list) {
      setTitle(list.post_title || '');
      setDescription(list.post_content || '');
      setSelectedOption(list.post_status || '');
    }
  }, [list]); // Run this effect when list data changes

  const handleSubmit = () => {
    const data = {
        id : list.ID,
        title: title,
        description: description,
        status: selectedOption,
        // Add more data as needed
    };
    // console.log( list );
    console.log( data );
  };

  return (
    <div className="popup-container">
      <div className="popup">
        <button className="close-button" onClick={onClose}>X</button> {/* Close button */}
        <h2>Edit Post</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
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
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Popup;
