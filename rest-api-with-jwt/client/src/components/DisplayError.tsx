import React from "react"

interface ErrorProps {
    error: string
}

const DisplayError: React.FC<ErrorProps> = ({ error }) => {
    return (
        <div className={`mb-5 ${error ? '' : 'hidden'} text-center bg-red-400 px-3 py-4 rounded-full`}>
            <p>{error}</p>
        </div>
    )
}

export default DisplayError