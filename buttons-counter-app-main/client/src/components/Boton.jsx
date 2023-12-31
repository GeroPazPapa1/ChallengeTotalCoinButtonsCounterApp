import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Button() {
    const [buttons, setButtons] = useState([]);
    const [newButtonText, setNewButtonText] = useState('');

    useEffect(() => {
        const buttonData = async () => {
            try {
                const response = await axios.get('/');
                setButtons(response.data);
            } catch (error) {
                console.error('Error fetching buttons', error);
            }
        };
        buttonData();
    }, []);

    const handleCreateButton = async () => {
        try {
            const response = await axios.post('/', { text: newButtonText });
            setButtons([...buttons, response.data]);
        } catch (error) {
            console.error(error.message);
        }
    };

    const handleButtonClick = async (id) => {
        try {
            const response = await axios.post(`/click/${id}`);
            const updatedButtons = buttons.map(btn => (btn.id === id ? response.data : btn));
            setButtons(updatedButtons);
        } catch (error) {
            console.error(error.message);
        }
    };

    const handleDeleteButton = async (id) => {
        try {
            const response = await axios.delete(`/${id}`);
            if (response.data.success) {
                const updatedButtons = buttons.filter(btn => btn.id !== id);
                setButtons(updatedButtons);
            }
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div>
            <h1>Challenge TotalCoin</h1>
            <div>
                <button onClick={handleCreateButton}>Create Button</button>
            </div>
            <div>
                {buttons.map(button => (
                    <div key={button.id}>
                        <button onClick={() => handleButtonClick(button.id)}>
                            {`Button 
                            ${button.id}:
                            (${button.count} clicks)`}
                        </button>
                        <button onClick={() => handleDeleteButton(button.id)}> X </button>
                    </div>
                ))}
            </div>
        </div>
    );
};