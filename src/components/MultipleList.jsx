import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../style/Multitask.scss';
import EditPopup from '../components/EditPopup';
import PopupSmg from '../components/PopupSmg';
import { memo } from 'react';

function MultipleList() {
    const [lists, setLists] = useState([]);
    const [selectedList, setSelectedList] = useState(null); // State to hold selected list data

    const [showPopupSmg, setShowPopupSmg] = useState(false);
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const status = 'pending';
            const data = {
                status: status,
            };
            try {
                // Fetch data from WordPress API endpoint
                // const response = await axios.get('http://localhost/wpplugins/wp-json/tasktodo/v1/tasks',{
                const response = await axios.get('http://localhost:8888/wpapi/wp-json/tasktodo/v1/tasks',{
                    method: 'GET',
                        headers: {
                        'Content-Type': 'application/json',
                            'X-WP-Nonce': myVars.rest_nonce
                    },
                    body: JSON.stringify(data),
                });
                // Set the fetched data to the state
                setLists(response.data);
                setLoading(false);
            } catch (error) {
                setLoading( false );
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async ( list ) => {
        setSuccessMessage( 'Your Task '+list.post_title+' Is Deleting...' );
        // console.log( list );
        let id = list.ID;
        setShowPopupSmg(true);
        const data = {
            id : id
        };
        try {
            const response = await fetch('http://localhost:8888/wpapi/wp-json/tasktodo/v1/taskdelete', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'X-WP-Nonce': myVars.rest_nonce
                },
                body: JSON.stringify(data),
            });

            const responseData = await response.json();
            setSuccessMessage( responseData );
            let divToHide = document.getElementById(id);
            divToHide.style.display = "none";
            setShowPopupSmg(false );
            setSuccessMessage('');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleEdit = (list) => {
        setSelectedList(list); // Set the selected list data
    };

    if( loading ){
       return <>
           <h1 className="taskToDomultiTaskTitle">Multiple Lists</h1>
           <h3 className="taskToDomultiTaskTitle" id="loadingSmg">Loading...</h3>
       </>
    }

    return (
        <div>
            <h1 className="taskToDomultiTaskTitle">Multiple Lists</h1>

            <ul>
                { lists && lists.length > 0 ? (
                    lists.map(list => (
                        <li key={list.ID} id={list.ID}>
                            <div className="taskToDoCard">
                                <Link to={`/task/${list.ID}`} >
                                    <h2 className="taskToDoCard-title">{list.post_title}</h2>
                                </Link>
                                <p className="taskToDoCard-description">{list.post_content}</p>
                                <p className="taskToDoCard-date">Date: {list.post_date_gmt}</p>
                                <div className="taskToDoCard-buttons">
                                    {/* Call handleEdit with list data when Edit button is clicked */}
                                    <button className="taskToDoEdit-button" onClick={() => handleEdit(list)}>Edit</button>
                                    <button className="taskToDoDelete-button" onClick={() => handleDelete( list )}>Delete</button>
                                </div>
                            </div>
                        </li>
                    ))
                ) : (
                    <li>
                        <p>No data found</p>
                    </li>
                )}
            </ul>

            {/* Render EditPopup component with selectedList as prop */}
            {selectedList && <EditPopup list={selectedList} onClose={() => setSelectedList(null)} />}
            { showPopupSmg &&  <PopupSmg message = { successMessage } onClose={() => setSelectedList(null)}/>}
        </div>
    );
}

export default memo( MultipleList );
