import { useEffect, useState } from 'react';

export default function ImageSlider({ url, limit }) {
    
    const [imgages, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        
    },[url])

    return <div className="container"></div>;
}