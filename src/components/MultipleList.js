import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../style/Multitask.scss';
import Popup from '../components/Popup';

function MultipleList() {
    const [lists, setLists] = useState([]);
    const [selectedList, setSelectedList] = useState(null); // State to hold selected list data

    useEffect(() => {
        const fetchData = async () => {
            const status = 'pending';
            const data = {
                status: status,
            };
            try {
                // Fetch data from WordPress API endpoint
                const response = await axios.get('http://localhost/wpplugins/wp-json/tasktodo/v1/tasks',{
                    method: 'GET',
                        headers: {
                        'Content-Type': 'application/json',
                            'X-WP-Nonce': myVars.rest_nonce
                    },
                    body: JSON.stringify(data),
                });
                // Set the fetched data to the state
                setLists(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (id) => {
        alert(id);
    };

    const handleEdit = (list) => {
        setSelectedList(list); // Set the selected list data
    };

    return (
        <div>
            <h1>Multiple Lists</h1>
            <ul>
                {lists && lists.length > 0 && lists.map(list => (
                    <li key={list.ID}>
                        <div className="card">
                            <Link to={`/task/${list.ID}`}>
                                <h2 className="card-title" >{list.post_title}</h2>
                            </Link>
                            <p className="card-description">{list.post_content}</p>
                            <p className="card-date">Date: {list.post_date_gmt}</p>
                            <div className="card-buttons">
                                {/* Call handleEdit with list data when Edit button is clicked */}
                                <button className="edit-button" onClick={() => handleEdit(list)}>Edit</button>
                                <button className="delete-button" onClick={() => handleDelete(list.ID)}>Delete</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            {/* Render Popup component with selectedList as prop */}
            {selectedList && <Popup list={selectedList} onClose={() => setSelectedList(null)} />}
        </div>
    );
}

export default MultipleList;
