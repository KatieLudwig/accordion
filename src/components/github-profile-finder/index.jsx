import { useState, useEffect } from 'react';

export default function GithubProfileFinder() {
    const[userName, setUsername] =useState('sangammukherjee')

    async function fetchGithubUserData() {
        const res = await fetch(`https://api.github.com/users/${userName}`)

        const data = await res.json();

        console.log(data);
    }

    function handleSubmit() { }
    
    useEffect(() => {
        fetchGithubUserData()
    },[])
    
    return (
        <div className="github-profile-container">
            <div className="input-wrapper">
                <input
                    name="search-by-username"
                    type="text"
                    placeholder="Search Github Username..."
                    value={userName}
                    onChange={(event) => setUsername(event.target.vaule)}
                />
                <button onClick={handleSubmit}>Search</button>
            </div>
        </div>
    )
}