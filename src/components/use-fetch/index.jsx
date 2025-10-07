import { useEffect, useState } from 'react';


export default function useFetch(url, options = {}) {
    //3 states
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(null);

    async 

    useEffect(() => {

        fecthData()
    },[url])
}