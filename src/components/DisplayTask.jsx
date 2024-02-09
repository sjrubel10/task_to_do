import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../style/DisplayList.scss';
import axios from "axios";

function DisplayTask() {
    const { id } = useParams();
    // const  id  = 1;

    const [task, setTask] = useState(null);
    const [status, setStatus] = useState('');

    useEffect(() => {
        const fetchTask = async () => {
            const data1 = {
                postId: id,
            };
            try {
                const response = await axios.get(`${myVars.site_url}wp-json/tasktodo/v1/task?id=${id}`,{
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-WP-Nonce': myVars.rest_nonce
                    },
                });

                const resultData = response.data;
                setTask( resultData );
                setStatus( resultData.post_status );
            } catch (error) {
                console.error('Error fetching task:', error);
            }
        };

        fetchTask();
    }, [id]);

    const handleStatusChange = async (e) => {
        try {
            const newStatus = e.target.value;
            setStatus(newStatus);
            const response = await fetch(''+myVars.site_url+'wp-json/tasktodo/v1/updatestatus', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-WP-Nonce': myVars.rest_nonce
                },
                body: JSON.stringify({ id, status: newStatus }),
            });
            const responseData = await response.json();
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };

    return (
        <div className="taskToDo-single-list">
            {task ? (
                <div>
                    <h1 className="taskToDo-task-title">{task.post_title}</h1>
                    <p className="taskToDo-task-author"><strong>Creator:</strong> {task.username}</p>
                    <p className="taskToDo-task-description"><strong>Description:</strong> {task.post_content}</p>
                    <p className="taskToDo-task-create-date"><strong>Create Date:</strong> {task.post_date_gmt}</p>
                    <p className="taskToDo-task-validity-date"><strong>Validity Date:</strong> {task.post_date}</p>
                    <select className="taskToDo-task-status" value={status} onChange={handleStatusChange}>
                        <option value="pending">Pending</option>
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
            ) : (
                <p className="taskToDo-loading">Loading...</p>
            )}
        </div>
    );
}

export default DisplayTask;
