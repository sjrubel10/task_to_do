// MultipleList.js
/*import React from 'react';
import { Link } from 'react-router-dom';

function MultipleList() {
    return (
        <div>
            <h1>Multiple Lists</h1>
            <ul>
                <li><Link to="/task/1">List 1</Link></li>
                <li><Link to="/task/2">List 2</Link></li>
                {/!* Add more links as needed *!/}
            </ul>
        </div>
    );
}

export default MultipleList;*/
// axios.get('http://localhost:8888/wpapi/wp-json/tasktodo/v1/tasks');

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../style/Multitask.scss';

function MultipleList() {
    const [lists, setLists] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const status = 'pending';
            const data = {
                status: status,
            };
            try {
                // Fetch data from WordPress API endpoint
                const response = await axios.get('http://localhost:8888/wpapi/wp-json/tasktodo/v1/tasks',{
                    method: 'GET',
                        headers: {
                        'Content-Type': 'application/json',
                            'X-WP-Nonce': myVars.rest_nonce
                    },
                    body: JSON.stringify(data),
                });
                // Set the fetched data to the state

                setLists( response.data );
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (id) => { // Add 'async' keyword here
        // e.preventDefault();
        alert( id );
    };

    // console.log( lists );
    return (
        <div>
            <h1>Multiple Lists</h1>
            <ul>
                {/* Map over the lists array to generate list items */}
                { lists && lists.length > 0 && lists.map(list => (
                    <li key={list.ID}>
                        {/* Render a Link component for each list with the corresponding title and ID */}

                            <div className="card">
                                <Link to={`/task/${list.ID}`}><h2 className="card-title">{list.post_title}</h2> </Link>
                                <p className="card-description">{list.post_content}</p>
                                <p className="card-date">Date: {list.post_date_gmt}</p>
                                <div className="card-buttons">
                                    <button className="edit-button" >Edit</button>
                                    <button className="delete-button" onClick={()=>handleDelete(list.ID)}>Delete</button>
                                </div>
                            </div>

                    </li>

                ))}
            </ul>
        </div>
    );
}

export default MultipleList;



