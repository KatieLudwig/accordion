import { useState } from 'react';

export default function ModalTest() {
    const [showModalPupup, setShowModalPopup] = useState(false);

    function handleToggleModalPopup() {
        
    }

    return <div>
        <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
    </div>
}