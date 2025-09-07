export default function Suggestions({ data, handleClick }) {
    return <ul>
        {
            data && data.length ?
                data.map((item, index) => <li onClikc={handleClick} key={index}>{item}</li>)
                : null
        }
    </ul>
}