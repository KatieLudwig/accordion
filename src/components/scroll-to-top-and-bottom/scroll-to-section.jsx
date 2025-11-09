

export default function ScrollToSection() {

    const data = [
        {
            label: 'First Card',
            style: {
                width: '100%',
                height: '600px',
                background: 'red'
            }
        },
        {
            label: 'Second Card',
            style: {
                width: '100%',
                height: '600px',
                background: 'grey'
            }
        },
        {
            label: 'Third Card',
            style: {
                width: '100%',
                height: '600px',
                background: 'blue'
            }
        },
        {
            label: 'Fourth Card',
            style: {
                width: '100%',
                height: '600px',
                background: 'green'
            }
        },
        {
            label: 'Fifth Card',
            style: {
                width: '100%',
                height: '600px',
                background: 'black'
            }
        },
    ]
    
    return <div>
        <h1>Scroll to partical section</h1>
        <button>Click to Scroll</button>
        {data.map((dataItem) => (
            <div style={dataItem.style}>
                <h3>{dataItem.label}</h3>
            </div>
        ))}
    </div>
}