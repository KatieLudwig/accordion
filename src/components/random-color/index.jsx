import { useState } from "react"

export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000');

    function randomColorUtility() {
        
    }

    function handleCreateRandomHexColor() {
        //#678765
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = "#";

        for (let i = 0; i < 6; i++){
            hexColor +=
        }
    }

    function handleCreateRandomRgbColor() {

    }

    return (
        <div
            style={{
                width: '100w',
                height: '100vh',
                background: color,
            }}
        >
            <button onClick={() => setTypeOfColor('hex')}>Create HEX Color</button>
            <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
            <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomColor}>Generate Random Color</button>
        </div>
    )
}