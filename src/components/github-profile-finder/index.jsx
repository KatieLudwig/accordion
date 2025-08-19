import { useState, useEffect } from 'react';
import User from './user';

export default function GithubProfileFinder() {
    const [userName, setUsername] = useState('sangammukherjee');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    async function fetchGithubUserData() {
        setLoading(true)
        const res = await fetch(`https://api.github.com/users/${userName}`)

        const data = await res.json();
        if (data) {
            setUserData(data)
            setLoading(false)
            setUsername('')
        }

        console.log(data);
    }

    function handleSubmit() { 
        fetchGithubUserData()
    }
    
    useEffect(() => {
        fetchGithubUserData()
    }, []);

    if (loading) {
        return <h1>Loading data ! Please Wait</h1>
    }
    
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
            {
                userData !== null ? <User user={userData}/>: null
            }
        </div>
    )
}