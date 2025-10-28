import { useState } from "react"

export default function UseOnclickOutsideTest() {
    const [showContent, setShowContent] = useState(false)

    return <div>
        {
            showContent ? <div></div> : <button onClick={() => setShowContent(true)}>Show Content</button>
        }
    </div>
}