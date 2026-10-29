'use client';
import { useState } from 'react';

export default function AddUserPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email }),
        });

        const data = await res.json();
        setMessage(data.message);
    };

    return (
        <div style={{ padding: "40px", maxWidth: "400px", margin: "0 auto", fontFamily: "sans-serif" }}>
            <h2>Add New User</h2>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                <input 
                    type="text" 
                    placeholder="Enter name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    style={{ padding: "10px", fontSize: "16px" }}
                />
                <input 
                    type="email" 
                    placeholder="Enter email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ padding: "10px", fontSize: "16px" }}
                />
                <button type="submit" style={{ padding: "10px", backgroundColor: "#3498db", color: "#fff", border: "none", cursor: "pointer", fontSize: "16px" }}>
                    Submit
                </button>
            </form>
            {message && <p style={{ color: "green", marginTop: "15px" }}>{message}</p>}
        </div>
    );
}