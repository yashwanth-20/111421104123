"use client"
import { useState } from 'react';

const fetchNumbers = async (url) => {
    const encodedUrl = encodeURIComponent(url);
    const response = await fetch(`/api/numbers?url=${encodedUrl}`);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
};

export default function Home() {
    const [url, setUrl] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleFetch = async () => {
        try {
            setError(null);
            const data = await fetchNumbers(url);
            setResult(data);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h1>Number Manager</h1>
            <input
                type="text"
                placeholder="Enter API URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />
            <button onClick={handleFetch}>Fetch Number</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {result && (
                <div>
                    <h2>Results</h2>
                    <p>Window Previous State: {result.windowPrevState.join(', ')}</p>
                    <p>Window Current State: {result.windowCurrState.join(', ')}</p>
                    <p>Numbers: {result.numbers.join(', ')}</p>
                    {result.avg !== null && <p>Average: {result.avg}</p>}
                </div>
            )}
        </div>
    );
}
